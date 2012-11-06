/**
 * Génère une suite de lettres de l'alphabet
 * @params :
 * 	- nb : nombre de lettres à générer (solution incluse)
 *	- solution : char, lettre correspondant à solution (forcément présente dans le résultat)
 *	- lower (facultatif) : boolean, true = lowercase, uppercase = false (default)
 * @return : tableau de "nb" lettres différentes contenant "solution"
 **/
function getRandomList(nb, solution, lower) {
	var out = new Array();
	
	if( solution == null )
		solution = getRandomLetter();

	out[0] = solution;

	for (var i=1; i<nb; i++) {
		var letter = getRandomLetter(lower);		
		if( jQuery.inArray(letter, out) == -1 )
			out[i] = letter;
		else
			i--;
	}
	return $.randomize(out);;
}

function getRandomLetter(lower) {
	lower = (lower == true) ? true : false;
	var alpha = (lower) ? 'abcdefghiklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
	var rnum = Math.floor(Math.random() * alpha.length);
	return alpha.substring(rnum,rnum+1);
}

(function($) {
  	$.randomize = function(arr) {  
    	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};


})(jQuery);