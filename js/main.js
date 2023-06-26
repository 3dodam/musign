// 메인메뉴에서 움직이는 바

$('.gnb li a').mouseenter(function (){
  let bar=$(this).position().left;
  console.log(bar)
  let widNum = $(this).width();
  // $('.bar').animate({실행문},시간)
  $('.bar').animate({
    'left':bar+'px',
    'width':widNum + 'px',
    'opacity':1
  },300)
})

$('.gnb').mouseleave(function (){

  $('.bar').animate({
    'left':0,
    'width':0,
    'opacity':0
  })
})



///------------- scrolla----------

$('.animate').scrolla({
  // default
  mobile: true, // 모바일 버전에서 활성화
  once: false, // 스크롤시 한번 또는 여러번 실행을 설정
  animateCssVersion: 4 // used animate.css version (3 or 4)
});


//menuOpen
$('.menuOpen .open').click('click',function(e){
  $('.menuOpen .menuWrap').addClass('on')
})
$('.menuOpen .close').click('click',function(e){
  $('.menuOpen .menuWrap').removeClass('on')
})

$('.menuWrap ul li').click(function(e){
  e.precentDefault();
  $('.menuOpen .menuWrap').removeClass('on')
})


//background color 변경
$(window).scroll(function(){
  let scrollTop=$(this).scrollTop();
  console.log(scrollTop);
  let offset=$('.service').offset().top - 400 ;
  if(scrollTop>=offset) {
    $('body').addClass('on');
  } else {
    $('body').removeClass('on');
  }
});
//background color 변경
// $(window).scroll(function(){
//   let scrollTop=$(this).scrollTop();
//   console.log(scrollTop);
//   let offset=$('.team').offset().top - 800 ;
//   if(scrollTop>=offset) {
//     $('body').removeClass('on');
//   }
// });

