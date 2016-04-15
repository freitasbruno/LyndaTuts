for (var i = 0; i < 100; i++) {
	request = new XMLHttpRequest();
	request.open('GET', 'data.txt', false);
	request.send();
	if (request.status===200){
		console.log(request);
		document.writeln(request.responseText);
	}
}

