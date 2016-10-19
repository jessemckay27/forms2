$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("#name").val();
    var foodInput = $("#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var colorInput = $("#color").val();
    $("#output1").text(nameInput);
    $("#output2").text(foodInput);
    $("#output3").text(musicInput);
    $("#output4").text(colorInput);
    event.preventDefault();
  });
});
