    //我一直在用这个 绝对好用 还可以meta都不用写 js会判断如果没有则创建一个。
    (function (win) {
      var ratio, scaleValue, renderTime,
              document = window.document,
              docElem = document.documentElement,
              vpm = document.querySelector('meta[name="viewport"]');

      if (vpm) {
          var tempArray = vpm.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
          if (tempArray) {
              scaleValue = parseFloat(tempArray[2]);
              ratio = parseInt(1 / scaleValue);
          }
      } else {
          vpm = document.createElement("meta");
          vpm.setAttribute("name", "viewport");
          vpm.setAttribute("content", "width=device-width, initial-scale=1, user-scalable=no, minimal-ui");
          docElem.firstElementChild.appendChild(vpm);
      }

      win.addEventListener("resize", function () {
          clearTimeout(renderTime);
          renderTime = setTimeout(initPage, 300);
      }, false);

      win.addEventListener("pageshow", function (e) {
          e.persisted && (clearTimeout(renderTime), renderTime = setTimeout(initPage, 300));
      }, false);

      "complete" === document.readyState ? document.body.style.fontSize = 16 * ratio + "px" : document.addEventListener("DOMContentLoaded", function () {
          document.body.style.fontSize = 16 * ratio + "px";
      }, false);

      initPage();

      function initPage() {
          var htmlWidth = docElem.getBoundingClientRect().width;
          console.log(htmlWidth)
          htmlWidth / ratio > 750 && (htmlWidth = 750 * ratio);
          win.rem = htmlWidth / 7.5;
          docElem.style.fontSize = win.rem + "px";
      }
  })(window);