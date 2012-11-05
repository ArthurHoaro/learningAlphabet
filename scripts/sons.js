$(document).ready(function() {
	
});

function play(audio_id) {
	var audio_elem = $('#'+audio_id);
	if( audio_elem != null ) {
		audio_elem[0].play();
	}
}

function play_src(audio_id, nom_son) {
	var audio_elem = $('#'+audio_id);
	if( audio_elem != null ) {		
		change_src_elem(audio_elem, nom_son)
    	$(audio_elem)[0].play();
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