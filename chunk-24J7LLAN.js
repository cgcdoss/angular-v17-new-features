import{Ba as B,Ca as R,Da as O,Ia as T,Oa as C,Pa as P,Qa as k,Sa as N,U as c,V as v,Vb as E,X as f,Xb as D,Ya as $,Yb as y,Z as l,_ as a,aa as h,ca as _,da as p,ia as m,ib as x,pa as I,ta as F,ua as M,ya as L}from"./chunk-LNXIQD7Q.js";var G=null;function w(){return G}function Ze(i){G??=i}var U=class{};var A=new f(""),S=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>a(W),providedIn:"platform"});let i=n;return i})();var W=(()=>{let n=class n extends S{constructor(){super(),this._doc=a(A),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return w().getBaseHref(this._doc)}onPopState(e){let t=w().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=w().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>new n,providedIn:"platform"});let i=n;return i})();function b(i,n){if(i.length==0)return n;if(n.length==0)return i;let s=0;return i.endsWith("/")&&s++,n.startsWith("/")&&s++,s==2?i+n.substring(1):s==1?i+n:i+"/"+n}function z(i){let n=i.match(/#|\?|$/),s=n&&n.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function d(i){return i&&i[0]!=="?"?"?"+i:i}var g=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>a(Z),providedIn:"root"});let i=n;return i})(),H=new f(""),Z=(()=>{let n=class n extends g{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??a(A).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return b(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};n.\u0275fac=function(t){return new(t||n)(l(S),l(H,8))},n.\u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})(),Ke=(()=>{let n=class n extends g{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=b(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};n.\u0275fac=function(t){return new(t||n)(l(S),l(H,8))},n.\u0275prov=c({token:n,factory:n.\u0275fac});let i=n;return i})(),K=(()=>{let n=class n{constructor(e){this._subject=new M,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Q(z(V(t))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+d(t))}normalize(e){return n.stripTrailingSlash(X(this._basePath,V(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t,complete:r})}};n.normalizeQueryParams=d,n.joinWithSlash=b,n.stripTrailingSlash=z,n.\u0275fac=function(t){return new(t||n)(l(g))},n.\u0275prov=c({token:n,factory:()=>q(),providedIn:"root"});let i=n;return i})();function q(){return new K(l(g))}function X(i,n){if(!i||!n.startsWith(i))return n;let s=n.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:n}function V(i){return i.replace(/\/index.html$/,"")}function Q(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function qe(i,n){n=encodeURIComponent(n);for(let s of i.split(";")){let e=s.indexOf("="),[t,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(t.trim()===n)return decodeURIComponent(r)}return null}var Xe=(()=>{let n=class n{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}};n.\u0275fac=function(t){return new(t||n)(T(N))},n.\u0275dir=p({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[m]});let i=n;return i})();var Qe=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=_({type:n}),n.\u0275inj=v({});let i=n;return i})(),J="browser",ee="server";function Je(i){return i===J}function te(i){return i===ee}var j=class{};var Y=i=>i.src,ne=new f("",{providedIn:"root",factory:()=>Y});var ie=new f("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),re=(()=>{let n=class n{constructor(){this.preloadedImages=a(ie),this.document=a(A)}createPreloadLinkTag(e,t,r,u){if(this.preloadedImages.has(t))return;this.preloadedImages.add(t);let o=e.createElement("link");e.setAttribute(o,"as","image"),e.setAttribute(o,"href",t),e.setAttribute(o,"rel","preload"),e.setAttribute(o,"fetchpriority","high"),u&&e.setAttribute(o,"imageSizes",u),r&&e.setAttribute(o,"imageSrcset",r),e.appendChild(this.document.head,o)}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var se=/^((\s*\d+w\s*(,|$)){1,})$/;var oe=[1,2],ue=640;var ae=1920,ce=1080;var et=(()=>{let n=class n{constructor(){this.imageLoader=a(ne),this.config=de(a(R)),this.renderer=a(C),this.imgElement=a(F).nativeElement,this.injector=a(I),this.isServer=te(a(L)),this.preloadLinkCreator=a(re),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){P("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0);let r=this._renderedSrc;this.lcpObserver!==null&&t&&r&&t!==r&&this.injector.get(k).runOutsideAngular(()=>{this.lcpObserver?.updateImage(t,r)})}}callImageLoader(e){let t=e;return this.loaderParams&&(t.loaderParams=this.loaderParams),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=se.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let u=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:u})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(u=>u>=ue)),t.map(u=>`${this.callImageLoader({src:this.ngSrc,width:u})} ${u}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return oe.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>ae||this.height>ce),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Y&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0})})`:typeof e=="string"&&e.startsWith("data:")?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let o=this.injector.get(E);r(),u(),this.placeholder=!1,o.markForCheck()},r=this.renderer.listen(e,"load",t),u=this.renderer.listen(e,"error",t)}ngOnDestroy(){}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}};n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=p({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,r){t&2&&x("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[h.HasDecoratorInputTransform,"ngSrc","ngSrc",le],ngSrcset:"ngSrcset",sizes:"sizes",width:[h.HasDecoratorInputTransform,"width","width",y],height:[h.HasDecoratorInputTransform,"height","height",y],loading:"loading",priority:[h.HasDecoratorInputTransform,"priority","priority",D],loaderParams:"loaderParams",disableOptimizedSrcset:[h.HasDecoratorInputTransform,"disableOptimizedSrcset","disableOptimizedSrcset",D],fill:[h.HasDecoratorInputTransform,"fill","fill",D],placeholder:[h.HasDecoratorInputTransform,"placeholder","placeholder",he],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[$,m]});let i=n;return i})();function de(i){let n={};return i.breakpoints&&(n.breakpoints=i.breakpoints.sort((s,e)=>s-e)),Object.assign({},B,i,n)}function le(i){return typeof i=="string"?i:O(i)}function he(i){return typeof i=="string"&&i.startsWith("data:")?i:D(i)}export{w as a,Ze as b,U as c,A as d,g as e,Ke as f,K as g,qe as h,Xe as i,Qe as j,J as k,Je as l,te as m,j as n,et as o};