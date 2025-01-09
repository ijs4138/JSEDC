


// 게시판 tab 클릭시 on 클래스 추가
// $(function(){
//   $(".board_tab_menu_list").click(function(){
//     $(".board_tab_menu_list").removeClass("on");
//     $(this).addClass("on");
//   });
// });


// 전체 검색 클릭시 hover 효과
$(function () {
  $('.search_input, .search_select').on('focus', function () {
    $('.search_box').addClass('focused');
  });

  $('.search_input, .search_select').on('blur', function () {
    $('.search_box').removeClass('focused');
  });
});



// 연도/월 셀렉트 버튼 클릭시 on추가
$(function() {
  $('.day_select_btn').on('click', function() {
      $(this).closest('.day_select_box').toggleClass('on');
  });
});




// 이메일 도메인 선택 시 자동 입력
$(document).ready(function () {
  $('#emailSelect').on('change', function () {
    const selectedDomain = $(this).val(); // 선택된 이메일 도메인 값
    $('#emailDomain').val(selectedDomain); // 입력창에 도메인 값 설정
    $(this).val(''); // 셀렉트박스를 다시 "선택" 상태로 초기화
  });
});



