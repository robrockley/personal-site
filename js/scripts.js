var myProjects = [ {title: "First Project", pic: "img/html5-logo.jpg"}, {title: "Second Project", pic: "img/css3-logo.jpg"}, {title: "Third Project", pic: "img/jquery-logo.jpg"}, {title: "Fourth Project", pic: "img/ruby-on-rails-logo.jpg"}];

$(document).ready(function(){
	$(".message-box").css("background-color", "pink");

	$("#contact-submit").on("click", function() {
		var comment = $(".message-box").val();
		var showComment = "You entered: " + comment.toUpperCase();
		$("#visible-comment").html(showComment);
		return false;
	});

	$(".message-box").on("keyup", function() {
		var charCount = $(".message-box").val().length;
		$("#char-count").html("Characters: " + charCount);
		if(charCount > 50) {
			$("#char-count").css("color", "red");
		} else {
			$("#char-count").css("color", "black");	
		};
	});

	var rows = $(".my-row");
	//console.log(rows);
	for(var i=0; i<rows.length; ++i) {
		if(i%2===0){
			$(rows[i]).css("background-color", "lime");
		};	
	};

	for(var i=0; i<myProjects.length; ++i) {
		$("#" + i).css("background-image", "url(" + myProjects[i].pic + ")");
	};

	$(".image").mouseenter( function() {
		//console.log(myProjects[this.id].title);
		$(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myProjects[this.id].title + "</p>");
	}).mouseleave( function () {
		$("p.info").html("");
	});

	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(37.7826052,-122.4334136),
			zoom: 12
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var marker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: 'Click to zoom'
		});

		google.maps.event.addListener(marker, 'click', function() {
			map.setZoom(15);
			map.setCenter(marker.getPosition());
		});
	};

	google.maps.event.addDomListener(window, 'load', initialize);

});