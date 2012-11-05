/**
 * Génère une suite de lettres de l'alphabet
 * @params :
 * 	- nb : nombre de lettres à générer (solution incluse)
 *	- solution : char, lettre correspondant à solution (forcément présente dans le résultat)
 *	- lower (facultatif) : boolean, true = lowercase, uppercase = false (default)
 * @return : tableau de "nb" lettres différentes contenant "solution"
 **/
function getRandomList(nb, solution, lower) {
	lower = (lower == true) ? true : false;
	var alpha = (lower) ? 'abcdefghiklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
	var out = Array();
	out[0] = solution;

	for (var i=1; i<nb-1; i++) {
		var rnum = Math.floor(Math.random() * alpha.length);
		var letter = alpha.substring(rnum,rnum+1);
		if( ! jQuery.inArray(letter, out) )
			out[i] = letter;
		else
			i--;
	}
	return out;
}