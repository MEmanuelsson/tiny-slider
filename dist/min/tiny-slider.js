var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=M.style.overflow,e.style.background="",e.style.overflow=M.style.overflow="hidden",M.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),M.style.overflow=t,M.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t){return e.className.indexOf(t)>=0}function v(e,t){d(e,t)||(e.className+=" "+t)}function h(e,t){d(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function b(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function x(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&b(e,"hidden")}function E(e){return e.offsetWidth>0&&e.offsetHeight>0}function C(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function w(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function N(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function O(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&I;e.addEventListener(n,t[n],i)}}function D(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;e.removeEventListener(n,t[n],i)}}function k(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var M=document.documentElement,P=!1;try{var W=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,W)}catch(e){}var I=!!P&&{passive:!0},S=navigator.userAgent,H=!0,L={};try{L=localStorage,L.tnsApp&&L.tnsApp!==S&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)}),L.tnsApp=S}catch(e){H=!1}localStorage||(L={});var z=document,B=window,R={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},j=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),H),q=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),H),G=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),H),F=t(L.tTf)||n("tTf",w(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),H),U=t(L.tTDu)||n("tTDu",w(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),H),X=t(L.tTDe)||n("tTDe",w(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),H),V=t(L.tADu)||n("tADu",w(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),H),Y=t(L.tADe)||n("tADe",w(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),H),K=t(L.tTE)||n("tTE",N(U,"Transition"),H),Q=t(L.tAE)||n("tAE",N(V,"Animation"),H);return G||(q=!1),function(t){function n(){return B.innerWidth||z.documentElement.clientWidth||z.body.clientWidth}function a(e){var n=t[e];return!n&&pt&&ht.indexOf(e)>=0&&pt.forEach(function(t){vt[t][e]&&(n=!0)}),n}function r(e,n){n=n?n:yt;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!$e&&e in a)i=a[e];else if("items"===e&&r("fixedWidth"))i=Math.floor(dt/(r("fixedWidth")+r("gutter")));else if("autoHeight"===e&&"outer"===Nt)i=!0;else if(i=t[e],pt&&ht.indexOf(e)>=0)for(var o=0,s=pt.length;o<s;o++){var l=pt[o];if(!(n>=l))break;e in vt[l]&&(i=vt[l][e])}return"slideBy"===e&&"page"===i&&(i=r("items")),i}function o(e){return j?j+"("+100*e+"% / "+Bt+")":100*e/Bt+"%"}function y(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(dt%(n+t)+t)/2+"px":rt?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=rt?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function w(e,t,n){return e?(e+t)*Bt+"px":j?j+"("+100*Bt+"% / "+n+")":100*Bt/n+"%"}function N(e,t,n){var i="";if(rt){if(i="width:",e)i+=e+t+"px";else{var a=$e?Bt:n;i+=j?j+"(100% / "+a+")":100/a+"%"}i+=rn+";"}return i}function M(e){var t="";if(e!==!1){t=(rt?"padding-":"margin-")+(rt?"right":"bottom")+": "+e+"px;"}return t}function P(e){e=e||B.event,clearTimeout(xt),xt=setTimeout(function(){if(at){var t=n();yt!==t&&(yt=t,W(),"outer"===Nt&&Zt.emit("outerResized",Ve(e)))}},100)}function W(){var e=mt,t=Xt,n=Ct,i=an;if(dt=ot.clientWidth,it=st.clientWidth,pt&&I(),e!==mt||kt){var a=At,o=It,s=kt,u=Dt,f=Ot,d=tn;if(Ct=r("items"),wt=r("slideBy"),tn=r("disable"),an=!!tn||!!nn&&ft<=Ct,Ct!==n&&(Kt=Bt-Ct,ai()),tn!==d&&L(tn),an!==i&&(an&&(Xt=$e?zt:0),S()),e!==mt&&(Mt=r("speed"),Dt=r("edgePadding"),Ot=r("gutter"),kt=r("fixedWidth"),tn||kt===s||de(),(It=r("autoHeight"))!==o&&(It||(st.style.height=""))),At=!an&&r("arrowKeys"),At!==a&&(At?O(z,un):D(z,un)),vn){var v=wn,h=Nn;wn=!an&&r("controls"),Nn=r("controlsText"),wn!==v&&(wn?T(On):x(On)),Nn!==h&&(xn.innerHTML=Nn[0],Tn.innerHTML=Nn[1])}if(hn){var p=kn;kn=!an&&r("nav"),kn!==p&&(kn?(T(An),Xe()):x(An))}if(yn){var m=$n;$n=!an&&r("touch"),$n!==m&&$e&&($n?O(lt,fn):D(lt,fn))}if(gn){var g=ni;ni=!an&&r("mouseDrag"),ni!==g&&$e&&(ni?O(lt,dn):D(lt,dn))}if(mn){var b=qn,E=Xn,C=Yn,k=Un;if(an?qn=Xn=Yn=!1:(qn=r("autoplay"),qn?(Xn=r("autoplayHoverPause"),Yn=r("autoplayResetOnVisibility")):Xn=Yn=!1),Un=r("autoplayText"),Gn=r("autoplayTimeout"),qn!==b&&(qn?(Vn&&T(Vn),zn||Rn||we()):(Vn&&x(Vn),zn&&Ne())),Xn!==E&&(Xn?O(lt,ln):D(lt,ln)),Yn!==C&&(Yn?O(z,cn):D(z,cn)),Vn&&Un!==k){var A=qn?1:0,P=Vn.innerHTML,W=P.length-k[A].length;P.substring(W)===k[A]&&(Vn.innerHTML=P.substring(0,W)+Un[A])}}if(!G){if(an||Dt===u&&Ot===f||(st.style.cssText=y(Dt,Ot,kt)),$e&&rt&&(kt!==s||Ot!==f||Ct!==n)&&(lt.style.width=w(kt,Ot,Ct)),rt&&(Ct!==n||Ot!==f||kt!=s)){var B=N(kt,Ot,Ct)+M(Ot);St.removeRule(c(St)-1),l(St,"#"+en+" > .tns-item",B,c(St))}kt||Xt!==t||he(0)}Xt!==t&&(Zt.emit("indexChanged",Ve()),he(0),Vt=Xt),Ct!==n&&(_(),ae(),Z(),navigator.msMaxTouchPoints&&ne())}rt||tn||(te(),Fe(),de()),H(!0),Z()}function I(){mt=0,pt.forEach(function(e,t){yt>=e&&(mt=t+1)})}function S(){var e="tns-transparent";if(an){if(!Et){if(Dt&&(st.style.margin="0px"),zt)for(var t=zt;t--;)$e&&v(ut[t],e),v(ut[Bt-t-1],e);Et=!0}}else if(Et){if(Dt&&!kt&&G&&(st.style.margin=""),zt)for(var t=zt;t--;)$e&&h(ut[t],e),h(ut[Bt-t-1],e);Et=!1}}function H(e){kt&&Dt&&(an||dt<=kt+Ot?"0px"!==st.style.margin&&(st.style.margin="0px"):e&&(st.style.cssText=y(Dt,Ot,kt)))}function L(e){var t=ut.length;if(e){if(St.disabled=!0,lt.className=lt.className.replace(_t.substring(1),""),lt.style="",Wt)for(var n=zt;n--;)$e&&x(ut[n]),x(ut[t-n-1]);if(rt&&$e||(st.style=""),!$e)for(var i=Xt,a=Xt+ft;i<a;i++){var r=ut[i];r.style="",h(r,_e),h(r,nt)}}else{if(St.disabled=!1,lt.className+=_t,rt||te(),de(),Wt)for(var n=zt;n--;)$e&&T(ut[n]),T(ut[t-n-1]);if(!$e)for(var i=Xt,a=Xt+ft;i<a;i++){var r=ut[i],o=i<Xt+Ct?_e:nt;r.style.left=100*(i-Xt)/Ct+"%",v(r,o)}}}function J(){if(Ht&&!tn){var e=Xt,t=Xt+Ct;for(Dt&&(e-=1,t+=1);e<t;e++)[].forEach.call(ut[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},O(e,t),d(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function Z(){if(It&&!tn){for(var e=[],t=Xt,n=Xt+Ct;t<n;t++)[].forEach.call(ut[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ee():$(e)}}function $(e){e.forEach(function(t,n){C(t)&&e.splice(n,1)}),0===e.length?ee():setTimeout(function(){$(e)},16)}function _(){J(),ie(),ce(),Xe(),re()}function ee(){for(var e,t=[],n=Xt,i=Xt+Ct;n<i;n++)t.push(ut[n].offsetHeight);e=Math.max.apply(null,t),st.style.height!==e&&(U&&ue(Mt),st.style.height=e+"px")}function te(){bt=[0];for(var e,t=ut[0].getBoundingClientRect().top,n=1;n<Bt;n++)e=ut[n].getBoundingClientRect().top,bt.push(e-t)}function ne(){ot.style.msScrollSnapPointsX="snapInterval(0%, "+100/Ct+"%)"}function ie(){for(var e=Xt+Math.min(ft,Ct),t=Bt;t--;){var n=ut[t];t>=Xt&&t<e?p(n,"tabindex")&&(g(n,{"aria-hidden":"false"}),b(n,["tabindex"]),v(n,bn)):(p(n,"tabindex")||g(n,{"aria-hidden":"true",tabindex:"-1"}),d(n,bn)&&h(n,bn))}}function ae(){if(!$e){for(var e=Xt+Math.min(ft,Ct),t=Bt;t--;){var n=ut[t];t>=Xt&&t<e?(v(n,"tns-moving"),n.style.left=100*(t-Xt)/Ct+"%",v(n,_e),h(n,nt)):n.style.left&&(n.style.left="",v(n,nt),h(n,_e)),h(n,et)}setTimeout(function(){[].forEach.call(ut,function(e){h(e,"tns-moving")})},300)}}function re(){if(kn&&(In=Wn!==-1?Wn:Xt%ft,Wn=-1,In!==Sn)){var e=Dn[Sn],t=Dn[In];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Hn),v(t,Hn)}}function oe(e){return"button"===e.nodeName.toLowerCase()}function se(e){return"true"===e.getAttribute("aria-disabled")}function le(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function ce(){if(wn&&!Pt&&!Wt){var e=En?xn.disabled:se(xn),t=Cn?Tn.disabled:se(Tn),n=Xt===Yt,i=!Pt&&Xt===Kt;n&&!e&&le(En,xn,!0),!n&&e&&le(En,xn,!1),i&&!t&&le(Cn,Tn,!0),!i&&t&&le(Cn,Tn,!1)}}function ue(e,t){e=e?e/1e3+"s":"",t=t||lt,t.style[U]=e,$e||(t.style[V]=e),rt||(st.style[U]=e)}function fe(){var e;if(rt)if(kt)e=-(kt+Ot)*Xt+"px";else{var t=F?Bt:Ct;e=100*-Xt/t+"%"}else e=-bt[Xt]+"px";return e}function de(e){e||(e=fe()),lt.style[qt]=Gt+e+Ft}function ve(e,t,n,i){for(var a=e,r=e+Ct;a<r;a++){var o=ut[a];i||(o.style.left=100*(a-Xt)/Ct+"%"),U&&ue(Mt,o),tt&&X&&(o.style[X]=o.style[Y]=tt*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&Lt.push(o)}}function he(e,t){isNaN(e)&&(e=Mt),zn&&!E(lt)&&(e=0),U&&ue(e),ri(e,t)}function pe(e,t){jt&&ai(),(Xt!==Vt||t)&&(Zt.emit("indexChanged",Ve()),Zt.emit("transitionStart",Ve()),zn&&e&&["click","keydown"].indexOf(e.type)>=0&&Ne(),Qt=!0,he())}function me(e){return e.toLowerCase().replace(/-/g,"")}function ye(e){if($e||Qt){if(Zt.emit("transitionEnd",Ve(e)),!$e&&Lt.length>0)for(var t=0;t<Ct;t++){var n=Lt[t];n.style.left="",U&&ue(0,n),tt&&X&&(n.style[X]=n.style[Y]=""),h(n,et),v(n,nt)}if(!e||!$e&&e.target.parentNode===lt||e.target===lt&&me(e.propertyName)===me(qt)){if(!jt){var i=Xt;ai(),Xt!==i&&(Zt.emit("indexChanged",Ve()),U&&ue(0),de())}Z(),"inner"===Nt&&Zt.emit("innerLoaded",Ve()),Qt=!1,Sn=In,Vt=Xt}}}function ge(e,t){if(!an)if("prev"===e)be(t,-1);else if("next"===e)be(t,1);else if(!Qt){var n=Xt%ft,i=0;if(n<0&&(n+=ft),"first"===e)i=-n;else if("last"===e)i=ft-Ct-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%ft;a<0&&(a+=ft),i=a-n}Xt+=i,Xt%ft!=Vt%ft&&pe(t)}}function be(e,t){if(!Qt){var n;if(!t){e=e||B.event;for(var i=e.target||e.srcElement;i!==On&&[xn,Tn].indexOf(i)<0;)i=i.parentNode;var a=[xn,Tn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(Pt){if(Xt===Yt&&t===-1)return void ge("last",e);if(Xt===Kt&&1===t)return void ge(0,e)}t&&(Xt+=wt*t,pe(n||e&&"keydown"===e.type?e:null))}}function xe(e){if(!Qt){e=e||B.event;for(var t,n=e.target||e.srcElement;n!==An&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=Wn=[].indexOf.call(Dn,n),ge(t,e))}}function Te(){Ln=setInterval(function(){be(null,Fn)},Gn),zn=!0}function Ee(){clearInterval(Ln),zn=!1}function Ce(e,t){g(Vn,{"data-action":e}),Vn.innerHTML=Kn[0]+e+Kn[1]+t}function we(){Te(),Vn&&Ce("stop",Un[1])}function Ne(){Ee(),Vn&&Ce("start",Un[0])}function Oe(){qn&&!zn&&(we(),Rn=!1)}function De(){zn&&(Ne(),Rn=!0)}function ke(){zn?(Ne(),Rn=!0):(we(),Rn=!1)}function Ae(){z.hidden?zn&&(Ee(),jn=!0):jn&&(Te(),jn=!1)}function Me(){zn&&(Ee(),Bn=!0)}function Pe(){Bn&&(Te(),Bn=!1)}function We(e){switch(e=e||B.event,e.keyCode){case R.LEFT:be(e,-1);break;case R.RIGHT:be(e,1)}}function Ie(e){switch(e=e||B.event,e.keyCode){case R.LEFT:case R.UP:case R.PAGEUP:xn.disabled||be(e,-1);break;case R.RIGHT:case R.DOWN:case R.PAGEDOWN:Tn.disabled||be(e,1);break;case R.HOME:ge(0,e);break;case R.END:ge(ft-1,e)}}function Se(e){e.focus()}function He(e){function n(e){return t.navContainer?e:Mn[e]}var i=z.activeElement;if(p(i,"data-nav")){e=e||B.event;var a=e.keyCode,r=[].indexOf.call(Dn,i),o=Mn.length,s=Mn.indexOf(r);switch(t.navContainer&&(o=ft,s=r),a){case R.LEFT:case R.PAGEUP:s>0&&Se(Dn[n(s-1)]);break;case R.UP:case R.HOME:s>0&&Se(Dn[n(0)]);break;case R.RIGHT:case R.PAGEDOWN:s<o-1&&Se(Dn[n(s+1)]);break;case R.DOWN:case R.END:s<o-1&&Se(Dn[n(o-1)]);break;case R.ENTER:case R.SPACE:Wn=r,ge(r,e)}}}function Le(){he(0,lt.scrollLeft()),Vt=Xt}function ze(e){return e.target||e.srcElement}function Be(e){return e.type.indexOf("touch")>=0}function Re(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function je(e){if(ti=0,Tt=!1,_n=ei=null,!Qt){e=e||B.event;var t;Be(e)?(t=e.changedTouches[0],Zt.emit("touchStart",Ve(e))):(t=e,Re(e),Zt.emit("dragStart",Ve(e))),_n=parseInt(t.clientX),ei=parseInt(t.clientY),Qn=parseFloat(lt.style[qt].replace(Gt,"").replace(Ft,""))}}function qe(e){if(!Qt&&null!==_n){e=e||B.event;var n;if(Be(e)?n=e.changedTouches[0]:(n=e,Re(e)),Jn=parseInt(n.clientX)-_n,Zn=parseInt(n.clientY)-ei,0===ti&&(ti=f(u(Zn,Jn),15)===t.axis),ti){Be(e)?Zt.emit("touchMove",Ve(e)):(ii||(ii=!0),Zt.emit("dragMove",Ve(e))),Tt||(Tt=!0);var i=Qn;if(rt)if(kt)i+=Jn,i+="px";else{var a=F?Jn*Ct*100/(it*Bt):100*Jn/it;i+=a,i+="%"}else i+=Zn,i+="px";F&&ue(0),lt.style[qt]=Gt+i+Ft}}}function Ge(e){if(!Qt&&Tt){e=e||B.event;var t;Be(e)?(t=e.changedTouches[0],Zt.emit("touchEnd",Ve(e))):(t=e,Zt.emit("dragEnd",Ve(e))),Jn=parseInt(t.clientX)-_n,Zn=parseInt(t.clientY)-ei;var n=Boolean(rt?Jn:Zn);if(ti=0,Tt=!1,_n=ei=null,rt){var i=-Jn*Ct/it;i=Jn>0?Math.floor(i):Math.ceil(i),Xt+=i}else{var a=-(Qn+Zn);if(a<=0)Xt=Yt;else if(a>=bt[bt.length-1])Xt=Kt;else{var r=0;do{r++,Xt=Zn<0?r+1:r}while(r<Bt&&a>=bt[r+1])}}if(pe(e,n),ii){ii=!1;var o=ze(e);O(o,{click:function e(t){Re(t),D(o,{click:e})}})}}}function Fe(){st.style.height=bt[Xt+Ct]-bt[Xt]+"px"}function Ue(){Mn=[];for(var e=Xt%ft%Ct;e<ft;)!Wt&&e+Ct>ft&&(e=ft-Ct),Mn.push(e),e+=Ct;(Wt&&Mn.length*Ct<ft||!Wt&&Mn[0]>0)&&Mn.unshift(0)}function Xe(){kn&&!pn&&(Ue(),Mn!==Pn&&([].forEach.call(Dn,function(e,t){Mn.indexOf(t)<0?x(e):T(e)}),Pn=Mn))}function Ve(e){return{container:lt,slideItems:ut,navContainer:An,navItems:Dn,controlsContainer:On,hasControls:vn,prevButton:xn,nextButton:Tn,items:Ct,slideBy:wt,cloneCount:zt,slideCount:ft,slideCountNew:Bt,index:Xt,indexCached:Vt,navCurrentIndex:In,navCurrentIndexCached:Sn,visibleNavIndexes:Mn,visibleNavIndexesCached:Pn,event:e||{}}}t=e({container:z.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=z.querySelector(t[e]))});var Ye=B.console&&"function"==typeof B.console.warn;if(!t.container||!t.container.nodeName)return void(Ye&&console.warn("Can't find container element."));if(t.container.children.length<2)return void(Ye&&console.warn("Slides less than 2."));if(t.responsive){var Ke={},Qe=t.responsive;for(var Je in Qe){var Ze=Qe[Je];Ke[Je]="number"==typeof Ze?{items:Ze}:Ze}t.responsive=Ke,Ke=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var $e="carousel"===t.mode;if(!$e){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var _e="tns-fadeIn",et="tns-fadeOut",tt=!1,nt=t.animateNormal||"tns-normal";K&&Q&&(_e=t.animateIn||_e,et=t.animateOut||et,tt=t.animateDelay||tt)}var it,at,rt="horizontal"===t.axis,ot=z.createElement("div"),st=z.createElement("div"),lt=t.container,ct=lt.parentNode,ut=lt.children,ft=ut.length,dt=ct.clientWidth,vt=t.responsive,ht=[],pt=!1,mt=0,yt=n();if(vt){pt=Object.keys(vt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),pt.forEach(function(e){ht=ht.concat(Object.keys(vt[e]))});var gt=[];ht.forEach(function(e){gt.indexOf(e)<0&&gt.push(e)}),ht=gt,I()}var bt,xt,Tt,Et,Ct=r("items"),wt="page"===r("slideBy")?Ct:r("slideBy"),Nt=t.nested,Ot=r("gutter"),Dt=r("edgePadding"),kt=r("fixedWidth"),At=r("arrowKeys"),Mt=r("speed"),Pt=t.rewind,Wt=!Pt&&t.loop,It=r("autoHeight"),St=s(),Ht=t.lazyload,Lt=[],zt=Wt?2*ft:0,Bt=$e?ft+2*zt:ft+zt,Rt=!(!kt||Wt||Dt),jt=!$e||!Wt,qt=rt?"left":"top",Gt="",Ft="",Ut=r("startIndex"),Xt=Ut?function(e){return e%=ft,e<0&&(e+=ft),e=Math.min(e,Bt-Ct)}(Ut):$e?zt:0,Vt=Xt,Yt=0,Kt=Bt-Ct,Qt=!1,Jt=t.onInit,Zt=new k,$t=lt.id,_t=" tns-slider tns-"+t.mode,en=lt.id||i(),tn=r("disable"),nn=t.freezable,an=!!tn||!!nn&&ft<=Ct,rn="inner"===Nt?" !important":"",on={click:be,keydown:Ie},sn={click:xe,keydown:He},ln={mouseover:Me,mouseout:Pe},cn={visibilitychange:Ae},un={keydown:We},fn={touchstart:je,touchmove:qe,touchend:Ge,touchcancel:Ge},dn={mousedown:je,mousemove:qe,mouseup:Ge,mouseleave:Ge},vn=a("controls"),hn=a("nav"),pn=t.navAsThumbnails,mn=a("autoplay"),yn=a("touch"),gn=a("mouseDrag"),bn="tns-slide-active";if(vn)var xn,Tn,En,Cn,wn=r("controls"),Nn=r("controlsText"),On=t.controlsContainer;if(hn)var Dn,kn=r("nav"),An=t.navContainer,Mn=[],Pn=Mn,Wn=-1,In=Xt%ft,Sn=In,Hn="tns-nav-active";if(mn)var Ln,zn,Bn,Rn,jn,qn=r("autoplay"),Gn=r("autoplayTimeout"),Fn="forward"===t.autoplayDirection?1:-1,Un=r("autoplayText"),Xn=r("autoplayHoverPause"),Vn=t.autoplayButton,Yn=r("autoplayResetOnVisibility"),Kn=["<span class='tns-visually-hidden'>"," animation</span>"];if(yn)var Qn,Jn,Zn,$n=r("touch"),_n=null,ei=null,ti=0;if(gn)var ni=r("mouseDrag"),ii=!1;an&&(wn=kn=$n=ni=At=qn=Xn=Yn=!1),F&&(qt=F,Gt="translate",Gt+=rt?"X(":"Y(",Ft=")"),function(){ot.appendChild(st),ct.insertBefore(ot,lt),st.appendChild(lt),it=st.clientWidth;var e="tns-outer",n="tns-inner",i=a("gutter");if($e?rt&&(a("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),ot.className=e,st.className=n,st.id=en+"-iw",It&&(st.className+=" tns-ah",st.style[U]=Mt/1e3+"s"),""===lt.id&&(lt.id=en),_t+=q?" tns-subpixel":" tns-no-subpixel",_t+=j?" tns-calc":" tns-no-calc",$e&&(_t+=" tns-"+t.axis),lt.className+=_t,$e&&K){var s={};s[K]=ye,O(lt,s)}e=n=null;for(var u=0;u<ft;u++){var f=ut[u];f.id||(f.id=en+"-item"+u),v(f,"tns-item"),!$e&&nt&&v(f,nt),g(f,{"aria-hidden":"true",tabindex:"-1"})}if(Wt||Dt){for(var d=z.createDocumentFragment(),p=z.createDocumentFragment(),m=zt;m--;){var T=m%ft,E=ut[T].cloneNode(!0);if(b(E,"id"),p.insertBefore(E,p.firstChild),$e){var C=ut[ft-1-T].cloneNode(!0);b(C,"id"),d.appendChild(C)}}lt.insertBefore(d,lt.firstChild),lt.appendChild(p),ut=lt.children}for(var D=Xt,k=Xt+Math.min(ft,Ct);D<k;D++){var f=ut[D];g(f,{"aria-hidden":"false"}),b(f,["tabindex"]),v(f,bn),$e||(f.style.left=100*(D-Xt)/Ct+"%",v(f,_e),h(f,nt))}if($e&&rt&&(q?(l(St,"#"+en+" > .tns-item","font-size:"+B.getComputedStyle(ut[0]).fontSize+";",c(St)),l(St,"#"+en,"font-size:0;",c(St))):[].forEach.call(ut,function(e,t){e.style.marginLeft=o(t)})),G){var A=y(t.edgePadding,t.gutter,t.fixedWidth);l(St,"#"+en+"-iw",A,c(St)),$e&&rt&&(A="width:"+w(t.fixedWidth,t.gutter,t.items),l(St,"#"+en,A,c(St))),(rt||t.gutter)&&(A=N(t.fixedWidth,t.gutter,t.items)+M(t.gutter),l(St,"#"+en+" > .tns-item",A,c(St)))}else if(st.style.cssText=y(Dt,Ot,kt),$e&&rt&&(lt.style.width=w(kt,Ot,Ct)),rt||Ot){var A=N(kt,Ot,Ct)+M(Ot);l(St,"#"+en+" > .tns-item",A,c(St))}if(rt||tn||(te(),Fe()),vt&&G&&pt.forEach(function(e){var t=vt[e],n="",i="",o="",s="",l=r("items",e),c=r("fixedWidth",e),u=r("edgePadding",e),f=r("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+en+"-iw{"+y(u,f,c)+"}"),$e&&rt&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(o="#"+en+"{width:"+w(c,f,l)+"}"),("fixedWidth"in t||a("fixedWidth")&&"gutter"in t||!$e&&"items"in t)&&(s+=N(c,f,l)),"gutter"in t&&(s+=M(f)),s.length>0&&(s="#"+en+" > .tns-item{"+s+"}"),n=i+o+s,n.length>0&&St.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",St.cssRules.length)}),$e&&!tn&&de(),navigator.msMaxTouchPoints&&(v(ot,"ms-touch"),O(ot,{scroll:Le}),ne()),hn){var I=$e?zt:0;if(An)g(An,{"aria-label":"Carousel Pagination"}),Dn=An.children,[].forEach.call(Dn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":ut[I+t].id})});else{for(var R="",F=pn?"":" hidden",D=0;D<ft;D++)R+='<button data-nav="'+D+'" tabindex="-1" aria-selected="false" aria-controls="'+ut[I+D].id+F+'" type="button"></button>';R='<div class="tns-nav" aria-label="Carousel Pagination">'+R+"</div>",ot.insertAdjacentHTML("afterbegin",R),An=ot.querySelector(".tns-nav"),Dn=An.children}if(Xe(),U){var X=U.substring(0,U.length-18).toLowerCase(),A="transition: all "+Mt/1e3+"s";X&&(A="-"+X+"-"+A),l(St,"[aria-controls^="+en+"-item]",A,c(St))}g(Dn[In],{tabindex:"0","aria-selected":"true"}),v(Dn[In],Hn),O(An,sn),kn||x(An)}if(mn){var V=qn?"stop":"start";Vn?g(Vn,{"data-action":V}):t.autoplayButtonOutput&&(st.insertAdjacentHTML("beforebegin",'<button data-action="'+V+'" type="button">'+Kn[0]+V+Kn[1]+Un[0]+"</button>"),Vn=ot.querySelector("[data-action]")),Vn&&O(Vn,{click:ke}),qn?(we(),Xn&&O(lt,ln),Yn&&O(lt,cn)):Vn&&x(Vn)}vn&&(On?(xn=On.children[0],Tn=On.children[1],g(On,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(xn,{"data-controls":"prev"}),g(Tn,{"data-controls":"next"}),g(On.children,{"aria-controls":en,tabindex:"-1"})):(ot.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+en+'" type="button">'+Nn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+en+'" type="button">'+Nn[1]+"</button></div>"),On=ot.querySelector(".tns-controls"),xn=On.children[0],Tn=On.children[1]),En=oe(xn),Cn=oe(Tn),ce(),O(On,on),wn||x(On)),$n&&O(lt,fn),ni&&O(lt,dn),At&&O(z,un),"inner"===Nt?Zt.on("outerResized",function(){W(),Zt.emit("innerLoaded",Ve())}):(O(B,{resize:P}),"outer"===Nt&&Zt.on("innerLoaded",Z)),J(),Z(),S(),H(),Zt.on("indexChanged",_),"function"==typeof Jt&&Jt(Ve()),"inner"===Nt&&Zt.emit("innerLoaded",Ve()),tn&&L(!0),at=!0}();var ai=function(){return Wt?function(){var e=Yt,t=Kt;if($e)if(e+=wt,t-=wt,Dt)e+=1,t-=1;else if(kt){var n=Ot?Ot:0;dt%(kt+n)>n&&(t-=1)}if(Xt>t)for(;Xt>=e+ft;)Xt-=ft;else if(Xt<e)for(;Xt<=t-ft;)Xt+=ft}:function(){Xt=Math.max(Yt,Math.min(Kt,Xt))}}(),ri=function(){return $e?function(e,t){t||(t=fe()),Rt&&Xt===Kt&&(t=-((kt+Ot)*Bt-it)+"px"),U||!e?(de(t),e&&E(lt)||ye()):A(lt,qt,Gt,Ft,t,Mt,ye),rt||Fe()}:function(e){Lt=[];var t={};t[K]=t[Q]=ye,D(ut[Vt],t),O(ut[Xt],t),ve(Vt,_e,et,!0),ve(Xt,nt,_e),K&&Q&&e||ye()}}();return{getInfo:Ve,events:Zt,goTo:ge,play:Oe,pause:De,isOn:at,destroy:function(){if(D(B,{resize:P}),D(z,un),St.disabled=!0,Wt)for(var e=zt;e--;)$e&&ut[0].remove(),ut[ut.length-1].remove();var n=["tns-item",bn];$e||(n=n.concat("tns-normal",_e));for(var i=ft;i--;){var a=ut[i];a.id.indexOf(en+"-item")>=0&&(a.id=""),n.forEach(function(e){h(a,e)})}if(b(ut,["style","aria-hidden","tabindex"]),ut=en=ft=Bt=zt=null,wn&&(D(On,on),t.controlsContainer&&(b(On,["aria-label","tabindex"]),b(On.children,["aria-controls","aria-disabled","tabindex"])),On=xn=Tn=null),kn&&(D(An,sn),t.navContainer&&(b(An,["aria-label"]),b(Dn,["aria-selected","aria-controls","tabindex"])),An=Dn=null),qn&&(clearInterval(Ln),Vn&&D(Vn,{click:ke}),D(lt,ln),D(lt,cn),t.autoplayButton&&b(Vn,["data-action"])),lt.id=$t||"",lt.className=lt.className.replace(_t,""),lt.style="",$e&&K){var r={};r[K]=ye,D(lt,r)}D(lt,fn),D(lt,dn),ct.insertBefore(lt,ot),ot.remove(),ot=st=lt=null,at=!1,this.destroy=null}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
