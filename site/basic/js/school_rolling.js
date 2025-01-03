
// 메인) 학교 납품 숫자 롤링
$(function() {
  // 숫자 롤링 함수
  function rollNumber($element) {
    var targetNumber = $element.data('target'); // data-target 값 가져오기
    var currentNumber = 0; // 현재 숫자 초기화
    var interval = setInterval(function() {
      currentNumber += Math.ceil(targetNumber / 100); // 천천히 증가
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval); // 목표 숫자에 도달하면 멈추기
      }
      $element.text(currentNumber); // 숫자 업데이트
    }, 30); // 30ms마다 숫자 업데이트
  }

  // 스크롤 시 화면에 보이면 롤링 효과 적용
  $(window).on('scroll', function() {
    var $schoolTitleBox = $('.school_rolling_box');
    var $schoolBigNumText = $schoolTitleBox.find('.school_big_num_text');
    var schoolTitleOffsetTop = $schoolTitleBox.offset().top;
    var windowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    // 화면에 등장하고 200px 더 내려가면 롤링 효과 적용
    if (schoolTitleOffsetTop < windowScroll + windowHeight - 200 && !$schoolBigNumText.hasClass('rolled')) {
      rollNumber($schoolBigNumText);
      $schoolBigNumText.addClass('rolled');
    }

    // 각 school_count_list의 .white_ltitle에 대해서도 같은 방식으로 적용
    $('.school_count_list').each(function() {
      var $this = $(this);
      var $numberElement = $this.find('.white_title4');
      var offsetTop = $this.offset().top;

      // 200px 더 내려가면 롤링 효과 적용
      if (offsetTop < windowScroll + windowHeight - 200 && !$numberElement.hasClass('rolled')) {
        rollNumber($numberElement); // 숫자 롤링 시작
        $numberElement.addClass('rolled'); // 롤링이 끝난 후에는 다시 실행되지 않도록 클래스 추가
      }
    });
  });

  // 처음 로딩 시 이미 화면에 보이는 요소는 숫자 롤링 시작
  $(window).trigger('scroll');
});

