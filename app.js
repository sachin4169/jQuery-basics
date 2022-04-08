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

     var img = ["img1","img2","img3","img4","img5"];
     var i=0;
     $("#next").click(()=>{
         if(i != 4)
            i++;
        $('#img').attr("src","img/"+img[i]+".jpg");
        
     });
     $("#pre").click(()=>{
       if(i != 0)
           i--;
        $('#img').attr("src","img/"+img[i]+".jpg");
        
     });
     var x =  ["Rose","Lily","Tulip","Orchid","Carnation","Hyacinth", "Peruvian Lily","Chrysanthemum",
    "Gladiolus","Anemone","Daffodil","Sunflower"
    ];
    
    $('#inp').on("change paste keyup", function() { 
       var value = $(this).val().toLowerCase();  // get the current value of the input field.
      $("#sug").empty()
      $("#sug").append("suggestions:")
       x.forEach(element => {
          if (element.toLowerCase().search(value) > -1) {
            $("#sug").append(element+",")
            console.log(element+",");
        } else {
            console.log("not found");
        }
       });
    });
    $("#clickpara").click(()=>{
      alert("you have clicked on paragraph");
      $("body").append("you have clicked on paragraph");
      // $(document.createElement("p").innerHTML="you have clicked on paragraph");
      // p.innerHTML = "you have clicked on paragraph";
    });
     $(".cloth-li").click(()=>{
       $("#li-add-clo").append(`<li><a href="">Trouser</a><button class="cloth-li">+</button> </li>`)
     });
     $(".ele-li").click(()=>{
      $("#li-add-ele").append(`<li><a href="">Tabs</a><button class="ele-ul">+</button></li>`)
    });

    $("#cloth-ul").click(()=>{
      $("#main_ul").append(` <li><a href="">Cloths</a><button id="cloth-ul">+</button></li>
      <li>
        <ul id="li-add-clo">
          <li><a href="">T-shirt</a><button class="cloth-li">+</button> </li>
          <li><a href="">Trouser</a><button class="cloth-li">+</button> </li>
        </ul>
      </li>`)
    });
    $("#ele-ul").click(()=>{
      $("#main_ul").append(`  <li><a href="">Electronics</a><button id="ele-ul">+</button></li>
      <li>
        <ul id="li-add-ele">
          <li><a href="">Mobiles</a><button class="ele-li">+</button></li>
          <li><a href="">Tabs</a><button class="ele-li">+</button></li>
        </ul>
      </li>
    </ul>`)
    });
  });