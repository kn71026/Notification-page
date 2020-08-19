import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.page.html',
  styleUrls: ['./login-test.page.scss'],
})
export class LoginTestPage implements AfterViewInit {
  current = null;
  constructor() { }

  async ngAfterViewInit() {
    document.querySelector('#email').addEventListener('focus', function(e) {
      if (this.current) {
        this.current.pause();
      }
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#password').addEventListener('focus', function(e) {
      if (this.current) { this.current.pause(); }
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#submit').addEventListener('focus', function(e) {
      if (this.current) { this.current.pause(); }
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }

}
