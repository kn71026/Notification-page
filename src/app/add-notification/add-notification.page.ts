import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.page.html',
  styleUrls: ['./add-notification.page.scss'],
})
export class AddNotificationPage implements OnInit {

  body = {
    title: '',
    description: '',
  };
  rawResponse = null;
  callback;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router

  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.callback = this.router.getCurrentNavigation().extras.state;
    }
  }

  ngOnInit() {
  }

  close(){
    this.navCtrl.navigateBack('/main');
  }

  async addItem(){
    try {
      const response = await this.PostNewNotificationsToApi();
      console.log({ response });

    } catch (error) {
      console.error('catch error!');
      catchError(this.handleError);
    }
  }

  async PostNewNotificationsToApi() {

    return new Promise((resolve, reject) => {
      const url = 'https://api.next.cocoing.info/admin/notifications';
      this.http.post<any>(url, this.body).subscribe(
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
