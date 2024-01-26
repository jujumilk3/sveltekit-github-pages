import{z as P,M as K,v as B,e as z,a as m,s as c,B as U,f as A,d as $,h as H,E as D,$ as N}from"../chunks/disclose-version.IcSA-UAT.js";import{u as W,w as E,p as q,a as C,x as _,A as j,s as Y,q as O,z as R}from"../chunks/runtime.ZPGqMK-J.js";import{w as G}from"../chunks/index.-ivAZcaO.js";const M={tick:t=>requestAnimationFrame(t),now:()=>performance.now()},J=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"})),y=new Set;function F(t){y.forEach(o=>{o.c(t)||(y.delete(o),o.f())}),y.size!==0&&M.tick(F)}function Q(t){let o;return y.size===0&&M.tick(F),{promise:new Promise(e=>{y.add(o={c:t,f:e})}),abort(){y.delete(o)}}}function T(t){return Object.prototype.toString.call(t)==="[object Date]"}function L(t,o,e,n){if(typeof e=="number"||T(e)){const r=n-e,s=(e-o)/(t.dt||1/60),a=t.opts.stiffness*r,l=t.opts.damping*s,p=(a-l)*t.inv_mass,i=(s+p)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(r)<t.opts.precision?n:(t.settled=!1,T(e)?new Date(e.getTime()+i):e+i)}else{if(Array.isArray(e))return e.map((r,s)=>L(t,o[s],e[s],n[s]));if(typeof e=="object"){const r={};for(const s in e)r[s]=L(t,o[s],e[s],n[s]);return r}else throw new Error(`Cannot spring ${typeof e} values`)}}function V(t,o={}){const e=G(t),{stiffness:n=.15,damping:r=.8,precision:s=.01}=o;let a,l,p,i=t,f=t,d=1,h=0,v=!1;function k(g,u={}){f=g;const w=p={};return t==null||u.hard||b.stiffness>=1&&b.damping>=1?(v=!0,a=M.now(),i=g,e.set(t=f),Promise.resolve()):(u.soft&&(h=1/((u.soft===!0?.5:+u.soft)*60),d=0),l||(a=M.now(),v=!1,l=Q(x=>{if(v)return v=!1,l=null,!1;d=Math.min(d+h,1);const S={inv_mass:d,opts:b,settled:!0,dt:(x-a)*60/1e3},I=L(S,i,t,f);return a=x,i=t,e.set(t=I),S.settled&&(l=null),!S.settled})),new Promise(x=>{l.promise.then(()=>{w===p&&x()})}))}const b={set:k,update:(g,u)=>k(g(f,t),u),subscribe:e.subscribe,stiffness:n,damping:r,precision:s};return b}var X=$('<div class="counter svelte-y96mxt"><button aria-label="Decrease the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg></button> <div class="counter-viewport svelte-y96mxt"><div class="counter-digits svelte-y96mxt"><strong class="hidden svelte-y96mxt" aria-hidden="true"> </strong> <strong class="svelte-y96mxt"> </strong></div></div> <button aria-label="Increase the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg></button></div>');function Z(t,o){C(o,!1);const e={};W(e);const n=()=>Y(a,"$displayed_count",e),r=O();let s=O(0);const a=V();function l(u,w){return(u%w+w)%w}E(()=>{_(s),R(()=>{a.set(_(s))})}),E(()=>{n(),R(()=>{j(r,l(n(),1))})});var p=A(t,!0,X),i=m(p),f=c(c(i)),d=m(f),h=m(d),v=m(h),k=c(c(h)),b=m(k),g=c(c(f));P(v,()=>Math.floor(n()+1)),P(b,()=>Math.floor(n())),K(d,"style",()=>`transform: translate(0, ${U(100*_(r))}%)`),B("click",i,()=>j(s,_(s)-1),!1),B("click",g,()=>j(s,_(s)+1),!1),z(t,p),q()}const tt=""+new URL("../assets/svelte-welcome.NKSIh51R.webp",import.meta.url).href,et=""+new URL("../assets/svelte-welcome.FTYsst4A.png",import.meta.url).href;var st=$('<meta name="description" content="Svelte demo app">'),ot=$('<section class="svelte-19xx0bt"><h1 class="svelte-19xx0bt"><span class="welcome svelte-19xx0bt"><picture><source type="image/webp"> <img alt="Welcome" class="svelte-19xx0bt"></picture></span> to your new<br>SvelteKit app</h1> <h2>try editing <strong>src/routes/+page.svelte</strong></h2> <!></section>');function ct(t,o){C(o,!1);var e=A(t,!0,ot);H(f=>{var d=A(f,!0,st);N.title="Home",z(f,d)});var n=m(e),r=m(n),s=m(r),a=m(s);D(a,"srcset",tt);var l=c(c(a));D(l,"src",et);var p=c(c(n)),i=c(c(p));Z(i,{}),z(t,e),q()}export{ct as component,it as universal};
