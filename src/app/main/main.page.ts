import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';


export interface Data {
  id: number;
  title: string;
  description: string;
  updated_at: number;
  last_edited_by_user: string;
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
  accessToken = '';

  // Step 2. 在 constructor 裡面注入 HttpClient
  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {}

  // Step 3. 撰寫呼叫 api 的程式碼
  async ngOnInit() {
    this.accessToken = String(await this.storage.get('Token'));
    this.initialize();
  }


  async initialize() {
    try {
      // 在元件初始化的時候，透過後端 api 取得資料
      const response = await this.getAllNotificationsFromApi();
      console.log(response.data);
      this.errorFlag = false;

      this.data = response.data;
      // Step 5. 將資料顯示到畫面上
      this.rawResponse = response;
    } catch (error) {
      // Step 4. 過程中如果發生錯誤，需要另外進行的錯誤處理
      console.error(error);
      this.errorFlag = true;
      catchError(this.handleError),
      this.presentErrorAlert();
    }
  }

  /**
   * 從後端 api 取得所有 notification 的資料
   *
   * 並且將後端回應的原始資料直接顯示在畫面上
   */
  async getAllNotificationsFromApi() {
    const url = 'https://api.next.cocoing.info/admin/notifications';

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      }),
    };

    // 這邊只是因為偷懶用了 any，還是要養成好習慣不要隨便用 any XDrz
    // 將後端拿到的資料儲存在 local 變數中
    const response = await this.http.get<any>(url, httpOptions).toPromise();
    return response;
  }

  /**
   * 顯示取得資料失敗的錯誤訊息
   */
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: '發生錯誤',
      message: '載入失敗，請重新載入',
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

  reload(){
    this.initialize();
  }


  async DeleteItem(itemID){
    try{
      const response = await this.DeleteNotificationsFromApi(itemID);
      console.log({ response });

    } catch (error) {
      console.error('catch error!');
      catchError(this.handleError);
    }
  }


  async DeleteNotificationsFromApi(itemID) {

    return new Promise((resolve, reject) => {
      const url = 'https://api.next.cocoing.info/admin/notifications';
      const body = {
        id: itemID,
      };
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.accessToken}`,
          'X-HTTP-Method-Override': 'delete',
        }),
      };
      this.http.post<any>(url, body, httpOptions).subscribe(
        (res) => {
          console.log(res);
          this.presentDeleteAlert();
          this.reload();
          resolve(res);
        },
        (err) => {
          console.error(err);
          this.presentFailDeleteAlert();
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


  add_notification(){
    this.navCtrl.navigateForward('/add-notification', {
      state:
      () => {
        this.initialize();
      }
      });
  }

  nav2update(itemId){
    this.navCtrl.navigateForward('/item-update/' + itemId , {
      state:
      () => {
        this.reload();
      }
    });
  }

  nav2login(){
    this.navCtrl.navigateForward('/login');
  }
}
