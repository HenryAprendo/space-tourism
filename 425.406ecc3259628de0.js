"use strict";(self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[]).push([[425],{425:(g,r,o)=>{o.r(r),o.d(r,{DestinationComponent:()=>v});var t=o(946),c=o(814),l=o(385),m=o(618),_=o(421),p=o(398);const u=function(n){return{name:n}},x=function(n){return["./details",n]};function d(n,i){if(1&n){const s=t.EpF();t.TgZ(0,"li")(1,"a",7),t.NdJ("click",function(){const f=t.CHM(s).$implicit,b=t.oxw();return t.KtG(b.detectedActiveRoute(f))}),t._uU(2),t.qZA()()}if(2&n){const s=i.$implicit,e=t.oxw();t.xp6(1),t.ekj("border-b",s===e.nameRoute),t.Q6J("routerLink",t.VKq(6,x,t.VKq(4,u,s))),t.xp6(1),t.hij(" ",s," ")}}let v=(()=>{var n;class i{constructor(){this.dataService=(0,t.f3M)(_.D),this.links=[],this.activeRoute=!0,this.nameRoute="Moon"}ngOnInit(){this.dataService.getAllDestinations().pipe((0,p.U)(e=>e.map(a=>a.name))).subscribe(e=>{this.links=e})}detectedActiveRoute(e){this.nameRoute=e}}return(n=i).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-destination"]],standalone:!0,features:[t.jDz],decls:14,vars:1,consts:[[1,"bg-destination-mobile","bg-cover","bg-center","bg-no-repeat","object-cover","max-w-full","mx-auto","min-h-screen","pl-6","pr-6","pt-6","pb-14","text-sky-blue","md:bg-destination-tablet","md:pt-0","md:pr-0","xl:bg-destination-desktop","xl:py-6","xl:px-0"],[1,"uppercase","max-w-5xl","flex","flex-col","items-center","xl:flex-row","xl:justify-between","xl:mx-auto"],[1,"text-white","text-base","mb-56","md:text-xl","md:self-start","md:mt-10","xl:m-0","pt-0"],[1,"text-sky-blue"],[1,"flex","flex-col","items-center","max-w-md","xl:items-start","xl:mt-[7vh]","xl:mr-10"],[1,"h-7","flex","gap-x-7","md:gap-x-9"],[4,"ngFor","ngForOf"],[1,"block","pb-1","text-sm","hover:cursor-pointer","hover:border-b","md:text-base",3,"routerLink","click"]],template:function(e,a){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"app-navbar"),t.TgZ(2,"main")(3,"section",1)(4,"h2",2)(5,"span",3),t._uU(6,"01"),t.qZA(),t._uU(7," Pick your destination "),t.qZA(),t.TgZ(8,"div",4)(9,"nav")(10,"ul",5),t.YNc(11,d,3,8,"li",6),t.qZA()(),t.TgZ(12,"div"),t._UZ(13,"router-outlet"),t.qZA()()()()()),2&e&&(t.xp6(11),t.Q6J("ngForOf",a.links))},dependencies:[c.ez,c.sg,m.S,l.rH,l.lC],encapsulation:2}),i})()}}]);