$(document).ready(function() {
  $('#addItem').on('click', function(e) {
    console.log('lciclikc')
    $.ajax({
      method: 'POST',
      url: '/add',
      data: { item: $('#inputItem').val() },
      success: function(response) {
        console.log(response)
      },
      error: function(err) {
        console.error(err);
      }
    })
  })
})
