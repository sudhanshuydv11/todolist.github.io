!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){let n=document.getElementById("add_input"),o=document.getElementById("add_button");n.addEventListener("keypress",e=>{"Enter"===e.key&&o.click()})},function(e,t){let n=2;document.getElementById("add_button").onclick=function(){let e=document.getElementById("add_input"),t=e.value;if(""===t)return;let r=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),i=document.createElement("input"),l=document.createElement("text");r.className="card",r.id="card"+n.toString(),i.type="checkbox",c.className="common_div",d.className="common_div",i.id=n.toString(),l.innerText=t,l.className="custom_text",l.id="text"+n.toString(),c.appendChild(i),d.appendChild(l),r.appendChild(c),r.appendChild(d),o.appendChild(r),setTimeout(()=>{l.style.opacity="1",r.style.opacity="1"},10),i.addEventListener("click",()=>{let e=document.getElementById("text"+i.id);e.style.color="grey",e.style.textDecoration="line-through",e=document.getElementById("card"+i.id),e.style.transition="opacity 0.5s",e.style.opacity="0",setTimeout(()=>{e.remove()},400,e)}),e.value="",n++};let o=document.getElementById("card_container");console.log("success")}]);