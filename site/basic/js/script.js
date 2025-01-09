



// 연혁 연도 클릭 시 스크롤 이동
$(function () {
  $('.history_year_list').on('click', function () {
    const index = $(this).index(); // 클릭한 리스트의 인덱스 가져오기
    const targetOffset = $('.history_right_list').eq(index).offset().top - 120; // 타겟 위치 계산 (여유 공간 추가)

    $('html, body').animate(
      { scrollTop: targetOffset }, // 타겟 위치로 스크롤
      500, // 스크롤 애니메이션 시간 (밀리초)
      'swing' // 애니메이션 효과 (swing 또는 linear)
    );
  });

  // 스크롤 시 연도 on 클래스 업데이트
  function updateYearOnScroll() {
    const sections = $('.history_right_list');
    const yearLists = $('.history_year_list');
    const scrollTop = $(window).scrollTop();

    sections.each(function (index) {
      const offsetTop = $(this).offset().top - 400;
      const nextOffsetTop = sections.eq(index + 1).offset()?.top - 400 || Infinity;

      if (scrollTop >= offsetTop && scrollTop < nextOffsetTop) {
        yearLists.removeClass('on');
        yearLists.eq(index).addClass('on');
        return false;
      }
    });
  }

  $(window).on('scroll', updateYearOnScroll);
  updateYearOnScroll();
});




$(document).ready(function () {
  // 1DEP 메뉴 클릭 시
  $(".mo_dep1_list").click(function () {
    $(".mo_dep1_list").removeClass("on"); // 다른 메뉴 비활성화
    $(this).addClass("on"); // 클릭된 메뉴 활성화

    $(".mo_dep2_list").removeClass("on").hide(); // 모든 하위 메뉴 숨기기
    let index = $(this).index(); // 클릭된 메뉴의 인덱스
    let targetDep2 = $(".mo_dep2_ul .mo_dep2_list").eq(index);

    targetDep2.addClass("on").fadeIn(); // 해당 하위 메뉴 표시

    // 계단식 효과 추가
    let menuItems = targetDep2.find(".mo_dep2_menu_ul .mo_dep2_menu_list"); // 하위 메뉴 리스트
    menuItems.each(function (i) {
      $(this).css("opacity", 0); // 초기 상태: 숨김
      setTimeout(() => {
        $(this).animate({ opacity: 1, top: "0px" }, 50); // 0.1초 간격으로 등장
      }, i * 100); // i번째 항목마다 0.1초 간격
    });
  });

  // mo_dep2_menu_list 클릭 시 on 클래스 추가/제거 및 mo_dep3_ul 슬라이드 효과
  $(document).on("click", ".mo_dep2_menu_list", function () {
    let $this = $(this); // 클릭된 요소
    let $targetDep3 = $this.find(".mo_dep3_ul"); // 클릭된 메뉴의 mo_dep3_ul

    // 다른 mo_dep2_menu_list의 on 클래스 제거 및 mo_dep3_ul 슬라이드 업
    $(".mo_dep2_menu_list").not($this).removeClass("on").find(".mo_dep3_ul").slideUp();

    // 클릭된 요소에 on 클래스를 토글
    if ($this.hasClass("on")) {
      $this.removeClass("on");
      $targetDep3.slideUp(); // 같은 객체 다시 클릭 시 슬라이드 업
    } else {
      $this.addClass("on");
      if ($targetDep3.length) {
        $targetDep3.slideDown(); // mo_dep3_ul가 있을 때만 슬라이드 다운
      }
    }
  });
});




// 메인) 공지사항 스위퍼
$(function(){
    var noticeSwiper = new Swiper(".notice_swiper", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".notice-button-next",
          prevEl: ".notice-button-prev",
        },
      });
});


// 햄버거 클릭시 전체 메뉴 등장
$(function () {
  // pc 햄버거 버튼 클릭 시
  $('.pc_hambg').click(function () {
      $('.all_nav_box').addClass('on'); // .all_nav_box에 on 클래스 추가
      $('body').css('overflow-y', 'hidden'); // body 스크롤 비활성화
  });

  // 닫기 버튼 클릭 시
  $('.all_nav_box .close_btn').click(function () {
      $('.all_nav_box').removeClass('on'); // .all_nav_box에서 on 클래스 제거
      $('body').css('overflow-y', 'auto'); // body 스크롤 활성화
  });
});


