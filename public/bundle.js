(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}document.addEventListener("DOMContentLoaded",(function(){new s(document.getElementById("menu"))}));var o=document.querySelector(".slider"),r=document.querySelector(".prev-button"),c=document.querySelector(".next-button"),i=Array.from(o.querySelectorAll(".promo__container")).length,u=0;r.addEventListener("click",(function(){u=(u-1+i)%i,l()})),c.addEventListener("click",(function(){u=(u+1)%i,l()}));var l=function(){var e=o.clientWidth,t=-u*e;o.style.transform="translateX(".concat(t,"px)"),document.querySelector(".slider-active-page").textContent=u+1,document.querySelector(".slider-pages-number").textContent="/".concat(i)};window.addEventListener("load",(function(){l()}));var s=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=t,this.closed=!0,this.dropDown=document.querySelector(".drop-down"),this.init()},(n=[{key:"init",value:function(){var e=this;this.menu.addEventListener("click",(function(){e.closed=!e.closed,e.toggle()})),this.toggle()}},{key:"toggle",value:function(){this.closed?(this.menu.style.backgroundImage='url("./img/burger.png")',this.dropDown.style.display="none"):(this.menu.style.backgroundImage='url("./img/cross.png")',this.dropDown.style.display="block")}}])&&t(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();function a(e,t){var n=document.createElement("div");"success"===e?n.classList.add("toast","toast-success"):n.classList.add("toast","toast-error"),n.textContent=t;var o=document.getElementById("toast");o.appendChild(n),n.classList.add("show"),setTimeout((function(){n.classList.remove("show"),setTimeout((function(){o.removeChild(n)}),500)}),3e3)}function d(){document.getElementById("myForm").style.display="none"}document.querySelector(".open-button").addEventListener("click",(function(){document.getElementById("myForm").style.display="block"})),document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault()}));var m=document.querySelector("[name=name]"),f=document.querySelector("[name=email]"),y=document.querySelector("[name=text]"),v=document.getElementById("send"),p=document.getElementById("closeForm");v.addEventListener("click",(function(){return function(){v.disabled=!0;var e=new FormData(document.querySelector("form"));fetch("send.php",{method:"POST",body:e}).then((function(e){if(!e.ok)throw console.log(e),new Error("Network response was not ok");return e.text()})).then((function(e){if(e.includes("failed"))throw console.log(e),new Error("Что-то пошло не так");console.log(e),a("success","Сообщение отправлено"),g.forEach((function(e){return e.value=""})),d(),console.log("Сообщение успешно отправлено")})).catch((function(e){a("error","Сообщение не отправлено: "+e.message),console.error("Error:",e),v.disabled=!1}))}()})),p.addEventListener("click",(function(){return d()}));var g=[m,f,y];g.forEach((function(e){e.addEventListener("input",(function(){v.disabled=!(m.value&&f.value&&y.value)}))}))})();