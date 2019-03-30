$(document).ready(function() {
  var javaCnt = 0;
  var rubyCnt = 0;
  var phpCnt = 0;
  $("form#q1Input").one("change", (function(){
    var answer1 = $("input[name='q1Answer']:checked").val();
    console.log(answer1);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  }));
  $("form#q2Input").one("change", (function(){
    var answer2 = $("input[name='q2Answer']:checked").val();
    console.log(answer2);
    if (answer2 === "ruby") {
      rubyCnt++;
    } else if (answer2 === "java") {
      javaCnt++;
    } else if (answer2 === "php") {
      phpCnt++;
    }
  }));
  $("form#q3Input").one("change", (function(){
    var answer3 = $("input[name='q3Answer']:checked").val();
    console.log(answer3);
    if (answer3 === "ruby") {
      rubyCnt++;
    } else if (answer3 === "java") {
      javaCnt++;
    } else if (answer3 === "php") {
      phpCnt++;
    }
  }));
  $("form#q4Input").one("change", (function(){
    var answer4 = $("input[name='q4Answer']:checked").val();
    console.log(answer4);
    if (answer4 === "ruby") {
      rubyCnt++;
    } else if (answer4 === "java") {
      javaCnt++;
    } else if (answer4 === "php") {
      phpCnt++;
    }
  }));
  $("form#q5Input").one("change", (function(){
    var answer5 = $("input[name='q5Answer']:checked").val();
    console.log(answer5);
    if (answer5 === "ruby") {
      rubyCnt++;
    } else if (answer5 === "java") {
      javaCnt++;
    } else if (answer5 === "php") {
      phpCnt++;
    }
  }));
  $("button.btn").click(function(){
    console.log(javaCnt, rubyCnt, phpCnt);
    function decideLanguage(javaCnt, rubyCnt, phpCnt) {
      if (javaCnt >= 3) {
        $("#javaCard").show();
        $("#phpCard").hide();
        $("#rubyCard").hide();
        $(".question").hide();
      }
      if (phpCnt >= 3) {
        $("#javaCard").hide();
        $("#phpCard").show();
        $("#rubyCard").hide();
        $(".question").hide();
      }
      if (rubyCnt >= 3) {
        $("#javaCard").hide();
        $("#phpCard").hide();
        $("#rubyCard").show();
        $(".question").hide();
      }
      else if (javaCnt === 2 && phpCnt == 2) {
        $("#javaCard").show();
        $("#phpCard").show();
        $("#rubyCard").hide();
        $(".question").hide();
      }
      else if (javaCnt === 2 && rubyCnt == 2) {
        $("#javaCard").show();
        $("#phpCard").hide();
        $("#rubyCard").show();
        $(".question").hide();
      }
      else if (rubyCnt === 2 && javaCnt == 2) {
        $("#javaCard").show();
        $("#phpCard").hide();
        $("#rubyCard").show();
        $(".question").hide();
      }
      else {
        // $("#javaCard").show();
        $(".question").hide();
      }
    };
    decideLanguage(javaCnt, phpCnt, rubyCnt);
  });
});
