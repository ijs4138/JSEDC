


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





