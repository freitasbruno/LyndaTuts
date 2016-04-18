$.getJSON('data.json', function(data) {
  var output = '<ul>';
  $.each(data, function(key, val) {
      output += '<li>' + val.colorName + '</li>';
  });
  output += '</ul>';
  $('#update').append(output);
});
