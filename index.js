document.addEventListener("DOMContentLoaded", function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

	}else{
		OverlayScrollbars(document.querySelectorAll("body"), { });
	}

});

