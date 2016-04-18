$('#search').keyup(function() {
  var searchField = $('#search').val();
  var myExp = new RegExp(searchField, "i");
  $.getJSON('data.json', function(data) {
    var output = '<ul class = "seachresults">';
    $.each(data, function(key, val) {
        if ((val.name.search(myExp) != -1) || (val.about.search(myExp) != -1)) {
          output += '<li>';
          output += '<h2>' + val.name + '</h2>';
          output += '<img src="photo.png" alt="" />';
          output += '<p>' + val.about + '</p>';
          output += '</li>';
        }
    });
    output += '</ul>';
    $('#update').html(output);
  });
});