$(function () {
  // mo 햄버거 버튼 클릭 시
  $('.mo_hambg').click(function () {
    if ($('#header .mo_nav').hasClass('on')) {
      $('#header .mo_nav').removeClass('on'); // 메뉴 닫기
      $('body').css('overflow-y', 'auto'); // 스크롤 활성화
      $('.dynamic_black_dim').removeClass('on'); // 블랙딤 비활성화
    } else {
      $('#header .mo_nav').addClass('on'); // 메뉴 열기
      $('body').css('overflow-y', 'hidden'); // 스크롤 비활성화
      $('.dynamic_black_dim').addClass('on'); // 블랙딤 활성화
    }
  });

  // 윈도우 크기 조정 시 블랙딤 비활성화
  $(window).resize(function() {
    if ($(window).width() >= 1400) {
      $('.dynamic_black_dim').removeClass('on'); // 1400px 이상 시 블랙딤 비활성화
      $('#header .mo_nav').removeClass('on'); // 메뉴 닫기
      $('body').css('overflow-y', 'auto'); // 스크롤 활성화
    }
  });
});



$(function () {
  // body의 스크롤 상태를 관리하는 카운터 변수
  let bodyScrollCounter = 0;

  function updateBodyScroll() {
      if (bodyScrollCounter > 0) {
          $('body').css('overflow-y', 'hidden'); // 스크롤 비활성화
      } else {
          $('body').css('overflow-y', 'auto'); // 스크롤 활성화
      }
  }

  // 팝업 다시보기 버튼 클릭 시
  $('.popup_btn_box').click(function () {
      if (!$('.popup_view_wrap').hasClass('on')) { // 팝업이 비활성화 상태일 때만
          $('.popup_view_wrap').addClass('on'); // 팝업 활성화
          bodyScrollCounter++; // 카운터 증가
          updateBodyScroll(); // 상태 업데이트
      }
  });

  // 팝업 닫기 버튼 클릭 시
  $('.popup_view_wrap .close_btn').click(function () {
      if ($('.popup_view_wrap').hasClass('on')) { // 팝업이 활성화 상태일 때만
          $('.popup_view_wrap').removeClass('on'); // 팝업 비활성화
          bodyScrollCounter--; // 카운터 감소
          updateBodyScroll(); // 상태 업데이트
      }
  });
  
  // 헤더 호버 이벤트
  $('.pc_nav .dep_1').hover(
      function () {
          $(this).find('.dep_2_wrap').addClass('on'); // 드롭다운 활성화
          $('.black_dim').addClass('on'); // 블랙딤 활성화
          bodyScrollCounter++; // 카운터 증가
          updateBodyScroll(); // 상태 업데이트
      },
      function () {
          $(this).find('.dep_2_wrap').removeClass('on'); // 드롭다운 비활성화
          $('.black_dim').removeClass('on'); // 블랙딤 비활성화
          bodyScrollCounter--; // 카운터 감소
          updateBodyScroll(); // 상태 업데이트
      }
  );
});



// 메인) 비지니스 list호버시 on클래스 추가
$(function () {
  $('.business_list').hover(function () {
      // 현재 hover된 요소에 on 추가
      $(this).addClass('on').siblings().removeClass('on');
  });
});

