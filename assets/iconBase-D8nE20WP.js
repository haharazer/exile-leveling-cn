const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-DwV7FR4C.js","assets/rolldown-runtime-CNC7AqOf.js"])))=>i.map(i=>d[i]);
import{a as e,r as t,t as n}from"./rolldown-runtime-CNC7AqOf.js";var r=n(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()})),i=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ee={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ee,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),a=n(((e,t)=>{t.exports=i()})),o=e(a(),1),s=t({INTERNAL_addPendingPromiseToDependency:()=>h,INTERNAL_buildStoreRev3:()=>ae,INTERNAL_getBuildingBlocksRev3:()=>ie,INTERNAL_getMountedOrPendingDependents:()=>g,INTERNAL_hasInitialValue:()=>c,INTERNAL_initializeStoreHooksRev3:()=>y,INTERNAL_isActuallyWritableAtom:()=>l,INTERNAL_isAtomStateInitialized:()=>d,INTERNAL_isPromiseLike:()=>p,INTERNAL_returnAtomValue:()=>f,INTERNAL_shouldThrowSynchronously:()=>m});function c(e){return`init`in e}function l(e){return typeof e.write==`function`}function u(e){return!!e.onMount}function d(e){return`v`in e||`e`in e}function f(e){if(`e`in e)throw e.e;return e.v}function p(e){return typeof e?.then==`function`}function m(e){if(!(e instanceof Error))return!1;let t=e.name,n=e.message.toLowerCase();return(t===`RangeError`||t===`InternalError`)&&(n.includes(`call stack`)||n.includes(`too much recursion`)||n.includes(`stack overflow`))}function h(e,t,n){if(!n.p.has(e)){n.p.add(e);let r=()=>n.p.delete(e);t.then(r,r)}}function g(e,t,n){let r=n.get(e)?.t,i=t.p;if(!r?.size)return i;if(!i.size)return r;let a=new Set(r);for(let e of i)a.add(e);return a}var _=()=>{let e=new Set,t=()=>e.forEach(e=>e());return t.add=t=>(e.add(t),()=>e.delete(t)),t},v=()=>{let e={},t=new WeakMap,n=n=>{var r,i;(r=t.get(e))==null||r.forEach(e=>e(n)),(i=t.get(n))==null||i.forEach(e=>e())};return n.add=(n,r)=>{let i=n||e,a=t.get(i);return a||(a=new Set,t.set(i,a)),a.add(r),()=>{a.delete(r),a.size||t.delete(i)}},n};function y(e){return e.i||=v(),e.r||=v(),e.c||=v(),e.m||=v(),e.u||=v(),e.f||=_(),e}function b(e){return!!e.INTERNAL_onInit}var x=(e,t,n,...r)=>n.read(...r),S=(e,t,n,...r)=>n.write(...r),C=(e,t,n)=>n.INTERNAL_onInit(t),w=(e,t,n,r)=>n.onMount?.call(n,r),T=(e,t,n)=>{var r;let i=e[0],a=i.get(n);if(!a){let o=e[6],s=e[9];a={d:new Map,p:new Set,n:0},i.set(n,a),(r=o.i)==null||r.call(o,n),b(n)&&s(e,t,n)}return a},E=(e,t)=>{let n=e[1],r=e[3],i=e[4],a=e[5],o=e[6],s=e[13];if(!o.f&&!r.size&&!i.size&&!a.size)return;let c=[],l=e=>{try{e()}catch(e){c.push(e)}};do{o.f&&l(o.f);let c=new Set;for(let e of r){let t=n.get(e)?.l;if(t)for(let e of t)c.add(e)}r.clear();for(let e of a)c.add(e);a.clear();for(let e of i)c.add(e);i.clear();for(let e of c)l(e);r.size&&s(e,t)}while(r.size||a.size||i.size);if(c.length)throw AggregateError(c)},D=(e,t)=>{let n=e[1],r=e[2],i=e[3],a=e[11],o=e[14],s=e[17];if(!i.size)return;let c=[],l=[],u=new WeakSet,d=new WeakSet,f=[],p=[];for(let n of i)f.push(n),p.push(a(e,t,n));for(;f.length;){let i=f.length-1,o=f[i],s=p[i];if(d.has(o)){f.pop(),p.pop();continue}if(u.has(o)){r.get(o)===s.n&&(c.push(o),l.push(s)),d.add(o),f.pop(),p.pop();continue}u.add(o);for(let r of g(o,s,n))u.has(r)||(f.push(r),p.push(a(e,t,r)))}for(let n=c.length-1;n>=0;--n){let a=c[n],u=l[n],d=!1;for(let e of u.d.keys())if(e!==a&&i.has(e)){d=!0;break}d&&(r.set(a,u.n),o(e,t,a),s(e,t,a)),r.delete(a)}},O=(e,t,n)=>{var r,i;let a=e[1],o=e[2],s=e[3],u=e[6],g=e[7],_=e[11],v=e[12],y=e[13],b=e[14],x=e[16],S=e[17],C=e[20],w=e[26],T=e[28],E=_(e,t,n),D=T[0];if(d(E)){if(a.has(n)&&o.get(n)!==E.n||E.m===D)return E.m=D,E;let r=!1;for(let[n,i]of E.d)if(b(e,t,n).n!==i){r=!0;break}if(!r)return E.m=D,E}let O=!0,k=new Set(E.d.keys()),A=()=>{for(let e of k)E.d.delete(e)},j=()=>{if(a.has(n)){let r=!s.size;S(e,t,n),r&&(y(e,t),v(e,t))}},M=r=>{var i;if(r===n){let n=_(e,t,r);if(!d(n))if(c(r))C(e,t,r,r.init);else throw Error(`no atom init`);return f(n)}let o=b(e,t,r);try{return f(o)}finally{k.delete(r),E.d.set(r,o.n),p(E.v)&&h(n,E.v,o),a.has(n)&&((i=a.get(r))==null||i.t.add(n)),O||j()}},N,P,F={get signal(){return N||=new AbortController,N.signal},get setSelf(){return!P&&l(n)&&(P=(...r)=>{if(!O)try{return x(e,t,n,r)}finally{y(e,t),v(e,t)}}),P}},I=E.n,ee=o.get(n)===I;try{let i=g(e,t,n,M,F);if(C(e,t,n,i),p(i)){w(e,t,i,()=>N?.abort());let n=()=>{A(),j()};i.then(n,n)}else A();return(r=u.r)==null||r.call(u,n),E.m=D,E}catch(e){if(m(e))throw e;return delete E.v,E.e=e,++E.n,E.m=D,E}finally{O=!1,E.n!==I&&ee&&(o.set(n,E.n),s.add(n),(i=u.c)==null||i.call(u,n))}},k=(e,t,n)=>{let r=e[1],i=e[2],a=e[11],o=[n];for(;o.length;){let n=o.pop(),s=a(e,t,n);for(let c of g(n,s,r)){let n=a(e,t,c);i.get(c)!==n.n&&(i.set(c,n.n),o.push(c))}}},A=(e,t,n,r)=>{let i=e[3],a=e[6],o=e[8],s=e[11],l=e[12],u=e[13],d=e[14],p=e[15],m=e[16],h=e[17],g=e[20],_=e[28],v=!0,y=n=>f(d(e,t,n)),b=(r,...o)=>{var d;let f=s(e,t,r);try{if(r===n){if(!c(r))throw Error(`atom not writable`);let n=f.n,s=o[0];g(e,t,r,s),h(e,t,r),n!==f.n&&(++_[0],i.add(r),p(e,t,r),(d=a.c)==null||d.call(a,r));return}else return m(e,t,r,o)}finally{v||(u(e,t),l(e,t))}};try{return o(e,t,n,y,b,...r)}finally{v=!1}},j=(e,t,n)=>{var r;let i=e[1],a=e[3],o=e[6],s=e[11],c=e[15],l=e[18],u=e[19],d=s(e,t,n),f=i.get(n);if(f&&d.d.size>0){for(let[i,u]of d.d)if(!f.d.has(i)){let d=s(e,t,i);l(e,t,i).t.add(n),f.d.add(i),u!==d.n&&(a.add(i),c(e,t,i),(r=o.c)==null||r.call(o,i))}for(let r of f.d)d.d.has(r)||(f.d.delete(r),u(e,t,r)?.t.delete(n))}},M=(e,t,n)=>{var r;let i=e[1],a=e[4],o=e[6],s=e[10],c=e[11],d=e[12],f=e[13],p=e[14],m=e[16],h=e[18],g=c(e,t,n),_=i.get(n);if(!_){p(e,t,n);for(let r of g.d.keys())h(e,t,r).t.add(n);_={l:new Set,d:new Set(g.d.keys()),t:new Set},i.set(n,_),l(n)&&u(n)&&a.add(()=>{let r=!0,i=(...i)=>{try{return m(e,t,n,i)}finally{r||(f(e,t),d(e,t))}};try{let a=s(e,t,n,i);a&&(_.u=()=>{r=!0;try{a()}finally{r=!1}})}finally{r=!1}}),(r=o.m)==null||r.call(o,n)}return _},N=(e,t,n)=>{var r;let i=e[1],a=e[5],o=e[6],s=e[11],c=e[19],l=s(e,t,n),u=i.get(n);if(!u||u.l.size)return u;let d=!1;for(let e of u.t)if(i.get(e)?.d.has(n)){d=!0;break}if(!d){u.u&&a.add(u.u),u=void 0,i.delete(n);for(let r of l.d.keys())c(e,t,r)?.t.delete(n);(r=o.u)==null||r.call(o,n);return}return u},P=(e,t,n,r)=>{let i=e[11],a=e[27],o=i(e,t,n),s=`v`in o,c=o.v;if(p(r))for(let a of o.d.keys())h(n,r,i(e,t,a));o.v=r,delete o.e,(!s||!Object.is(c,o.v))&&(++o.n,p(c)&&a(e,t,c))},F=(e,t,n)=>{let r=e[14];return f(r(e,t,n))},I=(e,t,n,...r)=>{let i=e[3],a=e[12],o=e[13],s=e[16],c=i.size;try{return s(e,t,n,r)}finally{i.size!==c&&(o(e,t),a(e,t))}},ee=(e,t,n,r)=>{let i=e[12],a=e[13],o=e[18],s=e[19],c=o(e,t,n).l;return c.add(r),a(e,t),i(e,t),()=>{c.delete(r),s(e,t,n),a(e,t),i(e,t)}},te=(e,t,n,r)=>{let i=e[25],a=i.get(n);if(!a){a=new Set,i.set(n,a);let e=()=>i.delete(n);n.then(e,e)}a.add(r)},ne=(e,t,n)=>{e[25].get(n)?.forEach(e=>e())},re=new WeakMap;function ie(e){let t=re.get(e),n=t[24];return n?n(t,e):t}function ae(...e){let t={get(e){return r(n,t,e)},set(e,...r){return i(n,t,e,...r)},sub(e,r){return a(n,t,e,r)}},n=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,void 0,new WeakMap,te,ne,[0]].map((t,n)=>e[n]||t);re.set(t,Object.freeze(n));let r=n[21],i=n[22],a=n[23];return t}var oe=0;function L(e,t){let n=`atom${++oe}`,r={toString(){return n}};return typeof e==`function`?r.read=e:(r.init=e,r.read=se,r.write=ce),t&&(r.write=t),r}function se(e){return e(this)}function ce(e,t,n){return t(this,typeof n==`function`?n(e(this)):n)}var le;function ue(){return le?le():ae()}var de;function fe(){return de||=ue(),de}var pe=(0,o.createContext)(void 0);function me(e){let t=(0,o.useContext)(pe);return e?.store||t||fe()}var he=e=>typeof e?.then==`function`,ge=e=>{e.status||(e.status=`pending`,e.then(t=>{e.status=`fulfilled`,e.value=t},t=>{e.status=`rejected`,e.reason=t}))},_e=o.use||(e=>{if(e.status===`pending`)throw e;if(e.status===`fulfilled`)return e.value;throw e.status===`rejected`?e.reason:(ge(e),e)}),ve=new WeakMap,ye=(e,t,n)=>{let r=ie(e),i=r[26],a=ve.get(t);return a||(a=new Promise((o,s)=>{let c=t,l=e=>t=>{c===e&&o(t)},u=e=>t=>{c===e&&s(t)},d=()=>{try{let t=n();he(t)?(ve.set(t,a),c=t,t.then(l(t),u(t)),i(r,e,t,d)):o(t)}catch(e){s(e)}};t.then(l(t),u(t)),i(r,e,t,d)}),ve.set(t,a)),a};function be(e,t){let{delay:n,unstable_promiseStatus:r=!o.use}=t||{},i=me(t),[[a,s,c],l]=(0,o.useReducer)(t=>{let n=i.get(e);return Object.is(t[0],n)&&t[1]===i&&t[2]===e?t:[n,i,e]},void 0,()=>[i.get(e),i,e]),u=a;if((s!==i||c!==e)&&(l(),u=i.get(e)),(0,o.useEffect)(()=>{let t=i.sub(e,()=>{if(r)try{let t=i.get(e);he(t)&&ge(ye(i,t,()=>i.get(e)))}catch{}if(typeof n==`number`){console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`),setTimeout(l,n);return}l()});return l(),t},[i,e,n,r]),(0,o.useDebugValue)(u),he(u)){let t=ye(i,u,()=>i.get(e));return r&&ge(t),_e(t)}return u}function xe(e,t){let n=me(t);return(0,o.useCallback)((...t)=>n.set(e,...t),[n,e])}function Se(e,t){return[be(e,t),xe(e,t)]}function Ce(e,t){let n=null,r=new Map,i=new Set;function a(i){let s;if(t===void 0)s=r.get(i);else for(let[e,n]of r)if(t(e,i)){s=n;break}if(s!==void 0)if(n?.(s[1],i))a.remove(i);else return s[0];let c=e(i);return r.set(i,[c,Date.now()]),o(`CREATE`,i,c),c}function o(e,t,n){for(let r of i)r({type:e,param:t,atom:n})}return a.unstable_listen=e=>(i.add(e),()=>{i.delete(e)}),a.getParams=()=>r.keys(),a.remove=e=>{if(t===void 0){if(!r.has(e))return;let[t]=r.get(e);r.delete(e),o(`REMOVE`,e,t)}else for(let[n,[i]]of r)if(t(n,e)){r.delete(n),o(`REMOVE`,n,i);break}},a.setShouldRemove=e=>{if(n=e,n)for(let[e,[t,i]]of r)n(i,e)&&(r.delete(e),o(`REMOVE`,e,t))},a}var we=Symbol(``),Te=e=>typeof e?.then==`function`;function Ee(e=()=>{try{return window.localStorage}catch{return}},t){let n,r,i={getItem:(i,a)=>{let o=e=>{if(e||=``,n!==e){try{r=JSON.parse(e,t?.reviver)}catch{return a}n=e}return r},s=e()?.getItem(i)??null;return Te(s)?s.then(o):o(s)},setItem:(n,r)=>e()?.setItem(n,JSON.stringify(r,t?.replacer)),removeItem:t=>e()?.removeItem(t)},a=e=>(n,r,i)=>e(n,e=>{let n;try{n=JSON.parse(e||``,t?.reviver)}catch{n=i}r(n)}),o;try{o=e()?.subscribe}catch{}return!o&&typeof window<`u`&&typeof window.addEventListener==`function`&&window.Storage&&(o=(t,n)=>{if(!(e()instanceof window.Storage))return()=>{};let r=r=>{r.storageArea===e()&&r.key===t&&n(r.newValue)};return window.addEventListener(`storage`,r),()=>{window.removeEventListener(`storage`,r)}}),o&&(i.subscribe=a(o)),i}var De=Ee();function Oe(e,t,n=De,r){let i=L(r?.getOnInit?n.getItem(e,t):t);return i.onMount=r=>(r(n.getItem(e,t)),n.subscribe?.call(n,e,r,t)),L(e=>e(i),(r,a,o)=>{let s=typeof o==`function`?o(r(i)):o;return s===we?(a(i,t),n.removeItem(e)):Te(s)?s.then(t=>(a(i,t),n.setItem(e,t))):(a(i,s),n.setItem(e,s))})}function ke(e,t){return Ce(t=>e(t),t)}function Ae(e,t,n){return Oe(e,t,je(n),{getOnInit:!0})}function je(e){function t(t){return{version:e,value:t}}function n(t,n){return t.version===e?t.value:n}let r=Ee(()=>localStorage),i;return r.subscribe!==void 0&&(i=(e,i,a)=>{r.subscribe(e,e=>{i(n(e,a))},t(a))}),{getItem:function(n,i){let a=r.getItem(n,t(i));return a.version===e?a.value:i},setItem:(e,n)=>{r.setItem(e,t(n))},removeItem:r.removeItem,subscribe:i}}var Me=Ae(`locale`,`zh-CN`,0),Ne={"1 Passive Skill Points":`1 点天赋点数`,"2 Passive Respec Points":`2 点天赋重置点数`,"2 Passive Skill Points":`2 点天赋点数`,"A Call to Arms":`召集部队`,"A direction":`指示方向`,"A Dirty Job":`腐水之息`,"A Fixture of Fate":`命运之语`,"A Glimpse Beyond":`异界惊鸿`,"A Swig of Hope":`重生的渴望`,"A waypoint":`标记当前区域的传送点`,"Abberath, the Cloven One":`割裂者艾贝拉斯`,Absolution:`赦罪`,"Absolution of Inspiring":`奋发之赦罪`,"Accuracy - Rank 1":`命中值 - 等级 1`,"Accuracy - Rank 2":`命中值 - 等级 2`,"Added Chaos Damage Support":`附加混沌伤害(辅)`,"Added Cold Damage Support":`附加冰霜伤害(辅)`,"Added Fire Damage Support":`附加火焰伤害(辅)`,"Added Lightning Damage Support":`附加闪电伤害(辅)`,"Additional Accuracy Support":`额外命中(辅)`,"Advanced Traps Support":`陷阱冷却(辅)`,"Agate Amulet":`玛瑙护身符`,"Aiding an Archivist":`帮助档案管理员`,"Ailment, Stun and Curse Mitigation - Rank 1":`异常、晕眩与诅咒减免 - 等级 1`,"Alchemist's Mark":`炼金师印记`,Alira:`阿莉亚`,"Alira Darktongue":`禁忌祭者阿莉亚`,"All Attributes - Rank 1":`全属性 - 等级 1`,"All Attributes - Rank 2":`全属性 - 等级 2`,"All Resistances - Rank 1":`全元素抗性 - 等级 1`,"All Resistances - Rank 2":`全元素抗性 - 等级 2`,Allflame:`不灭之火`,"Amarissa, Daughter of Merveil":`莫薇儿之女埃玛莉莎`,"Amber Amulet":`琥珀护身符`,Ambush:`伏击`,"Amethyst Flask":`紫晶药剂`,"An End to Hunger":`饥饿的终点`,"An Indomitable Spirit":`不屈意志`,"Ancestral Call Support":`先祖召唤(辅)`,"Ancestral Cry":`先祖战吼`,"Ancestral Protector":`先祖卫士`,"Ancestral Warchief":`先祖战士长`,"Ancient Graffiti":`古老的壁画`,"Ancient Notebook":`古老的壁画`,"Ancient Reverie Device":`古老的地图装置`,Anger:`愤怒`,"Animate Guardian":`幻化守卫`,"Animate Guardian of Smiting":`惩击之幻化守卫`,"Animate Weapon":`幻化武器`,"Animate Weapon of Ranged Arms":`远程之幻化武器`,"Animate Weapon of Self Reflection":`自省之幻化武器`,"Ankh of Eternity":`永恒十字架`,"Annihilation Support":`抹灭（辅）`,"Aquamarine Flask":`海蓝药剂`,Arc:`电弧`,"Arc of Oscillating":`震荡之电弧`,"Arc of Surging":`激涌之电弧`,"Arcane Cloak":`奥术斗篷`,"Arcane Surge Support":`秘术增强(辅)`,"Arcanist Brand":`奥法烙印`,"Archmage Support":`大法师（辅）`,Archnemesis:`罪恶枷锁`,"Arctic Armour":`极地装甲`,"Area Id used internally by Path Of Exile":`游戏内部使用的区域 ID`,"Armageddon Brand":`末日烙印`,"Armageddon Brand of Recall":`回溯之末日烙印`,"Armageddon Brand of Volatility":`无常之末日烙印`,"Arrogance Support":`赤嚣（辅）`,"Arrow Nova Support":`箭之新星（辅）`,"Arteri's Letter":`阿特力的信`,"Artillery Ballista":`火力弩炮`,"Artillery Ballista of Cross Strafe":`交叉扫射之火力弩炮`,"Artillery Ballista of Focus Fire":`锁定打击之火力弩炮`,"Ash Prophet":`烈火咒师`,"Aspirant's Trial":`升华试炼`,"Aspirants' Plaza":`试炼者广场`,"Assassin's Mark":`暗影印记`,"Attack and Cast Speed - Rank 2":`攻击与施法速度 - 等级 2`,"Attack, Cast and Warcry Speed - Rank 1":`攻击、施法与战吼速度 - 等级 1`,"Attributes - Rank 2":`单一属性 - 等级 2`,Autoexertion:`自动增助`,Automation:`自动化`,Avarius:`阿瓦留斯`,"Avarius, Reassembled":`重塑之阿瓦留斯`,"Awakened Added Chaos Damage Support":`附加混沌伤害（强辅）`,"Awakened Added Cold Damage Support":`附加冰霜伤害（强辅）`,"Awakened Added Fire Damage Support":`附加火焰伤害（强辅）`,"Awakened Added Lightning Damage Support":`附加闪电伤害（强辅）`,"Awakened Ancestral Call Support":`先祖召唤（强辅）`,"Awakened Arrow Nova Support":`箭之新星（强辅）`,"Awakened Blasphemy Support":`渎神（强辅）`,"Awakened Brutality Support":`残暴（强辅）`,"Awakened Burning Damage Support":`增加燃烧伤害（强辅）`,"Awakened Cast On Critical Strike Support":`暴击时施放（强辅）`,"Awakened Cast While Channelling Support":`吟唱时施放（强辅）`,"Awakened Chain Support":`连锁（强辅）`,"Awakened Cold Penetration Support":`冰霜穿透（强辅）`,"Awakened Controlled Destruction Support":`精准破坏（强辅）`,"Awakened Deadly Ailments Support":`致命异常状态（强辅）`,"Awakened Elemental Damage with Attacks Support":`武器元素伤害（强辅）`,"Awakened Elemental Focus Support":`元素集中（强辅）`,"Awakened Empower Support":`赋予（强辅）`,"Awakened Enhance Support":`增幅（强辅）`,"Awakened Enlighten Support":`启蒙（强辅）`,"Awakened Fire Penetration Support":`火焰穿透（强辅）`,"Awakened Fork Support":`分裂（强辅）`,"Awakened Generosity Support":`和善（强辅）`,"Awakened Greater Multiple Projectiles Support":`高阶多重投射（强辅）`,"Awakened Hextouch Support":`蛊咒【强辅】`,"Awakened Increased Area of Effect Support":`增大范围（强辅）`,"Awakened Lightning Penetration Support":`闪电穿透（强辅）`,"Awakened Melee Physical Damage Support":`近战物理伤害（强辅）`,"Awakened Melee Splash Support":`近战伤害扩散（强辅）`,"Awakened Minion Damage Support":`召唤生物伤害（强辅）`,"Awakened Multistrike Support":`多重打击（强辅）`,"Awakened Spell Cascade Support":`多重范围施法（强辅）`,"Awakened Spell Echo Support":`施法回响（强辅）`,"Awakened Swift Affliction Support":`极速腐化（强辅）`,"Awakened Unbound Ailments Support":`异常爆发（强辅）`,"Awakened Unleash Support":`释出（强辅）`,"Awakened Vicious Projectiles Support":`邪恶投掷（强辅）`,"Awakened Void Manipulation Support":`虚空操纵（强辅）`,"Awoken Giant":`觉醒巨人`,"Ball Lightning":`天雷之珠`,"Ball Lightning of Orbiting":`周转之天雷之珠`,"Ball Lightning of Static":`静滞之天雷之珠`,"Ballista Totem Support":`弩炮图腾（辅）`,Bane:`混沌之毒`,"Bane of Condemnation":`罪罚之混沌之毒`,"Banner of Action":`行动之兆`,"Banner of Knowledge":`知识之兆`,"Banner of Passion":`激情之兆`,Bannon:`巴农`,"Barbed Club":`锐刺木棒`,Barkhul:`巴尔克霍`,Barrage:`弹幕`,"Barrage of Volley Fire":`齐发之弹幕`,"Barrage Support":`弹幕（辅）`,"Basalt Flask":`石化药剂`,"Battle Lamellar":`争战鳞甲`,"Battlemage's Cry":`魔武战号`,"Bear Trap":`捕熊陷阱`,"Bear Trap of Skewers":`钉刺之捕熊陷阱`,"Behead Support":`斩首（辅）`,Berserk:`盛怒`,Bestel:`毕斯特`,"Bestel's Epic":`毕斯特传奇`,"Bismuth Flask":`灰岩药剂`,"Black Death":`灾疫之兆`,"Black Death, Pain Unending":`痛苦征服者莫德雷`,"Blackguard Arcmage":`乌旗守卫雷使`,"Blackguard Mage":`乌旗守卫法师`,"Blade Blast":`乱剑穿心`,"Blade Blast of Dagger Detonation":`轰匕之乱剑穿心`,"Blade Blast of Unloading":`倾泻之乱剑穿心`,"Blade Flurry":`刀刃乱舞`,"Blade Flurry of Incision":`割痕之刀刃乱舞`,"Blade Trap":`剑刃陷阱`,"Blade Trap of Greatswords":`巨剑之剑刃陷阱`,"Blade Trap of Laceration":`裂伤之剑刃陷阱`,"Blade Vortex":`飞刃风暴`,"Blade Vortex of the Scythe":`巨镰之飞刃风暴`,Bladefall:`虚空刀雨`,"Bladefall of Impaling":`穿刺之虚空刀雨`,"Bladefall of Trarthus":`特拉特斯之虚空刀雨`,"Bladefall of Volleys":`连绵之虚空刀雨`,Bladestorm:`剑刃风暴`,"Bladestorm of Uncertainty":`无定之剑刃风暴`,"Blasphemy Support":`诅咒光环(辅)`,"Blast Rain":`爆裂箭雨`,"Blast Rain of Trarthus":`特拉特斯之爆裂箭雨`,"Blastchain Mine Support":`链爆地雷（辅）`,"Blazing Salvo":`怒炎穿心`,"Bleached Horror":`苍白恐惧`,"Blessed Call Support":`祝福呼唤（辅）`,"Blessed Sister":`神佑之女`,Blight:`枯萎`,"Blight of Atrophy":`萎缩之枯萎`,"Blight of Contagion":`传染之枯萎`,Blightblade:`瘟疫之刃`,"Blind Support":`致盲(辅)`,"Blink Arrow":`闪现射击`,"Blink Arrow of Bombarding Clones":`轰炸复制体之闪现射击`,"Blink Arrow of Prismatic Clones":`棱光复制体之闪现射击`,"Block Chance Reduction Support":`减少格挡几率(辅)`,"Blood and Sand":`血与沙`,"Blood Chieftain":`血面酋长`,"Blood Crucible":`赤炼玄炉`,"Blood Rage":`狂野怒火`,"Bloodlust Support":`血怒（辅）`,"Bloodsoaked Banner Support":`血染旗帜（辅）`,"Bloodthirst Support":`血气（辅）`,"Body Armours":`胸甲`,Bodyswap:`灵体转换`,"Bodyswap of Sacrifice":`牺牲之灵体转换`,"Bone Husk":`骨壳`,"Bone Offering":`装甲奉献`,"Bone Ring":`骨环`,"Bone Stalker":`骨之史杜克`,"Bonechill Support":`彻骨（辅）`,Boneshatter:`七伤破`,"Boneshatter of Carnage":`不坏之七伤破`,"Boneshatter of Complex Trauma":`重创之七伤破`,"Bonespire Support":`白骨尖塔（辅）`,"Book of Regrets":`后悔之书`,"Book of Skill":`技能之书`,Boots:`鞋子`,"Bottled Storm":`风暴之瓶`,Boulderback:`巨石牛魔像`,Bows:`弓`,"Brand Recall":`烙印召回`,Bravalo:`布拉瓦罗`,"Breaking Some Eggs":`打破鸟蛋`,"Breaking the Seal":`突破封印`,Brinecrack:`海王侍从奇汀克拉克`,"Bringer of Souls":`葬魂者`,"Brood Princess":`海虫之母`,"Brutality Support":`残暴(辅)`,"Brutus, the Warden":`典狱长布鲁特斯`,"Bundle of Woe":`灾祸骨怪`,"Burning Arrow":`燃烧箭矢`,"Burning Arrow of Vigour":`气焰之燃烧箭矢`,"Burning Damage Support":`增加燃烧伤害(辅)`,Burrower:`地穴掘者`,"Calaf, Headstaver":`裂颅者卡拉夫`,"Caliga, Imperatrix":`大将卡莉嘉`,"Captain Arteri":`阿特力队长`,"Captain Aurelianus":`奥瑞莱恩斯队长`,"Captain Fairgraves":`费尔船长`,"Carnage Chieftain":`冷血酋长`,"Carrion Queen":`食腐虫后`,"Cast On Critical Strike Support":`暴击时施放(辅)`,"Cast on Death Support":`死亡时施放(辅)`,"Cast on Melee Kill Support":`近战击败时施放(辅)`,"Cast on Ward Break Support":`结界破碎时释放（辅）`,"Cast when Damage Taken Support":`受伤时施放(辅)`,"Cast when Stunned Support":`晕眩时施放(辅)`,"Cast while Channelling Support":`吟唱时施放(辅)`,"Cato, Scholar of Light":`卡托, 理性之光`,"Caustic Arrow":`腐蚀箭矢`,"Caustic Arrow of Poison":`剧毒之腐蚀箭矢`,"Censer Relic":`香炉遗物`,"Chain Belt":`扣链腰带`,"Chain Hook":`钩链攻击`,"Chain Hook of Trarthus":`特拉特斯之钩链攻击`,"Chain Support":`连锁(辅)`,"Chainmail Vest":`锁链背心`,"Chance to Bleed Support":`几率流血(辅)`,"Chance to Flee Support":`几率逃跑(辅)`,"Chance to Poison Support":`低阶毒化(辅)`,"Chaos Damage - Rank 1":`混沌伤害 - 等级 1`,"Chaos Damage - Rank 2":`混沌伤害 - 等级 2`,"Chaos Guardian":`混沌战士`,"Charged Dash":`蓄力疾风闪`,"Charged Dash of Projection":`投射之蓄力疾风闪`,"Charged Mines Support":`充能地雷（辅）`,"Charged Traps Support":`充能陷阱（辅）`,Chatters:`寒霜之语`,"Chest 1":`宝箱1`,"Chest 2":`宝箱2`,"Citrine Amulet":`黄晶护身符`,Clarissa:`卡尔莉萨`,Clarity:`清晰`,Claws:`爪`,Cleave:`劈砍`,"Cleave of Rage":`怒火之劈砍`,"Close Combat Support":`近战（辅）`,"Cloth Belt":`饰布腰带`,"Cluster Traps Support":`散弹陷阱(辅)`,"Cobalt Jewel":`钴蓝珠宝`,"Cobra Lash":`毒蛇鞭击`,"Cold Damage - Rank 1":`冰霜伤害 - 等级 1`,"Cold Damage - Rank 2":`冰霜伤害 - 等级 2`,"Cold Penetration Support":`冰霜穿透(辅)`,"Cold Snap":`霜暴`,"Cold Snap of Power":`强能之霜暴`,"Cold to Fire Support":`寒冰转烈焰(辅)`,"Colossus Crusher":`巨大羊魔`,"Combustion Support":`几率点燃(辅)`,"Commander Kirac":`指挥官奇拉克`,"Companionship Support":`忠诚伙伴（辅）`,"Complete the ascendancy trial in the current area":`完成当前区域的升华试炼`,"Complete The Lord's Labyrinth":`完成升华迷宫`,"Concentrated Effect Support":`集中效应(辅)`,Conductivity:`导电`,Conflagration:`燃火箭雨`,"Congregation Support":`亡灵大军（辅）`,"Consecrated Path":`奉献之路`,"Consecrated Path of Endurance":`强韧之奉献之路`,Contagion:`顽疾`,"Contagion of Subsiding":`痼疾之瘟疫`,"Contagion of Transference":`转移之瘟疫`,"Controlled Blaze Support":`精准炽炎（辅）`,"Controlled Destruction Support":`精准破坏(辅)`,"Conversion Trap":`迷魅陷阱`,Convocation:`号召`,"Cooldown Recovery Support":`冷却回复（辅）`,"Coral Ring":`珊瑚戒指`,"Corrupting Cry Support":`腐化战吼（辅）`,"Corrupting Fever":`腐灼热瘟`,"Corundum Flask":`刚玉药剂`,"Crackling Lance":`霹雳长枪`,"Crackling Lance of Branching":`分叉之霹雳长枪`,"Crackling Lance of Disintegration":`瓦解之霹雳长枪`,Crawler:`地道探路者`,"Creeping Frost":`电光寒霜`,"Creeping Frost of Floes":`浮冰之电光寒霜`,Cremation:`火葬`,"Cremation of Exhuming":`掘灭之火葬`,"Cremation of the Volcano":`火山之火葬`,"Crimson Jewel":`赤红珠宝`,"Critical Strike Affliction Support":`毒化(辅)`,"Crow Keeper":`饲鸟人`,"Cruelty Support":`凌厉（辅）`,"Crushing Fist":`粉碎重拳`,"Cull the Weak Support":`弱肉强食（辅）`,"Culling Strike Support":`终结(辅)`,"Cultist Tract":`信徒手册`,"Currency cost, wisdom/transmutation/alteration/chance/alchemy":`所需货币：智慧卷轴/改造石/改良石/机遇石/炼金石`,"Cursed Ground Support":`诅咒之地辅助`,Cutlass:`军用长刃`,Cyclone:`旋风斩`,"Cyclone of Tumult":`嚣狂之旋风斩`,Daggers:`匕首`,"Damage on Full Life Support":`满血伤害（辅）`,"Damage over Time - Rank 1":`持续伤害 - 等级 1`,"Damp Diary":`浸湿的日记`,Daresso:`德瑞索`,"Daresso's Dream":`德瑞索的幻境`,"Daresso, King of Swords":`斗剑之王德瑞索`,"Dark Pact":`暗夜契约`,"Dark Pact of Trarthus":`特拉特斯之暗夜血契`,Dash:`冲刺`,"Deadly Ailments Support":`致命异常状态(辅)`,"Deal with the Bandits":`与盗贼们打交道`,"Death and Rebirth":`死亡和重生`,"Death Bishop":`死亡咒师`,"Death to Purity":`灭亡纯净教`,"Decay Support":`腐蚀(辅)`,"Decoy Totem":`诱饵图腾`,"Defences - Rank 1":`防御数值 - 等级 1`,"Defences - Rank 2":`防御数值 - 等级 2`,"Defiance Banner":`抗争之旗`,"Defiled Proclamation":`巨大的石魔像`,"Definitely Oak":`欧克`,Desecrate:`亵渎`,Despair:`绝望`,"Destructive Link":`毁灭羁绊`,Determination:`坚定`,"Detonate Dead":`爆灵术`,"Detonate Dead of Chain Reaction":`连锁之爆灵术`,"Detonate Dead of Scavenging":`掠命之爆灵术`,"Detonate Mines":`引爆地雷`,"Devour Support":`吞噬（辅）`,"Devouring Totem":`吞噬图腾`,"Devout Chainmail":`虔诚链甲`,Diabolist:`恶魔咒师`,Dialla:`达拉夫人`,"Diamond Flask":`宝钻药剂`,"Dimachaeri Cassius":`狄马奇利卡希尔斯`,Discharge:`解放`,"Discharge of Misery":`苦难之解放`,Discipline:`纪律`,"Divine Blast":`神圣冲击`,"Divine Blessing Support":`神圣祝福（辅）`,"Divine Ire":`圣怨`,"Divine Ire of Disintegration":`瓦解之圣怨`,"Divine Ire of Holy Lightning":`神雷之圣怨`,"Divine Life Flask":`不朽生命药剂`,"Divine Mana Flask":`不朽魔力药剂`,"Divine Retribution":`神圣报应`,"Divine Sentinel Support":`神圣哨兵（辅）`,"Doedre Darktongue":`暗语者德瑞`,"Doedre's Cesspool":`德瑞的污水坑`,"Doedre's Manifesto":`德瑞的杂记`,"Doedre's Torment":`德瑞之罪`,"Doedre, Darksoul":`德瑞, 暗灵者`,"Dominating Blow":`霸气之击`,"Dominating Blow of Inspiring":`奋发之霸气之击`,Dominus:`多米纳斯`,Doorman:`守门人`,"Double Resistances - Rank 1":`双重抗性 - 等级 1`,"Double Resistances - Rank 2":`双重抗性 - 等级 2`,"Double Resistances - Rank 3":`双重抗性 - 等级 3`,"Double Strike":`双重打击`,"Double Strike of Impaling":`穿刺之双重打击`,"Double Strike of Momentum":`动量之双重打击`,"Dread Banner":`恐怖之旗`,Droolmaw:`垂涎裂齿兽`,"Dual Strike":`双持打击`,"Dual Strike of Ambidexterity":`巧手之双持打击`,"Dusk Horror":`暮色尤惧`,"Dying Exile":`垂死的流放者`,"Dying for a Fight":`为战而死`,"Earthbreaker Support":`裂地之灵（辅）`,Earthquake:`震地`,"Earthquake of Amplification":`增幅之地震`,Earthshatter:`尖刺战吼`,"Earthshatter of Fragility":`脆弱之尖刺战吼`,"Earthshatter of Prominence":`涌升之尖刺战吼`,"Ebony Tower Shield":`乌木塔盾`,"Eclipse Support":`月蚀（辅）`,"Efficacy Support":`效能(辅)`,"Effigy of Fear":`恐惧塑像`,"Einhar's Hunt":`伊恩哈尔的猎魔`,"Einhar's Menagerie":`伊恩哈尔的魔物园`,"Eldritch Blasphemy Support":`古神亵渎（辅）`,"Elegant Ringmail":`权贵环甲`,"Elemental Army Support":`元素大军（辅）`,"Elemental Damage with Attacks - Rank 1":`攻击附加元素伤害 - 等级 1`,"Elemental Damage with Attacks Support":`武器元素伤害(辅)`,"Elemental Focus Support":`元素集中(辅)`,"Elemental Hit":`元素打击`,"Elemental Hit of the Spectrum":`光谱之元素打击`,"Elemental Penetration Support":`元素穿透（辅）`,"Elemental Proliferation Support":`元素扩散(辅)`,"Elemental Resistances - Rank 2":`元素抗性 - 等级 2`,"Elemental Resistances - Rank 3":`元素抗性 - 等级 3`,"Elemental Weakness":`元素要害`,"Empower Support":`赋予(辅)`,"Endurance Charge on Melee Stun Support":`近战击晕获得耐力球(辅)`,"Enduring Cry":`坚决战吼`,"Enemy at the Gate":`大门口的敌人`,"Energy Blade":`能量之刃`,"Energy Leech Support":`能量偷取（辅）`,Enfeeble:`衰弱`,"Enhance Support":`增幅(辅)`,"Enlighten Support":`启蒙(辅)`,"Ensnaring Arrow":`诱捕之箭`,"Enter an area":`进入指定区域`,Eramir:`艾米尔`,"Escaped Revenant":`苟活遗民`,"Essence Drain":`精华吸取`,"Essence Drain of Desperation":`绝望之灵魂吸取`,"Essence Drain of Wickedness":`邪门之灵魂吸取`,"Essence of the Artist":`马雷格罗`,"Essence of the Hag":`巫婆精华`,"Essence of Umbra":`黑影精华`,"Etchings on Wood I":`木刻版画 I`,"Etchings on Wood II":`木刻版画 II`,"Etchings on Wood III":`木刻版画 III`,"Etchings on Wood IV":`木刻版画 IV`,"Eternal Blessing Support":`永恒祝福 （辅）`,"Ethereal Knives":`虚空匕首`,"Ethereal Knives of Lingering Blades":`徘徊之虚空匕首`,"Ethereal Knives of the Massacre":`狂戮之虚空匕首`,Eviscerate:`剔骨`,"Excommunicate Support":`神圣驱逐(辅）`,"Exemplar Support":`英勇典范（辅）`,"Expert Retaliation Support":`专擅反击（辅）`,"Explosive Archaeology":`爆破考古`,"Explosive Arrow":`爆炸箭矢`,"Explosive Concoction":`爆破灵药`,"Explosive Concoction of Destruction":`毁灭之爆破灵药`,"Explosive Trap":`爆炸陷阱`,"Explosive Trap of Magnitude":`剧烈之爆炸陷阱`,"Explosive Trap of Shrapnel":`破片之爆炸陷阱`,Exsanguinate:`赤炼魔光`,"Exsanguinate of Transmission":`传输之赤炼魔光`,"Eye Hatchery":`生眼者`,"Eye of Winter":`凛冬之眼`,"Eye of Winter of Finality":`暮冬之凛冬之眼`,"Eye of Winter of Transience":`瞬息之凛冬之眼`,Eyepecker:`扎眼者`,"Fallen from Grace":`优雅不再`,"Faster Attacks Support":`快速攻击(辅)`,"Faster Casting Support":`快速施法(辅)`,"Faster Projectiles Support":`快速投射(辅)`,"Fastis Fortuna":`命运之历`,"Feeding Frenzy Support":`狂噬（辅）`,"Fencer Helm":`击剑士之盔`,"Fidelitas, Loyalty Undying":`忠诚不死者费德利塔斯`,"Fidelitas, the Mourning":`悼灵者费德利塔斯`,"Fiery Dust":`余烬之尘`,"Figments Reforged":`重铸的虚幻`,"Fire Damage - Rank 1":`火焰伤害 - 等级 1`,"Fire Damage - Rank 2":`火焰伤害 - 等级 2`,"Fire Fury":`怒炎之使`,"Fire Penetration Support":`火焰穿透(辅)`,"Fire Trap":`火焰陷阱`,"Fire Trap of Blasting":`震爆之火焰陷阱`,Fireball:`火球`,Firestorm:`烈炎风暴`,"Firestorm of Meteors":`陨星之烈炎风暴`,"Firestorm of Pelting":`碎焰之烈炎风暴`,"Fissure Support":`裂缝（辅）`,"Fist of War Support":`战争铁拳（辅）`,"Flame Dash":`烈焰冲刺`,"Flame Dash of Return":`归返之烈焰冲刺`,"Flame Link":`烈炎羁绊`,"Flame Sentinel":`火炎哨带`,"Flame Surge":`怒焰奔腾`,"Flame Surge of Combusting":`爆燃之怒焰奔腾`,"Flame Wall":`烈焰之墙`,Flameblast:`烈焰爆破`,"Flameblast of Celerity":`敏捷之烈焰爆破`,"Flameblast of Contraction":`聚火之烈焰爆破`,"Flamethrower Trap":`掷火陷阱`,"Flamethrower Trap of Stability":`稳定之掷火陷阱`,"Flamewood Support":`焚木烈火（辅）`,Flammability:`易燃`,"Flask Duration - Rank 1":`药剂持续时间 - 等级 1`,Fleetfreak:`转轮僵尸`,"Flesh and Stone":`血肉与岩石`,"Flesh Offering":`血肉奉献`,"Fleshrend, Grand Inquisitor":`崇高审判者塑灵之主`,"Flicker Strike":`闪现打击`,"Flicker Strike of Power":`强能之闪现打击`,"Focused Ballista Support":`弩炮集火（辅）`,"Focused Channelling Support":`专注吟唱（辅）`,"Forbidden Rite":`禁断典仪`,"Forbidden Rite of Soul Sacrifice":`祭魂之禁断典仪`,Foreman:`工头`,"Forgotten Warrior":`被人忘却的战士`,"Fork Support":`分裂(辅)`,"Fortify Support":`护体(辅)`,"Foulgrasp Support":`邪秽之握（辅）`,"Freezing Pulse":`冰霜脉冲`,Frenzy:`狂怒`,"Frenzy of Onslaught":`猛攻之狂怒`,"Fresh Meat Support":`鲜肉（辅）`,"Frigid Bond Support":`冰冽连接（辅）`,"Frost Blades":`冰霜之刃`,"Frost Blades of Katabasis":`冥域之冰霜之刃`,"Frost Bomb":`寒霜爆`,"Frost Bomb of Forthcoming":`延时之寒霜爆`,"Frost Bomb of Instability":`动荡之寒霜爆`,"Frost Sentinel":`寒霜哨带`,"Frost Shield":`冰霜护盾`,"Frost Wall":`冰墙`,"Frost Wall of Encroachment":`侵袭之冰墙`,Frostbite:`冻伤`,Frostblink:`冰霜闪现`,"Frostblink of Wintry Blast":`冰爆之冰霜闪现`,Frostbolt:`寒冰弹`,"Frostmage Support":`寒霜法师（辅）`,"Frozen Legion":`冰封军团`,"Frozen Legion of Rallying":`集结之冰封军团`,"Galvanic Arrow":`电光箭`,"Galvanic Arrow of Energy":`聚能之电光箭`,"Galvanic Arrow of Surging":`浪涌之电光箭`,"Galvanic Field":`电流场`,"Galvanic Field of Intensity":`剧烈之电流场`,"Galvanic Ribbon":`雷电之带`,"Garukhan, Queen of the Winds":`风暴女神格鲁坎`,Gavel:`坚锤`,"Gemling Captain":`古灵斗士长`,"Gemling Legionnaire":`古灵使徒斗士`,"General Adus":`阿杜斯将军`,"General Gravicius":`格拉维奇将军`,"General's Brigandine":`将军铠甲`,"General's Cry":`将军之吼`,"Generic text":`通用文本`,"Generosity Support":`和善(辅)`,"Get the crafting recipe in the current area":`获取当前区域的工艺配方`,"Glacial Cascade":`冰川之刺`,"Glacial Cascade of the Fissure":`裂隙之冰川之刺`,"Glacial Hammer":`冰霜之锤`,"Glacial Hammer of Shattering":`碎冰之冰霜之锤`,"Glacial Shield Swipe":`冰川盾袭`,"Gladiator Plate":`角斗重铠`,Gladius:`斗士长剑`,Gloves:`手套`,"Gluttony Support":`暴食（辅）`,Gneiss:`白岩`,"Gold Amulet":`帝金护身符`,"Gold Ring":`金光戒指`,"Golden Plate":`金耀之铠`,"Goliath Gauntlets":`巨灵护手`,"Goliath Greaves":`巨灵胫甲`,Grace:`优雅`,"Granite Flask":`坚岩药剂`,Gravicius:`格拉维奇`,"Greater Ancestral Call Support":`高阶先祖召唤（辅）`,"Greater Chain Support":`高阶连锁（辅）`,"Greater Devour Support":`高阶吞噬（辅）`,"Greater Fork Support":`高阶分裂（辅）`,"Greater Kinetic Instability Support":`高阶念动失稳（辅）`,"Greater Life Flask":`良质生命药剂`,"Greater Mana Flask":`良质魔力药剂`,"Greater Multiple Projectiles Support":`高阶多重投射(辅)`,"Greater Multistrike Support":`高阶多重打击（辅）`,"Greater Spell Cascade Support":`高阶多重施法范围（辅）`,"Greater Spell Echo Support":`高阶施法回响（辅）`,"Greater Unleash Support":`高阶释出（辅）`,"Greater Volley Support":`高阶齐射（辅）`,Greust:`古斯特(武器交易)`,"Greust's Necklace":`古斯特的项链`,"Greust, Lord of the Forest":`受拉克斯操纵的古斯特`,Grigor:`葛里戈`,"Grinning Totem":`嗤笑图腾`,"Ground Slam":`裂地之击`,"Ground Slam of Earthshaking":`震地之裂地之击`,"Gruthkul, Mother of Despair":`格鲁丝克`,"Guard Captain":`军卫队长`,"Guardian's Blessing Support":`守卫祝福（辅）`,Hailrake:`严寒之使`,"Hallow Support":`圣化（辅）`,Hammerstorm:`锤烈`,"Hand in a quest and receive all reward offers, generates gem steps":`提交任务并领取所有奖励（会生成宝石步骤）`,"Hand in a quest and receive specified reward offer, generates gem steps":`提交任务并领取指定奖励（会生成宝石步骤）`,Hargan:`贺根(武器交易)`,Haste:`迅捷`,Hatebeat:`憎恨之炎`,Hatred:`憎恨`,"Headsman Axe":`行刑巨斧`,"Heavy Belt":`重革腰带`,"Heavy Strike":`重击`,"Heavy Strike of Trarthus":`特拉特斯之重击`,"Hector Titucius, Eternal Servant":`永恒仆从赫克特·提图瑟`,Helena:`赫莲娜`,Helmets:`头部`,"Herald of Agony":`苦痛之捷`,"Herald of Ash":`灰烬之捷`,"Herald of Ice":`寒冰之捷`,"Herald of Purity":`纯净之捷`,"Herald of Thunder":`闪电之捷`,"Heretical Adjudicator":`异端裁决者`,"Heretical Guardian":`异教卫士`,"Hex Bloom Support":`魔蛊绽放辅助`,Hexblast:`魔蛊爆炸`,"Hexblast of Contradiction":`悖论之魔蛊爆炸`,"Hexblast of Havoc":`浩劫之魔蛊爆炸`,"Hexpass Support":`魔蛊通道（辅）`,"Hextoad Support":`魔蛊蟾蜍（辅）`,"Hextouch Support":`蛊咒（辅）`,"High Templar Avarius":`神主阿瓦留斯`,"High-Impact Mine Support":`高爆地雷（辅）`,Highgate:`统治者之殿`,Hillock:`西拉克`,"Hiveborn Support":`裂隙虫群（辅）`,"Hollowskull, the Willing Host":`自愿宿主空颅`,"Holy Flame Totem":`圣焰图腾`,"Holy Flame Totem of Ire":`怒焰之圣焰图腾`,"Holy Hammers":`神圣之锤`,"Holy Strike":`神圣打击`,"Holy Sweep":`神圣横扫`,"Host Chieftain":`宿主酋长`,Hydrosphere:`水源法球`,"Hypothermia Support":`急冻(辅)`,"Ice Bite Support":`霜咬(辅)`,"Ice Crash":`寒冰冲击`,"Ice Crash of Cadence":`错落之寒冰冲击`,"Ice Nova":`冰霜新星`,"Ice Nova of Deep Freeze":`深寒之冰霜新星`,"Ice Nova of Frostbolts":`寒冰弹之冰霜新星`,"Ice Shot":`冰霜射击`,"Ice Shot of Penetration":`贯穿之冰霜射击`,"Ice Spear":`冰矛`,"Ice Spear of Splitting":`分裂之冰矛`,"Ice Trap":`冰冻陷阱`,"Ice Trap of Hollowness":`空洞之冰冻陷阱`,"Icicle Mine":`冰锥地雷`,"Icicle Mine of Fanning":`扩散之冰锥地雷`,"Icicle Mine of Sabotage":`破坏之冰锥地雷`,"Icy Manifestation":`冰霜元素`,"Ignite Proliferation Support":`点燃扩散(辅)`,"Immolate Support":`献祭(辅)`,"Immortal Call":`不朽怒嚎`,"Impale Support":`穿刺`,"Impending Doom Support":`末日将至（辅）`,"In Memory of Greust":`古斯特的墓碑`,"In Search of the Sanctum":`在禁域中搜寻`,"In Service to Science":`为科学服务`,Incinerate:`烧毁`,"Incinerate of Expanse":`蔓延之烧毁`,"Incinerate of Venting":`泄火之烧毁`,"Increased Area of Effect Support":`增大范围(辅)`,"Increased Critical Damage Support":`提高暴击伤害(辅)`,"Increased Critical Strikes Support":`提高暴击几率(辅)`,"Infernal Blow":`炼狱之击`,"Infernal Blow of Immolation":`献祭之炼狱之击`,"Infernal Cry":`炼狱战吼`,"Infernal Legion Support":`炎军（辅）`,"Infernal Sentinel":`地狱火炎`,"Infernal Talc":`炼狱之粉`,"Infused Channelling Support":`灌能吟唱(辅)`,"Innervate Support":`闪电支配(辅)`,Innocence:`纯净之神`,Inscription:`碑铭`,"Inspiration Support":`启迪（辅）`,"Intensify Support":`法术凝聚（辅）`,"Intimidating Cry":`威吓战吼`,"Into the Breach":`深入裂隙`,"Into The Nexus":`走进枢纽`,"Intruders in Black":`黑色入侵者`,"Intuitive Link":`直觉羁绊`,"Invention Support":`发明（辅）`,"Invert the Rules Support":`逆转规则（辅）`,Irasha:`伊莎拉`,"Iron Grip Support":`钢铁之握(辅)`,"Iron Will Support":`钢铁意志(辅)`,"Ironpoint the Forsaken":`遗世铁锋`,"Item Rarity Support":`物品稀有度增幅(辅)`,"Jade Amulet":`翠玉护身符`,"Jade Flask":`翠玉药剂`,"Journal Entry":`日记`,"Justicar Casticus":`审判长卡斯提克斯`,"Kadavrus the Defiler":`腐化者·凯达弗斯`,"Kaom's Dream":`冈姆的幻境`,"Kaom's Stronghold":`冈姆的堡垒`,"Karui Carving":`卡鲁雕刻`,"Karui Shores":`卡鲁海岸`,keyword:`关键字`,"Kill a monster, certain bosses unlock waypoints":`击杀目标（部分首领会解锁传送点）`,"Kiln Mother":`不死火焰`,"Kinetic Blast":`力量爆破`,"Kinetic Blast of Clustering":`集束之力量爆破`,"Kinetic Bolt":`念动飞箭`,"Kinetic Bolt of Fragmentation":`碎裂之念动飞箭`,"Kinetic Fusillade":`念动齐射`,"Kinetic Fusillade of Detonation":`引爆之念动齐射`,"Kinetic Instability Support":`念动失稳（辅）`,"Kinetic Rain":`念动之雨`,"Kinetic Rain of Impact":`冲击之念动之雨`,"King Kaom":`卡鲁之王冈姆`,Kira:`奇拉(武器交易)`,"Kishara's Star":`琪莎拉之星`,"Kitava's Herald":`奇塔弗的信使`,"Kitava's Hunger I":`奇塔弗的饥渴I`,"Kitava's Hunger II":`奇塔弗的饥渴II`,"Kitava's Hunger III":`奇塔弗的饥渴III`,"Kitava's Torments":`奇塔弗的受难`,"Kitava, the Insatiable":`奇塔弗`,"Knitted Horror":`恐惧创造物`,"Knockback Support":`击退(辅)`,Kole:`寇尔`,Kraityn:`克雷顿`,"Kraityn, Scarbearer":`断魂之刃克雷顿`,"Kuduku, the False God":`伪神库度古`,Lacerate:`破空斩`,"Lacerate of Butchering":`痛宰之破空斩`,"Lacerate of Haemorrhage":`血涌之破空斩`,"Lady Dialla":`达拉夫人`,"Lake of Kalandra":`卡兰德之湖`,"Lancing Steel":`断金之刃`,"Lancing Steel of Spraying":`飞射之断金之刃`,Lani:`拉尼`,"Lapis Amulet":`海玉护身符`,"Leap Slam":`跃击`,"Leap Slam of Groundbreaking":`破土之震地跃击`,"Leather Belt":`皮革腰带`,"Leatherbound Logbook":`皮制航海日记`,"Less Duration Support":`持续时间缩短(辅)`,"Lesser Multiple Projectiles Support":`低阶多重投射(辅)`,"Lethal Dose Support":`致死剂量（辅）`,"Letter Fragment":`信的碎片`,"Letter of Instruction":`指引信`,"Letter to Chitus":`给切特斯的信`,"Letters of Exile":`流放者的信`,"Life and Mana - Rank 2":`生命与魔力 - 等级 2`,"Life and Mana - Rank 3":`生命与魔力 - 等级 3`,"Life and Mana Regeneration - Rank 1":`生命与魔力回复 - 等级 1`,"Life Gain on Hit Support":`击中生命回复(辅)`,"Life Leech Support":`生命偷取(辅)`,"Lifetap Support":`赤炼（辅）`,"Lighting the Way":`照亮道路`,"Lightning Arrow":`闪电箭矢`,"Lightning Arrow of Electrocution":`电殛之闪电箭矢`,"Lightning Conduit":`闪电通道`,"Lightning Conduit of the Heavens":`苍穹之闪电通道`,"Lightning Damage - Rank 1":`闪电伤害 - 等级 1`,"Lightning Damage - Rank 2":`闪电伤害 - 等级 2`,"Lightning Penetration Support":`闪电穿透(辅)`,"Lightning Spire Trap":`电塔陷阱`,"Lightning Spire Trap of Overloading":`超载之电塔陷阱`,"Lightning Spire Trap of Zapping":`震荡之电塔陷阱`,"Lightning Strike":`闪电打击`,"Lightning Strike of Arcing":`弧光之闪电打击`,"Lightning Tendrils":`电能释放`,"Lightning Tendrils of Eccentricity":`离心之电能释放`,"Lightning Tendrils of Escalation":`增幅之电能释放`,"Lightning Trap":`闪电陷阱`,"Lightning Trap of Sparking":`火花之闪电陷阱`,"Lightning Warp":`闪电传送`,"Lilly Roth":`丽莉·罗斯`,"Lingering Aberration":`唤灵尸王`,"Lioneye's Standard":`狮眼战旗`,"Lioneye's Watch":`狮眼守望`,"Living Lightning Support":`活体闪电（辅）`,"Locus Mine Support":`核心地雷（辅）`,"Logout or Exit to Character Selection, removes portals":`登出或返回角色选择界面，会移除传送门`,"Lookup an area":`查找区域信息`,"Lost in Love":`迷失的爱情`,"Love is Dead":`葬爱`,"Love Letter":`情书`,"Lunar Devotee":`月亮信徒`,"Lunar Eclipse":`月食`,Lunaris:`月影女神`,"Lunaris Champion":`月影斗士`,"Lunaris Statue":`月影女神雕塑`,"Lunaris, Eternal Moon":`月影女神`,"Lunarsworn Archmage":`月卫魔导士`,"Machinations Support":`诡诈阴谋（辅）`,Maelström:`魔暴`,"Maim Support":`瘫痪(辅)`,Malachai:`玛拉凯`,"Malachai's Dedication":`玛拉凯的奉献`,"Malachai's Journal":`玛拉凯的日记`,"Malachai's Notebook":`玛拉凯的笔记本`,"Malachai, The Nightmare":`梦魇玛拉凯`,Malevolence:`怨毒光环`,"Maligaro's Manifesto":`马雷格罗的杂记`,"Maligaro's Map":`马雷格罗的地图`,"Maligaro's Muse":`马雷格罗的沉思`,"Maligaro's Sanctum":`马雷格罗的藏身处`,"Maligaro, the Artist":`奇才马雷格罗`,"Maligaro, The Broken":`马雷格罗, 破败者`,"Maligaro, The Inquisitor":`审判者马雷格罗`,"Maligaro, the Inquisitor":`审判者马雷格罗`,"Mana Leech Support":`魔力偷取(辅)`,"Mana Regen - Rank 1":`魔力回复 - 等级 1`,Manabond:`缚魔电场`,"Manaforged Arrows Support":`法铸箭矢（辅）`,"Map to Tsoatha":`深海之路`,Maramoa:`马拉莫`,"Marceus the Defaced":`沉沦者·穆希尔斯`,"Mark On Hit Support":`击中时施加印记（辅）`,"Maternal Rhex":`雌性凶鸟`,"Meat Shield Support":`肉盾（辅）`,"Medium Life Flask":`中型生命药剂`,"Medium Mana Flask":`中型魔力药剂`,"Melee Physical Damage Support":`近战物理伤害(辅)`,"Melee Splash Support":`近战伤害扩散(辅)`,"Mercy Mission":`医者之心`,Merveil:`莫薇儿`,"Merveil's Caverns":`梅薇尔洞穴`,"Merveil, the Siren":`海妖莫薇儿`,"Message in a Bottle":`漂流瓶`,Mevion:`梅夫雅`,"Minefield Support":`地雷网(辅)`,"Minion Damage Support":`召唤生物伤害(辅)`,"Minion Life Support":`召唤生物生命(辅)`,"Minion Pact Support":`随从契约（辅）`,"Minion Speed Support":`召唤生物速度(辅)`,"Minions - Rank 1":`召唤生物 - 等级 1`,"Mirage Archer Support":`幻影射手(辅)`,"Mirror Arrow":`魅影射击`,"Mirror Arrow of Bombarding Clones":`轰炸复制体之魅影射击`,"Mirror Arrow of Prismatic Clones":`棱光复制体之魅影射击`,"Molten Lion":`熔岩狮像`,"Molten Shell":`熔岩护盾`,"Molten Strike":`熔岩之击`,"Molten Strike of the Zenith":`天顶之熔岩之击`,"Momentum Support":`动量（辅）`,"More Duration Support":`持续时间总增（辅）`,"Mortality Experimenter":`生灵实验者`,"Movement Speed - Rank 1":`移动速度 - 等级 1`,"Movement Speed and Exerted Attacks - Rank 2":`移动速度与战吼强化攻击 - 等级 2`,"Movement Speed and Flask Enchantments - Rank 3":`移动速度与药剂附魔 - 等级 3`,"Multiple Projectiles Support":`多重投射(辅)`,"Multiple Totems Support":`多重图腾（辅）`,"Multiple Traps Support":`多重陷阱(辅)`,"Multistrike Support":`多重打击(辅)`,Necromancer:`死灵法师`,Nessa:`奈莎`,"Nightblade Support":`夜刃（辅）`,"Nightbringer Lucius":`暗夜先驱卢修斯`,Nightwane:`沉夜`,"Niko's Explosives":`尼克的炸药`,"Niko's Fuel":`尼克的燃料`,"Niko's Mine":`尼克的矿洞`,"No Love for Old Ghosts":`无爱旧魂`,"No Time like the Present":`机不可失`,Note:`纪录`,"Number of degrees in multiples of 45, where 0 = Up":`以 45 度为单位的角度表示，0 代表正上方`,Oak:`欧克`,"Oak, Skullbreaker":`裂颅巨杵欧克`,"Obsidian Key":`黑曜石钥匙`,"Ode to Ralakesh":`献给拉克斯的颂歌`,"Official Orders":`正式命令`,"Ondar, the Betrayer":`叛徒恩德`,"One click copy":`一键复制文本`,"One Hand Axes":`单手斧`,"One Hand Maces":`单手锤`,"One Hand Swords":`单手剑`,"Onyx Amulet":`黑曜护身符`,"Oozeback Bloom":`腐生恐喙鸟`,"Orb of Storms":`风暴漩涡`,"Orb of Storms of Squalls":`狂风之风暴旋涡`,"Order of Protection":`守护命令`,"Oriath Docks":`奥瑞亚港`,"Oriath Enforcer":`奥瑞亚巨汉`,"Oriath Square":`奥瑞亚广场`,"Overcharge Support":`过载（辅）`,"Overexertion Support":`超能增助（辅）`,"Overheat Support":`过热（辅）`,"Overloaded Intensity Support":`过载强度（辅）`,"Overseer Krow":`监工头克劳`,"Overseer's Tower":`狱卒之塔`,Oyun:`欧优恩`,"Pacifism Support":`和平主义（辅）`,"Painted Tower Shield":`彩绘塔盾`,"Pale Commander":`苍白的指挥官`,"Paua Ring":`海灵戒指`,"Paying Tribute":`献上贡品`,"Penance Brand":`忏悔烙印`,"Penance Brand of Conduction":`传导之忏悔烙印`,"Penance Brand of Dissipation":`辐照之忏悔烙印`,Perforate:`凿击`,"Perforate of Bloodshed":`喋血之凿击`,"Perforate of Duality":`对偶之凿击`,Perpetus:`派柏图斯`,"Pestilent Strike":`致疫打击`,"Petarus and Vanja":`佩塔卢斯和芙安珈(技能杂货)`,"Petrified Blood":`赤血凝结`,"Phase Run":`暗影迷踪`,"Physical Damage - Rank 1":`物理伤害 - 等级 1`,"Physical Damage - Rank 2":`物理伤害 - 等级 2`,"Physical Damage - Rank 3":`物理伤害 - 等级 3`,"Physical to Lightning Support":`物理转闪电(辅)`,"Pierce Support":`穿透(辅)`,Piety:`派蒂`,"Piety's Pets":`派蒂的宠物`,Pikerivet:`钉工`,Piledriver:`扫荡者`,"Pinpoint Support":`会心一击（辅）`,"Plague Bearer":`灾难使徒`,Plaque:`石碑`,"Plate Vest":`铁制背心`,"Poacher's Mark":`盗猎者印记`,"Pocked Behemoth":`疮痕巴哈姆特`,"Pocked Giant":`疮痕巨兵`,"Pocked Goliath":`疮痕巨人`,"Point Blank Support":`零点射击(辅)`,"Poisonous Concoction":`毒爆灵药`,"Poisonous Concoction of Bouncing":`弹跃之毒爆灵药`,Portal:`时空之门`,"Power Charge On Critical Support":`暴击获得暴击球(辅)`,"Power Siphon":`力量抽取`,"Power Siphon of the Archmage":`大法师之力量抽取`,Precision:`精准`,"Predator Support":`掠食（辅）`,"Predatory Scorpion":`掠食天蝎`,Pride:`尊严`,"Primitive Carving":`原始的雕刻`,"Prismatic Burst Support":`棱光魔爆（辅）`,"Prisoner's Gate":`监狱大门`,Proclamation:`石制布告栏`,"Protective Link":`防御羁绊`,"Pulverise Support":`粉碎（辅）`,Puncture:`放血`,"Puncture of Shanking":`割碎之放血`,Punishment:`惩戒`,"Purifying Flame":`净化烈焰`,"Purifying Flame of Revelations":`启示之净化烈焰`,"Purity of Elements":`元素净化`,"Purity of Fire":`火焰净化`,"Purity of Ice":`冰霜净化`,"Purity of Lightning":`闪电净化`,"Pyre Support":`燃焰（辅）`,"Pyroclast Mine":`火屑地雷`,"Pyroclast Mine of Sabotage":`破坏之火屑地雷`,"Q'uru":`库鲁`,"Quartz Flask":`石英药剂`,"Queen of Despair":`格鲁丝克`,"Queen of the Sands":`沙之女神`,"Quest Id used internally by Path Of Exile":`游戏内部使用的任务 ID`,"Quest rewards a player should take":`建议领取的任务奖励`,"Quest text":`任务文本`,"Quicksilver Flask":`水银药剂`,Quickstep:`疾步`,Quivers:`箭袋`,"Rage Support":`怒火（辅）`,"Rage Vortex":`怒火漩涡`,"Rage Vortex of Berserking":`狂暴之怒火漩涡`,"Raihara, Tukohama's Loyal":`图克哈玛的鹰犬莱哈拉`,"Rain of Arrows":`箭雨`,"Rain of Arrows of Artillery":`炮击之箭雨`,"Rain of Arrows of Saturation":`饱和之箭雨`,"Raise Spectre":`召唤灵体`,"Raise Spectre of Transience":`瞬息之召唤灵体`,"Raise Zombie":`魔卫复苏`,"Raise Zombie of Falling":`殒命之魔卫复苏`,"Raise Zombie of Slamming":`猛击之魔卫复苏`,Rakango:`拉康苟`,"Rallying Cry":`激励战吼`,Reanimator:`复生师`,Reap:`绝命之镰`,Reave:`冲击波`,"Reave of Refraction":`折射之冲击波`,"Reaver Axe":`残暴之斧`,"Recurring Nightmare":`复活的梦魇`,"Refinery Construct":`精巧的钟表魔像`,"Reflection of Terror":`恐惧映射`,"Regulus, Sun's Herald":`太阳先知雷古勒斯`,"Rejuvenation Totem":`回春图腾`,"Rending Steel":`裂肉铁刃`,"Resonator Instructions":`共振器的记录`,"Return to Oriath":`回到奥瑞亚`,"Returning Projectiles Support":`投射物归返（辅）`,"Reverie Device":`地图装置`,"Reward Offer Id used internally by Path Of Exile":`游戏内部使用的奖励选项 ID`,"Rhys of Abram":`艾布拉姆的里斯`,"Righteous Fire":`正义之火`,"Righteous Fire of Arcane Devotion":`尊法之正义之火`,"Rime Sentinel":`冰霜之带`,Riptide:`魔卫女王`,"Risen Gladiator":`还魂角斗士`,"Rolling Magma":`熔岩奔涌`,"Ruby Flask":`红玉药剂`,"Ruby Ring":`红玉戒指`,"Rudiarius Felix":`自由斗士费利克斯`,"Rune Daggers":`符文匕首`,"Rupture Support":`残破（辅）`,"Rustic Sash":`素布腰带`,"Ruthless Support":`无情(辅)`,"Ryslatha, the Puppet Mistress":`食腐虫后`,"Sacred Wisps Support":`圣洁鬼灵（辅）`,"Sacrifice Support":`牺牲（辅）`,"Sadism Support":`凌虐（辅）`,"Safe and Sound":`安身之地`,"Safe Passage":`安全通道`,"Sailor's Skin":`水手之肤`,"Sanctum Temptations":`禁域考验`,"Sandworn Slaves":`恶魔奴隶`,"Sapphire Flask":`蓝玉药剂`,"Sapphire Ring":`蓝玉戒指`,"Sarn Arena":`萨恩竞技场`,"Savage Crab":`野蛮巨蟹`,"Scalding Arachnid":`灼热火蛛`,"Scale Vest":`细鳞背心`,Sceptres:`短杖`,"Scorching Ray":`灼热光线`,"Scorching Ray of Immolation":`焚灭之灼热光线`,"Scornful Herald Support":`蔑视使者（辅）`,"Scourge Arrow":`天灾之箭`,"Scourge Arrow of Menace":`威胁之天灾之箭`,"Searing Bond":`灼热连接`,"Searing Bond of Detonation":`引爆之灼热连接`,"Second Wind Support":`助力之风（辅）`,"Seismic Cry":`震地战吼`,"Seismic Trap":`震波陷阱`,"Seismic Trap of Swells":`膨胀之震波陷阱`,Seleslatha:`响尾`,Sentinel:`护卫`,"Sets portal to the current area":`在当前区域设置传送门`,"Sever the Right Hand":`铲除左右手`,"Sewer Keys":`下水道钥匙`,"Shadow of the Vaal":`瓦尔之影`,"Shakari, Queen of the Sands":`沙之女神 沙卡丽`,"Sharp and Cruel":`清理蜘蛛`,"Shattered Past":`破碎的过去`,"Shattering Steel":`破碎铁刃`,"Shattering Steel of Ammunition":`备弹之破碎铁刃`,Shavronne:`薛朗`,"Shavronne of Umbra":`黑影薛朗`,"Shavronne's Journal":`薛朗的日记`,"Shavronne's Manifesto":`薛朗的杂记`,"Shavronne's Tower":`薛朗之塔`,"Shavronne, Unbound":`薛朗, 无束者`,"Shield Charge":`重盾冲锋`,"Shield Crush":`盾牌碾压`,"Shield Crush of the Chieftain":`酋长之盾牌碾压`,"Shield of Light":`光明之盾`,Shields:`盾牌`,"Shock Nova":`闪电新星`,"Shock Nova of Procession":`加护之闪电新星`,"Shockwave Support":`震波（辅）`,"Shockwave Totem":`震波图腾`,"Shockwave Totem of Authority":`统御之震波图腾`,"Shrapnel Ballista":`散射弩炮`,"Shrapnel Ballista of Steel":`刚刃之散射弩炮`,"Shrine to Arakaali":`阿拉卡力的神殿`,"Shrine to the Brine King":`惊海之王的神殿`,"Siege Ballista":`攻城炮台`,"Siege Ballista of Splintering":`分叉之攻城炮台`,"Siege Ballista of Trarthus":`特拉特斯之攻城炮台`,"Siege Helmet":`破城之盔`,"Sigil of Power":`威能法印`,Silk:`斯克`,"Silver Flask":`真银药剂`,"Silver Locket":`银色吊坠`,Sin:`罪`,"Sin Lord":`恶咒之主`,Siosa:`萨欧赛`,"Siphoning Trap":`虹吸陷阱`,"Siphoning Trap of Pain":`痛苦之虹吸陷阱`,"Skill Gems":`技能宝石`,"Slower Projectiles Support":`投射物减速(辅)`,Smite:`惩击`,"Smite of Divine Judgement":`圣裁之惩击`,"Smoke Mine":`烟雾地雷`,Snipe:`狙击`,"Sniper's Mark":`狙击印记`,"Socket Colours":`插槽颜色`,"Socket Links - 2 to 4 Linked Sockets":`插槽链接 - 2 至 4 连结`,"Socket Numbers - 2 to 4 Sockets":`插槽数量 - 2 至 4 格`,"Solar Eclipse":`日食`,"Solar Guard":`太阳军卫`,Solaris:`日耀女神`,"Solaris Champion":`日耀斗士`,"Solaris Statue":`日耀女神雕塑`,"Solaris, Eternal Sun":`日耀女神`,"Solarsworn Archmage":`阳卫魔导士`,"Soldier Boots":`战士之靴`,"Soldier Gloves":`战士手套`,"Somatic Shell":`念动壁垒`,"Soul Link":`灵魂羁绊`,"Soul of Abberath":`割裂者 艾贝拉斯之魂`,"Soul of Arakaali":`暗影女皇 阿拉卡力之魂`,"Soul of Garukhan":`风暴女神 格鲁坎之魂`,"Soul of Gruthkul":`绝望之母 格鲁丝克之魂`,"Soul of Lunaris":`月影女神之魂`,"Soul of Ralakesh":`万面之主 拉克斯之魂`,"Soul of Ryslatha":`傀儡女王 瑞斯拉萨之魂`,"Soul of Shakari":`沙之女神 沙卡丽之魂`,"Soul of Solaris":`日耀女神之魂`,"Soul of the Brine King":`惊海之王 索亚格斯之魂`,"Soul of Tukohama":`战争之父 图克哈玛之魂`,"Soul of Yugul":`恐惧之源 尤格尔之魂`,Soulmourn:`魂悼`,Soulrend:`裂魂术`,"Soulrend of Reaping":`收割之裂魂术`,"Soulrend of the Spiral":`螺旋之裂魂术`,Spark:`电球`,"Spark of the Nova":`新星之电球`,"Spark of Unpredictability":`无常之电球`,"Spectral Helix":`灵幻旋斩`,"Spectral Helix of Trarthus":`特拉特斯之灵幻旋斩`,"Spectral Shield Throw":`灵盾投掷`,"Spectral Shield Throw of Shattering":`碎裂之灵盾投掷`,"Spectral Shield Throw of Trarthus":`特拉特斯之灵盾投掷`,"Spectral Tactician":`怨灵军师`,"Spectral Throw":`灵体投掷`,"Spectral Throw of Materialising":`具化之灵体投掷`,"Spectral Throw of Trarthus":`特拉特斯之灵体投掷`,"Spell Cascade Support":`多重范围施法(辅)`,"Spell Damage - Rank 1":`法术伤害 - 等级 1`,"Spell Damage - Rank 2":`法术伤害 - 等级 2`,"Spell Damage - Rank 3":`法术伤害 - 等级 3`,"Spell Echo Support":`施法回响(辅)`,"Spell Totem Support":`法术图腾(辅)`,"Spellblade Support":`碎影魔刃（辅）`,Spellslinger:`法术节魔`,"Spirit Offering":`灵魂奉献`,"Split Arrow":`分裂箭矢`,"Split Arrow of Splitting":`分裂之分裂箭矢`,"Splitting Steel":`分裂钢刃`,"Splitting Steel of Ammunition":`备弹之分裂钢刃`,"Stained Glass Window":`弄脏的窗户`,"Static Strike":`充能打击`,"Static Strike of Gathering Lightning":`聚雷之充能打击`,Staves:`长杖`,Steelchaw:`钢嚼`,Steelhead:`沉钢重锤`,Steelskin:`钢铁之肤`,"Stibnite Flask":`迷雾药剂`,"Storm Brand":`风暴烙印`,"Storm Brand of Indecision":`无定之风暴烙印`,"Storm Burst":`裂风雷球`,"Storm Burst of Repulsion":`抗拒之裂风雷球`,"Storm Call":`风暴呼唤`,"Storm Call of Trarthus":`特拉特斯之风暴呼唤`,"Storm Rain":`暴雨箭`,"Storm Rain of the Conduit":`引雷之暴雨箭`,"Storm Rain of the Fence":`栅篱之暴雨箭`,Stormbind:`缚雷之纹`,"Stormbind of Teleportation":`传送之缚雷之纹`,"Stormblast Mine":`雷暴地雷`,"Strange Growths":`奇异的瘤体`,Stranglecharm:`噬魂之音`,"Studded Belt":`扣钉腰带`,"Stun Support":`击晕(辅)`,"Stygian Revenant":`幽灵亡魂`,"Stygian Silverback":`冥界银背兽`,"Sub-areas inside true areas":`区域内的子区域名称`,"Sulphur Flask":`硫磺药剂`,"Summon Carrion Golem":`召唤腐化魔像`,"Summon Carrion Golem of Hordes":`结群之召唤腐化魔像`,"Summon Carrion Golem of Scavenging":`敛骸之召唤腐化魔像`,"Summon Chaos Golem":`召唤混沌魔像`,"Summon Chaos Golem of Hordes":`结群之召唤混沌魔像`,"Summon Chaos Golem of the Maelström":`混渊之召唤混沌魔像`,"Summon Flame Golem":`召唤烈焰魔像`,"Summon Flame Golem of Hordes":`结群之召唤烈焰魔像`,"Summon Flame Golem of the Meteor":`陨星之召唤烈焰魔像`,"Summon Holy Relic":`召唤圣物`,"Summon Holy Relic of Conviction":`定罪之召唤圣物`,"Summon Ice Golem":`召唤寒冰魔像`,"Summon Ice Golem of Hordes":`结群之召唤寒冰魔像`,"Summon Ice Golem of Shattering":`碎冰之召唤寒冰魔像`,"Summon Lightning Golem":`召唤闪电魔像`,"Summon Lightning Golem of Hordes":`结群之召唤闪电魔像`,"Summon Phantasm Support":`召唤幻影（辅）`,"Summon Raging Spirit":`召唤愤怒狂灵`,"Summon Raging Spirit of Enormity":`凶恶之召唤愤怒狂灵`,"Summon Reaper":`召唤追命死灵`,"Summon Reaper of Eviscerating":`裂骨之召唤追命死灵`,"Summon Reaper of Revenants":`亡魂之召唤追命死灵`,"Summon Skeletons":`召唤魔侍`,"Summon Skeletons of Archers":`射手之召唤魔侍`,"Summon Skeletons of Mages":`法师之召唤魔侍`,"Summon Skitterbots":`召唤飞掠者`,"Summon Stone Golem":`召唤巨石魔像`,"Summon Stone Golem of Hordes":`结群之召唤巨石魔像`,"Summon Stone Golem of Safeguarding":`卫护之召唤巨石魔像`,Sunder:`大地震击`,"Sunder of Earthbreaking":`裂地之大地震击`,"Sunder of Trarthus":`特拉特斯之震击`,"Sundering Axe":`裂甲巨斧`,"Support Gems":`辅助宝石`,Sweep:`横扫`,"Swift Affliction Support":`极速腐化(辅)`,"Swift Assembly Support":`迅整（辅）`,"Swiftbrand Support":`迅猛烙印（辅）`,Swordstorm:`落刃风暴`,"Targa, Beast Poacher":`狩猎者塔戈`,Tarkleigh:`塔格拉`,Tasuni:`达苏尼(命运卡交易)`,"Tectonic Slam":`破釜一击`,"Tectonic Slam of Cataclysm":`灾变之破釜一击`,"Tempest Shield":`暴风之盾`,"Templar Report":`圣堂武僧报告`,"Temple Scholar":`人间兵器`,"Temporal Chains":`时空锁链`,"Temporal Rift":`时空裂隙`,"Text to copy":`需要复制的文本`,"Text to display":`显示的文字内容`,"The Ancient Pyramid":`古金字塔`,"The Ancients":`古物`,"The Animal Pack":`兽群`,"The Apex":`巨灵之印`,"The Aqueduct":`水道遗迹`,"The Archives":`档案室`,"The Ascent":`奥瑞亚之道`,"The Ashen Fields":`灰原`,"The Atlas of Worlds":`异界图鉴`,"The Bandit Lord Alira":`帮助盗贼头目－阿莉亚`,"The Bandit Lord Kraityn":`帮助盗贼头目－克雷顿`,"The Bandit Lord Oak":`帮助盗贼头目－欧克`,"The Basilisk":`蛇怪`,"The Bath House":`古兵工厂`,"The Battlefront":`激战广场`,"The Beacon":`孤岛灯塔`,"The Belly of the Beast":`巨兽沼泽`,"The Belly of the Beast Level 1":`巨兽沼泽 1 层`,"The Belly of the Beast Level 2":`巨兽沼泽 2 层`,"The Blood Aqueduct":`赤红通道`,"The Boiling Lake":`沸水湖泊`,"The Bone Queen":`骸骨皇后`,"The Bone Sculptor":`雕骨师`,"The Bridge Encampment":`断桥营地`,"The Brine King":`惊海之王`,"The Brine King's Reef":`惊海之王的海礁`,"The Broken Bridge":`河畔断桥`,"The Burning Man":`燃烧者`,"The Burning Menace":`暴炎兽`,"The Caged Brute":`冲出监牢`,"The Canals":`藏骸运河`,"The Catacombs":`黑石陵墓`,"The Cathedral Rooftop":`教堂顶楼`,"The Causeway":`堤道`,"The Cavern of Anger":`怨忿之窟深处`,"The Cavern of Wrath":`怨忿之窟`,"The Caverns":`洞穴`,"The Chamber of Innocence":`纯净圣殿`,"The Chamber of Sins":`罪恶之室`,"The Chamber of Sins Level 1":`罪孽之殿 1 层`,"The Chamber of Sins Level 2":`罪孽之殿 2 层`,"The City of Sarn":`萨恩城废墟`,"The Climb":`碎岩山坡`,"The Cloven One":`撕裂之神`,"The Coast":`暮光海滩`,"The Conqueror Wurm":`烈战之灵`,"The Control Blocks":`控制区`,"The Crematorium":`火葬场`,"The Crossroads":`危机叉路`,"The Crypt":`寂静陵墓`,"The Crypt Level 1":`寂静陵墓 1 楼`,"The Crypt Level 2":`寂静陵墓 2 楼`,"The Crystal Veins":`水晶矿脉`,"The Den":`兽穴`,"The Depraved Trinity":`不洁三巨头`,"The Descent":`斜坡`,"The Desecrated Chambers":`亵渎之间`,"The Dishonoured Queen":`卡鲁长者`,"The Docks":`不朽海港`,"The Dread Thicket":`惊魂树洞`,"The Dreadstone":`恐惧之石`,"The Dried Lake":`干涸湖岸`,"The Dweller of the Deep":`深渊巨蟹`,"The Eater of Worlds":`世界吞噬者`,"The Ebony Barracks":`乌旗守卫兵营`,"The Elder":`裂界者`,"The Eternal Nightmare":`永恒梦魇`,"The Father of War":`战争之父`,"The Faun":`农牧之神`,"The Feeding Trough":`饲槽`,"The Fellshrine Ruins":`堕道遗迹`,"The Fetid Pool":`恶水池`,"The Flooded Depths":`水声之渊`,"The Foothills":`巨石丘陵`,"The Forbidden Sanctum":`禁忌圣所`,"The Forest Encampment":`森林营地`,"The Gemling Legion":`古灵使徒斗士`,"The Gemling Queen":`宝石皇后`,"The Grain Gate":`稻穗之门`,"The Grand Arena":`大竞技场`,"The Grand Promenade":`月色回廊`,"The Great White Beast":`白色巨兽`,"The Great White Bones":`白色巨兽的骸骨`,"The Harbour Bridge":`港湾大桥`,"The Harvest":`育灵之室`,"The Hidden Underbelly":`隐蔽底港`,"The High Gardens":`贵族花园`,"The Hundred Foot Shadow":`影百足`,"The Immortal Syndicate":`不朽辛迪加`,"The Imperial Fields":`帝国平原`,"The Imperial Gardens":`皇家花园`,"The Infernal Seal":`狱火灵记`,"The Karui Fortress":`卡鲁要塞`,"The Key to Freedom":`自由之钥`,"The King of Desire":`欲望之王`,"The King of Fury":`暴怒之王`,"The King's Feast":`王的盛宴`,"The Ledge":`沉寂海崖`,"The Library":`图书馆`,"The Lord's Labyrinth":`帝王试炼迷宫`,"The Lost Expedition":`失落的探险`,"The Lower Prison":`禁灵之狱下层`,"The Lunaris Concourse":`月影广场`,"The Lunaris Temple":`月神殿`,"The Lunaris Temple Level 1":`月影神殿 1 层`,"The Lunaris Temple Level 2":`月影神殿 2 层`,"The Marketplace":`市集地带`,"The Marooned Mariner":`被放逐的水手`,"The Master of a Million Faces":`盗贼头目`,"The Matriarch":`火神母祖`,"The Maven":`贤主`,"The Maven's Game":`贤主的游戏`,"The Mines Level 1":`漆黑矿坑:第 1 层`,"The Mines Level 2":`漆黑矿坑:第 2 层`,"The Mother of Spiders":`阿拉卡力`,"The Mud Flats":`炙热盐沼`,"The Northern Forest":`北部密林`,"The Oasis":`绿洲`,"The Old Fields":`前哨原野`,"The Ossuary":`藏古堂`,"The Prison":`监狱`,"The Puppet Mistress":`傀儡女王`,"The Purity Chronicles":`纯净编年史`,"The Quarry":`采石场`,"The Quay":`中转码头`,"The Ravaged Square":`广场遗迹`,"The Ravenous God":`贪婪之神`,"The Refinery":`精炼厂`,"The Reliquary":`遗物圣所`,"The Ribbon Spool":`丝带线轴`,"The Ridge":`寂默山岭`,"The Risen Matriarch":`升起的母祖`,"The Riverways":`河道`,"The Rogue Harbour":`黄金港`,"The Root of the Problem":`盘根错节`,"The Rotten Matriarch":`腐朽的母祖`,"The Rotting Core":`育灵之室`,"The Ruined Square":`广场遗迹`,"The Ruler of Highgate":`海加特山脉的统治者`,"The Sarn Encampment":`萨恩营地`,"The Sarn Ramparts":`奇迹之墙`,"The Sceptre of God":`神权之塔`,"The Searing Exarch":`灼督`,"The Sewers":`下水道`,"The Ship Graveyard":`魅影船墓`,"The Ship Graveyard Cave":`魅影船墓洞穴`,"The Shipyard Terror":`虚影亡魂`,"The Silver Locket":`银色吊坠`,"The Siren's Cadence":`海妖之歌`,"The Slave Pens":`奴隶深坑`,"The Slums":`贫民窟`,"The Solaris Concourse":`日耀广场`,"The Solaris Temple":`日神殿`,"The Solaris Temple Level 1":`日耀神殿 1 层`,"The Solaris Temple Level 2":`日耀神殿 2 层`,"The Southern Forest":`南部森林`,"The Storm Blade":`风暴之刃`,"The Submerged Passage":`海潮地穴`,"The Templar Courts":`圣堂高庭`,"The Temple of Decay Level 1":`坠欲之殿 1 层`,"The Temple of Decay Level 2":`坠欲之殿 2 层`,"The Tidal Island":`海潮孤岛`,"The Torched Courts":`化作火海的高庭`,"The Toxic Conduits":`剧毒管道`,"The Trarthan Code":`特拉特斯规范`,"The Tunnel":`隧道`,"The Twilight Strand":`绝望岩滩`,"The Undertaker's Apprentice":`送葬者的学徒`,"The Upper Prison":`禁灵之狱上层`,"The Upper Sceptre of God":`上层神权之塔`,"The Vaal City":`瓦尔古城`,"The Vaal Ruins":`瓦尔废墟`,"The Vastiri Desert":`贫瘠之地`,"The Voltaic Seal":`雷霆灵记`,"The Way Forward":`开路先锋`,"The Weaver":`巨蛛之母`,"The Weaver's Chambers":`织网者巢穴`,"The Western Forest":`西部密林`,"The Wetlands":`湿地`,"The White Death":`白色死兆`,"The Wings of Vastiri":`瓦斯提里之翼`,"Thirst for Blood":`鲜血渴求`,Thistlesage:`蒺藜兽`,"Through Sacred Ground":`梦中圣地`,"Thrusting One Hand Swords":`细剑`,Thunderstorm:`雷霆风暴`,Tolman:`托尔曼`,Tomahawk:`征战之斧`,"Topaz Flask":`黄玉药剂`,"Topaz Ring":`黄玉戒指`,"Torchoak Grove":`火柳`,Tornado:`龙卷旋风`,"Tornado of Elemental Turbulence":`元素激变之龙卷旋风`,"Tornado Shot":`龙卷射击`,"Tornado Shot of Cloudburst":`穿云之龙卷射击`,"Toward the Future":`走向未来`,"Toxic Rain":`毒雨`,"Toxic Rain of Sporeburst":`孢子迸发之毒雨`,"Toxic Rain of Withering":`凋零之毒雨`,"Transfusion Support":`渗透（辅）`,"Transmutia Device":`转化装置`,"Trap and Mine Damage Support":`陷阱及地雷伤害(辅)`,"Trap Support":`陷阱(辅)`,"Traps and Mines - Rank 1":`陷阱与地雷 - 等级 1`,"Trauma Support":`内伤（辅）`,"Trigger a Socketed Spell when you Use a Skill":`使用技能时触发插槽内的法术`,"Trinity Support":`三位一体（辅）`,Triskeriaki:`特里斯克里雅奇`,"Triumph of Innocence":`纯净之神的胜利`,"Tsoagoth, The Brine King":`惊海之王索亚格斯`,Tukohama:`图克哈玛`,"Tukohama, Karui God of War":`战争之父图克哈玛`,Tunneler:`隧道工人`,Tunnelworm:`钩虫`,"Turquoise Amulet":`青玉护身符`,"Tutorial NPC":`教学导师`,"Two Hand Maces":`双手锤`,"Two Hand Swords":`双手剑`,"Two-Stone Ring":`双玉戒指`,"Unbound Ailments Support":`异常爆发(辅)`,"Uncarved Gemstone":`待雕琢的宝石`,"Undying Engineer":`不朽斗士`,"Undying Evangelist":`不朽福音`,"Undying Ravager":`不朽破坏者`,Unearth:`亵渎之矛`,"Unearthing the Past":`往日挖掘`,Ungulath:`羊人王恩格拉斯`,"Unholy Trinity Support":`不洁三体（辅）`,"Unleash Support":`释出（辅）`,"Unlocks the waypoint for the current zone":`解锁当前区域的传送点`,"Unset Ring":`潜能之戒`,"Urgent Orders Support":`紧急号令（辅）`,"Use a waypoint":`使用传送点`,"Use the portal in the current area, places a portal if required":`使用当前区域的传送门，必要时会放置传送门`,Utula:`尤图拉`,"Utula, Stone and Steel":`坚若磐石尤图拉`,"Vaal Absolution":`瓦尔：赦罪`,"Vaal Ancestral Warchief":`瓦尔：先祖战士长`,"Vaal Animate Weapon":`瓦尔：幻化武器`,"Vaal Arc":`瓦尔：电弧`,"Vaal Arctic Armour":`瓦尔：极地装甲`,"Vaal Blade Flurry":`瓦尔：刀刃乱舞`,"Vaal Blade Vortex":`瓦尔：飞刃风暴`,"Vaal Blight":`瓦尔：枯萎`,"Vaal Breach":`瓦尔：裂隙`,"Vaal Burning Arrow":`瓦尔：燃烧箭矢`,"Vaal Caustic Arrow":`瓦尔：腐蚀箭矢`,"Vaal Clarity":`瓦尔：清晰`,"Vaal Cleave":`瓦尔：劈砍`,"Vaal Cold Snap":`瓦尔：霜暴`,"Vaal Cyclone":`瓦尔：旋风斩`,"Vaal Detonate Dead":`瓦尔：爆灵术`,"Vaal Discipline":`瓦尔：纪律`,"Vaal Domination":`瓦尔：霸气之击`,"Vaal Double Strike":`瓦尔：双重打击`,"Vaal Earthquake":`瓦尔：震地`,"Vaal Fireball":`瓦尔：火球`,"Vaal Firestorm":`瓦尔：烈炎风暴`,"Vaal Flameblast":`瓦尔：烈焰爆破`,"Vaal Flicker Strike":`瓦尔：闪现打击`,"Vaal Glacial Hammer":`瓦尔：冰霜之锤`,"Vaal Grace":`瓦尔：优雅`,"Vaal Ground Slam":`瓦尔：裂地之击`,"Vaal Haste":`瓦尔：迅捷`,"Vaal Ice Nova":`瓦尔：冰霜新星`,"Vaal Ice Shot":`瓦尔：冰霜射击`,"Vaal Immortal Call":`瓦尔：不朽怒嚎`,"Vaal Impurity of Fire":`瓦尔：不净之火`,"Vaal Impurity of Ice":`瓦尔：不净之冰`,"Vaal Impurity of Lightning":`瓦尔：不净之雷`,"Vaal Lightning Arrow":`瓦尔：闪电箭矢`,"Vaal Lightning Strike":`瓦尔：闪电打击`,"Vaal Lightning Trap":`瓦尔：闪电陷阱`,"Vaal Lightning Warp":`瓦尔：闪电传送`,"Vaal Molten Shell":`瓦尔：熔岩护盾`,"Vaal Molten Strike":`瓦尔：熔岩之击`,"Vaal Power Siphon":`瓦尔：力量抽取`,"Vaal Rain of Arrows":`瓦尔：箭雨`,"Vaal Reap":`瓦尔：绝命之镰`,"Vaal Reave":`瓦尔：冲击波`,"Vaal Rejuvenation Totem":`瓦尔：回春图腾`,"Vaal Righteous Fire":`瓦尔：正义之火`,"Vaal Sacrifice Support":`瓦尔献祭（辅）`,"Vaal Skill Damage - Rank 1":`瓦尔技能伤害 - 等级 1`,"Vaal Smite":`瓦尔：惩击`,"Vaal Spark":`瓦尔：电球`,"Vaal Spectral Throw":`瓦尔：灵体投掷`,"Vaal Storm Call":`瓦尔：风暴呼唤`,"Vaal Summon Skeletons":`瓦尔：召唤魔侍`,"Vaal Temptation Support":`瓦尔诱惑（辅）`,"Vaal Venom Gyre":`瓦尔：剧毒旋风`,"Vaal Volcanic Fissure":`瓦尔：火山裂缝`,"Vakali Totem":`瓦卡里图腾`,"Vampiric Link":`血灵羁绊`,"Vendor rewards a player should buy":`建议购买的商店奖励`,"Vengeful Cry":`复仇咆哮`,"Venom Gyre":`剧毒旋风`,"Version to complete, normal/cruel/merciless/eternal":`迷宫难度：普通/残酷/残暴/永恒`,"Vicious Projectiles Support":`邪恶投掷(辅)`,"Victario's Secrets":`维多里奥的秘宝`,"Victario's Writings":`维多里奥的手稿`,"Vigilant Strike":`戒备打击`,"Vile Toxins Support":`猛毒(辅)`,Vilenta:`薇伦塔`,"Vilenta's Vengeance":`薇伦塔的复仇`,"Viper Strike":`毒蛇打击`,"Viper Strike of the Mamba":`曼巴之毒蛇打击`,"Viridian Jewel":`翠绿珠宝`,Vitality:`活力`,"Void Manipulation Support":`虚空操纵(辅)`,"Void Shockwave Support":`虚空震波（辅）`,"Void Sphere":`虚空法球`,"Void Sphere of Rending":`撕碎之虚空法球`,Voidscream:`虚空之吼`,"Voidstorm Support":`虚空风暴（辅）`,"Volatile Dead":`灵体火球`,"Volatile Dead of Confinement":`拘束之灵体火球`,"Volatile Dead of Seething":`沸燃之灵体火球`,"Volatility Support":`无常（辅）`,"Volcanic Fissure":`火山裂缝`,"Volcanic Fissure of Snaking":`蜿蜒之火山裂缝`,"Volcanic Golem":`火山魔像`,"Voll's Confession":`福尔的自白`,"Voll, Emperor of Purity":`帝王福尔`,"Volley Support":`齐射(辅)`,"Voltaxic Burst":`雷电魔爆`,Vortex:`漩涡`,"Vortex of Projection":`投射之漩涡`,Vulnerability:`脆弱`,"Wall of Force":`力场之墙`,Wands:`法杖`,"War Banner":`战旗`,"Warlord's Mark":`督军印记`,Warstaves:`战杖`,"Waste Lurcher":`废水混种`,"Wave of Conviction":`定罪波`,"Wave of Conviction of Trarthus":`特拉特斯之定罪波`,"Weathered Carving":`风化的石雕`,"Web of Secrets":`灾异之兆`,"Weylam Roth":`威勒姆罗斯`,"Whirling Blades":`回旋之刃`,"Wild Strike":`野性打击`,"Wild Strike of Extremes":`极限之野性打击`,"Windburst Support":`风爆术（辅）`,"Winter Orb":`寒冬宝珠`,"Wintertide Brand":`冬潮烙印`,Wither:`死亡凋零`,"Withering Step":`凋零步`,"Withering Touch Support":`凋零之触（辅）`,"Worn Carving":`原始的雕刻`,Wrath:`雷霆`,"Wyrmscale Boots":`地蝮鳞长靴`,"Wyrmscale Gauntlets":`蝮鳞手套`,Yeena:`伊娜`,"Yugul, Reflection of Terror":`恐惧之源 尤格尔`,"Zana, the Originator":`札娜，起源者`,"Zealot Helmet":`热战之盔`,Zealotry:`奋锐光环`},Pe={"1 Passive Skill Points":`1 點天賦點數`,"2 Passive Respec Points":`2 點天賦重置點`,"2 Passive Skill Points":`2 點天賦點數`,"A Call to Arms":`召集部隊`,"A direction":`指示方向`,"A Dirty Job":`腐水之息`,"A Fixture of Fate":`命運之語`,"A Glimpse Beyond":`驚鴻一瞥`,"A Swig of Hope":`重生的渴望`,"A waypoint":`標記當前區域的傳送點`,"Abberath, the Cloven One":`堅蹄亡羊艾貝拉斯`,Absolution:`赦免`,"Absolution of Inspiring":`赦免．啟發`,"Accuracy - Rank 1":`命中值 - 等級 1`,"Accuracy - Rank 2":`命中值 - 等級 2`,"Added Chaos Damage Support":`附加混沌傷害輔助`,"Added Cold Damage Support":`附加冰冷傷害輔助`,"Added Fire Damage Support":`附加火焰傷害輔助`,"Added Lightning Damage Support":`附加閃電傷害輔助`,"Additional Accuracy Support":`額外命中輔助`,"Advanced Traps Support":`進階陷阱輔助`,"Agate Amulet":`瑪瑙護身符`,"Aiding an Archivist":`幫助檔案管理員`,"Ailment, Stun and Curse Mitigation - Rank 1":`異常、暈眩與詛咒減免 - 等級 1`,"Alchemist's Mark":`煉金術士印記`,Alira:`阿莉亞`,"Alira Darktongue":`禁忌祭者阿莉亞`,"All Attributes - Rank 1":`全屬性 - 等級 1`,"All Attributes - Rank 2":`全屬性 - 等級 2`,"All Resistances - Rank 1":`全元素抗性 - 等級 1`,"All Resistances - Rank 2":`全元素抗性 - 等級 2`,Allflame:`不滅之火`,"Amarissa, Daughter of Merveil":`莫薇兒之女艾瑪莉莎`,"Amber Amulet":`琥珀護身符`,Ambush:`伏擊`,"Amethyst Flask":`紫晶藥劑`,"An End to Hunger":`終結饑荒`,"An Indomitable Spirit":`不屈意志`,"Ancestral Call Support":`先祖怒嚎輔助`,"Ancestral Cry":`先祖戰吼`,"Ancestral Protector":`先祖衛士`,"Ancestral Warchief":`先祖戰士長`,"Ancient Graffiti":`古老的壁畫`,"Ancient Notebook":`古老的壁畫`,"Ancient Reverie Device":`古老的地圖裝置`,Anger:`憤怒`,"Animate Guardian":`幻化守衛`,"Animate Guardian of Smiting":`幻化守衛．重擊`,"Animate Weapon":`幻化武器`,"Animate Weapon of Ranged Arms":`幻化武器．遠程`,"Animate Weapon of Self Reflection":`幻化武器．反射`,"Ankh of Eternity":`永恆的十字架`,"Annihilation Support":`湮滅輔助`,"Aquamarine Flask":`海藍藥劑`,Arc:`電弧`,"Arc of Oscillating":`電弧．震盪`,"Arc of Surging":`電弧．波動`,"Arcane Cloak":`秘能披風`,"Arcane Surge Support":`秘能波動輔助`,"Arcanist Brand":`奧術烙印`,"Archmage Support":`魔幻輔助`,Archnemesis:`強襲宿敵`,"Arctic Armour":`極地裝甲`,"Area Id used internally by Path Of Exile":`遊戲內部使用的區域 ID`,"Armageddon Brand":`末日烙印`,"Armageddon Brand of Recall":`末日烙印．呼喚`,"Armageddon Brand of Volatility":`末日烙印．揮發`,"Arrogance Support":`傲慢輔助`,"Arrow Nova Support":`箭矢新星輔助`,"Arteri's Letter":`阿特力的信`,"Artillery Ballista":`火砲砲塔`,"Artillery Ballista of Cross Strafe":`火砲砲塔 ．掃射`,"Artillery Ballista of Focus Fire":`火砲砲塔 ．集火`,"Ash Prophet":`烈火咒師`,"Aspirant's Trial":`昇華試煉`,"Aspirants' Plaza":`試煉者廣場`,"Assassin's Mark":`刺客印記`,"Attack and Cast Speed - Rank 2":`攻擊與施法速度 - 等級 2`,"Attack, Cast and Warcry Speed - Rank 1":`攻擊、施法與戰吼速度 - 等級 1`,"Attributes - Rank 2":`單一屬性 - 等級 2`,Autoexertion:`自動竭盡`,Automation:`自動化`,Avarius:`伊爾莉斯`,"Avarius, Reassembled":`復仇者伊爾莉斯`,"Awakened Added Chaos Damage Support":`覺醒．附加混沌傷害輔助`,"Awakened Added Cold Damage Support":`覺醒．附加冰冷傷害輔助`,"Awakened Added Fire Damage Support":`覺醒．附加火焰傷害輔助`,"Awakened Added Lightning Damage Support":`覺醒．附加閃電傷害輔助`,"Awakened Ancestral Call Support":`覺醒．先祖怒嚎輔助`,"Awakened Arrow Nova Support":`覺醒．箭矢新星輔助`,"Awakened Blasphemy Support":`覺醒．詛咒光環輔助`,"Awakened Brutality Support":`覺醒．殘虐輔助`,"Awakened Burning Damage Support":`覺醒．燃燒傷害輔助`,"Awakened Cast On Critical Strike Support":`覺醒．暴擊時施放輔助`,"Awakened Cast While Channelling Support":`覺醒．引導時施放輔助`,"Awakened Chain Support":`覺醒．連鎖輔助`,"Awakened Cold Penetration Support":`覺醒．冰冷穿透輔助`,"Awakened Controlled Destruction Support":`覺醒．精準破壞輔助`,"Awakened Deadly Ailments Support":`覺醒．致命異常輔助`,"Awakened Elemental Damage with Attacks Support":`覺醒．元素攻擊傷害輔助`,"Awakened Elemental Focus Support":`覺醒．元素集中輔助`,"Awakened Empower Support":`覺醒．賦予輔助`,"Awakened Enhance Support":`覺醒．增幅輔助`,"Awakened Enlighten Support":`覺醒．啟蒙輔助`,"Awakened Fire Penetration Support":`覺醒．火焰穿透輔助`,"Awakened Fork Support":`覺醒．分裂輔助`,"Awakened Generosity Support":`覺醒．和善輔助`,"Awakened Greater Multiple Projectiles Support":`覺醒．高階多重投射輔助`,"Awakened Hextouch Support":`覺醒．咒術降臨輔助`,"Awakened Increased Area of Effect Support":`覺醒．增加範圍效果輔助`,"Awakened Lightning Penetration Support":`覺醒．閃電穿透輔助`,"Awakened Melee Physical Damage Support":`覺醒．近戰物理傷害輔助`,"Awakened Melee Splash Support":`覺醒．近戰傷害擴散輔助`,"Awakened Minion Damage Support":`覺醒．召喚物傷害輔助`,"Awakened Multistrike Support":`覺醒．多重打擊輔助`,"Awakened Spell Cascade Support":`覺醒．秘能爆發輔助`,"Awakened Spell Echo Support":`覺醒．施放迴響輔助`,"Awakened Swift Affliction Support":`覺醒．極速苦痛輔助`,"Awakened Unbound Ailments Support":`覺醒．無邊異能輔助`,"Awakened Unleash Support":`覺醒．釋放輔助`,"Awakened Vicious Projectiles Support":`覺醒．猛毒投射物輔助`,"Awakened Void Manipulation Support":`覺醒．虛空操縱輔助`,"Awoken Giant":`覺醒巨人`,"Ball Lightning":`天雷之珠`,"Ball Lightning of Orbiting":`天雷之珠．軌跡`,"Ball Lightning of Static":`天雷之珠．靜電`,"Ballista Totem Support":`砲塔圖騰輔助`,Bane:`災厄`,"Bane of Condemnation":`災厄．譴責`,"Banner of Action":`行動之兆`,"Banner of Knowledge":`知識之兆`,"Banner of Passion":`激情之兆`,Bannon:`班恩`,"Barbed Club":`銳刺木棒`,Barkhul:`巴爾克霍`,Barrage:`彈幕`,"Barrage of Volley Fire":`彈幕．齊射`,"Barrage Support":`彈幕輔助`,"Basalt Flask":`石化藥劑`,"Battle Lamellar":`爭戰鱗甲`,"Battlemage's Cry":`戰法戰吼`,"Bear Trap":`捕熊陷阱`,"Bear Trap of Skewers":`捕熊陷阱．串燒`,"Behead Support":`斬首輔助`,Berserk:`狂戰`,Bestel:`畢斯特`,"Bestel's Epic":`畢斯特之詩`,"Bismuth Flask":`灰岩藥劑`,"Black Death":`災疫之兆`,"Black Death, Pain Unending":`無盡折磨災疫之兆`,"Blackguard Arcmage":`烏旗守衛雷使`,"Blackguard Mage":`烏旗守衛法師`,"Blade Blast":`劍刃爆破`,"Blade Blast of Dagger Detonation":`劍刃爆破．匕首爆炸`,"Blade Blast of Unloading":`劍刃爆破．卸載`,"Blade Flurry":`刀鋒亂舞`,"Blade Flurry of Incision":`刀鋒亂舞．切割`,"Blade Trap":`刀鋒陷阱`,"Blade Trap of Greatswords":`刀鋒陷阱．巨劍`,"Blade Trap of Laceration":`刀鋒陷阱．撕裂`,"Blade Vortex":`飛刃風暴`,"Blade Vortex of the Scythe":`飛刃風暴．鐮刀`,Bladefall:`虛空刀雨`,"Bladefall of Impaling":`虛空刀雨．穿刺`,"Bladefall of Trarthus":`特拉特斯虛空刀雨`,"Bladefall of Volleys":`虛空刀雨．齊射`,Bladestorm:`旋天劍舞`,"Bladestorm of Uncertainty":`旋天劍舞．未知`,"Blasphemy Support":`詛咒光環輔助`,"Blast Rain":`爆裂箭雨`,"Blast Rain of Trarthus":`特拉特斯爆裂箭雨`,"Blastchain Mine Support":`連鎖爆破地雷輔助`,"Blazing Salvo":`熾熱魔炮`,"Bleached Horror":`白漆恐懼`,"Blessed Call Support":`禮贈呼喚輔助`,"Blessed Sister":`受洗聖女`,Blight:`萎滅`,"Blight of Atrophy":`萎滅．萎縮`,"Blight of Contagion":`萎滅．瘟疫`,Blightblade:`萎滅飛刃`,"Blind Support":`致盲輔助`,"Blink Arrow":`閃現射擊`,"Blink Arrow of Bombarding Clones":`閃現射擊．炸彈客`,"Blink Arrow of Prismatic Clones":`閃現射擊．神秘客`,"Block Chance Reduction Support":`減少格擋率輔助`,"Blood and Sand":`血腥沙戮`,"Blood Chieftain":`血面酋長`,"Blood Crucible":`血腥匣盒`,"Blood Rage":`鮮血狂怒`,"Bloodlust Support":`嗜血輔助`,"Bloodsoaked Banner Support":`浸血鬥旗輔助`,"Bloodthirst Support":`渴血輔助`,"Body Armours":`胸甲`,Bodyswap:`屍術傳送`,"Bodyswap of Sacrifice":`屍術傳送．獻祭`,"Bone Husk":`削骨者`,"Bone Offering":`骸骨奉獻`,"Bone Ring":`骸骨之戒`,"Bone Stalker":`骷髏之影`,"Bonechill Support":`寒冰刺骨輔助`,Boneshatter:`碎骨`,"Boneshatter of Carnage":`碎骨．屠殺`,"Boneshatter of Complex Trauma":`碎骨．創傷`,"Bonespire Support":`骨刺輔助`,"Book of Regrets":`後悔之書`,"Book of Skill":`天賦之書`,Boots:`鞋子`,"Bottled Storm":`瓶風暴`,Boulderback:`礫石巨獸`,Bows:`弓`,"Brand Recall":`烙印呼喚`,Bravalo:`布拉瓦羅`,"Breaking Some Eggs":`打破鳥蛋`,"Breaking the Seal":`突破封印`,Brinecrack:`海洋裂隙`,"Bringer of Souls":`靈魂侍者`,"Brood Princess":`海蟲之母`,"Brutality Support":`殘虐輔助`,"Brutus, the Warden":`典獄長布魯特斯`,"Bundle of Woe":`悲痛之集`,"Burning Arrow":`燃燒箭矢`,"Burning Arrow of Vigour":`燃燒箭矢．活力`,"Burning Damage Support":`燃燒傷害輔助`,Burrower:`地穴掘者`,"Calaf, Headstaver":`裂顱者卡拉夫`,"Caliga, Imperatrix":`大將卡莉嘉`,"Captain Arteri":`阿特力隊長`,"Captain Aurelianus":`奧瑞萊恩斯隊長`,"Captain Fairgraves":`費爾船長`,"Carnage Chieftain":`殺戮酋長`,"Carrion Queen":`食腐蟲后`,"Cast On Critical Strike Support":`暴擊時施放輔助`,"Cast on Death Support":`死亡時施放輔助`,"Cast on Melee Kill Support":`近戰擊殺時施放輔助`,"Cast on Ward Break Support":`保護破碎時施放輔助`,"Cast when Damage Taken Support":`受傷時施放輔助`,"Cast when Stunned Support":`暈眩時施放輔助`,"Cast while Channelling Support":`引導時施放輔助`,"Cato, Scholar of Light":`光明學者卡托`,"Caustic Arrow":`腐蝕箭矢`,"Caustic Arrow of Poison":`腐蝕箭矢．中毒`,"Censer Relic":`香爐聖物`,"Chain Belt":`扣鏈腰帶`,"Chain Hook":`奪魂勾索`,"Chain Hook of Trarthus":`特拉特斯奪魂勾索`,"Chain Support":`連鎖輔助`,"Chainmail Vest":`鎖鏈背心`,"Chance to Bleed Support":`機率流血輔助`,"Chance to Flee Support":`機率逃跑輔助`,"Chance to Poison Support":`機率中毒輔助`,"Chaos Damage - Rank 1":`混沌傷害 - 等級 1`,"Chaos Damage - Rank 2":`混沌傷害 - 等級 2`,"Chaos Guardian":`混沌守衛`,"Charged Dash":`雷霆衝鋒`,"Charged Dash of Projection":`雷霆衝鋒．投射`,"Charged Mines Support":`地雷充能輔助`,"Charged Traps Support":`陷阱充能輔助`,Chatters:`寒霜之語`,"Chest 1":`寶箱1`,"Chest 2":`寶箱2`,"Citrine Amulet":`黃晶護身符`,Clarissa:`卡爾麗莎`,Clarity:`清晰`,Claws:`爪`,Cleave:`劈砍`,"Cleave of Rage":`劈砍．盛怒`,"Close Combat Support":`近身戰輔助`,"Cloth Belt":`飾布腰帶`,"Cluster Traps Support":`散彈陷阱輔助`,"Cobalt Jewel":`鈷藍珠寶`,"Cobra Lash":`毒蛇鞭笞`,"Cold Damage - Rank 1":`冰霜傷害 - 等級 1`,"Cold Damage - Rank 2":`冰霜傷害 - 等級 2`,"Cold Penetration Support":`冰冷穿透輔助`,"Cold Snap":`霜暴`,"Cold Snap of Power":`霜暴．暴擊`,"Cold to Fire Support":`寒冰轉烈焰輔助`,"Colossus Crusher":`巨像破壞者`,"Combustion Support":`燃燒輔助`,"Commander Kirac":`指揮官基拉克`,"Companionship Support":`羈絆輔助`,"Complete the ascendancy trial in the current area":`完成當前區域的昇華試煉`,"Complete The Lord's Labyrinth":`完成昇華迷宮`,"Concentrated Effect Support":`集中效應輔助`,Conductivity:`導電`,Conflagration:`燎原箭矢`,"Congregation Support":`聚眾輔助`,"Consecrated Path":`奉獻之路`,"Consecrated Path of Endurance":`奉獻之路．持久`,Contagion:`瘟疫`,"Contagion of Subsiding":`瘟疫．消退`,"Contagion of Transference":`瘟疫．移轉`,"Controlled Blaze Support":`精準烈火輔助`,"Controlled Destruction Support":`精準破壞輔助`,"Conversion Trap":`迷魅陷阱`,Convocation:`號召`,"Cooldown Recovery Support":`冷卻恢復輔助`,"Coral Ring":`珊瑚戒指`,"Corpus Malachus":`瑪拉凱遺骸`,"Corrupting Cry Support":`汙染戰吼輔助`,"Corrupting Fever":`腐化潮`,"Corundum Flask":`金剛藥劑`,"Crackling Lance":`碎雷電閃`,"Crackling Lance of Branching":`碎雷電閃．分支`,"Crackling Lance of Disintegration":`碎雷電閃．毀滅`,Crawler:`食腐蟲`,"Creeping Frost":`寒霜滲透`,"Creeping Frost of Floes":`寒霜滲透．浮冰`,Cremation:`熔炎送葬`,"Cremation of Exhuming":`熔炎送葬．深掘`,"Cremation of the Volcano":`熔炎送葬．火山`,"Crimson Jewel":`赤紅珠寶`,"Critical Strike Affliction Support":`暴擊苦痛輔助`,"Crow Keeper":`養烏人`,"Cruelty Support":`殘酷輔助`,"Crushing Fist":`粉碎之拳`,"Cull the Weak Support":`弱者撲殺輔助`,"Culling Strike Support":`撲殺輔助`,"Cultist Tract":`教派`,"Currency cost, wisdom/transmutation/alteration/chance/alchemy":`所需貨幣：智慧卷軸/改造石/改良石/機遇石/鍊金石`,"Cursed Ground Support":`詛咒地面輔助`,Cutlass:`軍用長刃`,Cyclone:`旋風斬`,"Cyclone of Tumult":`旋風斬．騷動`,Daggers:`匕首`,"Damage on Full Life Support":`滿血傷害輔助`,"Damage over Time - Rank 1":`持續傷害 - 等級 1`,"Damp Diary":`浸溼的日記`,Daresso:`德瑞索`,"Daresso's Dream":`德瑞索的幻境`,"Daresso, King of Swords":`鬥劍之王德瑞索`,"Dark Pact":`暗夜血契`,"Dark Pact of Trarthus":`特拉特斯暗夜血契`,Dash:`幻步`,"Deadly Ailments Support":`致命異常輔助`,"Deal with the Bandits":`與盜賊們打交道`,"Death and Rebirth":`死與生`,"Death Bishop":`死亡咒師`,"Death to Purity":`死得其所`,"Decay Support":`腐化輔助`,"Decoy Totem":`誘餌圖騰`,"Defences - Rank 1":`防禦數值 - 等級 1`,"Defences - Rank 2":`防禦數值 - 等級 2`,"Defiance Banner":`反抗之旗`,"Defiled Proclamation":`汙穢的諭示`,"Definitely Oak":`肯定是歐克`,Desecrate:`褻瀆`,Despair:`絕望`,"Destructive Link":`連結：破壞`,Determination:`堅定`,"Detonate Dead":`屍體爆破`,"Detonate Dead of Chain Reaction":`屍體爆破．連鎖`,"Detonate Dead of Scavenging":`屍體爆破．清洗`,"Detonate Mines":`引爆地雷`,"Devour Support":`吞噬輔助`,"Devouring Totem":`吞噬圖騰`,"Devout Chainmail":`虔誠鏈甲`,Diabolist:`惡魔咒師`,Dialla:`達拉夫人`,"Diamond Flask":`寶鑽藥劑`,"Dimachaeri Cassius":`狄馬奇利卡希爾斯`,Discharge:`解放`,"Discharge of Misery":`解放．苦痛`,Discipline:`紀律`,"Divine Blast":`神聖爆破`,"Divine Blessing Support":`神聖祝福輔助`,"Divine Ire":`聖怒`,"Divine Ire of Disintegration":`聖怒．毀滅`,"Divine Ire of Holy Lightning":`聖怒．雷神`,"Divine Life Flask":`不朽生命藥劑`,"Divine Mana Flask":`不朽魔力藥劑`,"Divine Retribution":`神聖制裁`,"Divine Sentinel Support":`聖潔守望輔助`,"Doedre Darktongue":`禁忌祭者德瑞`,"Doedre's Cesspool":`德瑞的腐化池`,"Doedre's Manifesto":`德瑞的宣言`,"Doedre's Torment":`德瑞的折磨`,"Doedre, Darksoul":`黯黑靈魂德瑞`,"Dominating Blow":`霸氣之擊`,"Dominating Blow of Inspiring":`霸氣之擊．啟發`,Dominus:`神主`,Doorman:`守門人`,"Double Resistances - Rank 1":`雙重抗性 - 等級 1`,"Double Resistances - Rank 2":`雙重抗性 - 等級 2`,"Double Resistances - Rank 3":`雙重抗性 - 等級 3`,"Double Strike":`雙重打擊`,"Double Strike of Impaling":`雙重打擊．穿刺`,"Double Strike of Momentum":`雙重打擊．氣勢`,"Dread Banner":`恐懼之旗`,Droolmaw:`垂涎裂齒獸`,"Dual Strike":`雙持打擊`,"Dual Strike of Ambidexterity":`雙持打擊．靈活`,"Dusk Horror":`破曉恐懼`,"Dying Exile":`垂死的流亡者`,"Dying for a Fight":`我的拳頭感到飢渴`,"Earthbreaker Support":`地破輔助`,Earthquake:`震地`,"Earthquake of Amplification":`震地．增幅`,Earthshatter:`碎地重擊`,"Earthshatter of Fragility":`碎地重擊．易碎`,"Earthshatter of Prominence":`碎地重擊．卓越`,"Ebony Tower Shield":`烏木塔盾`,"Eclipse Support":`朔望輔助`,"Efficacy Support":`效能輔助`,"Effigy of Fear":`恐懼雕像`,"Einhar's Hunt":`埃哈的狩獵`,"Einhar's Menagerie":`埃哈的獸園`,"Eldritch Blasphemy Support":`異界詛咒光環輔助`,"Elegant Ringmail":`權貴環甲`,"Elemental Army Support":`元素軍隊輔助`,"Elemental Damage with Attacks - Rank 1":`攻擊附加元素傷害 - 等級 1`,"Elemental Damage with Attacks Support":`元素攻擊傷害輔助`,"Elemental Focus Support":`元素集中輔助`,"Elemental Hit":`元素打擊`,"Elemental Hit of the Spectrum":`元素打擊．光譜`,"Elemental Penetration Support":`元素穿透輔助`,"Elemental Proliferation Support":`元素擴散輔助`,"Elemental Resistances - Rank 2":`元素抗性 - 等級 2`,"Elemental Resistances - Rank 3":`元素抗性 - 等級 3`,"Elemental Weakness":`元素要害`,"Empower Support":`賦予輔助`,"Endurance Charge on Melee Stun Support":`近戰擊暈獲得耐力球輔助`,"Enduring Cry":`堅決戰吼`,"Enemy at the Gate":`大門口的敵人`,"Energy Blade":`能量之刃`,"Energy Leech Support":`能量偷取輔助`,Enfeeble:`衰弱`,"Enhance Support":`增幅輔助`,"Enlighten Support":`啟蒙輔助`,"Ensnaring Arrow":`誘捕箭矢`,"Enter an area":`進入指定區域`,Eramir:`艾米爾`,"Escaped Revenant":`竄逃亡魂`,"Essence Drain":`靈魂吸取`,"Essence Drain of Desperation":`靈魂吸取．絕望`,"Essence Drain of Wickedness":`靈魂吸取．邪惡`,"Essence of the Artist":`藝術家的精髓`,"Essence of the Hag":`女巫的精髓`,"Essence of Umbra":`烏姆布拉的精髓`,"Etchings on Wood I":`木刻版畫 I`,"Etchings on Wood II":`木刻版畫 II`,"Etchings on Wood III":`木刻版畫 III`,"Etchings on Wood IV":`木刻版畫 IV`,"Eternal Blessing Support":`永恆祝福輔助`,"Ethereal Knives":`虛空匕首`,"Ethereal Knives of Lingering Blades":`虛空匕首．餘刃`,"Ethereal Knives of the Massacre":`虛空匕首．屠殺`,Eviscerate:`剔骨`,"Excommunicate Support":`放逐輔助`,"Exemplar Support":`典範輔助`,"Expert Retaliation Support":`專家復仇輔助`,"Explosive Archaeology":`爆破考古`,"Explosive Arrow":`爆炸箭矢`,"Explosive Concoction":`爆裂物`,"Explosive Concoction of Destruction":`爆裂物．破壞`,"Explosive Trap":`爆裂陷阱`,"Explosive Trap of Magnitude":`爆裂陷阱．量級`,"Explosive Trap of Shrapnel":`爆裂陷阱．彈片`,Exsanguinate:`抽血`,"Exsanguinate of Transmission":`抽血．傳染`,"Eye Hatchery":`生眼者`,"Eye of Winter":`凜冬之眼`,"Eye of Winter of Finality":`凜冬之眼．終結`,"Eye of Winter of Transience":`凜冬之眼．轉瞬`,Eyepecker:`扎眼者`,"Fallen from Grace":`貴族殞落`,"Faster Attacks Support":`快速攻擊輔助`,"Faster Casting Support":`快速施放輔助`,"Faster Projectiles Support":`快速投射輔助`,"Fastis Fortuna":`天佑勇者`,"Feeding Frenzy Support":`豢養狂熱輔助`,"Fencer Helm":`擊劍士之盔`,"Fidelitas, Loyalty Undying":`不死費德利塔斯`,"Fidelitas, the Mourning":`悼靈者費德利塔斯`,"Fiery Dust":`餘燼之塵`,"Figments Reforged":`虛構重鑄`,"Fire Damage - Rank 1":`火焰傷害 - 等級 1`,"Fire Damage - Rank 2":`火焰傷害 - 等級 2`,"Fire Fury":`怒炎之使`,"Fire Penetration Support":`火焰穿透輔助`,"Fire Trap":`火焰陷阱`,"Fire Trap of Blasting":`火焰陷阱．爆發`,Fireball:`火球`,Firestorm:`烈炎風暴`,"Firestorm of Meteors":`烈炎風暴．隕石`,"Firestorm of Pelting":`烈炎風暴．猛擲`,"Fissure Support":`裂隙輔助`,"Fist of War Support":`拳霸輔助`,"Flame Dash":`烈焰衝刺`,"Flame Dash of Return":`烈焰衝刺．返回`,"Flame Link":`連結：烈焰`,"Flame Sentinel":`火炎哨帶`,"Flame Surge":`怒焰奔騰`,"Flame Surge of Combusting":`怒焰奔騰．燃燒`,"Flame Wall":`烈焰之牆`,Flameblast:`烈焰爆破`,"Flameblast of Celerity":`烈焰爆破．迅速`,"Flameblast of Contraction":`烈焰爆破．緊縮`,"Flamethrower Trap":`噴火陷阱`,"Flamethrower Trap of Stability":`噴火陷阱．穩定`,"Flamewood Support":`焚木輔助`,Flammability:`易燃`,"Flask Duration - Rank 1":`藥劑持續時間 - 等級 1`,Fleetfreak:`疾風拽輪`,"Flesh and Stone":`血肉骸骨`,"Flesh Offering":`血肉奉獻`,"Fleshrend, Grand Inquisitor":`崇高審判者塑靈之主`,"Flicker Strike":`閃現打擊`,"Flicker Strike of Power":`閃現打擊．暴擊`,"Focused Ballista Support":`專注砲塔輔助`,"Focused Channelling Support":`專注引導輔助`,"Forbidden Rite":`禁忌儀式`,"Forbidden Rite of Soul Sacrifice":`禁忌儀式．靈魂獻祭`,Foreman:`船塢工頭`,"Forgotten Warrior":`被遺忘的戰士`,"Fork Support":`分裂輔助`,"Fortify Support":`護體輔助`,"Foulgrasp Support":`邪穢之握輔助`,"Freezing Pulse":`冰霜脈衝`,Frenzy:`狂怒`,"Frenzy of Onslaught":`狂怒．猛攻`,"Fresh Meat Support":`鮮肉輔助`,"Frigid Bond Support":`冰寒之繫輔助`,"Frost Blades":`冰霜之刃`,"Frost Blades of Katabasis":`冰霜之刃．降臨`,"Frost Bomb":`寒霜爆`,"Frost Bomb of Forthcoming":`寒霜爆．來臨`,"Frost Bomb of Instability":`寒霜爆．不定`,"Frost Sentinel":`冰霜哨帶`,"Frost Shield":`寒霜護盾`,"Frost Wall":`冰牆`,"Frost Wall of Encroachment":`冰牆．侵襲`,Frostbite:`凍傷`,Frostblink:`霜漣之瞬`,"Frostblink of Wintry Blast":`霜漣之瞬．寒風`,Frostbolt:`寒冰彈`,"Frostmage Support":`霜法輔助`,"Frozen Legion":`戰亂．凍結`,"Frozen Legion of Rallying":`戰亂．凍結．號召`,"Galvanic Arrow":`電流箭矢`,"Galvanic Arrow of Energy":`電流箭矢．能量`,"Galvanic Arrow of Surging":`電流箭矢．波動`,"Galvanic Field":`電光領域`,"Galvanic Field of Intensity":`電光領域．強度`,"Galvanic Ribbon":`雷電之帶`,"Garukhan, Queen of the Winds":`颶風女王卡洛翰`,Gavel:`堅錘`,"Gemling Captain":`古靈隊長`,"Gemling Legionnaire":`古靈軍團`,"General Adus":`艾杜斯將軍`,"General Gravicius":`格拉維奇將軍`,"General's Brigandine":`將軍鎧甲`,"General's Cry":`將軍戰吼`,"Generic text":`通用文字`,"Generosity Support":`和善輔助`,"Get the crafting recipe in the current area":`獲取當前區域的工藝配方`,"Glacial Cascade":`冰川之刺`,"Glacial Cascade of the Fissure":`冰川之刺．裂隙`,"Glacial Hammer":`冰霜之錘`,"Glacial Hammer of Shattering":`冰霜之錘．粉碎`,"Glacial Shield Swipe":`冰川盾擊`,"Gladiator Plate":`角鬥重鎧`,Gladius:`鬥士長劍`,Gloves:`手套`,"Gluttony Support":`暴食輔助`,Gneiss:`白岩`,"Gold Amulet":`帝金護身符`,"Gold Ring":`金光戒指`,"Golden Plate":`金耀之鎧`,"Goliath Gauntlets":`巨靈護手`,"Goliath Greaves":`巨靈脛甲`,Grace:`優雅`,"Granite Flask":`堅岩藥劑`,Gravicius:`格拉維奇`,"Greater Ancestral Call Support":`高階先祖怒嚎輔助`,"Greater Chain Support":`高階連鎖輔助`,"Greater Devour Support":`高階吞噬輔助`,"Greater Fork Support":`高階分裂輔助`,"Greater Kinetic Instability Support":`高階力量紊亂輔助`,"Greater Life Flask":`良質生命藥劑`,"Greater Mana Flask":`良質魔力藥劑`,"Greater Multiple Projectiles Support":`高階多重投射輔助`,"Greater Multistrike Support":`高階多重打擊輔助`,"Greater Spell Cascade Support":`高階秘能爆發輔助`,"Greater Spell Echo Support":`高階施放迴響輔助`,"Greater Unleash Support":`高階釋放輔助`,"Greater Volley Support":`高階齊射輔助`,Greust:`古斯特`,"Greust's Necklace":`古斯特的項鍊`,"Greust, Lord of the Forest":`叢林之霸古斯特`,Grigor:`葛里戈`,"Grinning Totem":`邪面圖騰`,"Ground Slam":`裂地之擊`,"Ground Slam of Earthshaking":`裂地之擊．地震`,"Gruthkul, Mother of Despair":`絕望之母葛魯斯寇`,"Guard Captain":`軍衛隊長`,"Guardian's Blessing Support":`守護者的祝福輔助`,Hailrake:`酷寒之使`,"Hallow Support":`聖徒輔助`,Hammerstorm:`鎚烈`,"Hand in a quest and receive all reward offers, generates gem steps":`提交任務並領取所有獎勵（會生成寶石步驟）`,"Hand in a quest and receive specified reward offer, generates gem steps":`提交任務並領取指定獎勵（會生成寶石步驟）`,Hargan:`賀根`,Haste:`迅捷`,Hatebeat:`憎恨之炎`,Hatred:`憎恨`,"Headsman Axe":`行刑巨斧`,"Heavy Belt":`重革腰帶`,"Heavy Strike":`沉重之擊`,"Heavy Strike of Trarthus":`特拉特斯沉重之擊`,"Hector Titucius, Eternal Servant":`永恆之僕赫克特．提圖瑟`,Helena:`赫蓮娜`,Helmets:`頭部`,"Herald of Agony":`苦痛之捷`,"Herald of Ash":`灰燼之捷`,"Herald of Ice":`冰霜之捷`,"Herald of Purity":`純淨之捷`,"Herald of Thunder":`閃電之捷`,"Heretical Adjudicator":`異教審判官`,"Heretical Guardian":`異教守護者`,"Hex Bloom Support":`咒術綻放輔助`,Hexblast:`咒術枯萎`,"Hexblast of Contradiction":`咒術枯萎．矛盾`,"Hexblast of Havoc":`咒術枯萎．浩劫`,"Hexpass Support":`咒閃輔助`,"Hextoad Support":`咒蟾輔助`,"Hextouch Support":`咒術降臨輔助`,"High Templar Avarius":`聖宗伊爾莉斯`,"High-Impact Mine Support":`高能地雷輔助`,Highgate:`統治者之殿`,Hillock:`西拉克`,"Hiveborn Support":`巢裔輔助`,"Hollowskull, the Willing Host":`虛空亡顱狂熱寄生獸`,"Holy Flame Totem":`神聖火舌圖騰`,"Holy Flame Totem of Ire":`神聖火舌圖騰．怒火`,"Holy Hammers":`神聖之錘`,"Holy Strike":`神聖打擊`,"Holy Sweep":`神聖橫掃`,"Host Chieftain":`寄生獸`,Hydrosphere:`水弒界`,"Hypothermia Support":`急凍輔助`,"Ice Bite Support":`霜咬輔助`,"Ice Crash":`寒冰衝擊`,"Ice Crash of Cadence":`寒冰衝擊．節奏`,"Ice Nova":`冰霜新星`,"Ice Nova of Deep Freeze":`冰霜新星．深層冰凍`,"Ice Nova of Frostbolts":`冰霜新星．寒冰彈`,"Ice Shot":`冰霜射擊`,"Ice Shot of Penetration":`冰霜射擊 ．穿透`,"Ice Spear":`冰矛`,"Ice Spear of Splitting":`冰矛．分裂`,"Ice Trap":`冰凍陷阱`,"Ice Trap of Hollowness":`冰凍陷阱．空心`,"Icicle Mine":`冰雹地雷`,"Icicle Mine of Fanning":`冰雹地雷．扇動`,"Icicle Mine of Sabotage":`冰雹地雷．破壞`,"Icy Manifestation":`冰霜元素`,"Ignite Proliferation Support":`點燃擴散輔助`,"Immolate Support":`犧牲輔助`,"Immortal Call":`不朽怒嚎`,"Impale Support":`穿刺輔助`,"Impending Doom Support":`末日厄運輔助`,"In Memory of Greust":`緬懷古斯特`,"In Search of the Sanctum":`探索聖域`,"In Service to Science":`服務至上`,Incinerate:`燒毀`,"Incinerate of Expanse":`燒毀．蔓延`,"Incinerate of Venting":`燒毀．通風`,"Increased Area of Effect Support":`增加範圍輔助`,"Increased Critical Damage Support":`增加暴擊傷害輔助`,"Increased Critical Strikes Support":`增加暴擊率輔助`,"Infernal Blow":`煉獄之擊`,"Infernal Blow of Immolation":`煉獄之擊．自焚`,"Infernal Cry":`煉獄戰吼`,"Infernal Legion Support":`煉獄軍團輔助`,"Infernal Sentinel":`慾火哨帶`,"Infernal Talc":`煉獄之粉`,"Infused Channelling Support":`注入引導輔助`,"Innervate Support":`亢奮輔助`,Innocence:`善`,Inscription:`碑銘`,"Inspiration Support":`啟發輔助`,"Intensify Support":`強化輔助`,"Intimidating Cry":`威嚇戰吼`,"Into the Breach":`踏入裂痕`,"Into The Nexus":`進入叉點`,"Intruders in Black":`黑色入侵者`,"Intuitive Link":`連結：直覺`,"Invention Support":`發明輔助`,"Invert the Rules Support":`規則逆反輔助`,Irasha:`伊羅莎`,"Iron Grip Support":`鋼鐵之握輔助`,"Iron Will Support":`鋼鐵意志輔助`,"Ironpoint the Forsaken":`遺世鐵鋒`,"Item Rarity Support":`物品稀有度增幅輔助`,"Jade Amulet":`翠玉護身符`,"Jade Flask":`翠玉藥劑`,"Journal Entry":`日記`,"Justicar Casticus":`判官卡斯蒂克斯`,"Kadavrus the Defiler":`汙染者．凱達弗斯`,"Kaom's Dream":`岡姆的幻境`,"Kaom's Stronghold":`岡姆的堡壘`,"Karui Carving":`卡魯石雕`,"Karui Shores":`卡魯海岸`,keyword:`關鍵字`,"Kill a monster, certain bosses unlock waypoints":`擊殺目標（部分首領會解鎖傳送點）`,"Kiln Mother":`熔窯之母`,"Kinetic Blast":`力量爆破`,"Kinetic Blast of Clustering":`力量爆破．聚集`,"Kinetic Bolt":`力量穿引`,"Kinetic Bolt of Fragmentation":`力量穿引．碎片`,"Kinetic Fusillade":`力量猛射`,"Kinetic Fusillade of Detonation":`力量猛射．引爆`,"Kinetic Instability Support":`力量紊亂輔助`,"Kinetic Rain":`力量驟雨`,"Kinetic Rain of Impact":`力量驟雨．衝擊`,"King Kaom":`國王岡姆`,Kira:`奇菈`,"Kishara's Star":`奇夏拉之心`,"Kitava's Herald":`奇塔弗的先鋒`,"Kitava's Hunger I":`奇塔弗的饑餓 I`,"Kitava's Hunger II":`奇塔弗的饑餓 II`,"Kitava's Hunger III":`奇塔弗的饑餓 III`,"Kitava's Torments":`奇塔弗的折磨`,"Kitava, the Insatiable":`貪得無厭奇塔弗`,"Knitted Horror":`恐懼創造物`,"Knockback Support":`擊退輔助`,Kole:`寇爾`,Kraityn:`克雷頓`,"Kraityn, Scarbearer":`斷魂之刃克雷頓`,"Kuduku, the False God":`偽神庫度古`,Lacerate:`破空斬`,"Lacerate of Butchering":`破空斬．屠宰`,"Lacerate of Haemorrhage":`破空斬．出血`,"Lady Dialla":`達拉夫人`,"Lake of Kalandra":`卡蘭德迷湖`,"Lancing Steel":`鋼之突刺`,"Lancing Steel of Spraying":`鋼之突刺．噴射`,Lani:`拉尼`,"Lapis Amulet":`海玉護身符`,"Leap Slam":`躍擊`,"Leap Slam of Groundbreaking":`躍擊．地破`,"Leather Belt":`皮革腰帶`,"Leatherbound Logbook":`皮革日誌`,"Less Duration Support":`持續時間縮短輔助`,"Lesser Multiple Projectiles Support":`低階多重投射(輔)`,"Lethal Dose Support":`致命劑量輔助`,"Letter Fragment":`信件碎片`,"Letter of Instruction":`指引信`,"Letter to Chitus":`給切特斯的信`,"Letters of Exile":`流亡者的信`,"Life and Mana - Rank 2":`生命與魔力 - 等級 2`,"Life and Mana - Rank 3":`生命與魔力 - 等級 3`,"Life and Mana Regeneration - Rank 1":`生命與魔力回覆 - 等級 1`,"Life Gain on Hit Support":`擊中生命回復輔助`,"Life Leech Support":`生命偷取輔助`,"Lifetap Support":`活栓輔助`,"Lighting the Way":`點亮路途`,"Lightning Arrow":`閃電箭矢`,"Lightning Arrow of Electrocution":`閃電箭矢．電刑`,"Lightning Conduit":`導雷`,"Lightning Conduit of the Heavens":`導雷．天堂`,"Lightning Damage - Rank 1":`閃電傷害 - 等級 1`,"Lightning Damage - Rank 2":`閃電傷害 - 等級 2`,"Lightning Penetration Support":`閃電穿透輔助`,"Lightning Spire Trap":`鋒雷陷阱`,"Lightning Spire Trap of Overloading":`鋒雷陷阱．過載`,"Lightning Spire Trap of Zapping":`鋒雷陷阱．殘喘`,"Lightning Strike":`閃電打擊`,"Lightning Strike of Arcing":`閃電打擊．電弧`,"Lightning Tendrils":`電能釋放`,"Lightning Tendrils of Eccentricity":`電能釋放．異變`,"Lightning Tendrils of Escalation":`電能釋放．擴大`,"Lightning Trap":`閃電陷阱`,"Lightning Trap of Sparking":`閃電陷阱．電球`,"Lightning Warp":`閃電傳送`,"Lilly Roth":`莉莉羅斯`,"Lingering Aberration":`巡守腐屍`,"Lioneye's Standard":`獅眼戰旗`,"Lioneye's Watch":`獅眼守望`,"Living Lightning Support":`活體閃電輔助`,"Locus Mine Support":`定位地雷輔助`,"Logout or Exit to Character Selection, removes portals":`登出或返回角色選擇介面，會移除傳送門`,"Lookup an area":`查詢區域資訊`,"Lost in Love":`迷失的愛情`,"Love is Dead":`愛已墜落`,"Love Letter":`情書`,"Lunar Devotee":`月影守護者`,"Lunar Eclipse":`月蝕`,Lunaris:`月影神`,"Lunaris Champion":`月影頭目`,"Lunaris Statue":`月影神像`,"Lunaris, Eternal Moon":`永恆嬋娟月影神`,"Lunarsworn Archmage":`月影雷使魔導士`,"Machinations Support":`詭計輔助`,Maelström:`魔暴`,"Maim Support":`癱瘓輔助`,Malachai:`瑪拉凱`,"Malachai's Dedication":`瑪拉凱的奉獻`,"Malachai's Journal":`瑪拉凱的日記`,"Malachai's Notebook":`瑪拉凱的筆記本`,"Malachai, The Nightmare":`夢魘瑪拉凱`,Malevolence:`惡意`,"Maligaro's Manifesto":`馬雷葛蘿的宣言`,"Maligaro's Map":`馬雷葛蘿的地圖`,"Maligaro's Muse":`馬雷葛蘿的冥想`,"Maligaro's Sanctum":`馬雷葛蘿的書房`,"Maligaro, the Artist":`藝術家馬雷葛蘿`,"Maligaro, The Broken":`破碎者馬雷葛蘿`,"Maligaro, The Inquisitor":`審判者馬雷葛蘿`,"Maligaro, the Inquisitor":`審判者馬雷葛蘿`,"Mana Leech Support":`魔力偷取輔助`,"Mana Regen - Rank 1":`魔力回覆 - 等級 1`,"Mana-Infused Staff":`魔能長杖`,Manabond:`魔能束縛`,"Manaforged Arrows Support":`魔改箭矢輔助`,"Map to Tsoatha":`特索塔地圖`,Maramoa:`馬拉莫`,"Marceus the Defaced":`沉淪者．穆希爾斯`,"Mark On Hit Support":`擊中時印記輔助`,"Maternal Rhex":`大腹雛鳥`,"Meat Shield Support":`肉盾輔助`,"Medium Life Flask":`中型生命藥劑`,"Medium Mana Flask":`中型魔力藥劑`,"Melee Physical Damage Support":`近戰物理傷害輔助`,"Melee Splash Support":`近戰傷害擴散輔助`,"Mercy Mission":`醫者之心`,Merveil:`莫薇兒`,"Merveil's Caverns":`梅薇爾洞穴`,"Merveil, the Siren":`海妖莫薇兒`,"Message in a Bottle":`瓶中信`,Mevion:`玫斐安`,"Minefield Support":`地雷網輔助`,"Minion Damage Support":`召喚物傷害輔助`,"Minion Life Support":`召喚物生命輔助`,"Minion Pact Support":`召喚契約輔助`,"Minion Speed Support":`召喚物速度輔助`,"Minions - Rank 1":`召喚生物 - 等級 1`,"Mirage Archer Support":`幻影射手輔助`,"Mirror Arrow":`魅影射擊`,"Mirror Arrow of Bombarding Clones":`魅影射擊．炸彈客`,"Mirror Arrow of Prismatic Clones":`魅影射擊．神秘客`,"Molten Lion":`熔岩雄獅`,"Molten Shell":`熔岩護盾`,"Molten Strike":`熔岩之擊`,"Molten Strike of the Zenith":`熔岩之擊．極盛`,"Momentum Support":`氣勢輔助`,"More Duration Support":`持續時間延長輔助`,"Mortality Experimenter":`生靈實驗者`,"Movement Speed - Rank 1":`移動速度 - 等級 1`,"Movement Speed and Exerted Attacks - Rank 2":`移動速度與戰吼強化攻擊 - 等級 2`,"Movement Speed and Flask Enchantments - Rank 3":`移動速度與藥劑附魔 - 等級 3`,"Multiple Projectiles Support":`多重投射物輔助`,"Multiple Totems Support":`多重圖騰輔助`,"Multiple Traps Support":`多重陷阱輔助`,"Multistrike Support":`多重打擊輔助`,Necromancer:`死靈法師`,Nessa:`奈莎`,"Nightblade Support":`夜刃輔助`,"Nightbringer Lucius":`夜襲天魔`,Nightwane:`沉夜`,"Niko's Explosives":`尼科的炸藥`,"Niko's Fuel":`尼科的燃料`,"Niko's Mine":`尼科的礦脈`,"No Love for Old Ghosts":`缺愛幽魂`,"No Time like the Present":`時不我與`,Note:`紀錄`,"Number of degrees in multiples of 45, where 0 = Up":`以 45 度為單位的角度表示，0 代表正上方`,Oak:`歐克`,"Oak, Skullbreaker":`裂顱巨杵歐克`,"Obsidian Key":`黑曜之鑰`,"Ode to Ralakesh":`歌頌芮勒蓋許`,"Official Orders":`正式命令`,"Ondar, the Betrayer":`叛徒恩達`,"One click copy":`一鍵複製文字`,"One Hand Axes":`單手斧`,"One Hand Maces":`單手錘`,"One Hand Swords":`單手劍`,"Onyx Amulet":`黑曜護身符`,"Oozeback Bloom":`腐生恐喙`,"Orb of Storms":`風暴漩渦`,"Orb of Storms of Squalls":`風暴漩渦．颮風`,"Order of Protection":`保護令`,"Oriath Docks":`奧瑞亞港口`,"Oriath Enforcer":`奧瑞亞執行官`,"Oriath Square":`奧瑞亞大廣場`,"Overcharge Support":`超負荷輔助`,"Overexertion Support":`竭盡全力輔助`,"Overheat Support":`過熱輔助`,"Overloaded Intensity Support":`超載強化輔助`,"Overseer Krow":`監工庫爾`,"Overseer's Tower":`監守高塔`,Oyun:`歐優恩`,"Pacifism Support":`和平輔助`,"Painted Tower Shield":`彩繪塔盾`,"Pale Commander":`蒼白的烏旗指揮官`,"Paua Ring":`海靈戒指`,"Paying Tribute":`上繳貢禮`,"Penance Brand":`贖罪烙印`,"Penance Brand of Conduction":`贖罪烙印．傳導`,"Penance Brand of Dissipation":`贖罪烙印．消散`,Perforate:`裂地刺穿`,"Perforate of Bloodshed":`裂地刺穿．流血`,"Perforate of Duality":`裂地刺穿．雙持`,Perpetus:`派柏圖斯`,"Pestilent Strike":`瘟疫打擊`,"Petarus and Vanja":`佩塔盧斯和芙安珈`,"Petrified Blood":`石化之血`,"Phase Run":`暗影迷蹤`,"Physical Damage - Rank 1":`物理傷害 - 等級 1`,"Physical Damage - Rank 2":`物理傷害 - 等級 2`,"Physical Damage - Rank 3":`物理傷害 - 等級 3`,"Physical to Lightning Support":`物理轉閃電輔助`,"Pierce Support":`穿透輔助`,Piety:`派蒂`,"Piety's Pets":`派蒂的寵物`,Pikerivet:`釘工`,Piledriver:`掃蕩者`,"Pinpoint Support":`精確輔助`,"Plague Bearer":`病疫之難`,Plaque:`石碑`,"Plate Vest":`鐵製背心`,"Poacher's Mark":`盜獵者印記`,"Pocked Behemoth":`瘡痕巴哈姆特`,"Pocked Giant":`瘡痕巨人`,"Pocked Goliath":`瘡痕巨獸`,"Point Blank Support":`零點射擊輔助`,"Poisonous Concoction":`毒藥`,"Poisonous Concoction of Bouncing":`毒藥 ．彈炸`,Portal:`時空之門`,"Power Charge On Critical Support":`暴擊獲得暴擊球輔助`,"Power Siphon":`力量抽取`,"Power Siphon of the Archmage":`力量抽取．大法師`,Precision:`精準`,"Predator Support":`掠奪者輔助`,"Predatory Scorpion":`肉食毒蠍`,Pride:`驕傲`,"Primitive Carving":`原始石雕`,"Prismatic Burst Support":`三相爆發輔助`,"Prisoner's Gate":`監獄大門`,Proclamation:`福爾的石碑`,"Protective Link":`連結：保護`,"Pulverise Support":`磨鍊輔助`,Puncture:`放血`,"Puncture of Shanking":`腿脛放血`,Punishment:`懲戒`,"Purifying Flame":`淨化烈焰`,"Purifying Flame of Revelations":`淨化烈焰．啟示`,"Purity of Elements":`元素淨化`,"Purity of Fire":`火焰淨化`,"Purity of Ice":`冰霜淨化`,"Purity of Lightning":`閃電淨化`,"Pyre Support":`火葬輔助`,"Pyroclast Mine":`炎爆新星地雷`,"Pyroclast Mine of Sabotage":`炎爆新星地雷．破壞`,"Q'uru":`庫魯`,"Quartz Flask":`石英藥劑`,"Queen of Despair":`絕望之后`,"Queen of the Sands":`沙瀑女王`,"Quest Id used internally by Path Of Exile":`遊戲內部使用的任務 ID`,"Quest rewards a player should take":`建議領取的任務獎勵`,"Quest text":`任務文字`,"Quicksilver Flask":`水銀藥劑`,Quickstep:`迅捷步伐`,Quivers:`箭袋`,"Rage Support":`盛怒輔助`,"Rage Vortex":`盛怒漩渦`,"Rage Vortex of Berserking":`盛怒漩渦．狂暴`,"Raihara, Tukohama's Loyal":`圖克哈瑪的忠誠萊哈拉`,"Rain of Arrows":`箭雨`,"Rain of Arrows of Artillery":`箭雨．火炮`,"Rain of Arrows of Saturation":`箭雨．飽和`,"Raise Spectre":`喚醒幽魂`,"Raise Spectre of Transience":`喚醒幽魂．轉瞬`,"Raise Zombie":`殭屍復甦`,"Raise Zombie of Falling":`殭屍復甦．殞落`,"Raise Zombie of Slamming":`殭屍復甦．重擊`,Rakango:`拉康苟`,"Rallying Cry":`激勵戰吼`,Reanimator:`復生師`,Reap:`收割`,Reave:`衝擊波`,"Reave of Refraction":`衝擊波．折射`,"Reaver Axe":`殘暴之斧`,"Recurring Nightmare":`夢魘匪懈`,"Refinery Construct":`精鍊創造物`,"Reflection of Terror":`恐懼的血照`,"Regulus, Sun's Herald":`赤陽先鋒軒轅`,"Rejuvenation Totem":`回春圖騰`,"Rending Steel":`裂肉鐵刃`,"Resonator Instructions":`共振傳送裝置說明`,"Return to Oriath":`重返奧瑞亞`,"Returning Projectiles Support":`投射物返回輔助`,"Reverie Device":`地圖裝置`,"Reward Offer Id used internally by Path Of Exile":`遊戲內部使用的獎勵選項 ID`,"Rhys of Abram":`亞伯蘭之里斯`,"Righteous Fire":`正義之火`,"Righteous Fire of Arcane Devotion":`正義之火．秘能奉獻`,"Rime Sentinel":`霜降哨帶`,Riptide:`洪濤激流`,"Risen Gladiator":`崛起鬥士`,"Rolling Magma":`熔岩翻騰`,"Ruby Flask":`紅玉藥劑`,"Ruby Ring":`紅玉戒指`,"Rudiarius Felix":`自由鬥士菲力克斯`,"Rune Daggers":`符紋匕首`,"Rupture Support":`殘破輔助`,"Rustic Sash":`素布腰帶`,"Ruthless Support":`殘暴輔助`,"Ryslatha, the Puppet Mistress":`傀儡女王瑞斯拉薩`,"Sacred Wisps Support":`聖潔妖精輔助`,"Sacrifice Support":`獻祭輔助`,"Sadism Support":`虐待輔助`,"Safe and Sound":`安全與寧靜`,"Safe Passage":`安全通關`,"Sailor's Skin":`水手之膚`,"Sanctum Temptations":`誘惑聖域`,"Sandworn Slaves":`沙瀑奴隸`,"Sapphire Flask":`藍玉藥劑`,"Sapphire Ring":`藍玉戒指`,"Sarn Arena":`薩恩競技場`,"Savage Crab":`殘暴的蟹`,"Scalding Arachnid":`熾熱蜘蛛`,"Scale Vest":`細鱗背心`,Sceptres:`權杖`,"Scorching Ray":`熾灼奔流`,"Scorching Ray of Immolation":`熾灼奔流．焚燒`,"Scornful Herald Support":`輕蔑先鋒輔助`,"Scourge Arrow":`天譴之箭`,"Scourge Arrow of Menace":`天譴之箭．威脅`,"Searing Bond":`灼熱連結`,"Searing Bond of Detonation":`灼熱連結．引爆`,"Second Wind Support":`恢復輔助`,"Seismic Cry":`裂地戰吼`,"Seismic Trap":`地裂陷阱`,"Seismic Trap of Swells":`地裂陷阱．膨脹`,Seleslatha:`瑟蕊斯拉薩`,Sentinel:`守望號令`,"Sets portal to the current area":`在當前區域設定傳送門`,"Sever the Right Hand":`剷除左右手`,"Sewer Keys":`下水道鑰匙`,"Shadow of the Vaal":`瓦爾之影`,"Shakari, Queen of the Sands":`沙瀑女王夏卡莉`,"Sharp and Cruel":`清理蜘蛛`,"Shattered Past":`破碎過去`,"Shattering Steel":`鋼之碎擊`,"Shattering Steel of Ammunition":`鋼之碎擊．彈藥`,Shavronne:`薛朗`,"Shavronne of Umbra":`烏姆布拉的薛朗`,"Shavronne's Journal":`薛朗的日記`,"Shavronne's Manifesto":`薛朗的宣言`,"Shavronne's Tower":`薛朗監塔`,"Shavronne, Unbound":`自由之身薛朗`,"Shield Charge":`重盾衝鋒`,"Shield Crush":`重盾粉碎`,"Shield Crush of the Chieftain":`重盾粉碎．酋長`,"Shield of Light":`聖光盾擊`,Shields:`盾`,"Shock Nova":`閃電新星`,"Shock Nova of Procession":`閃電新星．行進`,"Shockwave Support":`震波輔助`,"Shockwave Totem":`震波圖騰`,"Shockwave Totem of Authority":`震波圖騰．威權`,"Shrapnel Ballista":`彈片砲塔`,"Shrapnel Ballista of Steel":`彈片砲塔．鋼鐵`,"Shrine to Arakaali":`祀奉艾爾卡莉`,"Shrine to the Brine King":`祀奉海洋之王`,"Siege Ballista":`攻城炮台`,"Siege Ballista of Splintering":`攻城炮台．碎片`,"Siege Ballista of Trarthus":`特拉特斯攻城炮台`,"Siege Helmet":`破城之盔`,"Sigil of Power":`咒符之力`,Silk:`斯克`,"Silver Flask":`真銀藥劑`,"Silver Locket":`銀色寶盒`,Sin:`罪`,"Sin Lord":`惡咒之主`,Siosa:`薩歐賽`,"Siphoning Trap":`虹吸陷阱`,"Siphoning Trap of Pain":`虹吸陷阱．苦痛`,"Skill Gems":`技能寶石`,"Slower Projectiles Support":`投射物減速輔助`,Smite:`雷鳴重擊`,"Smite of Divine Judgement":`雷鳴重擊．聖判`,"Smoke Mine":`煙霧地雷`,Snipe:`狙擊`,"Sniper's Mark":`狙擊者印記`,"Socket Colours":`插槽顏色`,"Socket Links - 2 to 4 Linked Sockets":`插槽連結 - 2 至 4 連結`,"Socket Numbers - 2 to 4 Sockets":`插槽數量 - 2 至 4 格`,"Solar Eclipse":`日蝕`,"Solar Guard":`日耀神守衛`,Solaris:`日耀神`,"Solaris Champion":`日耀頭目`,"Solaris Statue":`日耀神像`,"Solaris, Eternal Sun":`永恆白駒日耀神`,"Solarsworn Archmage":`赤焰雷使魔導士`,"Soldier Boots":`戰士之靴`,"Soldier Gloves":`戰士手套`,"Somatic Shell":`心靈壁壘`,"Soul Link":`連結：靈魂`,"Soul of Abberath":`艾貝拉斯之魂`,"Soul of Arakaali":`艾爾卡莉之魂`,"Soul of Garukhan":`卡洛翰之魂`,"Soul of Gruthkul":`葛魯斯寇之魂`,"Soul of Lunaris":`月影神之魂`,"Soul of Ralakesh":`芮勒蓋許之魂`,"Soul of Ryslatha":`瑞斯拉薩之魂`,"Soul of Shakari":`夏卡莉之魂`,"Soul of Solaris":`日耀神之魂`,"Soul of the Brine King":`海洋王之魂`,"Soul of Tukohama":`圖克哈瑪之魂`,"Soul of Yugul":`伊果之魂`,Soulmourn:`魂悼`,Soulrend:`靈體撕裂`,"Soulrend of Reaping":`靈體撕裂．收割`,"Soulrend of the Spiral":`靈體撕裂．螺旋`,Spark:`電球`,"Spark of the Nova":`電球．新星`,"Spark of Unpredictability":`電球．未知`,"Spectral Helix":`靈體旋武`,"Spectral Helix of Trarthus":`特拉特斯靈體旋武`,"Spectral Shield Throw":`盾靈投擲`,"Spectral Shield Throw of Shattering":`盾靈投擲．粉碎`,"Spectral Shield Throw of Trarthus":`特拉特斯盾靈投擲`,"Spectral Tactician":`怨靈軍師`,"Spectral Throw":`靈體投擲`,"Spectral Throw of Materialising":`靈體投擲．具現化`,"Spectral Throw of Trarthus":`特拉特斯靈體投擲`,"Spell Cascade Support":`秘能爆發輔助`,"Spell Damage - Rank 1":`法術傷害 - 等級 1`,"Spell Damage - Rank 2":`法術傷害 - 等級 2`,"Spell Damage - Rank 3":`法術傷害 - 等級 3`,"Spell Echo Support":`施放迴響輔助`,"Spell Totem Support":`法術圖騰輔助`,"Spellblade Support":`魔刃輔助`,Spellslinger:`法術回音`,"Spirit Offering":`靈魂奉獻`,"Split Arrow":`分裂箭矢`,"Split Arrow of Splitting":`分裂箭矢．分裂`,"Splitting Steel":`鋼之裂化`,"Splitting Steel of Ammunition":`鋼之裂化．彈藥`,"Stained Glass Window":`彩繪玻璃櫥窗`,"Static Strike":`充能打擊`,"Static Strike of Gathering Lightning":`充能打擊．聚雷`,Staves:`長杖`,Steelchaw:`鋼嚼`,Steelhead:`沉鋼重錘`,Steelskin:`鋼筋鐵骨`,"Stibnite Flask":`迷霧藥劑`,"Storm Brand":`風暴烙印`,"Storm Brand of Indecision":`風暴烙印．躊躇`,"Storm Burst":`風爆`,"Storm Burst of Repulsion":`風爆．排斥`,"Storm Call":`風暴呼喚`,"Storm Call of Trarthus":`特拉特斯風暴呼喚`,"Storm Rain":`暴風雷雨`,"Storm Rain of the Conduit":`暴風雷雨．導管`,"Storm Rain of the Fence":`暴風雷雨．籬笆`,Stormbind:`風暴術符`,"Stormbind of Teleportation":`風暴術符．傳送`,"Stormblast Mine":`風暴地雷`,"Strange Growths":`變異孳生`,Stranglecharm:`噬魂之音`,"Studded Belt":`扣釘腰帶`,"Stun Support":`擊暈輔助`,"Stygian Revenant":`幽靈亡魂`,"Stygian Silverback":`冥界銀背獸`,"Sub-areas inside true areas":`區域內的子區域名稱`,"Sulphur Flask":`硫磺藥劑`,"Summon Carrion Golem":`召喚食腐魔像`,"Summon Carrion Golem of Hordes":`召喚食腐魔像．部落`,"Summon Carrion Golem of Scavenging":`召喚食腐魔像．清洗`,"Summon Chaos Golem":`召喚混沌魔像`,"Summon Chaos Golem of Hordes":`召喚混沌魔像．部落`,"Summon Chaos Golem of the Maelström":`召喚混沌魔像．漩渦`,"Summon Flame Golem":`召喚烈焰魔像`,"Summon Flame Golem of Hordes":`召喚烈焰魔像．部落`,"Summon Flame Golem of the Meteor":`召喚烈焰魔像．隕石`,"Summon Holy Relic":`召喚聖物`,"Summon Holy Relic of Conviction":`召喚聖物．信念`,"Summon Ice Golem":`召喚寒冰魔像`,"Summon Ice Golem of Hordes":`召喚寒冰魔像．部落`,"Summon Ice Golem of Shattering":`召喚寒冰魔像．粉碎`,"Summon Lightning Golem":`召喚閃電魔像`,"Summon Lightning Golem of Hordes":`召喚閃電魔像．部落`,"Summon Phantasm Support":`召喚幻影輔助`,"Summon Raging Spirit":`召喚憤怒狂靈`,"Summon Raging Spirit of Enormity":`召喚憤怒狂靈．巨型`,"Summon Reaper":`召喚奪魂鐮`,"Summon Reaper of Eviscerating":`召喚奪魂鐮．剜剖`,"Summon Reaper of Revenants":`召喚奪魂鐮．亡靈`,"Summon Skeletons":`召喚骷髏`,"Summon Skeletons of Archers":`召喚骷髏．箭術`,"Summon Skeletons of Mages":`召喚骷髏．巫術`,"Summon Skitterbots":`召喚探測機獸`,"Summon Stone Golem":`召喚巨石魔像`,"Summon Stone Golem of Hordes":`召喚巨石魔像．部落`,"Summon Stone Golem of Safeguarding":`召喚巨石魔像．保安`,Sunder:`大地震擊`,"Sunder of Earthbreaking":`大地震擊．地破`,"Sunder of Trarthus":`特拉特斯大地震擊`,"Sundering Axe":`裂甲巨斧`,"Support Gems":`輔助寶石`,Sweep:`橫掃`,"Swift Affliction Support":`極速苦痛輔助`,"Swift Assembly Support":`迅速組裝輔助`,"Swiftbrand Support":`迅速烙印輔助`,Swordstorm:`劍刃風暴`,"Targa, Beast Poacher":`偷獵者塔格`,Tarkleigh:`塔格拉`,Tasuni:`達蘇尼`,"Tectonic Slam":`破體之擊`,"Tectonic Slam of Cataclysm":`破體之擊．災變`,"Tempest Shield":`暴風之盾`,"Templar Report":`聖堂報告`,"Temple Scholar":`修道學者`,"Temporal Chains":`時空鎖鏈`,"Temporal Rift":`時空裂隙`,"Text to copy":`需要複製的文字`,"Text to display":`顯示的文字內容`,"The Ancient Pyramid":`古金字塔`,"The Ancients":`古物`,"The Animal Pack":`成群猛獸`,"The Apex":`巨靈之印`,"The Aqueduct":`水道遺跡`,"The Archives":`檔案室`,"The Ascent":`岩岸陡坡`,"The Ashen Fields":`旱木原野`,"The Atlas of Worlds":`異界圖鑑`,"The Bandit Lord Alira":`幫助盜賊頭目－阿莉亞`,"The Bandit Lord Kraityn":`幫助盜賊頭目－克雷頓`,"The Bandit Lord Oak":`幫助盜賊頭目－歐克`,"The Basilisk":`草莽巨蜥`,"The Bath House":`大浴堂`,"The Battlefront":`激戰廣場`,"The Beacon":`絕望烽塔`,"The Belly of the Beast":`獸穴之腹`,"The Belly of the Beast Level 1":`巨獸之腹：第 1 層`,"The Belly of the Beast Level 2":`巨獸之腹：第 2 層`,"The Blood Aqueduct":`滲血水道`,"The Boiling Lake":`沸騰湖泊`,"The Bone Queen":`骸骨皇后`,"The Bone Sculptor":`刻骨狂`,"The Bridge Encampment":`橋墩營地`,"The Brine King":`海洋之王`,"The Brine King's Reef":`海洋王堡礁`,"The Broken Bridge":`河畔斷橋`,"The Burning Man":`燃燒者`,"The Burning Menace":`暴炎獸`,"The Caged Brute":`衝出監牢`,"The Canals":`陰屍河道`,"The Catacombs":`黑石陵墓`,"The Cathedral Rooftop":`聖堂屋頂`,"The Causeway":`堤道`,"The Cavern of Anger":`忿怒山洞`,"The Cavern of Wrath":`怨忿之窟`,"The Caverns":`瀑布洞穴`,"The Chamber of Innocence":`無罪之室`,"The Chamber of Sins":`罪惡之室`,"The Chamber of Sins Level 1":`罪孽之殿：第 1 層`,"The Chamber of Sins Level 2":`罪孽之殿：第 2 層`,"The City of Sarn":`薩恩城廢墟`,"The Climb":`碎岩山坡`,"The Cloven One":`堅蹄亡羊`,"The Coast":`暮光海灘`,"The Conqueror Wurm":`烈戰之靈`,"The Control Blocks":`鎮壓地帶`,"The Crematorium":`火葬場`,"The Crossroads":`危機叉路`,"The Crypt":`靜謐陵墓`,"The Crypt Level 1":`靜謐陵墓 1 樓`,"The Crypt Level 2":`寂靜陵墓 2 樓`,"The Crystal Veins":`水晶礦脈`,"The Den":`獸穴`,"The Depraved Trinity":`墮道三巨頭`,"The Descent":`下沉地區`,"The Desecrated Chambers":`褻瀆之室`,"The Dishonoured Queen":`拜恥女王`,"The Docks":`不朽海港`,"The Dread Thicket":`驚魂樹洞`,"The Dreadstone":`恐懼之岩`,"The Dried Lake":`乾涸湖岸`,"The Dweller of the Deep":`深淵巨蟹`,"The Eater of Worlds":`世界吞噬者`,"The Ebony Barracks":`烏旗守衛兵營`,"The Elder":`裂界者`,"The Eternal Nightmare":`永恆夢魘`,"The Father of War":`戰爭之父`,"The Faun":`范恩`,"The Feeding Trough":`破沿血道`,"The Fellshrine Ruins":`墮道遺跡`,"The Fetid Pool":`惡水池`,"The Flooded Depths":`水聲之淵`,"The Foothills":`山麓`,"The Forbidden Sanctum":`禁忌聖所`,"The Forest Encampment":`森林營地`,"The Gemling Legion":`古靈軍閥`,"The Gemling Queen":`寶石皇后`,"The Grain Gate":`糧儲關口`,"The Grand Arena":`大競技場`,"The Grand Promenade":`宏偉行道`,"The Great White Beast":`白色巨獸`,"The Great White Bones":`白色巨骸`,"The Harbour Bridge":`海港大橋`,"The Harvest":`育靈之室`,"The Hidden Underbelly":`隱蔽底港`,"The High Gardens":`空中花園`,"The Hundred Foot Shadow":`影百足`,"The Immortal Syndicate":`永生密教`,"The Imperial Fields":`皇家疆界`,"The Imperial Gardens":`皇家花園`,"The Infernal Seal":`獄火靈記`,"The Karui Fortress":`卡魯堡壘`,"The Key to Freedom":`自由之鑰`,"The King of Desire":`慾望之王`,"The King of Fury":`暴怒之王`,"The King's Feast":`國王的盛宴`,"The Ledge":`沉寂海崖`,"The Library":`圖書館`,"The Lord's Labyrinth":`帝王試煉迷宮`,"The Lost Expedition":`失落探險`,"The Lower Prison":`禁靈之獄下層`,"The Lunaris Concourse":`月影神廣場`,"The Lunaris Temple":`月神殿`,"The Lunaris Temple Level 1":`月影神殿：第 1 層`,"The Lunaris Temple Level 2":`月影神殿：第 2 層`,"The Marketplace":`市集地帶`,"The Marooned Mariner":`被放逐的水手`,"The Master of a Million Faces":`裝容大師`,"The Matriarch":`獄火神母`,"The Maven":`賢主`,"The Maven's Game":`賢主的遊戲`,"The Mines Level 1":`漆黑礦坑：第 1 層`,"The Mines Level 2":`漆黑礦坑：第 2 層`,"The Mother of Spiders":`蜘蛛之母`,"The Mud Flats":`炙熱鹽沼`,"The Northern Forest":`北部密林`,"The Oasis":`幻景綠洲`,"The Old Fields":`前哨原野`,"The Ossuary":`葬骨禮堂`,"The Prison":`監獄`,"The Puppet Mistress":`傀儡女王`,"The Purity Chronicles":`純潔編年史`,"The Quarry":`廢棄挖石場`,"The Quay":`啟程碼頭`,"The Ravaged Square":`殘摧大廣場`,"The Ravenous God":`貪婪之神`,"The Refinery":`破損煉油廠`,"The Reliquary":`聖物間`,"The Ribbon Spool":`絲帶線軸`,"The Ridge":`破碎山脊`,"The Risen Matriarch":`獄火骨母`,"The Riverways":`河道`,"The Rogue Harbour":`盜賊港灣`,"The Root of the Problem":`盤根錯節`,"The Rotten Matriarch":`慾火腐母`,"The Rotting Core":`腐敗之核`,"The Ruined Square":`大廣場廢墟`,"The Ruler of Highgate":`統治者之爭`,"The Sarn Encampment":`薩恩營地`,"The Sarn Ramparts":`薩恩城牆`,"The Sceptre of God":`神權之塔`,"The Searing Exarch":`灼督`,"The Sewers":`下水道迷宮`,"The Ship Graveyard":`魅影船墓`,"The Ship Graveyard Cave":`魅影船墓洞穴`,"The Shipyard Terror":`船墓之恐`,"The Silver Locket":`銀盒`,"The Siren's Cadence":`海妖之歌`,"The Slave Pens":`奴役監牢`,"The Slums":`貧民窟`,"The Solaris Concourse":`日耀神廣場`,"The Solaris Temple":`日神殿`,"The Solaris Temple Level 1":`日耀神殿：第 1 層`,"The Solaris Temple Level 2":`日耀神殿：第 2 層`,"The Southern Forest":`南部森林`,"The Storm Blade":`風暴飛刃`,"The Submerged Passage":`海潮地穴`,"The Templar Courts":`神聖大教堂`,"The Temple of Decay Level 1":`腐朽寺廟：第一層`,"The Temple of Decay Level 2":`墜欲之殿 2 層`,"The Tidal Island":`海潮孤島`,"The Torched Courts":`焚燒大教堂`,"The Toxic Conduits":`腐化渠道`,"The Trarthan Code":`特拉特斯法典`,"The Tunnel":`隧道遺跡`,"The Twilight Strand":`絕望岩灘`,"The Undertaker's Apprentice":`送葬者的學徒`,"The Upper Prison":`禁靈之獄上層`,"The Upper Sceptre of God":`上層神權之塔`,"The Vaal City":`瓦爾城市`,"The Vaal Ruins":`瓦爾廢墟`,"The Vastiri Desert":`瓦斯提里荒漠`,"The Voltaic Seal":`雷霆靈記`,"The Way Forward":`開路先鋒`,"The Weaver":`巨蛛之母`,"The Weaver's Chambers":`織網者巢穴`,"The Western Forest":`西部密林`,"The Wetlands":`濕地`,"The White Death":`慘白死侍`,"The Wings of Vastiri":`瓦斯提里之翼`,"Thirst for Blood":`渴望鮮血`,Thistlesage:`蒺藜獸`,"Through Sacred Ground":`夢中聖地`,"Thrusting One Hand Swords":`細劍`,Thunderstorm:`天雷暴雨`,Tolman:`托爾曼`,Tomahawk:`征戰之斧`,"Topaz Flask":`黃玉藥劑`,"Topaz Ring":`黃玉戒指`,"Torchoak Grove":`火柳`,Tornado:`龍捲風`,"Tornado of Elemental Turbulence":`龍捲風 ．湍流`,"Tornado Shot":`龍捲射擊`,"Tornado Shot of Cloudburst":`龍捲射擊．雲爆`,"Toward the Future":`走向未來`,"Toxic Rain":`腐蝕毒雨`,"Toxic Rain of Sporeburst":`腐蝕毒雨．爆發`,"Toxic Rain of Withering":`腐蝕毒雨．凋零`,"Transfusion Support":`輸血輔助`,"Transmutia Device":`轉化裝置`,"Trap and Mine Damage Support":`陷阱及地雷傷害輔助`,"Trap Support":`陷阱輔助`,"Traps and Mines - Rank 1":`陷阱與地雷 - 等級 1`,"Trauma Support":`創傷輔助`,"Trigger a Socketed Spell when you Use a Skill":`使用技能時觸發插槽內的法術`,"Trinity Support":`三體輔助`,Triskeriaki:`特里斯克里雅奇`,"Triumph of Innocence":`善的勝利`,"Tsoagoth, The Brine King":`海洋之王賽根斯`,Tukohama:`圖克哈瑪`,"Tukohama, Karui God of War":`戰神卡魯圖克哈瑪`,Tunneler:`隧道工人`,Tunnelworm:`地穴寄生獸`,"Turquoise Amulet":`青玉護身符`,"Tutorial NPC":`教學導師`,"Two Hand Maces":`雙手錘`,"Two Hand Swords":`雙手劍`,"Two-Stone Ring":`雙玉戒指`,"Unbound Ailments Support":`無邊異能輔助`,"Uncarved Gemstone":`未雕刻寶石`,"Undying Engineer":`爆肝工程師`,"Undying Evangelist":`不朽福音`,"Undying Ravager":`不朽破壞者`,Unearth:`屍術矢`,"Unearthing the Past":`挖掘過往`,Ungulath:`瓦古拉斯`,"Unholy Trinity Support":`不潔三體輔助`,"Unleash Support":`釋放輔助`,"Unlocks the waypoint for the current zone":`解鎖當前區域的傳送點`,"Unset Ring":`潛能之戒`,"Urgent Orders Support":`緊急詔令輔助`,"Use a waypoint":`使用傳送點`,"Use the portal in the current area, places a portal if required":`使用當前區域的傳送門，必要時會放置傳送門`,Utula:`烏圖拉`,"Utula, Stone and Steel":`堅毅之岩烏圖拉`,"Vaal Absolution":`瓦爾．赦免`,"Vaal Ancestral Warchief":`瓦爾．先祖戰士長`,"Vaal Animate Weapon":`瓦爾．幻化武器`,"Vaal Arc":`瓦爾．電弧`,"Vaal Arctic Armour":`瓦爾．極地裝甲`,"Vaal Blade Flurry":`瓦爾．刀鋒亂舞`,"Vaal Blade Vortex":`瓦爾．飛刃風暴`,"Vaal Blight":`瓦爾．萎滅`,"Vaal Breach":`瓦爾：裂隙`,"Vaal Burning Arrow":`瓦爾．燃燒箭矢`,"Vaal Caustic Arrow":`瓦爾．腐蝕箭矢`,"Vaal Clarity":`瓦爾．清晰`,"Vaal Cleave":`瓦爾．劈砍`,"Vaal Cold Snap":`瓦爾．霜暴`,"Vaal Cyclone":`瓦爾．旋風斬`,"Vaal Detonate Dead":`瓦爾．屍體爆破`,"Vaal Discipline":`瓦爾．紀律`,"Vaal Domination":`瓦爾．霸氣`,"Vaal Double Strike":`瓦爾．雙重打擊`,"Vaal Earthquake":`瓦爾．震地`,"Vaal Fireball":`瓦爾．火球`,"Vaal Firestorm":`瓦爾．烈炎風暴`,"Vaal Flameblast":`瓦爾．烈焰爆破`,"Vaal Flicker Strike":`瓦爾．閃現打擊`,"Vaal Glacial Hammer":`瓦爾．冰霜之錘`,"Vaal Grace":`瓦爾．優雅`,"Vaal Ground Slam":`瓦爾．裂地之擊`,"Vaal Haste":`瓦爾．迅捷`,"Vaal Ice Nova":`瓦爾．冰霜新星`,"Vaal Ice Shot":`瓦爾．冰霜射擊`,"Vaal Immortal Call":`瓦爾．不朽怒嚎`,"Vaal Impurity of Fire":`瓦爾．不淨之火`,"Vaal Impurity of Ice":`瓦爾．不淨之冰`,"Vaal Impurity of Lightning":`瓦爾．不淨之雷`,"Vaal Lightning Arrow":`瓦爾．閃電箭矢`,"Vaal Lightning Strike":`瓦爾．閃電打擊`,"Vaal Lightning Trap":`瓦爾．閃電陷阱`,"Vaal Lightning Warp":`瓦爾．閃電傳送`,"Vaal Molten Shell":`瓦爾．熔岩護盾`,"Vaal Molten Strike":`瓦爾．熔岩之擊`,"Vaal Power Siphon":`瓦爾．力量抽取`,"Vaal Rain of Arrows":`瓦爾．箭雨`,"Vaal Reap":`瓦爾．收割`,"Vaal Reave":`瓦爾．衝擊波`,"Vaal Rejuvenation Totem":`瓦爾．回春圖騰`,"Vaal Righteous Fire":`瓦爾．正義之火`,"Vaal Sacrifice Support":`瓦爾犧牲輔助`,"Vaal Skill Damage - Rank 1":`瓦爾技能傷害 - 等級 1`,"Vaal Smite":`瓦爾．雷鳴重擊`,"Vaal Spark":`瓦爾．電球`,"Vaal Spectral Throw":`瓦爾．靈體投擲`,"Vaal Storm Call":`瓦爾．風暴呼喚`,"Vaal Summon Skeletons":`瓦爾．召喚骷髏`,"Vaal Temptation Support":`瓦爾誘惑輔助`,"Vaal Venom Gyre":`瓦爾．猛毒迴旋`,"Vaal Volcanic Fissure":`瓦爾．炎火脈動`,"Vakali Totem":`瓦卡里圖騰`,"Vampiric Link":`連結：吸血`,"Vendor rewards a player should buy":`建議購買的商店獎勵`,"Vengeful Cry":`復仇之嚎`,"Venom Gyre":`猛毒迴旋`,"Version to complete, normal/cruel/merciless/eternal":`迷宮難度：普通/殘酷/殘暴/永恆`,"Vicious Projectiles Support":`猛毒投射物輔助`,"Victario's Secrets":`維多里奧的秘寶`,"Victario's Writings":`維多里奧的手稿`,"Vigilant Strike":`戒備打擊`,"Vile Toxins Support":`罪惡毒素輔助`,Vilenta:`范尼達`,"Vilenta's Vengeance":`范尼達的復仇`,"Viper Strike":`毒蛇打擊`,"Viper Strike of the Mamba":`毒蛇打擊．曼巴`,"Viridian Jewel":`翠綠珠寶`,Vitality:`活力`,"Void Manipulation Support":`虛空操縱輔助`,"Void Shockwave Support":`虛空震波輔助`,"Void Sphere":`虛無玉`,"Void Sphere of Rending":`虛無玉．分裂`,Voidscream:`虛空之吼`,"Voidstorm Support":`虛空風暴輔助`,"Volatile Dead":`致命之息`,"Volatile Dead of Confinement":`致命之息．禁閉`,"Volatile Dead of Seething":`致命之息．沸騰`,"Volatility Support":`易變輔助`,"Volcanic Fissure":`炎火脈動`,"Volcanic Fissure of Snaking":`炎火脈動．蜿蜒`,"Volcanic Golem":`火山魔像`,"Voll's Confession":`福爾的自白`,"Voll, Emperor of Purity":`帝王福爾`,"Volley Support":`齊射輔助`,"Voltaxic Burst":`魔痕爆發`,Vortex:`漩渦`,"Vortex of Projection":`漩渦．投射`,Vulnerability:`脆弱`,"Wall of Force":`力量之壁`,Wands:`法杖`,"War Banner":`戰爭之旗`,"Warlord's Mark":`督軍印記`,Warstaves:`征戰長杖`,"Waste Lurcher":`虐靈蝦獸`,"Wave of Conviction":`信念浪湧`,"Wave of Conviction of Trarthus":`特拉特斯信念浪湧`,"Weathered Carving":`風化的石雕`,"Web of Secrets":`秘密網羅`,"Weylam Roth":`威廉羅斯`,"Whirling Blades":`迴旋之刃`,"Wild Strike":`野性打擊`,"Wild Strike of Extremes":`野性打擊．極致`,"Windburst Support":`風破輔助`,"Winter Orb":`凜冬之球`,"Wintertide Brand":`冬潮烙印`,Wither:`死亡凋零`,"Withering Step":`凋零之步`,"Withering Touch Support":`凋零之觸輔助`,"Worn Carving":`腐朽石雕`,Wrath:`雷霆`,"Wyrmscale Boots":`地蝮鱗長靴`,"Wyrmscale Gauntlets":`蝮鱗手套`,Yeena:`伊娜`,"Yugul, Reflection of Terror":`恐懼的血兆伊果`,"Zana, the Originator":`「開創者」札娜`,"Zealot Helmet":`熱戰之盔`,Zealotry:`狂熱`},Fe=[`zh-CN`,`zh-TW`],Ie={"zh-CN":`简体中文`,"zh-TW":`繁体中文`},Le={route:`路线`,build:`BD 配置`,reset:`重置`,sections:`章节`,editRoute:`编辑路线`,export:`第三方导出`,exported:`已复制导出内容`,github:`项目 GitHub`,menu:`菜单`,waypoint:`传送点`,trial:`升华试炼`,logout:`登出`,portal:`传送门`,crafting:`工艺：`,dailyLayout:`每日迷宫布局`,act:e=>`第${e}幕`,take:`领取 `,buy:`购买 `,requires:` 需要 `,gemMissing:`未找到宝石数据：`,characterClass:`职业`,bandit:`强盗选择`,leagueStart:`赛季开荒模式`,library:`图书馆支线`,gemsOnly:`仅显示宝石任务`,showSubsteps:`显示所有提示`,copied:`已复制到剪贴板`,cancel:`取消`,confirm:`确认`,passiveTree:`天赋树`,gemLinks:`宝石连法`,searchStrings:`搜索字符串`,all:`全部`,appTitle:`流亡成长指南`,buildTitle:`流亡成长指南 - BD 配置`,editRouteTitle:`流亡成长指南 - 路线编辑`,language:`语言`,errorPrefix:`糟糕，似乎出现了错误。点击 `,here:`这里`,errorSuffix:` 以尝试修复。`,searchSyntax:`搜索语法`,regexTool:`PoE 正则工具`,pobCode:`Path of Building 代码或链接`,importRoute:`导入路线`,importingRoute:`正在导入路线`,importSuccess:`导入成功`,importFailed:`导入失败`,importingBuild:`正在导入 BD`,exportButton:`导出`,importButton:`导入`,save:`保存`,importBuild:`导入 BD`,setupAutoProgress:`设置自动进度`,autoProgressConnected:`自动进度已连接`},Re={"zh-CN":Le,"zh-TW":{...Le,waypoint:`傳送點`,trial:`昇華試煉`,portal:`傳送門`,crafting:`工藝：`}},ze={"zh-CN":Ne,"zh-TW":Pe};function Be(e,t){return Re[e][t]}function Ve(e,t){return ze[e][t]??t}var He={"zh-CN":{Marauder:`野蛮人`,Duelist:`决斗者`,Ranger:`游侠`,Shadow:`暗影`,Witch:`女巫`,Templar:`圣堂武僧`,Scion:`贵族`},"zh-TW":{Marauder:`野蠻人`,Duelist:`決鬥者`,Ranger:`遊俠`,Shadow:`暗影刺客`,Witch:`女巫`,Templar:`聖堂武僧`,Scion:`貴族`}},Ue={"zh-CN":{None:`全部击杀`,"Kill All":`全部击杀`,Alira:`阿丽拉`,Kraityn:`克雷顿`,Oak:`欧克`},"zh-TW":{None:`全部擊殺`,"Kill All":`全部擊殺`,Alira:`阿莉亞`,Kraityn:`克雷頓`,Oak:`歐克`}},We=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ge=n(((e,t)=>{t.exports=We()})),Ke=class e extends Promise{#e;#t;constructor(e){super(e=>{e()}),this.#e=e}static from(t){return new e(e=>{e(t())})}static resolve(t){return new e(e=>{e(t)})}static reject(t){return new e((e,n)=>{n(t)})}then(e,t){return this.#t??=new Promise(this.#e),this.#t.then(e,t)}catch(e){return this.#t??=new Promise(this.#e),this.#t.catch(e)}finally(e){return this.#t??=new Promise(this.#e),this.#t.finally(e)}},qe=new Map;function Je(e,t,n,r){let i=n.get(e);if(i===void 0)return null;r.add(e);for(let[e,a]of i.entries()){if(r.has(e))continue;if(e===t)return[a];let i=Je(e,t,n,r);if(i!==null)return[a,...i]}return null}function Ye(e,t){for(let n of e)t=n(t);return t}function Xe(e,t,n){let r=localStorage.getItem(e);if(!r)return null;let i=JSON.parse(r);if(t!==i.version){let r=Je(i.version,t,n,new Set);if(r!==null){let n=Ye(r,i.value);return Ze(e,t,n),n}return Qe(e),null}return i.value}function Ze(e,t,n){let r={value:n,version:t};localStorage.setItem(e,JSON.stringify(r))}function Qe(e){localStorage.removeItem(e)}function $e(e,t,n){return Object.entries(e).reduce((e,[r,i])=>(e[t(r)]=new Ke(e=>i().then(t=>e(n(t)))),e),{})}var et=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;function tt(e){let t=``;for(let n=0;n<e;n++)t+=et.charAt(Math.floor(Math.random()*52));return t}function nt(e){let t=e.replace(/_/g,`/`).replace(/-/g,`+`);return Uint8Array.from(window.atob(t),e=>e.charCodeAt(0))}function rt(e,t){for(let n of t){let t=n(e);if(t)return t}return null}var it=`https://cors-proxy-weld-sigma.vercel.app`;async function at(e,t){let n=e,r=rt(e,t);return r&&(n=await fetch(`${it}/${r}`).then(e=>e.status>=200&&e.status<=299?e.text():Promise.reject(`下载失败`))),n}function ot(...e){return t=>e.reduceRight((e,t)=>t(e),t)}var st=`modulepreload`,ct=function(e){return`/exile-leveling-cn/`+e},lt={},R=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ct(t,n),t=s(t),t in lt)return;lt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:st,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ut=$e(Object.assign({"../common/data/routes/act-1.txt":()=>R(()=>import(`./act-1-DJkU_8UC.js`).then(e=>e.default),[]),"../common/data/routes/act-10.txt":()=>R(()=>import(`./act-10-BHlagEdG.js`).then(e=>e.default),[]),"../common/data/routes/act-2.txt":()=>R(()=>import(`./act-2-DpUrQlB8.js`).then(e=>e.default),[]),"../common/data/routes/act-3.txt":()=>R(()=>import(`./act-3-BbtYB1zJ.js`).then(e=>e.default),[]),"../common/data/routes/act-4.txt":()=>R(()=>import(`./act-4-CRyLhNf7.js`).then(e=>e.default),[]),"../common/data/routes/act-5.txt":()=>R(()=>import(`./act-5-Drze99Nv.js`).then(e=>e.default),[]),"../common/data/routes/act-6.txt":()=>R(()=>import(`./act-6-CamFLFP1.js`).then(e=>e.default),[]),"../common/data/routes/act-7.txt":()=>R(()=>import(`./act-7-BwAvo8O2.js`).then(e=>e.default),[]),"../common/data/routes/act-8.txt":()=>R(()=>import(`./act-8-Hq5-X5tW.js`).then(e=>e.default),[]),"../common/data/routes/act-9.txt":()=>R(()=>import(`./act-9-ChNBKzNd.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-1.txt":()=>R(()=>import(`./act-1-Bv8YTdB2.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-10.txt":()=>R(()=>import(`./act-10-BkN0hf2j.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-2.txt":()=>R(()=>import(`./act-2-C3xNGb_L.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-3.txt":()=>R(()=>import(`./act-3-Xd0yoCGa.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-4.txt":()=>R(()=>import(`./act-4-CH7ECPPn.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-5.txt":()=>R(()=>import(`./act-5-BceIqz4y.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-6.txt":()=>R(()=>import(`./act-6-BkiL4brs.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-7.txt":()=>R(()=>import(`./act-7-CHMvt6Lk.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-8.txt":()=>R(()=>import(`./act-8-C1L1Ggw5.js`).then(e=>e.default),[]),"../common/data/routes/zh-CN/act-9.txt":()=>R(()=>import(`./act-9-CZeQ_HHL.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-1.txt":()=>R(()=>import(`./act-1-DU9vpu3s.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-10.txt":()=>R(()=>import(`./act-10-CN-Akmg0.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-2.txt":()=>R(()=>import(`./act-2-D5M4ffKU.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-3.txt":()=>R(()=>import(`./act-3-CRf0MGqc.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-4.txt":()=>R(()=>import(`./act-4-BTU-G2cr.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-5.txt":()=>R(()=>import(`./act-5-DU9NKS66.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-6.txt":()=>R(()=>import(`./act-6-QrsPVp_M.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-7.txt":()=>R(()=>import(`./act-7-D0hJyGYL.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-8.txt":()=>R(()=>import(`./act-8-CniAKPRi.js`).then(e=>e.default),[]),"../common/data/routes/zh-TW/act-9.txt":()=>R(()=>import(`./act-9-C_CGACTk.js`).then(e=>e.default),[])}),e=>/routes\/(.*?).txt$/.exec(e)[1],e=>e);async function dt(e){let{getRouteFiles:t}=await R(async()=>{let{getRouteFiles:e}=await import(`./src-DwV7FR4C.js`).then(e=>e.t);return{getRouteFiles:e}},__vite__mapDeps([0,1]));return t(await Promise.all(Array.from({length:10},(t,n)=>ut[`${e}/act-${n+1}`])))}var z=Ae(`route-files`,{},2),ft=L(async e=>{let t=e(Me),n=e(z)[t];return n===void 0?await dt(t):n},(e,t,n)=>{let r=e(Me);if(n===we){let n={...e(z)};delete n[r],t(z,n);return}t(z,{...e(z),[r]:n})});function pt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=pt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function B(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=pt(e))&&(r&&(r+=` `),r+=t);return r}var V=e=>typeof e==`number`&&!isNaN(e),H=e=>typeof e==`string`,U=e=>typeof e==`function`,mt=e=>H(e)||V(e),ht=e=>H(e)||U(e)?e:null,gt=(e,t)=>e===!1||V(e)&&e>0?e:t,_t=e=>(0,o.isValidElement)(e)||H(e)||U(e)||V(e);function vt(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function W({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:s,preventExitTransition:c,done:l,nodeRef:u,isIn:d,playToast:f}){let p=n?`${e}--${s}`:e,m=n?`${t}--${s}`:t,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=u.current,t=p.split(` `),n=r=>{r.target===u.current&&(f(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),h.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,o.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener(`animationend`,t),r?vt(e,l,i):l()};d||(c?t():(h.current=1,e.className+=` ${m}`,e.addEventListener(`animationend`,t)))},[d]),o.createElement(o.Fragment,null,a)}}function yt(e,t){return{content:bt(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function bt(e,t,n=!1){return(0,o.isValidElement)(e)&&!H(e.type)?(0,o.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):U(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function xt({closeToast:e,theme:t,ariaLabel:n=`close`}){return o.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},o.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},o.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function St({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:s,progress:c,rtl:l,isIn:u,theme:d}){let f=i||s&&c===0,p={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};s&&(p.transform=`scaleX(${c})`);let m=B(`Toastify__progress-bar`,s?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),h=U(a)?a({rtl:l,type:r,defaultClassName:m}):B(m,a),g={[s&&c>=1?`onTransitionEnd`:`onAnimationEnd`]:s&&c<1?null:()=>{u&&n()}};return o.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":f},o.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),o.createElement(`div`,{role:`progressbar`,"aria-hidden":f?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":s?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:h,style:p,...g}))}var Ct=1,wt=()=>`${Ct++}`;function Tt(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(yt(e,`removed`)))},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(yt(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:n,updateId:o,data:l,staleId:u,delay:p}=t,m=o==null;m&&i++;let g={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:l,isIn:!1,className:ht(t.className||s.toastClassName),progressClassName:ht(t.progressClassName||s.progressClassName),autoClose:!t.isLoading&&gt(t.autoClose,s.autoClose),closeToast(e){let t=c.get(n);t&&(t.removalReason=e,h(n))},deleteToast(){if(c.get(n)!=null){if(c.delete(n),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};g.closeButton=s.closeButton,t.closeButton===!1||_t(t.closeButton)?g.closeButton=t.closeButton:t.closeButton===!0&&(g.closeButton=!_t(s.closeButton)||s.closeButton);let v={content:e,props:g,staleId:u};s.limit&&s.limit>0&&i>s.limit&&m?a.push(v):V(p)?setTimeout(()=>{_(v)},p):_(v)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var G=new Map,K=[],Et=new Set,Dt=e=>Et.forEach(t=>t(e)),Ot=()=>G.size>0;function kt(){K.forEach(e=>Pt(e.content,e.options)),K=[]}var At=(e,{containerId:t})=>G.get(t||1)?.toasts.get(e);function jt(e,t){var n;if(t)return!!((n=G.get(t))!=null&&n.isToastActive(e));let r=!1;return G.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function Mt(e){if(!Ot()){K=K.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||mt(e))G.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=G.get(e.containerId);t?t.removeToast(e.id):G.forEach(t=>{t.removeToast(e.id)})}}var Nt=(e={})=>{G.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Pt(e,t){_t(e)&&(Ot()||K.push({content:e,options:t}),G.forEach(n=>{n.buildToast(e,t)}))}function Ft(e){var t;(t=G.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function It(e,t){G.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Lt(e){let t=e.containerId||1;return{subscribe(n){let r=Tt(t,e,Dt);G.set(t,r);let i=r.observe(n);return kt(),()=>{i(),G.delete(t)}},setProps(e){var n;(n=G.get(t))==null||n.setProps(e)},getSnapshot(){return G.get(t)?.getSnapshot()}}}function Rt(e){return Et.add(e),()=>{Et.delete(e)}}function zt(e){return e&&(H(e.toastId)||V(e.toastId))?e.toastId:wt()}function q(e,t){return Pt(e,t),t.toastId}function J(e,t){return{...t,type:t&&t.type||e,toastId:zt(t)}}function Y(e){return(t,n)=>q(t,J(e,n))}function X(e,t){return q(e,J(`default`,t))}X.loading=(e,t)=>q(e,J(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Bt(e,{pending:t,error:n,success:r},i){let a;t&&(a=H(t)?X.loading(t,i):X.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){X.dismiss(a);return}let r={type:e,...o,...i,data:n},s=H(t)?{render:t}:t;return a?X.update(a,{...r,...s}):X(s.render,{...r,...s}),n},c=U(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}X.promise=Bt,X.success=Y(`success`),X.info=Y(`info`),X.error=Y(`error`),X.warning=Y(`warning`),X.warn=X.warning,X.dark=(e,t)=>q(e,J(`default`,{theme:`dark`,...t}));function Vt(e){Mt(e)}X.dismiss=Vt,X.clearWaitingQueue=Nt,X.isActive=jt,X.update=(e,t={})=>{let n=At(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:wt()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,q(o,a)}},X.done=e=>{X.update(e,{progress:1})},X.onChange=Rt,X.play=e=>It(!0,e),X.pause=e=>It(!1,e);function Ht(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,o.useRef)(Lt(e)).current;r(e);let i=(0,o.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:jt,count:i?.length}}function Ut(e){let[t,n]=(0,o.useState)(!1),[r,i]=(0,o.useState)(!1),a=(0,o.useRef)(null),s=(0,o.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:l,closeToast:u,onClick:d,closeOnClick:f}=e;Ft({id:e.toastId,containerId:e.containerId,fn:n}),(0,o.useEffect)(()=>{if(e.pauseOnFocusLoss)return p(),()=>{m()}},[e.pauseOnFocusLoss]);function p(){document.hasFocus()||v(),window.addEventListener(`focus`,_),window.addEventListener(`blur`,v)}function m(){window.removeEventListener(`focus`,_),window.removeEventListener(`blur`,v)}function h(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=a.current;s.canCloseOnClick=!0,s.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(s.start=t.clientX,s.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(s.start=t.clientY,s.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?v():_()}function _(){n(!0)}function v(){n(!1)}function y(){s.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=a.current;if(s.canDrag&&r){s.didMove=!0,t&&v(),e.draggableDirection===`x`?s.delta=n.clientX-s.start:s.delta=n.clientY-s.start,s.start!==n.clientX&&(s.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function S(){b();let t=a.current;if(s.canDrag&&s.didMove&&t){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:h,onPointerUp:g};return c&&l&&(C.onMouseEnter=v,e.stacked||(C.onMouseLeave=_)),f&&(C.onClick=e=>{d&&d(e),s.canCloseOnClick&&u(!0)}),{playToast:_,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var Wt=typeof window<`u`?o.useLayoutEffect:o.useEffect,Z=({theme:e,type:t,isLoading:n,...r})=>o.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function Gt(e){return o.createElement(Z,{...e},o.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function Kt(e){return o.createElement(Z,{...e},o.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function qt(e){return o.createElement(Z,{...e},o.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function Jt(e){return o.createElement(Z,{...e},o.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function Yt(){return o.createElement(`div`,{className:`Toastify__spinner`})}var Xt={info:Kt,warning:Gt,success:qt,error:Jt,spinner:Yt},Zt=e=>e in Xt;function Qt({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(U(r)?i=r({...a,isLoading:n}):(0,o.isValidElement)(r)?i=(0,o.cloneElement)(r,a):n?i=Xt.spinner():Zt(t)&&(i=Xt[t](a))),i}var $t=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=Ut(e),{closeButton:s,children:c,autoClose:l,onClick:u,type:d,hideProgressBar:f,closeToast:p,transition:m,position:h,className:g,style:_,progressClassName:v,updateId:y,role:b,progress:x,rtl:S,toastId:C,deleteToast:w,isIn:T,isLoading:E,closeOnClick:D,theme:O,ariaLabel:k}=e,A=B(`Toastify__toast`,`Toastify__toast-theme--${O}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":D}),j=U(g)?g({rtl:S,position:h,type:d,defaultClassName:A}):B(A,g),M=Qt(e),N=!!x||!l,P={closeToast:p,type:d,theme:O},F=null;return s===!1||(F=U(s)?s(P):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,P):xt(P)),o.createElement(m,{isIn:T,done:w,position:h,preventExitTransition:n,nodeRef:r,playToast:a},o.createElement(`div`,{id:C,tabIndex:0,onClick:u,"data-in":T,className:j,...i,style:_,ref:r,...T&&{role:b,"aria-label":k}},M!=null&&o.createElement(`div`,{className:B(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!E})},M),bt(c,e,!t),F,!e.customProgressBar&&o.createElement(St,{...y&&!N?{key:`p-${y}`}:{},rtl:S,theme:O,delay:l,isRunning:t,isIn:T,closeToast:p,hide:f,type:d,className:v,controlledProgress:N,progress:x||0})))},Q=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),en=W(Q(`bounce`,!0));W(Q(`slide`,!0)),W(Q(`zoom`)),W(Q(`flip`));var tn={position:`top-right`,transition:en,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function nn(e){let t={...tn,...e},n=e.stacked,[r,i]=(0,o.useState)(!0),a=(0,o.useRef)(null),{getToastToRender:s,isToastActive:c,count:l}=Ht(t),{className:u,style:d,rtl:f,containerId:p,hotKeys:m}=t;function h(e){let t=B(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":f});return U(u)?u({position:e,rtl:f,defaultClassName:t}):B(t,ht(u))}function g(){n&&(i(!0),X.play())}return Wt(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t),c=Math.max(.5,1-(r?o:0));a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${c}`),i+=a.offsetHeight,o+=.025})}},[r,l,n]),(0,o.useEffect)(()=>{function e(e){var t;let n=a.current;m(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),X.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),X.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[m]),o.createElement(`section`,{ref:a,className:`Toastify`,id:p,onMouseEnter:()=>{n&&(i(!1),X.pause())},onMouseLeave:g,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},s((e,t)=>{let r=t.length?{...d}:{...d,pointerEvents:`none`};return o.createElement(`div`,{tabIndex:-1,className:h(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>o.createElement($t,{...t,stacked:n,collapseAll:g,isIn:c(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var rn=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,an=new Map,on=(e,t)=>{Wt(()=>{if(!e||typeof document>`u`)return;let n=document,r=an.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),an.set(n,i)},[t])};function sn(e){return on(rn,e.nonce),o.createElement(nn,{...e})}var cn={item:`_item_qletb_1`,itemRound:`_itemRound_qletb_15`},ln={hoverPrimary:`_hoverPrimary_wh3vs_2`,hoverSecondary:`_hoverSecondary_wh3vs_6`,activePrimary:`_activePrimary_wh3vs_11`,activeSecondary:`_activeSecondary_wh3vs_15`},un={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dn=o.createContext&&o.createContext(un),fn=[`attr`,`size`,`title`];function pn(e,t){if(e==null)return{};var n,r,i=mn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function mn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function hn(){return hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hn.apply(null,arguments)}function gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?gn(Object(n),!0).forEach(function(t){_n(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _n(e,t,n){return(t=vn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vn(e){var t=yn(e,`string`);return typeof t==`symbol`?t:t+``}function yn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function bn(e){return e&&e.map((e,t)=>o.createElement(e.tag,$({key:t},e.attr),bn(e.child)))}function xn(e){return t=>o.createElement(Sn,hn({attr:$({},e.attr)},t),bn(e.child))}function Sn(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=pn(e,fn),s=r||t.size||`1em`,c;return t.className&&(c=t.className),e.className&&(c=(c?c+` `:``)+e.className),o.createElement(`svg`,hn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:c,style:$($({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:`http://www.w3.org/2000/svg`}),i&&o.createElement(`title`,null,i),e.children)};return dn===void 0?t(un):o.createElement(dn.Consumer,null,e=>t(e))}export{Se as A,r as B,Ie as C,ke as D,Ae as E,c as F,s as I,d as L,xe as M,L as N,we as O,fe as P,f as R,Ve as S,Me as T,Ze as _,X as a,Ue as b,qe as c,at as d,Xe as f,tt as g,ot as h,sn as i,be as j,Ce as k,Qe as l,$e as m,ln as n,ft as o,rt as p,cn as r,R as s,xn as t,nt as u,Ge as v,Be as w,He as x,Fe as y,a as z};