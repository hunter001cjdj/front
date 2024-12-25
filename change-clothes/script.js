// 選取所有 .layer 元素
let layers = document.querySelectorAll(".layer");

// 為每個 layer 添加點擊事件
layers.forEach(function (elm) {
  elm.addEventListener("click", function (e) {
    // 獲取點擊位置的元素
    let p = document.elementFromPoint(e.clientX, e.clientY);

    // 停止動畫並設定新的位置
    elm.style.animation = "none";
    if (p.classList.contains("one") || p.classList.contains("four")) {
      elm.style.transform = "translateX(0px)";
    }
    if (p.classList.contains("two")) {
      elm.style.transform = "translateX(-250px)";
    }
    if (p.classList.contains("three")) {
      elm.style.transform = "translateX(-500px)";
    }
  });

  // 雙擊恢復動畫
  elm.addEventListener("dblclick", function (e) {
    elm.style.animation = "";
    elm.style.transform = "";
  });
});