// 메인) 비지니스 1000px 이하일때 swiper적용
$(document).ready(function () {
  let swiper = undefined; // Swiper 인스턴스

  function initSwiper() {
    if ($(window).width() <= 1000) {
      if (!swiper) {
        swiper = new Swiper('.business_box .swiper-container', {
          slidesPerView: 2.2,
          spaceBetween: 20,
          loop: false,
          centeredSlides: false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          on: {
            slideChangeTransitionEnd: function () {
              // 모든 슬라이드에서 on 클래스 제거
              $('.business_list').removeClass('on');
              // 현재 active 슬라이드에 on 클래스 추가
              $('.swiper-slide-active').addClass('on');
            },
          },
          breakpoints: {
            0: {
              slidesPerView: 1.1,
            },
            500: {
              slidesPerView: 1.4,
            },
            600: {
              slidesPerView: 1.6,
            },
            700: {
              slidesPerView: 1.8,
            },
            800: {
              slidesPerView: 2.3,
            }
          }
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(); // Swiper 파괴
        swiper = undefined;
        $('.business_ul.swiper-wrapper').removeAttr('style'); // 스타일 초기화
        $('.business_list.swiper-slide').removeAttr('style');
      }
    }
  }

  // 초기 실행
  initSwiper();

  // 창 크기 변경 시 Swiper 상태 확인
  $(window).resize(function () {
    initSwiper();
  });
});



// 메인) 춘천에서 나고자란 건강한 먹거리 ScrollTrigger
$(function () {
    // GSAP ScrollTrigger 사용
    gsap.registerPlugin(ScrollTrigger);
      
    // **텍스트 이동**을 담당하는 트리거
    gsap.to(".infinite_text", {
      x: "-40%", // 텍스트 이동
      scrollTrigger: {
        trigger: ".infinite_text_box", // 트리거 요소
        start: "top bottom-=10%", // 트리거 시작 지점
        end: "bottom top", // 트리거 종료 지점
        scrub: 1.5, // 스크롤과 1:1 매핑
      }
    });
  
    // **색상 변경**을 담당하는 별도 트리거
    gsap.to(".infinite_text_box", {
      backgroundColor: "rgba(255, 184, 0, 1)", // 배경색 변경
      scrollTrigger: {
        trigger: ".infinite_text_box", // 트리거 요소
        start: "top bottom", // 색상 변경 시작 시점
        end: "bottom bottom+=20%", // 색상 변경 종료 시점
        scrub: true, // 부드러운 스크롤 반응
      }
    });
});



// 메인) 함께하는 기관 swiper
$(function(){
  var partnerSlider = new Swiper(".partner_slider_swiper", {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".partner_slider_next",
      prevEl: ".partner_slider_prev",
    },
    pagination: {
      el: ".partner_slider_fraction",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      300: {
        slidesPerView: 1.2,
      },
      400: {
        slidesPerView: 1.5,
      },
      500: {
        slidesPerView: 2.0,
      },
      600: {
        slidesPerView: 2.5,
      },
      700: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 3.5,
      },
      900: {
        slidesPerView: 4,
      }
    }
  });
});


