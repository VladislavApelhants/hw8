!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),d?y(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function O(){var e=p(),n=T(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},O.flush=function(){return void 0===f?u:w(p())},O}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?c(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S,T=document.querySelector(".feedback-form"),h=document.querySelector("input[name='email']"),w=document.querySelector("textarea[name=message]"),O={},x="feedback-form-state";T.addEventListener("submit",(function(e){e.preventDefault();var t={};if(new FormData(e.currentTarget).forEach((function(e,n){t[n.trim()]=e.trim()})),""===t.email||""===t.message)return void alert("Не все поля заполнены");console.log(t),e.currentTarget.reset(),localStorage.removeItem(x)})),T.addEventListener("input",n((function(e){var t=e.target;O[t.name]=t.value,localStorage.setItem(x,JSON.stringify(O))}),500)),(S=JSON.parse(localStorage.getItem(x)))&&(h.value=S.email,w.value=S.message)}();
//# sourceMappingURL=03-feedback.e073015e.js.map
