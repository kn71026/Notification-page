import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
declare var anime: any;

interface Response {
  message: string;
  data: any;
}
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.page.html',
  styleUrls: ['./add-notification.page.scss'],
})
export class AddNotificationPage implements AfterViewInit {
  @ViewChild('myCoolButton') myCoolButton: ElementRef;
  @ViewChild('myText') myText: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('myCheck') myCheck: ElementRef;
  @ViewChild('mySvg') mySvg: ElementRef;

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
    private storage: Storage,
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.callback = this.router.getCurrentNavigation().extras.state;
    }
  }

  async ngAfterViewInit() {
    this.basicTimeline = anime.timeline({
      autoplay: false,
    });
    const pathEl = this.myCheck.nativeElement;
    // console.log(pathEl);
    const offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);

    this.basicTimeline
      .add({
        targets: this.myText.nativeElement,
        duration: 1,
        opacity: '0',
      })
      .add({
        targets: this.myCoolButton.nativeElement,
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: '#2B2D2F',
        border: '0',
        borderRadius: 100,
      })
      .add({
        targets: this.progressBar.nativeElement,
        duration: 200,
        width: 300,
        easing: 'linear',
      })
      .add({
        targets: this.myCoolButton.nativeElement,
        width: 0,
        duration: 1,
      })
      .add({
        targets: this.progressBar.nativeElement,
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: '#71DFBE',
      })
      .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 200,
        easing: 'easeInOutSine',
        complete: () => this.addItem(),
      });

    this.accessToken = String(await this.storage.get('Token'));
  }

  close() {
    this.navCtrl.navigateBack('/main');
  }

  submit() {
    this.basicTimeline.play();
    this.mySvg.nativeElement.style.cursor = 'default';
  }

  async addItem() {
      this.PostNewNotificationsToApiPipe()
      .subscribe({
        next: () => {
          this.presentAddAlert();
          this.callback();
          this.close();
        },
        error: (error) => console.error(error),
      });
  }

  PostNewNotificationsToApiPipe() {
    const url = 'https://api.cocoing.info/admin/notifications';

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };

    return  this.http.post<Response>(url, this.body, httpOptions).pipe(
      map(response => response.data),
      catchError(this.handleError),
    );
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
