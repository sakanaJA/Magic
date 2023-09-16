let hoverTimer;
document.querySelector('.card').addEventListener('mouseover', function() {
    hoverTimer = setTimeout(function() {
        window.location.href = "chill/chill.html";
    }, 2600);
});

// マウスが要素から離れた場合、タイマーをクリア
document.querySelector('.card').addEventListener('mouseout', function() {
    clearTimeout(hoverTimer);
});
