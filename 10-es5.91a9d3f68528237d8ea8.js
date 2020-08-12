!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Z45+":function(n,r,o){"use strict";o.r(r),o.d(r,"AddNotificationPageModule",(function(){return y}));var i,a,s,c=o("ofXK"),u=o("3Pt+"),b=o("TEn/"),l=o("tyNb"),d=o("mrSG"),f=o("tk/3"),p=o("z6cu"),h=o("JIr8"),g=o("fXoL"),m=o("e8h1"),v=[{path:"",component:(i=function(){function n(t,r,o,i,a){e(this,n),this.navCtrl=t,this.alertController=r,this.http=o,this.router=i,this.storage=a,this.rawResponse=null,this.accessToken="",this.body={title:"",description:""},this.handleError=function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("HTTP status code ".concat(e.status,", reason:"),e.error),Object(p.a)("Something bad happened; please try again later.")},this.router.getCurrentNavigation().extras.state&&(this.callback=this.router.getCurrentNavigation().extras.state)}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=String,e.next=3,this.storage.get("Token");case 3:e.t1=e.sent,this.accessToken=(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"close",value:function(){this.navCtrl.navigateBack("/main")}},{key:"addItem",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.PostNewNotificationsToApi();case 3:t=e.sent,console.log({response:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("catch error!"),Object(h.a)(this.handleError);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"PostNewNotificationsToApi",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r={headers:new f.c({Authorization:"Bearer "+t.accessToken})};t.http.post("https://api.next.cocoing.info/admin/notifications",t.body,r).subscribe((function(n){console.log(n),t.callback(),t.presentAddAlert(),t.close(),e(n)}),(function(e){console.error(e),t.presentAddFailAlert(),n(e)}))})));case 1:case"end":return e.stop()}}),e)})))}},{key:"presentAddAlert",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\u65b0\u589e\u6210\u529f",message:"\u65b0\u589e\u901a\u77e5\u6210\u529f!",buttons:["OK"]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentAddFailAlert",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\u65b0\u589e\u5931\u6557",message:"\u65b0\u589e\u901a\u77e5\u5931\u6557!",buttons:["OK"]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,o),i&&t(r,i),n}(),i.\u0275fac=function(e){return new(e||i)(g.Hb(b.x),g.Hb(b.a),g.Hb(f.a),g.Hb(l.g),g.Hb(m.b))},i.\u0275cmp=g.Bb({type:i,selectors:[["app-add-notification"]],decls:20,vars:2,consts:[["color","dark"],["slot","start"],["slot","end",1,"mybutton"],[3,"click"],["slot","icon-only","name","close"],["color","primary","position","floating"],["type","text","required","",3,"ngModel","ngModelChange"],["rows","6","cols","20","placeholder","Enter any text here...","required","",3,"ngModel","ngModelChange"],["expand","block","type","submit",1,"submit-btn",3,"click"]],template:function(e,t){1&e&&(g.Kb(0,"ion-header"),g.Kb(1,"ion-toolbar",0),g.Kb(2,"ion-title"),g.fc(3,"add-notification"),g.Jb(),g.Kb(4,"ion-buttons",1),g.Ib(5,"ion-back-button"),g.Jb(),g.Kb(6,"ion-buttons",2),g.Kb(7,"ion-button",3),g.Sb("click",(function(){return t.close()})),g.Ib(8,"ion-icon",4),g.Jb(),g.Jb(),g.Jb(),g.Jb(),g.Kb(9,"ion-content"),g.Kb(10,"ion-item"),g.Kb(11,"ion-label",5),g.fc(12,"Title"),g.Jb(),g.Kb(13,"ion-input",6),g.Sb("ngModelChange",(function(e){return t.body.title=e})),g.Jb(),g.Jb(),g.Kb(14,"ion-item"),g.Kb(15,"ion-label",5),g.fc(16,"Description"),g.Jb(),g.Kb(17,"ion-textarea",7),g.Sb("ngModelChange",(function(e){return t.body.description=e})),g.Jb(),g.Jb(),g.Kb(18,"ion-button",8),g.Sb("click",(function(){return t.addItem()})),g.fc(19,"Create"),g.Jb(),g.Jb()),2&e&&(g.xb(13),g.Zb("ngModel",t.body.title),g.xb(4),g.Zb("ngModel",t.body.description))},directives:[b.l,b.u,b.t,b.g,b.d,b.e,b.f,b.m,b.j,b.o,b.p,b.n,b.z,u.f,u.d,u.e,b.s],styles:[""]}),i)}],k=((s=function t(){e(this,t)}).\u0275mod=g.Fb({type:s}),s.\u0275inj=g.Eb({factory:function(e){return new(e||s)},imports:[[l.i.forChild(v)],l.i]}),s),y=((a=function t(){e(this,t)}).\u0275mod=g.Fb({type:a}),a.\u0275inj=g.Eb({factory:function(e){return new(e||a)},imports:[[c.b,u.a,b.v,k]]}),a)}}])}();