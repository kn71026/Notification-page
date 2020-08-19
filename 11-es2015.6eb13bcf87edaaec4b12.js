(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Z45+":function(t,e,o){"use strict";o.r(e),o.d(e,"AddNotificationPageModule",(function(){return v}));var n=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),c=o("mrSG"),a=o("tk/3"),l=o("z6cu"),b=o("JIr8"),d=o("fXoL"),u=o("e8h1");const h=["my_cool_button"],g=["my_cool_text"],p=["progress_bar"],m=["my_check"],f=["my_cool_svg"],_=[{path:"",component:(()=>{class t{constructor(t,e,o,n,r){this.navCtrl=t,this.alertController=e,this.http=o,this.router=n,this.storage=r,this.rawResponse=null,this.accessToken="",this.body={title:"",description:""},this.handleError=t=>(t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`HTTP status code ${t.status}, reason:`,t.error),Object(l.a)("Something bad happened; please try again later.")),this.router.getCurrentNavigation().extras.state&&(this.callback=this.router.getCurrentNavigation().extras.state)}ngAfterViewInit(){return Object(c.a)(this,void 0,void 0,(function*(){this.basicTimeline=anime.timeline({autoplay:!1});const t=this.my_check.nativeElement,e=anime.setDashoffset(t);t.setAttribute("stroke-dashoffset",e),this.basicTimeline.add({targets:this.my_cool_text.nativeElement,duration:1,opacity:"0"}).add({targets:this.my_cool_button.nativeElement,duration:1300,height:10,width:300,backgroundColor:"#2B2D2F",border:"0",borderRadius:100}).add({targets:this.progress_bar.nativeElement,duration:200,width:300,easing:"linear"}).add({targets:this.my_cool_button.nativeElement,width:0,duration:1}).add({targets:this.progress_bar.nativeElement,width:80,height:80,delay:500,duration:750,borderRadius:80,backgroundColor:"#71DFBE"}).add({targets:t,strokeDashoffset:[e,0],duration:200,easing:"easeInOutSine",complete:()=>this.addItem()}),this.accessToken=String(yield this.storage.get("Token"))}))}close(){this.navCtrl.navigateBack("/main")}submit(){this.basicTimeline.play(),this.my_cool_svg.nativeElement.style.cursor="default"}addItem(){return Object(c.a)(this,void 0,void 0,(function*(){try{console.log(this.PostNewNotificationsToApi);const t=yield this.PostNewNotificationsToApi();console.log({response:t})}catch(t){console.error(t),Object(b.a)(this.handleError)}}))}PostNewNotificationsToApi(){return Object(c.a)(this,void 0,void 0,(function*(){return new Promise((t,e)=>{const o={headers:new a.c({Authorization:"Bearer "+this.accessToken})};this.http.post("https://api.cocoing.info/admin/notifications",this.body,o).subscribe(e=>{console.log(e),this.callback(),this.presentAddAlert(),this.close(),t(e)},t=>{console.error(t),this.presentAddFailAlert(),e(t)})})}))}presentAddAlert(){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u65b0\u589e\u6210\u529f",message:"\u65b0\u589e\u901a\u77e5\u6210\u529f!",buttons:["OK"]})).present()}))}presentAddFailAlert(){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u65b0\u589e\u5931\u6557",message:"\u65b0\u589e\u901a\u77e5\u5931\u6557!",buttons:["OK"]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(i.x),d.Hb(i.a),d.Hb(a.a),d.Hb(s.g),d.Hb(u.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-add-notification"]],viewQuery:function(t,e){var o;1&t&&(d.jc(h,!0),d.jc(g,!0),d.jc(p,!0),d.jc(m,!0),d.jc(f,!0)),2&t&&(d.cc(o=d.Tb())&&(e.my_cool_button=o.first),d.cc(o=d.Tb())&&(e.my_cool_text=o.first),d.cc(o=d.Tb())&&(e.progress_bar=o.first),d.cc(o=d.Tb())&&(e.my_check=o.first),d.cc(o=d.Tb())&&(e.my_cool_svg=o.first))},decls:30,vars:2,consts:[["color","dark"],["slot","start"],["slot","end",1,"mybutton"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-text-center"],["color","primary","position","floating"],["type","text","required","",3,"ngModel","ngModelChange"],["rows","2","cols","20","placeholder","Enter any text here...","required","",3,"ngModel","ngModelChange"],[1,"my_cool_button",3,"click"],["my_cool_button",""],[1,"my_cool_text",3,"click"],["my_cool_text",""],[1,"progress_bar"],["progress_bar",""],["x","0px","y","0px","viewBox","0 0 25 30",2,"enable-background","new 0 0 25 30","cursor","pointer",3,"click"],["my_cool_svg",""],["d","M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2",1,"st0","my_check"],["my_check",""]],template:function(t,e){1&t&&(d.Kb(0,"ion-header"),d.Kb(1,"ion-toolbar",0),d.Kb(2,"ion-title"),d.hc(3,"add-notification"),d.Jb(),d.Kb(4,"ion-buttons",1),d.Ib(5,"ion-back-button"),d.Jb(),d.Kb(6,"ion-buttons",2),d.Kb(7,"ion-button",3),d.Sb("click",(function(){return e.close()})),d.Ib(8,"ion-icon",4),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(9,"ion-content"),d.Kb(10,"div",5),d.Kb(11,"ion-item"),d.Kb(12,"ion-label",6),d.hc(13,"Title"),d.Jb(),d.Kb(14,"ion-input",7),d.Sb("ngModelChange",(function(t){return e.body.title=t})),d.Jb(),d.Jb(),d.Kb(15,"ion-item"),d.Kb(16,"ion-label",6),d.hc(17,"Description"),d.Jb(),d.Kb(18,"ion-textarea",8),d.Sb("ngModelChange",(function(t){return e.body.description=t})),d.Jb(),d.Jb(),d.Kb(19,"div",9,10),d.Sb("click",(function(){return e.submit()})),d.Kb(21,"div",11,12),d.Sb("click",(function(){return e.submit()})),d.hc(23,"Submit"),d.Jb(),d.Jb(),d.Ib(24,"div",13,14),d.Vb(),d.Kb(26,"svg",15,16),d.Sb("click",(function(){return e.submit()})),d.Ib(28,"path",17,18),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.xb(14),d.bc("ngModel",e.body.title),d.xb(4),d.bc("ngModel",e.body.description))},directives:[i.l,i.u,i.t,i.g,i.d,i.e,i.f,i.m,i.j,i.o,i.p,i.n,i.z,r.f,r.d,r.e,i.s],styles:[".ion-text-center[_ngcontent-%COMP%]{border:1px solid #85e0f7;border-radius:20px;padding:10px;margin-top:5%;margin-left:20%;margin-right:20%;box-shadow:0 0 9px #8de6f1}.my_cool_button[_ngcontent-%COMP%]{background:#2b2d2f;height:80px;width:200px;text-align:center;transform:translateY(-50%);margin:0 auto;cursor:pointer;border-radius:6px}.my_cool_button[_ngcontent-%COMP%], .my_cool_text[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;right:0}.my_cool_text[_ngcontent-%COMP%]{font:700 1.25rem/1 poppins;color:#8de6f1;transform:translateY(-52%)}.progress_bar[_ngcontent-%COMP%]{height:10px;width:0;border-radius:200px;background:#505357}.progress_bar[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}svg[_ngcontent-%COMP%]{width:30px}.my_check[_ngcontent-%COMP%]{fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(_)],s.i]}),t})(),v=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},imports:[[n.b,r.a,i.v,y]]}),t})()}}]);