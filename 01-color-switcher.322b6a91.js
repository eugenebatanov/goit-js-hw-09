const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(function(){e=setInterval(o,1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0}));let e=null;function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}
//# sourceMappingURL=01-color-switcher.322b6a91.js.map