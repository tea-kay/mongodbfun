$(document).ready(function() {

  $.ajax({
    url: '/fetch',
    success: function(response) {
      const items = response.items
      items.forEach(function(item) {
        $('.list').prepend('<li>'+item.item+'</li>')
      })
    },
    error: function(err) {
      console.error(err)
    }
  })

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
