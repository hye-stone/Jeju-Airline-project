$(function () {
  $(".hamBtn").click(function () {
    $(this).toggleClass(".hamBtn");
  });

  $(".hamBtn").click(function () {
    if ($(".hamBtn").hasClass(".hamBtn")) {
      $("#mNav").stop().animate({
        left: 0
      }, 500);
    }
    else {
      $("#mNav").stop().animate({
        left: "-100%"
      }, 500);
    }
  });
  $(".mNav>li").click(function () {
    $(this).children(".sub").stop().slideToggle(700);
    $(this).children(".subWrap").stop().slideToggle(700);
  });
  //================== 날씨 ==================
  var apiURl = "http://api.openweathermap.org/data/2.5/weather?q=jeju&appid=e1ff94ae9bcbc0d90e8714593c115c84"
  $.ajax({
    url: apiURl,
    dataType: "json",
    success: function (data) {
      // console.log(data);
      // console.log("도시:"+data.name);
      // console.log("풍속:"+data.wind.speed);
      //캘빈온도이므로 -273.16
      // console.log("온도:"+(data.main.temp -273.16));
      // console.log("날씨:"+data.weather[0].main);
      // console.log("날씨아이콘:"+data.weather[0].icon);
      // $(".temp").html("온도 : "+(data.main.temp -273.16));
      // $(".wind").html("풍속 : "+data.wind.speed);
      $(".city").html("도시 : " + data.name);
      $(".weather").html(data.weather[0].main);
      $(".weatherIcon>img").attr("src", "images/weather/" + data.weather[0].icon + ".svg")
    }
  });
  //================== 인원수 증가 .passenger ==================
  //btnClick을 클릭하면 span안에 숫자가 1씩 증가하도록
  $(".passengerWrap>div").each(function () {
    var num = 0;
    $(this).find(".upClick").click(function () {
      num++
      $(this).siblings(".aNum").text(num);
    })
    $(this).find(".downClick").click(function () {
      num--;
      if(num<=0){
        alert('더이상 줄일수 없습니다.');
        num =1;}
      $(this).siblings(".aNum").text(num);
    })
  });
  //================== popup ==================
  $(".from").click(function () {
    $(".popupDep").css("display", "block");
  });
  //엑스를 클릭하면 팝업이 닫힌다.
  $(".popCloseBtn").click(function () {
    $(".popupDep").css("display", "none")
  });
  $(".to").click(function () {
    $(".popupArr").css("display", "block");
  });
  $(".popCloseBtn").click(function () {
    $(".popupArr").css("display", "none")
  });
  $("#cal").click(function () {
    $(".popupCal").css("display", "block");
  });
  $(".popCloseBtn").click(function () {
    $(".popupCal").css("display", "none")
  });
  $(".pass").click(function () {
    $(".popupPass").css("display", "block");
  });
  $(".popCloseBtn").click(function () {
    $(".popupPass").css("display", "none")
  })
});
