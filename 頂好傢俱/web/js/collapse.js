$(function() {
  var $title = $('.modules-collapse > div > dt');
  var $content = $('.modules-collapse > div > dt.active').next('dd');
  
  $content.slideDown();
  
  $title.click(function() {
    // 讓每一組collapse都可以分開使用
    var $modulesTitle = $(this).closest('.modules-collapse');
    
    // 設定共同展開速度
    var slideSpeed = 500;
    
    // .-keep的設定
    if($modulesTitle.hasClass('-keep')) {
      $(this).toggleClass('active');
      if($(this).hasClass('active')) {
        $(this).next('dd').stop().slideDown(slideSpeed);
      }
      else {
        $(this).next('dd').stop().slideUp(slideSpeed);
      }
    }
    
    // not .-keep的設定
    else {
      // 若原本已經是展開的，則收闔
      if($(this).hasClass('active')) {
        $(this).next('dd').stop().slideUp(slideSpeed).end().removeClass('active');
      }
      else {
        $modulesTitle.find('.active').next('dd').stop().slideUp(slideSpeed).end().removeClass('active');

        // 被點擊到的展開
        $(this).addClass('active').next('dd').stop().slideDown(400);
      }
    }
  });
});