// JavaScript Document
window.addEventListener('DOMContentLoaded',function (){
"use strict";
//fvを超えたらヘッダーに背景色がついてfixedにする。
  let myWindow = $(window);
  let header = $('.header-wrap');
  let mvh = $('.top-bg').height();

  myWindow.scroll(function(){
    let stv2 = $(this).scrollTop();
    if(stv2 > mvh){
      header.addClass('header-fixed');
    } else {
      header.removeClass('header-fixed');
    }
  });
});

//ファーストビューの波紋設定
$(function () {
	$('.area').ripples({
		resolution: 300,
    dropRadius: 20,
    perturbance: 0.01
	});
});
//トップに戻るボタン
$(function () {
  let topBtn = $("#scroll-top");
	let win = $(window);
  topBtn.hide();

  win.scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });


  topBtn.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate({
      scrollTop: 0
    }, 500);
  });

});

window.addEventListener('DOMContentLoaded',function () {
	//ハンバーガーメニュー実装
	$('#nav-btn').on('click',function(){
		$(this).toggleClass('-active');
		$('#header-wrap').toggleClass('-active');
		$('#hamburger').toggleClass('-active');
		$('.sns').toggleClass('-active');
		$('.btn').toggleClass('-active');
		$('#scroll-top').toggleClass('-active');
	});
	$('.item-btn').on('click',function(){
		$('#nav-btn').removeClass('-active');
		$('#header-wrap').removeClass('-active');
		$('#hamburger').removeClass('-active');
		$('.sns').removeClass('-active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
	
	
	new WOW().init();
});