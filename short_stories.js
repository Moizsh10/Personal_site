function show(storyId) {
	
	if(document.getElementById(storyId).style.display == 'block'){
		document.getElementById(storyId).style.display = 'none';
	}
	else {
		document.getElementById(storyId).style.display = 'block';
	}
}