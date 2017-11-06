document.ready(){
  $("#allDayCheck :checkbox").change(function(){
    if(this.checked){
      $(".timepicker").attr("disabled")
    }
  })

  $('#timepicker').pickatime({
    autoclose: false,
    twelvehour: false,
    default: '14:20:00'
  });

}
