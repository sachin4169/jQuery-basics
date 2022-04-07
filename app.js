$(document).ready(function () {
    $("#btn").click(() => {
      var pas = $("#password").val();
      var value = $("#conpassword").val();
      var fname = $("#fname").val();
      var lname = $("#lname").val();

      if (fname == "") {
        $("#fname").css("background-color", "Red");
        alert("first name is not given");
      } else if (lname == "") {
        $("#fname").css("background-color", "#fff");
        $("#lname").css("background-color", "red");
        alert("last name is not given");
      } else if (pas == "") {
        $("#lname").css("background-color", "#fff");
        $("#password").css("background-color", "red");
        alert("password is not given");
      } else if (value == "") {
        $("#password").css("background-color", "#fff");
        $("#conpassword").css("background-color", "red");
        alert("confirm password is not given");
      } else {
        $("#fname").css("background-color", "#fff");
        $("#lname").css("background-color", "#fff");
        $("#password").css("background-color", "#fff");
        $("#conpassword").css("background-color", "#fff");
        if (pas != value) {
          $("#msg").append("Password didn't match");
        } else {
          $("#msg").empty();
        }
      }
    });

    $("#evenbtn").click(() => {
      $("tr:even").css("background-color", "lightgray");
    });
    $("#oddbtn").click(() => {
      $("tr:odd").css("background-color", "DodgerBlue");
    });
    $("#addbtn").click(() => {
      var field = `<div class="fields"><input type="text" placeholder=" Enter class" class="cls" />
    <input type="text" placeholder=" Enter board" class="board" />
    <input type="text" placeholder=" Enter marks" class="marks" />
    <input type="text" placeholder=" Enter division" class="division" /></div>`;
      $("#newinfo").append(field);
    });
    $("#subbtn").click(() => {
      var x = $("#newinfo").children();
      x.last().remove();
    });
    
    setTimeout(function(){ 
       $(".test").children().first().css({"color":"red"});
       $(".test").children().last().css({"color":"red"});
     },5000);
   
  });