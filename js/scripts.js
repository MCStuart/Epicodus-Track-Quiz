$(document).ready(function() {
  $("input[type='button']").click(function(){
    var radioValue = $("input[name=q1Answer]:checked").val();
    var answer1 = q1Answer;
    var answer2 = q2Answer;
    var answer3 = q3Answer;
    var answer4 = q4Answer;
    var answer5 = q5Answer;

    console.log(q1Answer)
    console.log(q2Answer)
    console.log(q3Answer)
    console.log(q4Answer)
    console.log(q5Answer)
  });
});
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
