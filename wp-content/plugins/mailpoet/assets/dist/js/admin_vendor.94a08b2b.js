(self.webpackChunkMailPoet3=self.webpackChunkMailPoet3||[]).push([[370],{1412:function(e,t,r){var n=r(39711),o=r(27672);void 0===o.MailPoetLib&&(o.MailPoetLib={}),void 0===o.MailPoetLib.ReactRouter&&(o.MailPoetLib.ReactRouter=n),e.exports=n},49656:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(5977),i=n(r(45993)),u=r(90071);r(45697),r(45298);var c=n(r(2177));function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){e.prototype=Object.create(t.prototype),l(e.prototype.constructor=e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}var p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=u.createBrowserHistory(t.props),t}return f(t,e),t.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},t}(i.Component),y=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=u.createHashHistory(t.props),t}return f(t,e),t.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},t}(i.Component),h=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?u.createLocation(e,null,null,t):e},m=function(e){return e},b=i.forwardRef;void 0===b&&(b=m);var d=b((function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,u=s(e,["innerRef","navigate","onClick"]),c=u.target,f=a({},u,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return f.ref=m!==b&&t||r,i.createElement("a",f)})),P=b((function(e,t){var r=e.component,n=void 0===r?d:r,f=e.replace,l=e.to,p=e.innerRef,y=s(e,["component","replace","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=e.history,o=v(h(l,e.location),e.location),s=o?r.createHref(o):"",d=a({},y,{href:s,navigate:function(){var t=h(l,e.location),n=u.createPath(e.location)===u.createPath(v(t));(f||n?r.replace:r.push)(t)}});return m!==b?d.ref=t||p:d.innerRef=p,i.createElement(n,d)}))})),R=function(e){return e},g=i.forwardRef;void 0===g&&(g=R);var O=g((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,u=e.activeClassName,f=void 0===u?"active":u,l=e.activeStyle,p=e.className,y=e.exact,m=e.isActive,b=e.location,d=e.sensitive,O=e.strict,j=e.style,w=e.to,C=e.innerRef,M=s(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=b||e.location,u=v(h(w,r),r),s=u.pathname,_=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=_?o.matchPath(r.pathname,{path:_,exact:y,sensitive:d,strict:O}):null,x=!!(m?m(k,r):k),L="function"==typeof p?p(x):p,E="function"==typeof j?j(x):j;x&&(L=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(L,f),E=a({},E,l));var H=a({"aria-current":x&&n||null,className:L,style:E,to:u},M);return R!==g?H.ref=t||C:H.innerRef=C,i.createElement(P,H)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return o.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return o.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return o.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return o.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return o.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return o.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return o.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return o.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return o.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return o.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return o.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return o.withRouter}}),t.BrowserRouter=p,t.HashRouter=y,t.Link=P,t.NavLink=O},39711:function(e,t,r){"use strict";e.exports=r(49656)},45298:function(e,t,r){"use strict";r.r(t),t.default=function(e,t){}},65311:function(e){"use strict";e.exports=jQuery}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[351],(function(){return t(45993),t(97846),t(1412),t(27927),t(45697),t(16277),t(96486),t(92155),t(49593),t(76599)})),e.O()}]);