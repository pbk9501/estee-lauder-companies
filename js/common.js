// $(document).readyState(function(){}); 원래 문법
$(function(){
  // 1. 변수 선언
  const body = "body";
  const speed = 300;
  let viewportW, viewportH;
  const gnb = "#estee-gnb";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  const btnLang = ".btn-lang";
  const btnList = ".btn-list";
  const btnSitemap =".btn-sitemap";
  const btnClose=".btn-close";
  const sitemap = ".mo-gnb-sitemap";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2-wrap";
  const blankAnchor = "a[href='#']";

  // 반응형 구현
  rwd();
  $(window).resize(function(){
    rwd();
  });

  // 2. 실행될 스크립트 작성
  // GNB 타겟, 이벤트, 함수
  $(mainMenu).mouseenter(function(){
    $(this).find(subMenu).stop().slideDown(300);
  });
  $(mainMenu).mouseleave(function(){
    $(this).find(subMenu).stop().slideUp(300);
  });
  // $(gnb).mouseenter(function(){
  //   $(this).find(subMenu).slideDown(300);
  //   $(this).addClass("sub-on");
  // });
  // $(gnb).mouseleave(function(){
  //   $(this).find(subMenu).slideUp(300);
  //   $(this).removeClass("sub-on");    
  // });

  // 언어선택 구현
  $(btnLang).click(function(){
    $(this).next().stop().slideToggle(speed);
  });

  //  모바일 GNB, 사이트맵
  $(btnSitemap).click(function(){
    $(body).addClass("fixed");    
    $(sitemap).addClass("on");
  });

  $(btnClose).click(function(){
    $(body).removeClass("fixed"); 
    $(sitemap).removeClass("on");
  });


  // 모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function(e) {
    if($(body).hasClass("mo")){ // 모바일 해상도에서만 실행
      e.preventDefault(); // <a>의 링크 기능 실행 막기
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
      $(this).next().stop().slideToggle(300);
    }
  });

  // 임시링크 실행 막기
  $(blankAnchor).click(function(e){
    e.preventDefault();
  });

  // 사용자 함수
  function rwd(){
    viewportW = window.innerWidth;
    viewportH = window.innerWidth;
    // console.log(viewportW, viewportH);
    if(viewportW < 768){ //모바일 해상도라면
      $(body).removeClass("tb pc").addClass("mo");
    } else if(viewportW >= 768 && viewportW < 1280 ){
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(smSubMenu).attr("style","");
  }
});


