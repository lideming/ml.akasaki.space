/*! For license information please see 7832.17f28941.js.LICENSE.txt */
"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[7832],{86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},33084:function(e,t,n){n.d(t,{Z:function(){return l},I:function(){return s}});var r=n(67294);const o=/{\w+}/g,u="{}";function i(e,t){const n=[],i=e.replace(o,(e=>{const o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){const e=r.isValidElement(i)?i:String(i);return n.push(e),u}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?i.split(u).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(u).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}var c=n(57529);function a({id:e,message:t}){var n,r;if(void 0===e&&void 0===t)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(r=null!==(n=c[null!=e?e:t])&&void 0!==n?n:t)&&void 0!==r?r:e}function s({message:e,id:t},n){return i(a({message:e,id:t}),n)}function l({children:e,id:t,values:n}){if(e&&"string"!=typeof e)throw console.warn("Illegal <Translate> children",e),new Error("The Docusaurus <Translate> component only accept simple string values");return i(a({message:e,id:t}),n)}},24644:function(e,t,n){n.d(t,{m:function(){return r}});const r="default"},26224:function(e,t,n){n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(73727)},92734:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return c}});var r=n(11368),o=n(24644);function u(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){const t=u()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function c(e,t=o.m){const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},54939:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o=n(92795);function u(){return(0,r.useContext)(o._)}},90634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(26224);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1}))),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return u};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=(0,t.getLatestVersion)(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=(0,t.getActiveVersion)(e,n),u=null==o?void 0:o.docs.find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:u,alternateDocVersions:u?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(u.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},52922:function(e,t,n){t.Jo=t.Iw=t.zu=t.yW=t.gB=t.gA=t.zh=t._r=void 0;const r=n(70655),o=n(26224),u=(0,r.__importStar)(n(92734)),i=n(90634),c={};t._r=()=>{var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:c};t.zh=e=>(0,u.usePluginData)("docusaurus-plugin-content-docs",e);t.gA=(e={})=>{const n=(0,t._r)(),{pathname:r}=(0,o.useLocation)();return(0,i.getActivePlugin)(n,r,e)};t.gB=e=>(0,t.zh)(e).versions;t.yW=e=>{const n=(0,t.zh)(e);return(0,i.getLatestVersion)(n)};t.zu=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveVersion)(n,r)};t.Iw=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveDocContext)(n,r)};t.Jo=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getDocVersionSuggestions)(n,r)}},33204:function(e,t,n){n.d(t,{Iw:function(){return r.Iw},gA:function(){return r.gA},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=n(52922)},47832:function(e,t,n){n.d(t,{pl:function(){return ze},zF:function(){return Z},HX:function(){return v},PO:function(){return ie},L5:function(){return De},Cv:function(){return he},Cn:function(){return ve},OC:function(){return ct},kM:function(){return Te},WA:function(){return a},os:function(){return g},lx:function(){return Ie},Fx:function(){return dt},Mg:function(){return y},_f:function(){return s},bc:function(){return p},l5:function(){return f},nT:function(){return Be},uR:function(){return M},J:function(){return Ae},Rb:function(){return Ue},be:function(){return Fe},SL:function(){return x},g8:function(){return me},D9:function(){return S},RF:function(){return lt},o5:function(){return ft},DA:function(){return ot},Si:function(){return Je},LU:function(){return o},pe:function(){return b}});var r=n(11368);function o(){return(0,r.Z)().siteConfig.themeConfig}function u(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,i||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),i=!0),null}var t}let i=!1;const c={get:()=>null,set:()=>{},del:()=>{}};const a=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=u(null==t?void 0:t.persistence);return null===n?c:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function s(e="localStorage"){const t=u(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var l=n(76775);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:u}=(0,l.TH)(),i=o===n?e:e.replace(`/${o}/`,"/"),c=u.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(e)}${c}`}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const v="default";function g(e,t){return`docs-${e}-${t}`}var m=n(33204);const h=!!m._r,y=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},b=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var w=n(67294);const P=["zero","one","two","few","many","other"];function O(e){return P.filter((t=>e.includes(t)))}O(["one","other"]);const E="undefined"!=typeof window?w.useLayoutEffect:w.useEffect;function _(e){const t=(0,w.useRef)(e);return E((()=>{t.current=e}),[e]),(0,w.useCallback)(((...e)=>t.current(...e)),[])}function S(e){const t=(0,w.useRef)();return E((()=>{t.current=e})),t.current}function x(e){const t=(0,l.TH)(),n=S(t),r=_(e);(0,w.useEffect)((()=>{r({location:t,previousLocation:n})}),[r,t,n])}var j=n(84487),L=Object.defineProperty,C=Object.defineProperties,D=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&I(e,n,t[n]);if(R)for(var n of R(t))A.call(t,n)&&I(e,n,t[n]);return e},V=(e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&R)for(var r of R(e))t.indexOf(r)<0&&A.call(e,r)&&(n[r]=e[r]);return n};function M({initialState:e}){const[t,n]=(0,w.useState)(null!=e&&e),r=(0,w.useCallback)((()=>{n((e=>!e))}),[]);return{collapsed:t,setCollapsed:n,toggleCollapsed:r}}const $={display:"none",overflow:"hidden",height:"0px"},H={display:"block",overflow:"visible",height:"auto"};function N(e,t){const n=t?$:H;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function z({collapsibleRef:e,collapsed:t,animation:n}){const r=(0,w.useRef)(!1);(0,w.useEffect)((()=>{const o=e.current;function u(){var e,t;const r=o.scrollHeight,u=null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(r);return{transition:`height ${u}ms ${null!==(t=null==n?void 0:n.easing)&&void 0!==t?t:"ease-in-out"}`,height:`${r}px`}}function i(){const e=u();o.style.transition=e.transition,o.style.height=e.height}if(!r.current)return N(o,t),void(r.current=!0);return o.style.willChange="height",function(){const e=requestAnimationFrame((()=>{t?(i(),requestAnimationFrame((()=>{o.style.height=$.height,o.style.overflow=$.overflow}))):(o.style.display="block",requestAnimationFrame((()=>{i()})))}));return()=>cancelAnimationFrame(e)}()}),[e,t,n])}function B(e){if(!j.Z.canUseDOM)return e?$:H}function F({as:e="div",collapsed:t,children:n,animation:r,onCollapseTransitionEnd:o,className:u,disableSSRStyle:i}){const c=(0,w.useRef)(null);return z({collapsibleRef:c,collapsed:t,animation:r}),w.createElement(e,{ref:c,style:i?void 0:B(t),onTransitionEnd:e=>{"height"===e.propertyName&&(N(c.current,t),null==o||o(t))},className:u},n)}function U(e){var t=e,{collapsed:n}=t,r=V(t,["collapsed"]);const[o,u]=(0,w.useState)(!n);(0,w.useLayoutEffect)((()=>{n||u(!0)}),[n]);const[i,c]=(0,w.useState)(n);return(0,w.useLayoutEffect)((()=>{o&&c(n)}),[o,n]),o?w.createElement(F,(a=T({},r),C(a,D({collapsed:i})))):null;var a}function Z(e){var t=e,{lazy:n}=t,r=V(t,["lazy"]);const o=n?U:F;return w.createElement(o,T({},r))}var W=n(54939),q=n(86010),J="details_Q743",X="isBrowser_rWTL",G="collapsibleContent_K5uX",Y=Object.defineProperty,K=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function oe(e){return!!e&&("SUMMARY"===e.tagName||oe(e.parentElement))}function ue(e,t){return!!e&&(e===t||ue(e.parentElement,t))}var ie=e=>{var t=e,{summary:n,children:r}=t,o=((e,t)=>{var n={};for(var r in e)te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ee)for(var r of ee(e))t.indexOf(r)<0&&ne.call(e,r)&&(n[r]=e[r]);return n})(t,["summary","children"]);const u=(0,W.Z)(),i=(0,w.useRef)(null),{collapsed:c,setCollapsed:a}=M({initialState:!o.open}),[s,l]=(0,w.useState)(o.open);return w.createElement("details",(f=((e,t)=>{for(var n in t||(t={}))te.call(t,n)&&re(e,n,t[n]);if(ee)for(var n of ee(t))ne.call(t,n)&&re(e,n,t[n]);return e})({},o),d={ref:i,open:s,"data-collapsed":c,className:(0,q.Z)(J,{[X]:u},o.className),onMouseDown:e=>{oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;oe(t)&&ue(t,i.current)&&(e.preventDefault(),c?(a(!1),l(!0)):a(!0))}},K(f,Q(d))),n,w.createElement(Z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{a(e),l(!e)}},w.createElement("div",{className:G},r)));var f,d},ce=Object.defineProperty,ae=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,fe=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))se.call(t,n)&&fe(e,n,t[n]);if(ae)for(var n of ae(t))le.call(t,n)&&fe(e,n,t[n]);return e};const pe=(0,w.createContext)(null);function ve({children:e}){return w.createElement(pe.Provider,{value:(0,w.useState)(null)},e)}function ge(){const e=(0,w.useContext)(pe);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function me(){const[e]=ge();if(e){const t=e.component;return function(n){return w.createElement(t,de(de({},e.props),n))}}return()=>{}}function he({component:e,props:t}){const[,n]=ge(),r=(o=t,(0,w.useMemo)((()=>o),[...Object.keys(o),...Object.values(o)]));var o;return(0,w.useEffect)((()=>{n({component:e,props:r})}),[n,e,r]),(0,w.useEffect)((()=>()=>n(null)),[n]),null}const ye=e=>`docs-preferred-version-${e}`;var be={save:(e,t,n)=>{a(ye(e),{persistence:t}).set(n)},read:(e,t)=>a(ye(e),{persistence:t}).get(),clear:(e,t)=>{a(ye(e),{persistence:t}).del()}},we=Object.defineProperty,Pe=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,xe=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function je({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=be.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(be.clear(e,t),{preferredVersionName:null})}(e)})),r}function Le(){const e=(0,m._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,u]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{u(je({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){be.save(e,t,n),u((t=>{return r=((e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&xe(e,n,t[n]);if(Ee)for(var n of Ee(t))Se.call(t,n)&&xe(e,n,t[n]);return e})({},t),Pe(r,Oe({[e]:{preferredVersionName:n}}));var r}))}})),[t])]}const Ce=(0,w.createContext)(null);function De({children:e}){return h?w.createElement(Re,null,e):w.createElement(w.Fragment,null,e)}function Re({children:e}){const t=Le();return w.createElement(Ce.Provider,{value:t},e)}var ke=n(24644);function Ae(e=ke.m){const t=(0,m.zh)(e),[n,r]=function(){const e=(0,w.useContext)(Ce);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r,e])}}function Ie(e,t=((e,t)=>e===t)){return e.filter(((n,r)=>e.findIndex((e=>t(e,n)))!==r))}const Te={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}},Ve=a("docusaurus.announcement.dismiss"),Me=a("docusaurus.announcement.id"),$e=()=>"true"===Ve.get(),He=e=>Ve.set(String(e)),Ne=(0,w.createContext)(null),ze=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),t=(0,W.Z)(),[n,r]=(0,w.useState)((()=>!!t&&$e()));(0,w.useEffect)((()=>{r($e())}),[]);const u=(0,w.useCallback)((()=>{He(!0),r(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=Me.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;Me.set(t),o&&He(!1),!o&&$e()||r(!1)}),[e]),(0,w.useMemo)((()=>({isActive:!!e&&!n,close:u})),[e,n,u])})();return w.createElement(Ne.Provider,{value:t},e)},Be=()=>{const e=(0,w.useContext)(Ne);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function Fe(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,l.TH)();return t.replace(e,"/")}n(33084);function Ue(e){!function(e){const{block:t}=(0,l.k6)(),n=(0,w.useRef)(e);(0,w.useEffect)((()=>{n.current=e}),[e]),(0,w.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}function Ze(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Ze(e.parentNode):t}function We(e,{anchorTopOffset:t}){var n;const r=e.find((e=>Ze(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Ze(r))?r:null!==(n=e[e.indexOf(r)-1])&&void 0!==n?n:null}return e[e.length-1]}function qe(){const e=(0,w.useRef)(0),{navbar:{hideOnScroll:t}}=o();return(0,w.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var Je=function(e){const t=(0,w.useRef)(void 0),n=qe();(0,w.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),a=We(c,{anchorTopOffset:n.current}),s=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},Xe=Object.defineProperty,Ge=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,Ke=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,tt=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nt=(e,t)=>{for(var n in t||(t={}))Qe.call(t,n)&&tt(e,n,t[n]);if(Ke)for(var n of Ke(t))et.call(t,n)&&tt(e,n,t[n]);return e};function rt({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=rt({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[(o=nt({},e),u={children:r},Ge(o,Ye(u)))]:r;var o,u}))}function ot({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,w.useMemo)((()=>rt({toc:e,minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}function ut(){const e=(0,w.useRef)(!0);return(0,w.useMemo)((()=>({scrollEventsEnabledRef:e,enableScrollEvents:()=>{e.current=!0},disableScrollEvents:()=>{e.current=!1}})),[])}const it=(0,w.createContext)(void 0);function ct({children:e}){return w.createElement(it.Provider,{value:ut()},e)}function at(){const e=(0,w.useContext)(it);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}const st=()=>j.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;function lt(e,t=[]){const{scrollEventsEnabledRef:n}=at(),r=(0,w.useRef)(st()),o=_(e);(0,w.useEffect)((()=>{const e=()=>{if(!n.current)return;const e=st();o&&o(e,r.current),r.current=e},t={passive:!0};return e(),window.addEventListener("scroll",e,t),()=>window.removeEventListener("scroll",e,t)}),[o,n,...t])}function ft(){const e=at(),t=function(){const e=(0,w.useRef)({elem:null,top:0}),t=(0,w.useCallback)((t=>{e.current={elem:t,top:t.getBoundingClientRect().top}}),[]),n=(0,w.useCallback)((()=>{const{current:{elem:t,top:n}}=e;if(!t)return{restored:!1};const r=t.getBoundingClientRect().top-n;return r&&window.scrollBy({left:0,top:r}),e.current={elem:null,top:0},{restored:0!==r}}),[]);return(0,w.useMemo)((()=>({save:t,restore:n})),[n,t])}(),n=(0,w.useRef)(void 0),r=(0,w.useCallback)((r=>{t.save(r),e.disableScrollEvents(),n.current=()=>{const{restored:r}=t.restore();if(n.current=void 0,r){const t=()=>{e.enableScrollEvents(),window.removeEventListener("scroll",t)};window.addEventListener("scroll",t)}else e.enableScrollEvents()}}),[e,t]);return(0,w.useLayoutEffect)((()=>{var e;null===(e=n.current)||void 0===e||e.call(n)})),{blockElementScrollPositionUntilNextRender:r}}function dt(e,t){return void 0!==e&&void 0!==t&&new RegExp(e,"gi").test(t)}},70655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return c},__param:function(){return a},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return v},__read:function(){return g},__spread:function(){return m},__spreadArrays:function(){return h},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return O},__makeTemplateObject:function(){return E},__importStar:function(){return S},__importDefault:function(){return x},__classPrivateFieldGet:function(){return j},__classPrivateFieldSet:function(){return L}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i}function a(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{a(r.next(e))}catch(t){u(t)}}function c(e){try{a(r.throw(e))}catch(t){u(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(c){u=[6,c],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){u.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(a,s):l(u[0][2],n)}catch(r){l(u[0][3],r)}var n}function a(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),u.shift(),u.length&&c(u[0][0],u[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var _=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return _(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function j(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function L(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);