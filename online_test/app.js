var ans = [0, "b", "c", "d", "a", 'false','c', 'b', 'd', 'false', 'e'];
$("#btn").click(function () {
  $('.refresh-data').hide()
  q = [];
  questions = $("span");
  marks = 0;
  for (i = 1; i < questions.length + 1; i++) {
    q[i] = $('input[name="q' + i + '"]:checked').val();
    if (q[i] == ans[i]) {
      marks += 1;
      $("<b class='badge bg-success rounded-pill refresh-data'>Correct</b>").appendTo(questions[i - 1]);
      $('li:has(b.bg-success)').addClass('list-group-item-success');
    } else {
      $("<b class='badge bg-danger rounded-pill refresh-data'>Ans: "+ ans[i] +"</b>").appendTo(questions[i - 1]);
      $('li:has(b.bg-danger)').addClass('list-group-item-danger');
    }
  }
  if(marks < 5){
    title = 'Fail!'
  }
  else {
    title = 'Success!'
  }
  $('#modalLabel').html(title)
  $('#modal_body').append('<p class="refresh-data">Marks: '+ marks +'/'+ questions.length+'</p>')
  $('#modal_btn').trigger('click')
});
