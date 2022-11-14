"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[596],{2596:(I,m,s)=>{s.r(m),s.d(m,{AccountModule:()=>S});var u=s(9808),a=s(1392),o=s(4182),t=s(6435),c=s(3676),p=s(182);let f=(()=>{class e{constructor(n,i,l){this.accountService=n,this.router=i,this.activatedRoute=l}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.B),t.Y36(a.F0),t.Y36(a.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"button",7),t._uU(9,"Sign in"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",i.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("disabled",i.loginForm.invalid))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,p.t]}),e})();var b=s(6498),h=s(353),v=s(6688);function g(e){return!(0,v.k)(e)&&e-parseFloat(e)+1>=0}var d=s(2866);function x(e){const{index:r,period:n,subscriber:i}=e;if(i.next(r),!i.closed){if(-1===n)return i.complete();e.index=r+1,this.schedule(e,n)}}var F=s(1086),C=s(7545),J=s(4850);function N(e,r){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.hij(" ",n," ")}}function A(e,r){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,N,2,1,"li",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const R=[{path:"login",component:f},{path:"register",component:(()=>{class e{constructor(n,i,l){this.fb=n,this.accountService=i,this.router=l}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>function y(e=0,r,n){let i=-1;return g(r)?i=Number(r)<1?1:Number(r):(0,d.K)(r)&&(n=r),(0,d.K)(n)||(n=h.P),new b.y(l=>{const T=g(e)?e:+e-n.now();return n.schedule(x,T,{index:0,period:i,subscriber:l})})}(500).pipe((0,C.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,J.U)(i=>i?{emailExists:!0}:null)):(0,F.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(c.B),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Register"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),t.YNc(9,A,2,1,"ul",8),t.TgZ(10,"button",9),t._uU(11,"Register"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",i.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",i.errors),t.xp6(1),t.Q6J("disabled",i.registerForm.invalid))},dependencies:[u.sg,u.O5,o._Y,o.JJ,o.JL,o.sg,o.u,p.t]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,a.Bz.forChild(R),a.Bz]}),e})();var Z=s(5349);let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,w,Z.m]}),e})()}}]);