// 헤더) 팝업 다시보기 swiper
$(function(){
  var partnerSlider = new Swiper(".popup_slider_swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".popup_slider_next",
      prevEl: ".popup_slider_prev",
    },
    pagination: {
      el: ".popup_slider_fraction",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1.7,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
});



// 공통) 셀렉트 박스 클릭 class 추가/삭제
$(function(){
  $(document).ready(function() {
    // select_up_btn 클릭 시 클래스 추가/삭제
    $('.select_up_btn').on('click', function(event) {
      event.stopPropagation(); // 이벤트 전파 중단

      // 클릭된 버튼과 같은 부모를 가진 select_up_list_box 선택
      var $thisButton = $(this);
      var $listBox = $thisButton.siblings('.select_up_list_box');

      // 다른 버튼과 리스트 박스에서 on 클래스 제거
      $('.select_up_btn').not($thisButton).removeClass('on');
      $('.select_up_list_box').not($listBox).removeClass('on');

      // 클릭된 버튼과 관련된 리스트 박스에 on 클래스 토글
      if (!$listBox.hasClass('on')) {
        $listBox.addClass('on');
        $thisButton.addClass('on');
      } else {
        $listBox.removeClass('on');
        $thisButton.removeClass('on');
      }
    });

    // html, body 클릭 시 모든 on 클래스 제거
    $('html, body').on('click', function() {
      $('.select_up_btn').removeClass('on');
      $('.select_up_list_box').removeClass('on');
    });

    // .select_up_list_box 클릭 시 이벤트 전파 중단
    $('.select_up_list_box').on('click', function(event) {
      event.stopPropagation();
    });

    // select_up_list_box 내에서만 스크롤 처리
    $('.select_up_list_box').on('mousewheel DOMMouseScroll', function(event) {
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(this)[0].scrollHeight;
      var outerHeight = $(this).outerHeight();

      // 스크롤 제한
      if ((delta > 0 && scrollTop === 0) || (delta < 0 && scrollTop + outerHeight >= scrollHeight)) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    // wheelHandler 및 윈도우 너비 체크
    var wheelHandler = function(event) {
      // select_up_list_box 안에서 스크롤이 발생 중인지 확인
      if ($(event.target).closest('.select_up_list_box').length === 0) {
        var wheel = event.originalEvent.deltaY;
        if (wheel > 0) {
          $('.header_box').removeClass('show');
          $('body').removeClass('show');
        } else if (wheel < 0) {
          $('.header_box').addClass('show');
          $('body').addClass('show');
        }
      }
    };

    function checkWidth() {
      if ($(window).width() >= 1000 && isBodyScrollable()) {
        $(window).on("wheel", wheelHandler);
      } else {
        $(window).off("wheel", wheelHandler);
      }
    }

    function isBodyScrollable() {
      return $('body').prop('scrollHeight') > $(window).height();
    }

    // 페이지 로드 시 한 번 실행
    checkWidth();

    // 윈도우 리사이즈 시마다 실행
    $(window).resize(function() {
      checkWidth();
    });
  });
});



// black_dim on시 스크롤 안됨
$(function () {
  function toggleBodyOverflow() {
    if ($(".black_dim").hasClass("on")) {
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "auto");
    }
  }

  // 화면 크기 확인용 변수
  let isMobileView = $(window).width() <= 1400;

  // 창 크기 변경 시 상태 업데이트 및 아이콘 동기화
  $(window).resize(function () {
    const wasMobileView = isMobileView;
    isMobileView = $(window).width() <= 1400;

    // 모바일 뷰 -> 데스크탑 뷰로 전환
    if (!isMobileView && wasMobileView) {
      $(".search_icon_img")
        .attr("src", "/site/basic/img/search_icon.svg")
        .removeClass("close_icon");
    }

    // 데스크탑 뷰 -> 모바일 뷰로 전환
    if (isMobileView && !wasMobileView) {
      if ($(".black_dim").hasClass("on")) {
        $(".header_utils .search_icon_img")
          .attr("src", "/site/basic/img/close_icon.svg")
          .addClass("close_icon");
      } else {
        $(".header_utils .search_icon_img")
          .attr("src", "/site/basic/img/search_icon.svg")
          .removeClass("close_icon");
      }
    }
  });

  // header_search_box 클릭 시 동작
  $(".header_search_box").click(function () {
    if (isMobileView) {
      const $searchIcon = $(this).find(".search_icon_img");
      const isCloseIcon = $searchIcon.hasClass("close_icon");

      if (isCloseIcon) {
        // Close 상태 -> 원래 상태로 복귀
        $(".black_dim").removeClass("on");
        $(".header_search_click_box").removeClass("on");
        $searchIcon.attr("src", "/site/basic/img/search_icon.svg").removeClass("close_icon");
      } else {
        // Search 상태 -> Close 상태로 변경
        $(".black_dim").addClass("on");
        $(".header_search_click_box").addClass("on");
        $searchIcon.attr("src", "/site/basic/img/close_icon.svg").addClass("close_icon");
      }

      toggleBodyOverflow();
    } else {
      // 1400px 이상에서는 기존 동작 유지
      $(".black_dim").addClass("on");
      $(".header_search_click_box").addClass("on");
      toggleBodyOverflow();
    }
  });

  // close_btn 클릭 시 동작 (1400px 이상에서만 동작)
  $(".header_search_click_box .close_btn").click(function () {
    if (!isMobileView) {
      $(".black_dim").removeClass("on");
      $(".header_search_click_box").removeClass("on");
      toggleBodyOverflow();
    }
  });
});





// URL 복사 함수
function clip() {
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = window.document.location.href;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("URL이 복사되었습니다.");
}

// 프린트 함수
function content_print() {
  var g_oBeforeBody = document.getElementById('print').innerHTML;
  window.onbeforeprint = function () {
    document.body.innerHTML = g_oBeforeBody;
  };
  window.print();
  location.reload();
}







// $(function () {
//     AOS.init(); // 자바스크립트로 init()을 해야 동작한다.
//   });


// f5누를시 초기화면으로 돌아가기
// $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// });

// top버튼 누르면 최상단으로 이동
// $(function(){
//     $(".").click(function() {
//       $('html, body').animate({ scrollTop: 0 }, 500);
//     });
//   });
