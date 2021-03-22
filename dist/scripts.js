
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});


   

//Converting colors to proper format
function normalizeColor(hexCode) {
    return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255]
  } ["SCREEN", "LINEAR_LIGHT"].reduce((hexCode, t, n) => Object.assign(hexCode, {
    [t]: n
  }), {});
  
  //Essential functionality of WebGl
  //t = width
  //n = height
  class MiniGl {
    constructor(canvas, width, height, debug = false) {
        const _miniGl = this,
            debug_output = -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");
        _miniGl.canvas = canvas, _miniGl.gl = _miniGl.canvas.getContext("webgl", {
            antialias: true
        }), _miniGl.meshes = [];
        const context = _miniGl.gl;
        width && height && this.setSize(width, height), _miniGl.lastDebugMsg, _miniGl.debug = debug && debug_output ? function(e) {
            const t = new Date;
            t - _miniGl.lastDebugMsg > 1e3 && console.log("---"), console.log(t.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(" ") + e + ": ", ...Array.from(arguments).slice(1)), _miniGl.lastDebugMsg = t
        } : () => {}, Object.defineProperties(_miniGl, {
            Material: {
                enumerable: false,
                value: class {
                    constructor(vertexShaders, fragments, uniforms = {}) {
                        const material = this;
                        function getShaderByType(type, source) {
                            const shader = context.createShader(type);
                            return context.shaderSource(shader, source), context.compileShader(shader), context.getShaderParameter(shader, context.COMPILE_STATUS) || console.error(context.getShaderInfoLog(shader)), _miniGl.debug("Material.compileShaderSource", {
                                source: source
                            }), shader
                        }
                        function getUniformVariableDeclarations(uniforms, type) {
                            return Object.entries(uniforms).map(([uniform, value]) => value.getDeclaration(uniform, type)).join("\n")
                        }
                        material.uniforms = uniforms, material.uniformInstances = [];
  
                        const prefix = "\n              precision highp float;\n            ";
                        material.vertexSource = `\n              ${prefix}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms,"vertex")}\n              ${getUniformVariableDeclarations(uniforms,"vertex")}\n              ${vertexShaders}\n            `,
                        material.Source = `\n              ${prefix}\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms,"fragment")}\n              ${getUniformVariableDeclarations(uniforms,"fragment")}\n              ${fragments}\n            `,
                        material.vertexShader = getShaderByType(context.VERTEX_SHADER, material.vertexSource),
                        material.fragmentShader = getShaderByType(context.FRAGMENT_SHADER, material.Source),
                        material.program = context.createProgram(),
                        context.attachShader(material.program, material.vertexShader),
                        context.attachShader(material.program, material.fragmentShader),
                        context.linkProgram(material.program),
                        context.getProgramParameter(material.program, context.LINK_STATUS) || console.error(context.getProgramInfoLog(material.program)),
                        context.useProgram(material.program),
                        material.attachUniforms(void 0, _miniGl.commonUniforms),
                        material.attachUniforms(void 0, material.uniforms)
                    }
                    //t = uniform
                    attachUniforms(name, uniforms) {
                        //n  = material
                        const material = this;
                        void 0 === name ? Object.entries(uniforms).forEach(([name, uniform]) => {
                            material.attachUniforms(name, uniform)
                        }) : "array" == uniforms.type ? uniforms.value.forEach((uniform, i) => material.attachUniforms(`${name}[${i}]`, uniform)) : "struct" == uniforms.type ? Object.entries(uniforms.value).forEach(([uniform, i]) => material.attachUniforms(`${name}.${uniform}`, i)) : (_miniGl.debug("Material.attachUniforms", {
                            name: name,
                            uniform: uniforms
                        }), material.uniformInstances.push({
                            uniform: uniforms,
                            location: context.getUniformLocation(material.program, name)
                        }))
                    }
                }
            },
            Uniform: {
                enumerable: !1,
                value: class {
                    constructor(e) {
                        this.type = "float", Object.assign(this, e);
                        this.typeFn = {
                            float: "1f",
                            int: "1i",
                            vec2: "2fv",
                            vec3: "3fv",
                            vec4: "4fv",
                            mat4: "Matrix4fv"
                        } [this.type] || "1f", this.update()
                    }
                    update(value) {
                        void 0 !== this.value && context[`uniform${this.typeFn}`](value, 0 === this.typeFn.indexOf("Matrix") ? this.transpose : this.value, 0 === this.typeFn.indexOf("Matrix") ? this.value : null)
                    }
                    //e - name
                    //t - type
                    //n - length
                    getDeclaration(name, type, length) {
                        const uniform = this;
                        if (uniform.excludeFrom !== type) {
                            if ("array" === uniform.type) return uniform.value[0].getDeclaration(name, type, uniform.value.length) + `\nconst int ${name}_length = ${uniform.value.length};`;
                            if ("struct" === uniform.type) {
                                let name_no_prefix = name.replace("u_", "");
                                return name_no_prefix = 
                                  name_no_prefix.charAt(0).toUpperCase() + 
                                  name_no_prefix.slice(1), 
                                  `uniform struct ${name_no_prefix} 
                                  {\n` + 
                                  Object.entries(uniform.value).map(([name, uniform]) => 
                                  uniform.getDeclaration(name, type)
                                  .replace(/^uniform/, ""))
                                  .join("") 
                                  + `\n} ${name}${length>0?`[${length}]`:""};`
                            }
                            return `uniform ${uniform.type} ${name}${length>0?`[${length}]`:""};`
                        }
                    }
                }
            },
            PlaneGeometry: {
                enumerable: !1,
                value: class {
                    constructor(width, height, n, i, orientation) {
                      context.createBuffer(), this.attributes = {
                            position: new _miniGl.Attribute({
                                target: context.ARRAY_BUFFER,
                                size: 3
                            }),
                            uv: new _miniGl.Attribute({
                                target: context.ARRAY_BUFFER,
                                size: 2
                            }),
                            uvNorm: new _miniGl.Attribute({
                                target: context.ARRAY_BUFFER,
                                size: 2
                            }),
                            index: new _miniGl.Attribute({
                                target: context.ELEMENT_ARRAY_BUFFER,
                                size: 3,
                                type: context.UNSIGNED_SHORT
                            })
                        }, this.setTopology(n, i), this.setSize(width, height, orientation)
                    }
                    setTopology(e = 1, t = 1) {
                        const n = this;
                        n.xSegCount = e, n.ySegCount = t, n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1), n.quadCount = n.xSegCount * n.ySegCount * 2, n.attributes.uv.values = new Float32Array(2 * n.vertexCount), n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount), n.attributes.index.values = new Uint16Array(3 * n.quadCount);
                        for (let e = 0; e <= n.ySegCount; e++)
                            for (let t = 0; t <= n.xSegCount; t++) {
                                const i = e * (n.xSegCount + 1) + t;
                                if (n.attributes.uv.values[2 * i] = t / n.xSegCount, n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount, n.attributes.uvNorm.values[2 * i] = t / n.xSegCount * 2 - 1, n.attributes.uvNorm.values[2 * i + 1] = 1 - e / n.ySegCount * 2, t < n.xSegCount && e < n.ySegCount) {
                                    const s = e * n.xSegCount + t;
                                    n.attributes.index.values[6 * s] = i, n.attributes.index.values[6 * s + 1] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 2] = i + 1, n.attributes.index.values[6 * s + 3] = i + 1, n.attributes.index.values[6 * s + 4] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 5] = i + 2 + n.xSegCount
                                }
                            }
                        n.attributes.uv.update(), n.attributes.uvNorm.update(), n.attributes.index.update(), _miniGl.debug("Geometry.setTopology", {
                            uv: n.attributes.uv,
                            uvNorm: n.attributes.uvNorm,
                            index: n.attributes.index
                        })
                    }
                    setSize(width = 1, height = 1, orientation = "xz") {
                        const geometry = this;
                        geometry.width = width,
                        geometry.height = height,
                        geometry.orientation = orientation,
                        geometry.attributes.position.values && geometry.attributes.position.values.length === 3 * geometry.vertexCount 
                        || (geometry.attributes.position.values = new Float32Array(3 * geometry.vertexCount));
                        const o = width / -2,
                            r = height / -2,
                            segment_width = width / geometry.xSegCount,
                            segment_height = height / geometry.ySegCount;
                        for (let yIndex= 0; yIndex <= geometry.ySegCount; yIndex++) {
                            const t = r + yIndex * segment_height;
                            for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                                const r = o + xIndex * segment_width,
                                    l = yIndex * (geometry.xSegCount + 1) + xIndex;
                                geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[0])] = r, 
                                geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[1])] = -t
                            }
                        }
                        geometry.attributes.position.update(), _miniGl.debug("Geometry.setSize", {
                            position: geometry.attributes.position
                        })
                    }
                }
            },
            Mesh: {
                enumerable: !1,
                value: class {
                    constructor(geometry, material) {
                        const mesh = this;
                        mesh.geometry = geometry, mesh.material = material, mesh.wireframe = !1, mesh.attributeInstances = [], Object.entries(mesh.geometry.attributes).forEach(([e, attribute]) => {
                            mesh.attributeInstances.push({
                                attribute: attribute,
                                location: attribute.attach(e, mesh.material.program)
                            })
                        }), _miniGl.meshes.push(mesh), _miniGl.debug("Mesh.constructor", {
                            mesh: mesh
                        })
                    }
                    draw() {
                      context.useProgram(this.material.program), this.material.uniformInstances.forEach(({
                            uniform: e,
                            location: t
                        }) => e.update(t)), this.attributeInstances.forEach(({
                            attribute: e,
                            location: t
                        }) => e.use(t)), context.drawElements(this.wireframe ? context.LINES : context.TRIANGLES, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0)
                    }
                    remove() {
                        _miniGl.meshes = _miniGl.meshes.filter(e => e != this)
                    }
                }
            },
            Attribute: {
                enumerable: !1,
                value: class {
                    constructor(e) {
                        this.type = context.FLOAT, this.normalized = !1, this.buffer = context.createBuffer(), Object.assign(this, e), this.update()
                    }
                    update() {
                        void 0 !== this.values && (context.bindBuffer(this.target, this.buffer), context.bufferData(this.target, this.values, context.STATIC_DRAW))
                    }
                    attach(e, t) {
                        const n = context.getAttribLocation(t, e);
                        return this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(n), context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)), n
                    }
                    use(e) {
                      context.bindBuffer(this.target, this.buffer), this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(e), context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0))
                    }
                }
            }
        });
        const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        _miniGl.commonUniforms = {
            projectionMatrix: new _miniGl.Uniform({
                type: "mat4",
                value: a
            }),
            modelViewMatrix: new _miniGl.Uniform({
                type: "mat4",
                value: a
            }),
            resolution: new _miniGl.Uniform({
                type: "vec2",
                value: [1, 1]
            }),
            aspectRatio: new _miniGl.Uniform({
                type: "float",
                value: 1
            })
        }
    }
    setSize(e = 640, t = 480) {
        this.width = e, this.height = t, this.canvas.width = e, this.canvas.height = t, this.gl.viewport(0, 0, e, t), this.commonUniforms.resolution.value = [e, t], this.commonUniforms.aspectRatio.value = e / t, this.debug("MiniGL.setSize", {
            width: e,
            height: t
        })
    }
    //left, right, top, bottom, near, far
    setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, s = 2e3) {
        this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - s), 0, e, t, n, 1], this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value)
    }
    render() {
        this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach(e => e.draw())
    }
  }
  
  //Sets initial properties
  function e(object, propertyName, val) {
    return propertyName in object ? Object.defineProperty(object, propertyName, {
        value: val,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : object[propertyName] = val, object
  }
  
  //Gradient object
  class Gradient {
      constructor(...t) {
          e(this, "el", void 0), 
          e(this, "cssVarRetries", 0), 
          e(this, "maxCssVarRetries", 200), e(this, "angle", 0), e(this, "isLoadedClass", !1), e(this, "isScrolling", !1), /*e(this, "isStatic", o.disableAmbientAnimations()),*/ e(this, "scrollingTimeout", void 0), e(this, "scrollingRefreshDelay", 200), e(this, "isIntersecting", !1), e(this, "shaderFiles", void 0), e(this, "vertexShader", void 0), e(this, "sectionColors", void 0), e(this, "computedCanvasStyle", void 0), e(this, "conf", void 0), e(this, "uniforms", void 0), e(this, "t", 1253106), e(this, "last", 0), e(this, "width", void 0), e(this, "minWidth", 50), e(this, "height", 300), e(this, "xSegCount", void 0), e(this, "ySegCount", void 0), e(this, "mesh", void 0), e(this, "material", void 0), e(this, "geometry", void 0), e(this, "minigl", void 0), e(this, "scrollObserver", void 0), e(this, "amp", 320), e(this, "seed", 5), e(this, "freqX", 14e-5), e(this, "freqY", 29e-5), e(this, "freqDelta", 1e-5), e(this, "activeColors", [1, 1, 1, 1]), e(this, "isMetaKey", !1), e(this, "isGradientLegendVisible", !1), e(this, "isMouseDown", !1), e(this, "handleScroll", () => {
              clearTimeout(this.scrollingTimeout), this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay), this.isGradientLegendVisible && this.hideGradientLegend(), this.conf.playing && (this.isScrolling = !0, this.pause())
          }), e(this, "handleScrollEnd", () => {
              this.isScrolling = !1, this.isIntersecting && this.play()
          }), e(this, "resize", () => {
              this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6
          }), e(this, "handleMouseDown", e => {
              this.isGradientLegendVisible && (this.isMetaKey = e.metaKey, this.isMouseDown = !0, !1 === this.conf.playing && requestAnimationFrame(this.animate))
          }), e(this, "handleMouseUp", () => {
              this.isMouseDown = !1
          }), e(this, "animate", e => {
              if (!this.shouldSkipFrame(e) || this.isMouseDown) {
                  if (this.t += Math.min(e - this.last, 1e3 / 15), this.last = e, this.isMouseDown) {
                      let e = 160;
                      this.isMetaKey && (e = -160), this.t += e
                  }
                  this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render()
  
              }
              if (0 !== this.last && this.isStatic) return this.minigl.render(), void this.disconnect();
              ( /*this.isIntersecting && */ this.conf.playing || this.isMouseDown) && requestAnimationFrame(this.animate)
          }), e(this, "addIsLoadedClass", () => {
              /*this.isIntersecting && */
              !this.isLoadedClass && (this.isLoadedClass = !0, this.el.classList.add("isLoaded"), setTimeout(() => {
                  this.el.parentElement.classList.add("isLoaded")
              }, 3e3))
          }), e(this, "pause", () => {
              this.conf.playing = false
          }), e(this, "play", () => {
              requestAnimationFrame(this.animate), this.conf.playing = true
          }), e(this, "initGradient", (selector) => {
              this.el = document.querySelector(selector);
              this.connect();
              return this;
          })
      }
      async connect() {
          this.shaderFiles = {
                  vertex: "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 1.5 + .4\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
                  noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
                  blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
                  fragment: "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"
              },
              this.conf = {
                  presetName: "",
                  wireframe: false,
                  density: [.01, .16],
                  zoom: 1,
                  rotation: 0,
                  playing: true
              },
              document.querySelectorAll("canvas").length < 1 ? console.log("DID NOT LOAD HERO STRIPE CANVAS") : (
  
                  this.minigl = new MiniGl(this.el, null, null, !0),
                  requestAnimationFrame(() => {
                      this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars())
                  }),
                  
                  this.scrollObserver = await s.create(.1, !1),
                  this.scrollObserver.observe(this.el),
                  this.scrollObserver.onSeparate(() => {
                      window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.isIntersecting = !1, this.conf.playing && this.pause()
                  }), 
                  this.scrollObserver.onIntersect(() => {
                      window.addEventListener("scroll", this.handleScroll), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("keydown", this.handleKeyDown), this.isIntersecting = !0, this.addIsLoadedClass(), this.play()
                  })
  
              )
      }
      disconnect() {
          this.scrollObserver && (window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.scrollObserver.disconnect()), window.removeEventListener("resize", this.resize)
      }
      initMaterial() {
          this.uniforms = {
              u_time: new this.minigl.Uniform({
                  value: 0
              }),
              u_shadow_power: new this.minigl.Uniform({
                  value: 5
              }),
              u_darken_top: new this.minigl.Uniform({
                  value: "" === this.el.dataset.jsDarkenTop ? 1 : 0
              }),
              u_active_colors: new this.minigl.Uniform({
                  value: this.activeColors,
                  type: "vec4"
              }),
              u_global: new this.minigl.Uniform({
                  value: {
                      noiseFreq: new this.minigl.Uniform({
                          value: [this.freqX, this.freqY],
                          type: "vec2"
                      }),
                      noiseSpeed: new this.minigl.Uniform({
                          value: 5e-6
                      })
                  },
                  type: "struct"
              }),
              u_vertDeform: new this.minigl.Uniform({
                  value: {
                      incline: new this.minigl.Uniform({
                          value: Math.sin(this.angle) / Math.cos(this.angle)
                      }),
                      offsetTop: new this.minigl.Uniform({
                          value: -.5
                      }),
                      offsetBottom: new this.minigl.Uniform({
                          value: -.5
                      }),
                      noiseFreq: new this.minigl.Uniform({
                          value: [2, 1],
                          type: "vec2"
                      }),
                      noiseAmp: new this.minigl.Uniform({
                          value: this.amp
                      }),
                      noiseSpeed: new this.minigl.Uniform({
                          value: 50
                      }),
                      noiseFlow: new this.minigl.Uniform({
                          value: 1
                      }),
                      noiseSeed: new this.minigl.Uniform({
                          //value: this.seed
                         value: this.seed + 10 * e
                      })
                  },
                  type: "struct",
                  excludeFrom: "fragment"
              }),
              u_baseColor: new this.minigl.Uniform({
                  value: this.sectionColors[0],
                  type: "vec3",
                  excludeFrom: "fragment"
              }),
              u_waveLayers: new this.minigl.Uniform({
                  value: [],
                  excludeFrom: "fragment",
                  type: "array"
              })
          };
          for (let e = 1; e < this.sectionColors.length; e += 1) this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
              value: {
                  color: new this.minigl.Uniform({
                      value: this.sectionColors[e],
                      type: "vec3"
                  }),
                  noiseFreq: new this.minigl.Uniform({
                      value: [2 + e / this.sectionColors.length, 4 + e / this.sectionColors.length],
                      type: "vec2"
                  }),
                  noiseSpeed: new this.minigl.Uniform({
                      value: 20 + .3 * e
                  }),
                  noiseFlow: new this.minigl.Uniform({
                      value: 6.5 + .3 * e
                  }),
                  noiseSeed: new this.minigl.Uniform({
                      value: this.seed + 15 * e
                  }),
                  noiseFloor: new this.minigl.Uniform({
                      value: .01
                  }),
                  noiseCeil: new this.minigl.Uniform({
                      value: .63 + .07 * e
                  })
              },
              type: "struct"
          }));
          return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join("\n\n"), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms)
      }
      initMesh() {
          this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry, this.mesh = new this.minigl.Mesh(this.geometry, this.material)
      }
      shouldSkipFrame(e) {
          return !!window.document.hidden || (!this.conf.playing || (parseInt(e, 10) % 2 == 0 || void 0))
      }
      updateFrequency(e) {
          this.freqX += e, this.freqY += e
      }
      toggleColor(index) {
          this.activeColors[index] = 0 === this.activeColors[index] ? 1 : 0
      }
      showGradientLegend() {
          this.width > this.minWidth && (this.isGradientLegendVisible = !0, document.body.classList.add("isGradientLegendVisible"))
      }
      hideGradientLegend() {
          this.isGradientLegendVisible = !1, document.body.classList.remove("isGradientLegendVisible")
      }
      init() {
          this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate), window.addEventListener("resize", this.resize)
      }
  
      waitForCssVars() {
          if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")) this.init(), this.addIsLoadedClass();
          else {
              if (this.cssVarRetries += 1, this.cssVarRetries > this.maxCssVarRetries) {
                  return this.sectionColors = [16711680, 16711680, 16711935, 65280, 255], void this.init();
              }
              requestAnimationFrame(() => this.waitForCssVars())
          }
      }
  
      initGradientColors() {
          this.sectionColors = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4", "--gradient-color-5"].map(cssPropertyName => {
              let hex = this.computedCanvasStyle.getPropertyValue(cssPropertyName).trim();
              //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
              if (5 === hex.length) {
                  const hexTemp = hex.substr(1).split("").map(hexTemp => hexTemp + hexTemp).join("");
                  hex = `#${hexTemp}`
              }
              return hex && `0x${hex.substr(1)}`
          }).filter(Boolean).map(normalizeColor)
      }
  }
  
  var gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
   
   
   let intro = {};
    intro.opacityIn = [0,1];
    intro.translateIn = ['25%','50%'];
    intro.translateOut = ['50%','60%'];
    intro.translateY = ['-50%','-50%'];
    intro.durationIn = 500;
    intro.durationOut = 300;
    intro.delay = 100;
    intro.easing = "easeInOutQuad";
    
    anime.timeline()
      .add({
        targets: '.siteLoader__intro .siteLoader__word-1',
        opacity: intro.opacityIn,
        duration: intro.durationIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        delay: 0,
        easing: intro.easing,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-1',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-2',
        opacity: intro.opacityIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        easing: intro.easing,
        duration: intro.durationIn,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-2',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-3',
        opacity: intro.opacityIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        easing: intro.easing,
        duration: intro.durationIn,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-3',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro',
        opacity: 0,
        duration: 20,
      }).add({
            targets: 'main',
            width: '100%',
            duration: 500,
            easing: 'easeInOutQuad',
      }, '-=1250').add({ 
            targets: '.grid__card',
            height: '100%',
            opacity: 1,
            translateY: ['50%', '0%'],
            duration: 600,
            easing: 'easeInOutQuad',
        }, '+=200').add({
            targets: '.grid__title, .grid__image',
            duration: 600,
            translateX: ['-60%', '0'],
            opacity: 1,
            easing: 'easeInOutQuad',
        }, '+=100');
    
        class Details {
            constructor() {
                this.DOM = {};
    
                const detailsTmpl = `
                    <div class="letter__bg"></div>
                    <img class="letter__img" src="" alt="img 01"/>
                    <div class="letter__content"></div>
                `;
    
                this.DOM.details = document.createElement('section');
                this.DOM.details.className = 'letter';
                this.DOM.details.innerHTML = detailsTmpl;
                DOM.content.appendChild(this.DOM.details);
                this.init();
            }
            init() {
                this.DOM.bg = this.DOM.details.querySelector('.letter__bg');
                this.DOM.img = this.DOM.details.querySelector('.letter__img');
                this.DOM.description = this.DOM.details.querySelector('.letter__content');
    
                this.initEvents();
            }
            initEvents() {
            }
            fill(info) {
                this.DOM.img.src = info.img;
                this.DOM.description.innerHTML = info.description;
            }
            getProductDetailsRect() {
                return {
                    productBgRect: this.DOM.productBg.getBoundingClientRect(),
                    detailsBgRect: this.DOM.bg.getBoundingClientRect(),
                    productImgRect: this.DOM.productImg.getBoundingClientRect(),
                    detailsImgRect: this.DOM.img.getBoundingClientRect()
                };
            }
            open(data) {
                if ( this.isAnimating ) return false;
                this.isAnimating = true;
    
                this.DOM.details.classList.add('letter--open');
                
                this.DOM.productBg = data.productBg;
                this.DOM.productImg = data.productImg;
    
                const rect = this.getProductDetailsRect();
    
                this.DOM.bg.style.transform = `translateX(${rect.productBgRect.left-rect.detailsBgRect.left}px) translateY(${rect.productBgRect.top-rect.detailsBgRect.top}px) scaleX(${rect.productBgRect.width/rect.detailsBgRect.width}) scaleY(${rect.productBgRect.height/rect.detailsBgRect.height})`;
                this.DOM.bg.style.opacity = 1;
                
                this.DOM.img.style.transform = `translateX(${rect.productImgRect.left-rect.detailsImgRect.left}px) translateY(${rect.productImgRect.top-rect.detailsImgRect.top}px) scaleX(${rect.productImgRect.width/rect.detailsImgRect.width}) scaleY(${rect.productImgRect.height/rect.detailsImgRect.height})`;
                this.DOM.img.style.opacity = 1;
    
                document.querySelector('h1').addEventListener('mouseover', () => {
                    squash.play();
                })
    
                anime({
                    targets: [this.DOM.bg,this.DOM.img],
                    duration: (target, index) => index ? 800 : 400,
                    easing: (target, index) => index ? 'easeOutExpo' : 'easeOutSine',
                    elasticity: 800,
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    complete: () => this.isAnimating = false
                });
    
                anime({
                    targets: [this.DOM.description],
                    duration: 750,
                    easing: 'easeOutExpo',
                    delay: 300,
                    translateY:  (target, index, total) => {
                        return index === total - 1 ? [50,0] : 1;
                    },
                    opacity: 1
                });
            }
        };
    
        class Item {
            constructor(el) {
                this.DOM = {};
                this.DOM.el = el;
                this.DOM.productwrap = this.DOM.el.querySelector('.grid__card');
                this.DOM.product = this.DOM.el.querySelector('.grid__cardInner');
                this.DOM.productBg = this.DOM.product.querySelector('.grid__cardBg');
                this.DOM.productImg = this.DOM.product.querySelector('.grid__image');
    
                this.info = {
                    img: this.DOM.productImg.src,
                    description: this.DOM.product.querySelector('.grid__content').innerHTML,
                };
    
                this.initEvents();
            }
            initEvents() {
                this.DOM.product.addEventListener('click', () => this.open());
            }
            open() {
                document.getElementById('mainID').style.overflow = 'hidden auto';
                this.DOM.product.classList.add('grid__cardInner--hide');
                DOM.details.fill(this.info);
                DOM.details.open({
                    productBg: this.DOM.productBg,
                    productImg: this.DOM.productImg
                });
                
            }
        };
    
        const DOM = {};
        DOM.grid = document.querySelector('.grid');
        DOM.content = DOM.grid.parentNode;
        DOM.gridItems = Array.from(DOM.grid.querySelectorAll('.grid__card'));
        let items = [];
        DOM.gridItems.forEach(item => items.push(new Item(item)));
    
        DOM.details = new Details();        

        function myFunction(x) {
            if (x.matches) { // If media query matches
                var buttonEl = document.querySelector('.grid__card');

                function animateButton(scale, skewX, skewY, duration, elasticity) {
                anime.remove(buttonEl);
                anime({
                    targets: buttonEl,
                    scale: scale,
                    skewX: skewX,
                    skewY: skewY,
                    duration: duration,
                    elasticity: elasticity
                });
                }
        
                function enterButton() { animateButton(1.1, '-3deg', '3deg', 600, 200) };
                function leaveButton() { animateButton(1, '0', '0', 500, 100) };
        
                buttonEl.addEventListener('mouseenter', enterButton, false);
                buttonEl.addEventListener('mouseleave', leaveButton, false);
            }
          }
          
          var x = window.matchMedia("(min-width: 720px)")
          myFunction(x) // Call listener function at run time
          x.mediaQueryList.addListener(myFunction) // Attach listener function on state changes