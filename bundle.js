(()=>{const e=document.querySelector(".slider"),t=document.querySelector(".prev-button"),n=document.querySelector(".next-button"),o=Array.from(e.querySelectorAll(".promo__container")).length;let r=0;t.addEventListener("click",(()=>{r=(r-1+o)%o,c()})),n.addEventListener("click",(()=>{r=(r+1)%o,c()}));const c=()=>{const t=e.clientWidth,n=-r*t;e.style.transform=`translateX(${n}px)`,document.querySelector(".slider-active-page").textContent=r+1,document.querySelector(".slider-pages-number").textContent=`/${o}`};window.addEventListener("load",(()=>{c()})),document.querySelector(".open-button").addEventListener("click",(function(){document.getElementById("myForm").style.display="block"})),document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault()}));const d=document.querySelector("[name=name]"),l=document.querySelector("[name=email]"),u=document.querySelector("[name=text]"),a=document.getElementById("send");[d,l,u].forEach((e=>{e.addEventListener("input",(()=>{a.disabled=!(d.value&&l.value&&u.value)}))}))})();