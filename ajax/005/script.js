var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject('Microsoft.XMLHTTP');
}
request.open('GET', 'data.xml');

request.onreadystatechange = function() {		
	if ((request.readyState===4) && (request.status===200)){
		console.log(request.responseXML.getElementsByTagName('title')[1].firstChild.nodeValue);
		
		var titles = request.responseXML.getElementsByTagName('title');

		var output = '<ul>';
		for (var i = 0; i < titles.length; i++) {
			output += '<li>' + titles[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';	

		document.getElementById('update').innerHTML = output;	
	}
}

request.send();

