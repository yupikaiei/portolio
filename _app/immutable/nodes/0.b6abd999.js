import{s as S,c as j,u as L,g as N,d as D}from"../chunks/scheduler.63274e7e.js";import{S as H,i as V,g as p,s as b,h as m,j as T,c as g,x,f as w,k as u,a as q,y as d,d as y,t as I,r as C,u as z,v as E,w as O}from"../chunks/index.a2cc6748.js";const P=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"}));function B(n){let e,l,s,t,a,k='<div class="flex-none lg:hidden"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div>',v,$,c,M='<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-80 min-h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul>',f;const h=n[1].default,o=j(h,n,n[0],null);return{c(){e=p("div"),l=p("input"),s=b(),t=p("div"),a=p("div"),a.innerHTML=k,v=b(),o&&o.c(),$=b(),c=p("div"),c.innerHTML=M,this.h()},l(r){e=m(r,"DIV",{class:!0});var i=T(e);l=m(i,"INPUT",{id:!0,type:!0,class:!0}),s=g(i),t=m(i,"DIV",{class:!0});var _=T(t);a=m(_,"DIV",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-1ouq2sj"&&(a.innerHTML=k),v=g(_),o&&o.l(_),_.forEach(w),$=g(i),c=m(i,"DIV",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-1hi0sbn"&&(c.innerHTML=M),i.forEach(w),this.h()},h(){u(l,"id","my-drawer-3"),u(l,"type","checkbox"),u(l,"class","drawer-toggle"),u(a,"class","w-full navbar bg-base-300"),u(t,"class","drawer-content flex flex-col"),u(c,"class","drawer-side"),u(e,"class","drawer")},m(r,i){q(r,e,i),d(e,l),d(e,s),d(e,t),d(t,a),d(t,v),o&&o.m(t,null),d(e,$),d(e,c),f=!0},p(r,[i]){o&&o.p&&(!f||i&1)&&L(o,h,r,r[0],f?D(h,r[0],i,null):N(r[0]),null)},i(r){f||(y(o,r),f=!0)},o(r){I(o,r),f=!1},d(r){r&&w(e),o&&o.d(r)}}}function U(n,e,l){let{$$slots:s={},$$scope:t}=e;return n.$$set=a=>{"$$scope"in a&&l(0,t=a.$$scope)},[t,s]}class A extends H{constructor(e){super(),V(this,e,U,B,S,{})}}function F(n){let e;const l=n[0].default,s=j(l,n,n[1],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,a){s&&s.m(t,a),e=!0},p(t,a){s&&s.p&&(!e||a&2)&&L(s,l,t,t[1],e?D(l,t[1],a,null):N(t[1]),null)},i(t){e||(y(s,t),e=!0)},o(t){I(s,t),e=!1},d(t){s&&s.d(t)}}}function G(n){let e,l;return e=new A({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,t){E(e,s,t),l=!0},p(s,[t]){const a={};t&2&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){l||(y(e.$$.fragment,s),l=!0)},o(s){I(e.$$.fragment,s),l=!1},d(s){O(e,s)}}}function J(n,e,l){let{$$slots:s={},$$scope:t}=e;return n.$$set=a=>{"$$scope"in a&&l(1,t=a.$$scope)},[s,t]}class W extends H{constructor(e){super(),V(this,e,J,G,S,{})}}export{W as component,R as universal};