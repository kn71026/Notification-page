(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XpXM:function(t,e,n){"use strict";n.r(e),n.d(e,"MainPageModule",(function(){return _}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("tk/3"),l=n("LRne"),d=n("z6cu"),b=n("lJxs"),p=n("JIr8"),g=n("fXoL"),u=n("e8h1");function f(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-button",8),g.Ub("click",(function(){return g.gc(t),g.Yb().reload()})),g.kc(1,"\u91cd\u65b0\u8f09\u5165!"),g.Lb()}}function h(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-button",8),g.Ub("click",(function(){return g.gc(t),g.Yb().nav2login()})),g.kc(1,"\u767b\u5165"),g.Lb()}}function m(t,e){if(1&t){const t=g.Nb();g.Mb(0,"h1",17),g.Mb(1,"a",18),g.Ub("click",(function(){g.gc(t);const e=g.Yb().$implicit;return g.Yb(2).sendItem(e.id)})),g.kc(2,"send"),g.Lb(),g.Lb()}}function x(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-item"),g.Mb(1,"ion-label",10),g.Ub("click",(function(){g.gc(t);const n=e.$implicit;return g.Yb(2).nav2update(n.id)})),g.Mb(2,"span",11),g.kc(3),g.Lb(),g.Mb(4,"span",12),g.kc(5),g.Lb(),g.Lb(),g.Mb(6,"span",13),g.kc(7),g.Zb(8,"date"),g.Lb(),g.Mb(9,"span",14),g.kc(10),g.Lb(),g.jc(11,m,3,0,"h1",15),g.Mb(12,"ion-icon",16),g.Ub("click",(function(){g.gc(t);const n=e.$implicit;return g.Yb(2).DeleteItem(n.id)})),g.Lb(),g.Lb()}if(2&t){const t=e.$implicit,n=g.Yb(2);g.xb(3),g.lc(" ",t.title," "),g.xb(2),g.lc(" ",t.description," "),g.xb(2),g.lc(" \u6700\u5f8c\u4fee\u6539\u6642\u9593\uff1a ",g.bc(8,5,t.updated_at,"short")," "),g.xb(3),g.lc(" last edited by ",t.last_edited_by_user.name," "),g.xb(1),g.ec("ngIf",t.last_edited_by_user.name===n.nowUser)}}function O(t,e){if(1&t&&(g.Kb(0),g.Mb(1,"ion-list"),g.jc(2,x,13,8,"ion-item",9),g.Lb(),g.Jb()),2&t){const t=e.ngIf;g.xb(2),g.ec("ngForOf",t)}}const k=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.navCtrl=t,this.http=e,this.alertController=n,this.storage=o,this.rawResponse=null,this.errorFlag=!1,this.isCreator=!1,this.accessToken="",this.data$=Object(l.a)(null),this.handleError=t=>(this.presentErrorAlert(),t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`HTTP status code ${t.status}, reason:`,t.error),Object(d.a)("Something bad happened; please try again later."))}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.nowUser=String(yield this.storage.get("User")),console.log(this.nowUser),this.accessToken=String(yield this.storage.get("Token")),this.data$=this.getNotificationByObservable()}))}getNotificationByObservable(){const t={headers:new c.c({Authorization:"Bearer "+this.accessToken})};return this.http.get("https://api.cocoing.info/admin/notifications",t).pipe(Object(b.a)(t=>t.data),Object(p.a)(this.handleError))}presentErrorAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u767c\u751f\u932f\u8aa4",message:"\u8f09\u5165\u5931\u6557\uff0c\u8acb\u91cd\u65b0\u8f09\u5165",buttons:["OK"]})).present()}))}reload(){this.data$=this.getNotificationByObservable()}DeleteItem(t){this.DeleteNotificationsFromApi(t).subscribe({next:()=>{this.presentDeleteAlert(),this.reload()},error:t=>console.error(t)});const e=this.DeleteNotificationsFromApi(t);console.log({response:e}),this.getNotificationByObservable()}DeleteNotificationsFromApi(t){const e={id:t},n={headers:new c.c({Authorization:"Bearer "+this.accessToken,"X-HTTP-Method-Override":"delete"})};return this.http.post("https://api.cocoing.info/admin/notifications",e,n).pipe(Object(b.a)(t=>t.data),Object(p.a)(this.handleError))}sendItem(t){return Object(s.a)(this,void 0,void 0,(function*(){try{const e=yield this.sendNotificationsFromApi(t);console.log({response:e})}catch(e){console.error("catch error!"),Object(p.a)(this.handleError)}}))}sendNotificationsFromApi(t){return Object(s.a)(this,void 0,void 0,(function*(){return new Promise((e,n)=>{const o={id:t},r={headers:new c.c({Authorization:"Bearer "+this.accessToken})};this.http.post("https://api.cocoing.info/admin/notifications/send",o,r).subscribe(t=>{console.log(t),this.presentSendAlert(),this.reload(),e(t)},t=>{console.error(t),this.presentFailSendAlert(),n(t)})})}))}presentDeleteAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u522a\u9664\u6210\u529f",message:"\u8cc7\u6599\u5df2\u522a\u9664\u6210\u529f",buttons:["OK"]})).present()}))}presentFailDeleteAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u522a\u9664\u5931\u6557",message:"\u8cc7\u6599\u522a\u9664\u5931\u6557",buttons:["OK"]})).present()}))}presentSendAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u9001\u51fa\u6210\u529f",message:"\u901a\u77e5\u5df2\u6210\u529f\u9001\u51fa",buttons:["OK"]})).present()}))}presentFailSendAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u9001\u51fa\u5931\u6557",message:"\u901a\u77e5\u9001\u51fa\u5931\u6557",buttons:["OK"]})).present()}))}add_notification(){this.navCtrl.navigateForward("/add-notification",{state:()=>{this.reload()}})}nav2update(t){this.navCtrl.navigateForward("/item-update/"+t,{state:()=>{this.reload()}})}nav2login(){this.navCtrl.navigateForward("/login")}}return t.\u0275fac=function(e){return new(e||t)(g.Hb(i.x),g.Hb(c.a),g.Hb(i.a),g.Hb(u.b))},t.\u0275cmp=g.Bb({type:t,selectors:[["app-main"]],decls:15,vars:5,consts:[["color","dark"],[1,"my_title"],["slot","end"],[1,"LogOutButton",3,"click"],["expand","full",1,"AddButton",3,"click"],["expand","full","color","danger",3,"click",4,"ngIf"],[1,"ion-text-center"],[4,"ngIf"],["expand","full","color","danger",3,"click"],[4,"ngFor","ngForOf"],[1,"item",3,"click"],[1,"myItemTitle"],[1,"myItemDes"],[1,"my_date"],[1,"user"],["class","icon_send",4,"ngIf"],["name","trash-outline",1,"delete_button",2,"cursor","pointer",3,"click"],[1,"icon_send"],[3,"click"]],template:function(t,e){1&t&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar",0),g.Mb(2,"ion-title",1),g.kc(3,"Main"),g.Lb(),g.Mb(4,"ion-buttons",2),g.Mb(5,"button",3),g.Ub("click",(function(){return e.nav2login()})),g.kc(6,"Logout"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(7,"ion-content"),g.Mb(8,"button",4),g.Ub("click",(function(){return e.add_notification()})),g.kc(9," \u65b0\u589e\u901a\u77e5 "),g.Lb(),g.jc(10,f,2,0,"ion-button",5),g.jc(11,h,2,0,"ion-button",5),g.Mb(12,"div",6),g.jc(13,O,3,1,"ng-container",7),g.Zb(14,"async"),g.Lb(),g.Lb()),2&t&&(g.xb(10),g.ec("ngIf",e.errorFlag),g.xb(1),g.ec("ngIf",e.errorFlag),g.xb(2),g.ec("ngIf",g.ac(14,3,e.data$)))},directives:[i.l,i.u,i.t,i.g,i.j,o.k,i.f,i.q,o.j,i.o,i.p,i.m],pipes:[o.b,o.e],styles:['@charset "UTF-8";*[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:\u5fae\u8edf\u6b63\u9ed1\u9ad4}.ion-text-center[_ngcontent-%COMP%]{border:1px solid #85e0f7;border-radius:20px;padding:10px;margin-top:5%;margin-left:20%;margin-right:20%;box-shadow:0 0 9px #8de6f1}button[_ngcontent-%COMP%]{border:0;margin:20px;text-transform:uppercase;font-size:20px;font-weight:700;padding:15px 60px;border-radius:50px;color:#fff;outline:none;position:relative}button[_ngcontent-%COMP%]:before{content:"";display:block;background:linear-gradient(270deg,hsla(0,0%,100%,0) 50%,hsla(0,0%,100%,.4) 0);background-size:210% 100%;background-position:100% 100%;height:100%;width:100%;position:absolute;top:0;bottom:0;right:0;left:0;border-radius:50px;transition:all 1s;-webkit-transition:all 1s}.LogOutButton[_ngcontent-%COMP%]{border:0;margin:5px;font-size:16px;border-radius:50px;padding:10px;color:#fff;outline:none;position:relative;background-image:linear-gradient(90deg,#e13b25,#e46140);box-shadow:0 2px 15px 0 rgba(248,127,79,.75)}.LogOutButton[_ngcontent-%COMP%]:hover:before{background-position:0 100%}.AddButton[_ngcontent-%COMP%]{margin-left:46.5%;margin-right:45%;border:0;font-size:18px;border-radius:40px;padding:20px;color:#fff;outline:none;background-image:linear-gradient(90deg,#259ce1,#12ddf8);box-shadow:0 2px 15px 0 rgba(20,164,247,.75)}.AddButton[_ngcontent-%COMP%]:hover:before{background-position:0 100%}.my_title[_ngcontent-%COMP%]{font-size:25px;margin-left:51%}.item[_ngcontent-%COMP%], .my_title[_ngcontent-%COMP%]{padding:10px}.myItemTitle[_ngcontent-%COMP%]{top:0;font-weight:bolder}.myItemDes[_ngcontent-%COMP%], .myItemTitle[_ngcontent-%COMP%]{position:absolute;left:5px}.myItemDes[_ngcontent-%COMP%]{top:25px}.my_date[_ngcontent-%COMP%]{top:3px}.my_date[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{position:absolute;right:100px;font-size:12px;color:grey}.user[_ngcontent-%COMP%]{bottom:5px}.icon_send[_ngcontent-%COMP%]{position:absolute;right:25px;bottom:-3px}.icon_send[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;background-image:url(icon_1.eb54efab3b60d786d2bd.gif);background-size:contain;display:block;text-indent:101%;overflow:hidden;white-space:nowrap;background-repeat:no-repeat}.delete_button[_ngcontent-%COMP%]:hover{color:rgba(240,73,73,.699);-webkit-animation:shake .8s;animation:shake .8s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}@media (max-width:1213px){.my_title[_ngcontent-%COMP%]{font-size:25px;margin-left:35%}}@media (max-width:768px){.my_date[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{display:none}}']}),t})()}];let M=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(k)],a.i]}),t})(),_=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[o.c,r.a,i.v,M]]}),t})()}}]);