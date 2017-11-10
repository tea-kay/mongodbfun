$(document).ready(function() {
  $('#addItem').on('click', function(e) {
    var item = $('#inputItem').val();
    $('#inputItem').val('')
    $.ajax({
      method: 'POST',
      url: '/add',
      data: { item: item },
      success: function(response) {
        $('.list').prepend('<li>'+response.item+'</li>')
      },
      error: function(err) {
        console.error(err);
      }
    })
  })
})
