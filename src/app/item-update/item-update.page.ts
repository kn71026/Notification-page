import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Data } from '../main/main.page';
declare var anime: any;

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.page.html',
  styleUrls: ['./item-update.page.scss'],
})
export class ItemUpdatePage implements AfterViewInit {
  @ViewChild('myCoolButton') myCoolButton: ElementRef;
  @ViewChild('myText') myText: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('myCheck') myCheck: ElementRef;
  @ViewChild('mySvg') mySvg: ElementRef;
  basicTimeline;
  id: number;
  title: any;
  description: any;
  allData: Data[];
  rawResponse = null;
  callback;
  accessToken = '';
  data$ = of(null);
  response: any;
  item: Data;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertController: AlertController,
    private storage: Storage,
    private navCtrl: NavController,
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
        duration: 100,
        easing: 'easeInOutSine',
        complete: () => this.updateItem(),
      });
    this.accessToken = String(await this.storage.get('Token'));
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data$ = this.getNotificationByObservable();
  }

  getNotificationByObservable() {
    const url = 'https://api.cocoing.info/admin/notifications';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };

    return this.http.get<any>(url, httpOptions).pipe(
      map((response) => response.data.find((item) => item.id === this.id)),

      tap((response) => {
        this.title = response.title;
        this.description = response.description;
        // console.log('after map():', response);
      }),
    );
  }

  close() {
    this.navCtrl.navigateBack('/main');
  }

  update() {
    this.basicTimeline.play();
    this.mySvg.nativeElement.style.cursor = 'default';
  }

  async updateItem() {
    this.PatchNotificationByObservable().subscribe({
      next: () => {
        this.callback();
        this.presentUpdateAlert();
        this.close();
      },
      error: (error) => console.error(error),
    });
  }

  PatchNotificationByObservable() {
    const url = 'https://api.cocoing.info/admin/notifications';
    const body = {
      id: this.id,
      title: this.title,
      description: this.description,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };

    return this.http.patch<any>(url, body, httpOptions).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  async presentUpdateAlert() {
    const alert = await this.alertController.create({
      header: '更新成功',
      message: '更新通知成功',
      buttons: ['OK'],
    });

    alert.present();
  }

  async presentFailUpdateAlert() {
    const alert = await this.alertController.create({
      header: '更新失敗',
      message: '更新通知失敗',
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
  };
}
