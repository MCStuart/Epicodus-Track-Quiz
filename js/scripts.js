$(document).ready(function() {
  var cSharpCnt = 0;
  var javaCnt = 0;
  var rubyCnt = 0;
  var phpCnt = 0;

  $("form#q1Input").change(function(){
    var answer1 = $("input[name='q1Answer']:checked").val();
    console.log(answer1);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "cSharp") {
      cSharpCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  });
  $("form#q2Input").change(function(){
    var answer2 = $("input[name='q2Answer']:checked").val();
    console.log(answer2);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "cSharp") {
      cSharpCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  });
  $("form#q3Input").change(function(){
    var answer3 = $("input[name='q3Answer']:checked").val();
    console.log(answer3);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "cSharp") {
      cSharpCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  });
  $("form#q4Input").change(function(){
    var answer4 = $("input[name='q4Answer']:checked").val();
    console.log(answer4);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "cSharp") {
      cSharpCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  });
  $("form#q5Input").change(function() {
    var answer5 = $("input[name='q5Answer']:checked").val();
    console.log(answer5);
    if (answer1 === "ruby") {
      rubyCnt++;
    } else if (answer1 === "cSharp") {
      cSharpCnt++;
    } else if (answer1 === "java") {
      javaCnt++;
    } else if (answer1 === "php") {
      phpCnt++;
    }
  });

  function decideLanguage(cSharpCnt, javaCnt, rubyCnt, phpCnt) {
    if (cSharpCnt >= 3) {
      $("#cSharpCard").show();
      $("#javaCard").hide();
      $("#phpCard").hide();
      $("#rubyCard").hide();
      $(".questionField").hide();
    }
    if (javaCnt >= 3) {
      $("#cSharpCard").hide();
      $("#javaCard").show();
      $("#phpCard").hide();
      $("#rubyCard").hide();
      $(".questionField").hide();
    }
    if (phpCnt >= 3) {
      $("#cSharpCard").hide();
      $("#javaCard").hide();
      $("#phpCard").show();
      $("#rubyCard").hide();
      $(".questionField").hide();
    }
    if (rubyCnt >= 3) {
      $("#cSharpCard").hide();
      $("#javaCard").hide();
      $("#phpCard").hide();
      $("#rubyCard").show();
      $(".questionField").hide();
    }
  };
    // else ;
    //   $("#javaCard").show();
    //   $(".questionField").hide();
  // };
  decideLanguage(cSharpCnt, javaCnt, rubyCnt, phpCnt);
});
