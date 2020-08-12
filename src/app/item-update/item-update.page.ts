import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPage, Data } from '../main/main.page';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.page.html',
  styleUrls: ['./item-update.page.scss'],
})
export class ItemUpdatePage implements OnInit {
  item: Data;
  id: number;
  title = '';
  des = '';
  allData: Data[];
  rawResponse = null;
  callback;
  accessToken = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertController: AlertController,
    private storage: Storage
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.callback = this.router.getCurrentNavigation().extras.state;
    }
  }

  async ngOnInit() {
    this.accessToken = String(await this.storage.get('Token'));
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.initialize();
  }

  async initialize() {
    try {
      // 在元件初始化的時候，透過後端 api 取得資料
      const response = await this.getAllNotificationsFromApi();

      // console.log(response.data);
      this.item = response.data.find(item => item.id === this.id);
      // console.log(this.item.title);
      this.title = this.item.title;
      this.des = this.item.description;
      this.rawResponse = response;
    } catch (error) {

      console.error(error);
      this.presentErrorAlert();
    }
  }

  async getAllNotificationsFromApi() {
    const url = 'https://api.next.cocoing.info/admin/notifications';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };

    const response = await this.http.get<any>(url, httpOptions).toPromise();
    return response;
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Sorry, please try again later.',
      buttons: ['OK'],
    });

    alert.present();
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

  goBack(){
    this.router.navigate(['/main']);
  }


  async updateItem(){
    try {
      const response = await this.PatchNotificationsToApi();
      console.log({ response });

    } catch (error) {
      console.error('catch error!');
      catchError(this.handleError);
    }
  }


  async PatchNotificationsToApi() {

    return new Promise((resolve, reject) => {
    const url = 'https://api.next.cocoing.info/admin/notifications';
    const body = {
      id: this.id,
      title: this.title,
      description: this.des,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };
    this.http.patch<Response>(url, body, httpOptions).subscribe(
      (res) => {
        console.log(res);
        this.callback();
        this.presentUpdateAlert();
        this.goBack();
        resolve(res);
      },
      (err) => {
        console.error(err);
        this.presentFailUpdateAlert();
        reject(err);
      },
    );
    });
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
