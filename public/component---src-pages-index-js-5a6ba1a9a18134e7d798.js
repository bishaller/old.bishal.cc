(self.webpackChunkbishal_cc_2021=self.webpackChunkbishal_cc_2021||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!o(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!o(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},5736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return we}});var r,i,o,a,c=n(7294),s=n(3410),l=n(5697),u=n.n(l),p=n(4839),f=n.n(p),d=n(2993),h=n.n(d),b=n(6494),m=n.n(b),y="bodyAttributes",g="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),A="cssText",E="href",O="http-equiv",S="innerHTML",C="itemprop",P="name",j="property",k="rel",_="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",M="defer",N="encodeSpecialCharacters",D="onChangeClientState",U="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=J(e,v.TITLE),n=J(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,x);return t||r||void 0},$=function(e){return J(e,D)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==S&&c!==A&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],s=m()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,i),se(p,f);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,l),styleTags:ue(v.STYLE,u)},h={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),s(e,h,b)},ce=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,i=fe(n,r),[c.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=pe(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===S||n===A){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===S||e===A)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,i,r),link:de(v.LINK,o,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,s,r),style:de(v.STYLE,l,r),title:de(v.TITLE,{title:p,titleAttributes:f},r)}},be=f()((function(e){return{baseTag:Z([E,L],e),bodyAttributes:Q(y,e),defer:J(e,M),encode:J(e,N),htmlAttributes:Q(g,e),linkTags:G(v.LINK,[k,E],e),metaTags:G(v.META,[P,w,O,j,C],e),noscriptTags:G(v.NOSCRIPT,[S],e),onChangeClientState:$(e),scriptTags:G(v.SCRIPT,[_,S],e),styleTags:G(v.STYLE,[A],e),title:X(e),titleAttributes:Q(T,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),he)((function(){return null})),me=(i=be,a=o=function(e){function t(){return Y(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return z({},i,((t={})[r.type]=a,t.titleAttributes=z({},o),t));case v.BODY:return z({},i,{bodyAttributes:z({},o)});case v.HTML:return z({},i,{htmlAttributes:z({},o)})}return z({},i,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(K(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ye=n(4047);function ge(e){var t,n,r=e.description,i=e.lang,o=e.meta,a=e.title,s=(0,ye.useStaticQuery)("63159454").site,l=r||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(me,{htmlAttributes:{lang:i},title:a,titleTemplate:u?"%s | "+u:null,meta:[{name:"geo:placename",content:"Kathmandu"},{name:"geo:position",content:""},{name:"geo:region",content:"NP"},{name:"description",content:l},{property:"og:locale",content:"en_US"},{property:"og:type",content:"website"},{property:"website:contact_data:website",content:"https://www.bishal.cc/"},{property:"website:contact_data:email",content:"hello@bishal.cc"},{property:"website:contact_data:phone_number",content:"+9779851102931"},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:url",content:"https://www.bishal.cc/"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(o)},c.createElement("script",{type:"application/ld+json"},'\n     "@context": "https://schema.org",\n     "@graph": [\n         {\n             "@type": [\n                 "Person", "Organization"\n             ],\n             "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c",\n             "name": "Bishal Mishra",\n             "jobTitle": "UI/UX Designer, Product Designer",\n             "url": "https://bishal.cc/",\n             "email": "hello@bishal.cc",\n             "image": {\n                 "@type": "ImageObject",\n                 "@id": "https://bishal.cc/#personlogo",\n                 "inLanguage": "en-US",\n                 "url": "https://bishal.cc/dist/bishal-mishra.webp",\n                 "width": 1500,\n                 "height": 1500,\n                 "caption": "Bishal Mishra\'s Display Picture"\n             },\n             "logo": {\n                 "@id": "https://bishal.cc/#personlogo"\n             },\n             "sameAs": [\n                 "https://bishal.cc",\n                 "https://dribbble.com/bishaller",\n                 "https://github.com/bishaller",\n                 "https://twitter.com/bishaller",\n                 "https://instagram.com/bishaller",\n                 "https://www.behance.net/bishaller",\n                 "https://www.linkedin.com/in/bishaller",\n                 "https://facebook.com/bishaller"\n               ]\n         }, {\n             "@type": "WebSite",\n             "@id": "https://bishal.cc/#website",\n             "url": "https://bishal.cc/",\n             "name": "Bishal Mishra",\n             "description": "Product Designer",\n             "publisher": {\n                 "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c"\n             },\n             "potentialAction": [\n                 {\n                     "@type": "SearchAction",\n                     "target": "https://bishal.cc/?s={search_term_string}",\n                     "query-input": "required name=search_term_string"\n                 }\n             ],\n             "inLanguage": "en-US"\n         }, {\n             "@type": "WebPage",\n             "@id": "https://bishal.cc/#webpage",\n             "url": "https://bishal.cc/",\n             "name": "Bishal Mishra — Product Designer, User Experiece Designer &amp; User Interface Designer",\n             "isPartOf": {\n                 "@id": "https://bishal.cc/#website"\n             },\n             "about": {\n                 "@id": "https://bishal.cc/#/schema/person/9eb9271947820f762a827ea24980084c"\n             },\n             "datePublished": "2020-06-03T19:08:28+00:00",\n             "dateModified": "2021-02-03T18:43:42+00:00",\n             "description": "Bishal is a UI/UX and a Product Designer who has experience of designing for cross-platform and various user bases from small to large.",\n             "breadcrumb": {\n                 "@id": "https://bishal.cc/#breadcrumb"\n             },\n             "inLanguage": "en-US",\n             "potentialAction": [\n                 {\n                     "@type": "ReadAction",\n                     "target": ["https://bishal.cc/"]\n                 }\n             ]\n         }, {\n             "@type": "BreadcrumbList",\n             "@id": "https://bishal.cc/#breadcrumb",\n             "itemListElement": [\n                 {\n                     "@type": "ListItem",\n                     "position": 1,\n                     "item": {\n                         "@type": "WebPage",\n                         "@id": "https://bishal.cc/",\n                         "url": "https://bishal.cc/",\n                         "name": "Home"\n                     }\n                 }\n             ]\n         }\n     ]\n }\n       '))}ge.defaultProps={lang:"en",meta:[],description:""};var Te=ge,ve=function(e){var t=e.title,n=e.description;e.linkData;function r(e){return{__html:e}}return c.createElement("section",{className:"billboard"},c.createElement("div",{className:"siteContainer siteContainer--billboard"},c.createElement("div",{className:"billboard__inner"},c.createElement("h1",{className:"billboard__title",title:t,dangerouslySetInnerHTML:r(t)})),c.createElement("div",{className:"billboard__intro"},c.createElement("div",{className:"billboard__bio"},c.createElement("div",{className:"billboard__description",dangerouslySetInnerHTML:r(n)}),c.createElement("a",{className:"buttonSpecial buttonSpecial--alt",title:"hello@bishal.cc",href:"mailto:hello@bishal.cc"},"hello@bishal.cc")))),c.createElement("div",{className:"billBoard__mouse"}))},we=function(){return c.createElement("main",null,c.createElement(Te,{title:"Bishal Mishra, UX & Producwt Designer"}),c.createElement(s.Z,null,c.createElement(ve,{title:"I design.<br><strong>Experiences</strong>",description:"<p>\n          I am a Product Designer who turns complex problem sets to simple solutions, focused to build experiences that expands one’s capacity for impact 🚀.\n          </p>",linkUrl:"/about/",linkTitle:"go to about page",linkData:[{linkUrl:"/about/",linkTitle:"About Me"}]})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5a6ba1a9a18134e7d798.js.map