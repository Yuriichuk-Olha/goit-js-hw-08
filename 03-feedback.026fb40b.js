function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,a=setTimeout(h,e),l?y(t):f}function T(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function h(){var t=v();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-u);return s?p(n,i-(t-c)):n}(t))}function w(t){return a=void 0,g&&o?y(t):(o=r=void 0,f)}function x(){var t=v(),n=T(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,e),y(u)}return void 0===a&&(a=setTimeout(h,e)),f}return e=m(e)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(m(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},x.flush=function(){return void 0===a?f:w(v())},x}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};document.querySelector(".feedback-form").addEventListener("submit",t(e)((function(t){t.preventDefault();const e={input:input.value,textarea:textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e));const n=localStorage.getItem("feedback-form-state");if(console.log(n),n){JSON.parse(n);console.log(e)}t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500));
//# sourceMappingURL=03-feedback.026fb40b.js.map