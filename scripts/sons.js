$(document).ready(function() {
	
});

function play(audio_id) {
	if( !isAndroid()) {
		var audio_elem = $('#'+audio_id);
		if( audio_elem != null ) {
			audio_elem[0].play();
		}
	}
	else
		playAndroid(audio_id);
}

function play_src(audio_id, nom_son) {
	if( !isAndroid()) {
		var audio_elem = $('#'+audio_id);
		if( audio_elem != null ) {		
			change_src_elem(audio_elem, nom_son)
	    	$(audio_elem)[0].play();
		}
	}
	else{ 
		playAndroid(nom_son);
	}
}

function change_src_id(audio_id, nom_son) {
	change_src_elem($('#'+audio_id), nom_son);
}

function change_src_elem(audio_elem, nom_son) {	
	$(audio_elem).html(generate_sources(nom_son));
	$(audio_elem)[0].pause();
	$(audio_elem)[0].load();//suspends and restores all audio element
}

function generate_sources(nom_son) {
	return '<source src="sons/'+ nom_son +'.mp3"></source><source src="sons/'+ nom_son +'.ogg"></source>';
}

function generate_android_sources(nom_son) {
	return 'file:///android_asset/www/sons/'+ nom_son +'.mp3';
}

function pause(audio_id) {
	var audio_elem = $('#'+audio_id);
	if( audio_elem != null ) {
		audio_elem[0].pause();
	}
}

function stop( audio_id ) {
	var audio_elem = $('#'+audio_id);
	if( audio_elem != null ) {
		audio_elem[0].pause();
		audio_elem[0].currentTime = 0;
	}
}

function isAndroid() {
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
		return true;
	}
	return false;
}

// Audio player
//
var mediaTimer = null;
var my_media=null;

// Play Full Title
function playAndroid(audio_id) {
	audio_src = generate_android_sources(audio_id);

    // Create Media object from src   
    my_media = new Media(audio_src,,function(e){alert('error'+e.toString())});           	

    // Play Full Title
    my_media.play();
}
