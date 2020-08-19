import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
declare var anime: any;


@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.page.html',
  styleUrls: ['./add-notification.page.scss'],
})
export class AddNotificationPage implements AfterViewInit {
  @ViewChild('my_cool_button') my_cool_button: ElementRef;
  @ViewChild('my_cool_text') my_cool_text: ElementRef;
  @ViewChild('progress_bar') progress_bar: ElementRef;
  @ViewChild('my_check') my_check: ElementRef;
  @ViewChild('my_cool_svg') my_cool_svg: ElementRef;


  rawResponse = null;
  callback;
  accessToken = '';
  body = {
    title: '',
    description: '',
  };
  basicTimeline;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private storage: Storage
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.callback = this.router.getCurrentNavigation().extras.state;
    }
  }

  async ngAfterViewInit() {
    this.basicTimeline = anime.timeline({
      autoplay: false
    });
    const pathEl = this.my_check.nativeElement;
    // console.log(pathEl);
    const offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);

    this.basicTimeline
      .add({
        targets: this.my_cool_text.nativeElement,
        duration: 1,
        opacity: '0'
      })
      .add({
        targets: this.my_cool_button.nativeElement,
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: '#2B2D2F',
        border: '0',
        borderRadius: 100
      })
      .add({
        targets: this.progress_bar.nativeElement,
        duration: 200,
        width: 300,
        easing: 'linear'
      })
      .add({
        targets: this.my_cool_button.nativeElement,
        width: 0,
        duration: 1
      })
      .add({
        targets: this.progress_bar.nativeElement,
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: '#71DFBE'
      })
      .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 200,
        easing: 'easeInOutSine',
        complete : () => this.addItem()
      });


    this.accessToken = String(await this.storage.get('Token'));
  }

  close(){
    this.navCtrl.navigateBack('/main');
  }

  submit(){
    this.basicTimeline.play();
    this.my_cool_svg.nativeElement.style.cursor = 'default';
  }

  async addItem(){
    try {
      console.log(this.PostNewNotificationsToApi);
      const response = await this.PostNewNotificationsToApi();
      console.log({ response });

    } catch (error) {
      console.error(error);
      catchError(this.handleError);
    }
  }

  async PostNewNotificationsToApi() {

    return new Promise((resolve, reject) => {
      const url = 'https://api.cocoing.info/admin/notifications';
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.accessToken}`,
        }),
      };

      this.http.post<any>(url, this.body, httpOptions).subscribe(
        (res) => {
          console.log(res);
          this.callback();
          this.presentAddAlert();
          this.close();
          resolve(res);
        },
        (err) => {
          console.error(err);
          this.presentAddFailAlert();
          reject(err);
        },
      );
      });
  }

  async presentAddAlert() {
    const alert = await this.alertController.create({
      header: '新增成功',
      message: '新增通知成功!',
      buttons: ['OK'],
    });
    alert.present();
  }

  async presentAddFailAlert() {
    const alert = await this.alertController.create({
      header: '新增失敗',
      message: '新增通知失敗!',
      buttons: ['OK'],
    });
    alert.present();
  }


  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // "前端本身" or "沒連上網路" 而產生的錯誤
      console.error('An error occurred:', error.error.message);
    } else {
      // 後端回傳的錯誤訊息，error.error 之中會有為何失敗的原因
      console.error(`HTTP status code ${error.status}, reason:`, error.error);
    }
    // 最後的回傳值的型別應為 observable
    return throwError('Something bad happened; please try again later.');
  }

}
