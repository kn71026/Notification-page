(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Z45+":function(t,e,o){"use strict";o.r(e),o.d(e,"AddNotificationPageModule",(function(){return C}));var n=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),a=o("mrSG"),c=o("tk/3"),d=o("z6cu"),l=o("lJxs"),b=o("JIr8"),u=o("fXoL"),h=o("e8h1");const g=["myCoolButton"],p=["myText"],m=["progressBar"],f=["myCheck"],y=["mySvg"],k=[{path:"",component:(()=>{class t{constructor(t,e,o,n,r){this.navCtrl=t,this.alertController=e,this.http=o,this.router=n,this.storage=r,this.rawResponse=null,this.accessToken="",this.body={title:"",description:""},this.handleError=t=>(t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`HTTP status code ${t.status}, reason:`,t.error),Object(d.a)("Something bad happened; please try again later.")),this.router.getCurrentNavigation().extras.state&&(this.callback=this.router.getCurrentNavigation().extras.state)}ngAfterViewInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.basicTimeline=anime.timeline({autoplay:!1});const t=this.myCheck.nativeElement,e=anime.setDashoffset(t);t.setAttribute("stroke-dashoffset",e),this.basicTimeline.add({targets:this.myText.nativeElement,duration:1,opacity:"0"}).add({targets:this.myCoolButton.nativeElement,duration:1300,height:10,width:300,backgroundColor:"#2B2D2F",border:"0",borderRadius:100}).add({targets:this.progressBar.nativeElement,duration:200,width:300,easing:"linear"}).add({targets:this.myCoolButton.nativeElement,width:0,duration:1}).add({targets:this.progressBar.nativeElement,width:80,height:80,delay:500,duration:750,borderRadius:80,backgroundColor:"#71DFBE"}).add({targets:t,strokeDashoffset:[e,0],duration:200,easing:"easeInOutSine",complete:()=>this.addItem()}),this.accessToken=String(yield this.storage.get("Token"))}))}close(){this.navCtrl.navigateBack("/main")}submit(){this.basicTimeline.play(),this.mySvg.nativeElement.style.cursor="default"}addItem(){return Object(a.a)(this,void 0,void 0,(function*(){this.PostNewNotificationsToApiPipe().subscribe({next:()=>{this.presentAddAlert(),this.callback(),this.close()},error:t=>console.error(t)})}))}PostNewNotificationsToApiPipe(){const t={headers:new c.c({Authorization:"Bearer "+this.accessToken})};return this.http.post("https://api.cocoing.info/admin/notifications",this.body,t).pipe(Object(l.a)(t=>t.data),Object(b.a)(this.handleError))}presentAddAlert(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u65b0\u589e\u6210\u529f",message:"\u65b0\u589e\u901a\u77e5\u6210\u529f!",buttons:["OK"]})).present()}))}presentAddFailAlert(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"\u65b0\u589e\u5931\u6557",message:"\u65b0\u589e\u901a\u77e5\u5931\u6557!",buttons:["OK"]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(u.Hb(i.x),u.Hb(i.a),u.Hb(c.a),u.Hb(s.g),u.Hb(h.b))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-add-notification"]],viewQuery:function(t,e){var o;1&t&&(u.mc(g,!0),u.mc(p,!0),u.mc(m,!0),u.mc(f,!0),u.mc(y,!0)),2&t&&(u.fc(o=u.Vb())&&(e.myCoolButton=o.first),u.fc(o=u.Vb())&&(e.myText=o.first),u.fc(o=u.Vb())&&(e.progressBar=o.first),u.fc(o=u.Vb())&&(e.myCheck=o.first),u.fc(o=u.Vb())&&(e.mySvg=o.first))},decls:30,vars:2,consts:[["color","dark"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-text-center"],["color","primary","position","floating"],["type","text","required","",3,"ngModel","ngModelChange"],["rows","2","cols","20","placeholder","Enter any text here...","required","",3,"ngModel","ngModelChange"],[1,"myCoolButton",3,"click"],["myCoolButton",""],[1,"myText",3,"click"],["myText",""],[1,"progressBar"],["progressBar",""],["x","0px","y","0px","viewBox","0 0 25 30",2,"enable-background","new 0 0 25 30","cursor","pointer",3,"click"],["mySvg",""],["d","M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2",1,"st0","myCheck"],["myCheck",""]],template:function(t,e){1&t&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar",0),u.Mb(2,"ion-title"),u.kc(3,"add-notification"),u.Lb(),u.Mb(4,"ion-buttons",1),u.Ib(5,"ion-back-button"),u.Lb(),u.Mb(6,"ion-buttons",2),u.Mb(7,"ion-button",3),u.Ub("click",(function(){return e.close()})),u.Ib(8,"ion-icon",4),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(9,"ion-content"),u.Mb(10,"div",5),u.Mb(11,"ion-item"),u.Mb(12,"ion-label",6),u.kc(13,"Title"),u.Lb(),u.Mb(14,"ion-input",7),u.Ub("ngModelChange",(function(t){return e.body.title=t})),u.Lb(),u.Lb(),u.Mb(15,"ion-item"),u.Mb(16,"ion-label",6),u.kc(17,"Description"),u.Lb(),u.Mb(18,"ion-textarea",8),u.Ub("ngModelChange",(function(t){return e.body.description=t})),u.Lb(),u.Lb(),u.Mb(19,"div",9,10),u.Ub("click",(function(){return e.submit()})),u.Mb(21,"div",11,12),u.Ub("click",(function(){return e.submit()})),u.kc(23,"Submit"),u.Lb(),u.Lb(),u.Ib(24,"div",13,14),u.Xb(),u.Mb(26,"svg",15,16),u.Ub("click",(function(){return e.submit()})),u.Ib(28,"path",17,18),u.Lb(),u.Lb(),u.Lb()),2&t&&(u.xb(14),u.ec("ngModel",e.body.title),u.xb(4),u.ec("ngModel",e.body.description))},directives:[i.l,i.u,i.t,i.g,i.d,i.e,i.f,i.m,i.j,i.o,i.p,i.n,i.z,r.f,r.d,r.e,i.s],styles:[".ion-text-center[_ngcontent-%COMP%]{border:1px solid #85e0f7;border-radius:20px;padding:10px;margin-top:5%;margin-left:20%;margin-right:20%;box-shadow:0 0 9px #8de6f1}.myCoolButton[_ngcontent-%COMP%]{background:#2b2d2f;height:80px;width:200px;text-align:center;transform:translateY(-50%);margin:0 auto;cursor:pointer;border-radius:6px}.myCoolButton[_ngcontent-%COMP%], .myText[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;right:0}.myText[_ngcontent-%COMP%]{font:700 1.25rem/1 poppins;color:#8de6f1;transform:translateY(-52%)}.progressBar[_ngcontent-%COMP%]{height:10px;width:0;border-radius:200px;background:#505357}.progressBar[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}svg[_ngcontent-%COMP%]{width:30px}.myCheck[_ngcontent-%COMP%]{fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(k)],s.i]}),t})(),C=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[n.c,r.a,i.v,v]]}),t})()}}]);