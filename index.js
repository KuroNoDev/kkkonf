function go () {
  var pageId = '590175910999153';
  var token = 'EAACEdEose0cBAJypXA9zZCEXZBUur0b3SLIxJWrKoCRyrXDRx1xGH8ukCftfWcDmJZBn6CM132iL7NNxIGcZBiqGjWjnH5MxGRrknDZCtIWFDNTPNjrXDlU6bEZC8zsKmNfqA4Q1bZAuZBbz902z0SycsuKOTQqkR64aiO7Ec13YGuw9mk7TZBJERRWGnUL8ZAe7XYXLS22hvHIQZDZD';

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
      alert('success');
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
