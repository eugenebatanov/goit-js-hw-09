!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(function(){a=setInterval(e,1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(a),t.start.disabled=!1,t.stop.disabled=!0}));var a=null;function e(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}}();
//# sourceMappingURL=01-color-switcher.57c537ba.js.map