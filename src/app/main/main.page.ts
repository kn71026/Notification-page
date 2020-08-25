import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Data {
  id: number;
  title: string;
  description: string;
  updated_at: number;
  last_edited_by_user: {
    name: string;
  };
}

interface Response {
  message: string;
  data: any;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  rawResponse = null;
  data: Data[];
  errorFlag = false;
  isCreator = false;
  accessToken = '';
  nowUser: any;
  data$ = of(null);

  // Step 2. 在 constructor 裡面注入 HttpClient
  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private alertController: AlertController,
    private storage: Storage,
  ) {}

  // Step 3. 撰寫呼叫 api 的程式碼
  async ngOnInit() {
    this.nowUser = String(await this.storage.get('User'));
    console.log(this.nowUser);
    this.accessToken = String(await this.storage.get('Token'));
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
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: '發生錯誤',
      message: '載入失敗，請重新載入',
      buttons: ['OK'],
    });

    alert.present();
  }

  private handleError = (error: HttpErrorResponse) => {
    this.presentErrorAlert();
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

  reload() {
    this.data$ = this.getNotificationByObservable();
  }

  DeleteItem(itemID) {
    this.DeleteNotificationsFromApi(itemID).subscribe({
      next: () => {
        this.presentDeleteAlert();
        this.reload();
      },
      error: (error) => console.error(error),
    });
    const response = this.DeleteNotificationsFromApi(itemID);
    console.log({ response });
    this.getNotificationByObservable();
  }

  DeleteNotificationsFromApi(itemID) {
    const url = 'https://api.cocoing.info/admin/notifications';
    const body = {
      id: itemID,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
        'X-HTTP-Method-Override': 'delete',
      }),
    };
    return this.http.post<Response>(url, body, httpOptions).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  async sendItem(itemID) {
    try {
      const response = await this.sendNotificationsFromApi(itemID);
      console.log({ response });
    } catch (error) {
      console.error('catch error!');
      catchError(this.handleError);
    }
  }

  async sendNotificationsFromApi(itemID) {
    return new Promise((resolve, reject) => {
      const url = 'https://api.cocoing.info/admin/notifications/send';
      const body = {
        id: itemID,
      };
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.accessToken}`,
        }),
      };
      this.http.post<any>(url, body, httpOptions).subscribe(
        (res) => {
          console.log(res);
          this.presentSendAlert();
          this.reload();
          resolve(res);
        },
        (err) => {
          console.error(err);
          this.presentFailSendAlert();
          reject(err);
        },
      );
    });
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      header: '刪除成功',
      message: '資料已刪除成功',
      buttons: ['OK'],
    });

    alert.present();
  }

  async presentFailDeleteAlert() {
    const alert = await this.alertController.create({
      header: '刪除失敗',
      message: '資料刪除失敗',
      buttons: ['OK'],
    });

    alert.present();
  }

  async presentSendAlert() {
    const alert = await this.alertController.create({
      header: '送出成功',
      message: '通知已成功送出',
      buttons: ['OK'],
    });

    alert.present();
  }

  async presentFailSendAlert() {
    const alert = await this.alertController.create({
      header: '送出失敗',
      message: '通知送出失敗',
      buttons: ['OK'],
    });

    alert.present();
  }

  add_notification() {
    this.navCtrl.navigateForward('/add-notification', {
      state: () => {
        this.reload();
      },
    });
  }

  nav2update(itemId) {
    this.navCtrl.navigateForward('/item-update/' + itemId, {
      state: () => {
        this.reload();
      },
    });
  }

  nav2login() {
    this.navCtrl.navigateForward('/login');
  }
}
