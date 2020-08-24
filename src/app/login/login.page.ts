import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  token: any;
  user: any;
  remember = false;
  data: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController,
    private storage: Storage,
  ) {}

  ngOnInit() {}

  async login() {
    try {
      let response: any;
      response = await this.postFromApi();
      // console.log({ response });
      this.user = response.data.user.name;
      this.token = response.data.token.access_token;
      console.log(this.user);
      // console.log(this.token);
      await this.storage.set('User', this.user);
      await this.storage.set('Token', this.token);
      this.navCtrl.navigateForward('/main');
    } catch (error) {
      console.error('catch error!');
      catchError(this.handleError);
    }
  }

  async postFromApi() {
    return new Promise((resolve, reject) => {
      const url = 'https://api.cocoing.info/v1/login';
      const body = {
        email: this.email,
        password: this.password,
      };

      this.http.post<Response>(url, body).subscribe(
        (res) => {
          this.data = res.body;
          console.log(res);
          resolve(res);
        },
        (err) => {
          console.error(err);
          this.presentAlert1();
          reject(err);
        },
      );
    });
  }

  SignIn() {
    this.presentAlert2();
  }

  async presentAlert1() {
    const alert = await this.alertCtrl.create({
      header: 'ERROR',
      subHeader: 'login failed',
      message: '帳號密碼錯誤',
      buttons: ['OK'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

  async presentAlert2() {
    const alert = await this.alertCtrl.create({
      header: 'ERROR',
      subHeader: 'signIn failed',
      message: '還沒寫QQ',
      buttons: ['OK'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
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
