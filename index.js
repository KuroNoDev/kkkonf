function go () {
  var pageId = '288504841525348';
  var token = 'EAACEdEose0cBAKGZAg2NIxC35TmWv4tBfcyXSy4ezoz7TXT3BY923SJmxwdD6Guagetl1ZBHZCYjXo6siW3rykPSn1RmvFjEF59DZAGNg1JVoZA9tR5S6cZB55oJeni6OxjmXblo7839TkLEvFw9BGyIPjmSDuQp4urrQuxu2BS4yXf9hOurBvMRTLufErHiHCbxAebwBNkAZDZD';

  var confession = $('#confession').val();
  var type = $('input[name=confession-type]:checked').val();
  var identity = $('#identity').val();
  var message = '#420 - ' + type + '\n\n' + confession + '\n\nSubmitted by: ' + identity;

  message = filter(message);

  $.ajax({
    type: 'POST',
    url: 'https://graph.facebook.com/v2.10/' + pageId + '/feed?access_token=' + token,
    data: {message: message},
    success: function(response) {
      alert('Confession Posted');
    }
  });
}

function filter (message) {
  var message = message;
  var zucc = [{
    word: 'nigger',
    replacement: 'n*gg*r'
  }, {
    word: 'faggot',
    replacement: 'f*gg*t'
  }];

  zucc.forEach(function(z) {
    var regex = new RegExp(z.word, 'g');
    message = message.replace(regex, z.replacement);
  })

  return message;
}
