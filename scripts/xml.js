function getValuesFromXml(tab,idJeu)
 { 	

 		

		for (var i=0, l=localStorage.length; i<l; i++){
        	var key = localStorage.key(i);
        	var value = localStorage[key].split(',')[1];
        if (localStorage[key].split(',')[0]==idJeu) 
        	tab[i]=new Array(key,parseInt(value));
    }

  }

function writeScoreToXml(idJeu,date,note){
if (localStorage) {
 var val= [idJeu,parseInt(note)];
  	localStorage.setItem(date, val);
} else {
 
}
}