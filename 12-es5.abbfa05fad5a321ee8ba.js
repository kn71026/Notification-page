!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{XpXM:function(n,r,i){"use strict";i.r(r),i.d(r,"MainPageModule",(function(){return y}));var o=i("ofXK"),a=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),u=i("mrSG"),l=i("tk/3"),f=i("z6cu"),p=i("JIr8"),b=i("fXoL");function d(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-button",5),b.Sb("click",(function(){return b.bc(n),b.Ub().reload()})),b.fc(1,"\u91cd\u65b0\u8f09\u5165"),b.Jb()}}function h(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item",6),b.Kb(1,"ion-label",7),b.Sb("click",(function(){b.bc(n);var e=t.$implicit;return b.Ub().nav2update(e.id)})),b.Kb(2,"span"),b.fc(3),b.Jb(),b.Ib(4,"br"),b.Kb(5,"span",8),b.fc(6),b.Jb(),b.Kb(7,"span",9),b.Ib(8,"br"),b.fc(9),b.Jb(),b.Jb(),b.Kb(10,"span",10),b.fc(11),b.Vb(12,"date"),b.Jb(),b.Kb(13,"ion-button",11),b.Sb("click",(function(){b.bc(n);var e=t.$implicit;return b.Ub().DeleteItem(e.id)})),b.fc(14,"delete"),b.Jb(),b.Jb()}if(2&e){var r=t.$implicit;b.xb(3),b.gc(" ",r.id,". "),b.xb(3),b.gc(" Title\uff1a ",r.title," "),b.xb(3),b.gc(" description\uff1a ",r.description," "),b.xb(2),b.gc(" \u6700\u5f8c\u4fee\u6539\u6642\u9593\uff1a ",b.Wb(12,4,r.updated_at,"short")," ")}}var m,g,v,x=[{path:"",component:(m=function(){function n(t,r,i,o){e(this,n),this.navCtrl=t,this.http=r,this.alertController=i,this.ToastCtr=o,this.rawResponse=null,this.errorFlag=!1,this.handleError=function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("HTTP status code ".concat(e.status,", reason:"),e.error),Object(f.a)("Something bad happened; please try again later.")}}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.initialize()}},{key:"initialize",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getAllNotificationsFromApi();case 3:t=e.sent,console.log(t.data),this.data=t.data,this.rawResponse=t,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),this.errorFlag=!0,Object(p.a)(this.handleError),this.presentErrorAlert();case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"getAllNotificationsFromApi",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("https://api.next.cocoing.info/admin/notifications").toPromise();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentErrorAlert",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\u767c\u751f\u932f\u8aa4",message:"\u8f09\u5165\u5931\u6557\uff0c\u8acb\u91cd\u65b0\u8f09\u5165",buttons:["OK"]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"reload",value:function(){this.initialize()}},{key:"DeleteItem",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.DeleteNotificationsFromApi(e);case 3:n=t.sent,console.log({response:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("catch error!"),Object(p.a)(this.handleError);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"DeleteNotificationsFromApi",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){var i={id:e},o={headers:new l.c({"X-HTTP-Method-Override":"delete"})};n.http.post("https://api.next.cocoing.info/admin/notifications",i,o).subscribe((function(e){console.log(e),n.presentDeleteAlert(),n.reload(),t(e)}),(function(e){console.error(e),n.presentFailDeleteAlert(),r(e)}))})));case 1:case"end":return t.stop()}}),t)})))}},{key:"presentDeleteAlert",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\u522a\u9664\u6210\u529f",message:"\u8cc7\u6599\u5df2\u522a\u9664\u6210\u529f",buttons:["OK"]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentFailDeleteAlert",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\u522a\u9664\u5931\u6557",message:"\u8cc7\u6599\u522a\u9664\u5931\u6557",buttons:["OK"]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"add_notification",value:function(){var e=this;this.navCtrl.navigateForward("/add-notification",{state:function(){e.initialize()}})}},{key:"nav2update",value:function(e){var t=this;this.navCtrl.navigateForward("/item-update/"+e,{state:function(){t.reload()}})}}])&&t(r.prototype,i),o&&t(r,o),n}(),m.\u0275fac=function(e){return new(e||m)(b.Hb(c.t),b.Hb(l.a),b.Hb(c.a),b.Hb(c.w))},m.\u0275cmp=b.Bb({type:m,selectors:[["app-main"]],decls:10,vars:2,consts:[["color","dark"],["color","dark",1,"my_title"],["expand","full",3,"click"],["expand","full","color","danger",3,"click",4,"ngIf"],["class","item",4,"ngFor","ngForOf"],["expand","full","color","danger",3,"click"],[1,"item"],[3,"click"],[1,"myitemtitle"],[1,"myitemdes"],[1,"my_date"],["slot","end","color","danger",3,"click"]],template:function(e,t){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar",0),b.Kb(2,"ion-title",1),b.fc(3,"\u4e3b\u8981\u9801\u9762"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content"),b.Kb(5,"ion-button",2),b.Sb("click",(function(){return t.add_notification()})),b.fc(6,"\u65b0\u589e\u901a\u77e5"),b.Jb(),b.ec(7,d,2,0,"ion-button",3),b.Kb(8,"ion-list"),b.ec(9,h,15,7,"ion-item",4),b.Jb(),b.Jb()),2&e&&(b.xb(7),b.Zb("ngIf",t.errorFlag),b.xb(2),b.Zb("ngForOf",t.data))},directives:[c.h,c.q,c.p,c.g,c.e,o.j,c.m,o.i,c.k,c.l],pipes:[o.d],styles:['@charset "UTF-8";*[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:\u5fae\u8edf\u6b63\u9ed1\u9ad4}.my_title[_ngcontent-%COMP%]{font-size:25px;margin-left:46.5%;margin-right:45%;padding:10px;color:#fff}.item[_ngcontent-%COMP%]{position:relative}.myid[_ngcontent-%COMP%]{left:0;top:0;color:#fff;background:#3ea1fd;font-size:16px;text-align:center;margin-bottom:15px}.myid[_ngcontent-%COMP%], .myitemtitle[_ngcontent-%COMP%]{position:absolute;padding:5px}.myitemtitle[_ngcontent-%COMP%]{left:40px;top:5px;font-weight:bolder;font-size:18px}.my_date[_ngcontent-%COMP%]{position:absolute;right:100px;font-size:14px;color:grey}@media (max-width:1213px){.my_title[_ngcontent-%COMP%]{font-size:25px;margin-left:35%}}']}),m)}],k=((v=function t(){e(this,t)}).\u0275mod=b.Fb({type:v}),v.\u0275inj=b.Eb({factory:function(e){return new(e||v)},imports:[[s.i.forChild(x)],s.i]}),v),y=((g=function t(){e(this,t)}).\u0275mod=b.Fb({type:g}),g.\u0275inj=b.Eb({factory:function(e){return new(e||g)},imports:[[o.b,a.a,c.r,k]]}),g)}}])}();