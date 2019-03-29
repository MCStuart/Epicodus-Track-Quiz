$(document).ready(function() {
  $("form#q1Input").change(function(){
    var answer1 = $("input[name='q1Answer']:checked").val();
    console.log(answer1);
  });
  $("form#q2Input").change(function(){
    var answer2 = $("input[name='q2Answer']:checked").val();
    console.log(answer2);
  });
  $("form#q3Input").change(function(){
    var answer3 = $("input[name='q3Answer']:checked").val();
    console.log(answer3);
  });
  $("form#q4Input").change(function(){
    var answer4 = $("input[name='q4Answer']:checked").val();
    console.log(answer4);
  });
  $("form#q5Input").change(function(){
    var answer5 = $("input[name='q5Answer']:checked").val();
    console.log(answer5);
  });
});

// var answer2 = q2Answer;
// console.log(q2Answer);
//
// var answer3 = q3Answer;
// console.log(q3Answer);
//
// var answer4 = q4Answer;
// console.log(q4Answer);
//
// var answer5 = q5Answer;
// console.log(q5Answer);

      // alert("You might be best suited for these tracks: ");
      // alert(answer1);
      // alert(answer2);
      // alert(answer3);
      //
      // if (answer1 != answer4) { // If answer1 and answer4 have the same answers, then this can have same answer
      //   alert(answer4);
      // }
      // if (answer1 != answer3 && answer2 != answer3) {
      //   alert(answer3);
      // }
      //
