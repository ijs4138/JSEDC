












// 데이터 피커 클릭 이벤트
$(function(){
  $(document).ready(function() {
    // Datepicker를 시작일 필드에 적용
    $("#startDate").datepicker({
      dateFormat: 'yy-mm-dd',  // 원하는 형식으로 날짜 표시
      onSelect: function(selectedDate) {
        // 종료일 필드의 최소 날짜를 선택된 시작일로 설정
        $("#endDate").datepicker("option", "minDate", selectedDate);
      }
    });

    // Datepicker를 종료일 필드에 적용
    $("#endDate").datepicker({
      dateFormat: 'yy-mm-dd',
      onSelect: function(selectedDate) {
        // 시작일 필드의 최대 날짜를 선택된 종료일로 설정
        $("#startDate").datepicker("option", "maxDate", selectedDate);
      }
    });
  });
});


// input 클릭시 텍스트 입력 방지
$(document).ready(function () {
  $('#startDate, #endDate').attr('readonly', true);
});