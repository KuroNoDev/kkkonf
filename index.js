function go () {
  var confession = $('#confession').val();
  var type = $('input[name=confession-type]:checked').val();
  var identity = $('#identity').val();
  var message = '#420 - ' + type + '\n\n' + confession + '\n\nSubmitted by: ' + identity;

  $.ajax({
    type: 'POST',
    url: 'https://graph.facebook.com/v2.10/590175910999153/feed?access_token=EAACEdEose0cBAJypXA9zZCEXZBUur0b3SLIxJWrKoCRyrXDRx1xGH8ukCftfWcDmJZBn6CM132iL7NNxIGcZBiqGjWjnH5MxGRrknDZCtIWFDNTPNjrXDlU6bEZC8zsKmNfqA4Q1bZAuZBbz902z0SycsuKOTQqkR64aiO7Ec13YGuw9mk7TZBJERRWGnUL8ZAe7XYXLS22hvHIQZDZD',
    data: {message: message},
    success: function(response) {
      console.log(response);
    }
  });
}
