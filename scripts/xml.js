function getValuesFromXml(tab,idJeu)
 { 	
		for (var i=0, l=localStorage.length; i<l; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];
        tab[i]=new Array(key,parseInt(value));
    }

  }

function writeScoreToXml(idJeu,date,note){
if (localStorage) {
  	localStorage.setItem(date, note);
} else {
 
}
}