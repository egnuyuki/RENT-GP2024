$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#h-nav").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
});

$("#h-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#h-nav").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
});
$(".menu-btn").click(function (){
    $(this).toggleClass('active');
    
});

window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
};