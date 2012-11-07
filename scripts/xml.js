function getValuesFromXml(tab,idJeu)
 { 	

	for (var i=0, l=localStorage.length; i<l; i++){
    	var key = localStorage.key(i);
    	if(key==idJeu){
    		var values= localStorage[key].split(';');
    		for(var j=0; j<values.length-1; j++){
    			tab[j]= new Array(values[j].split(',')[0],parseInt(values[j].split(',')[1]));
    		}
    		break;
    	} 
	}
  }

function writeScoreToXml(idJeu,date,note){
if (localStorage) {
	var val;
	var exist=false;
	if(localStorage[idJeu]){
		var values= localStorage[idJeu].split(';');
    		for(var j=0; j<values.length-1; j++){
    			var jdate=values[j].split(',')[0];
    			var jnote=parseInt(values[j].split(',')[1]);
    			if(jdate==date)
    			{
    				jnote=jnote+note;
    				values[j]=jdate+','+jnote;
    				exist=true;
    			}     					
    		}
    		if(exist){
    			val=values.join(';');
    		}
    		else{		
				val= localStorage[idJeu]+date+','+note+';';
			}
	}
	else{
		val= date+','+note+';';
	}
 		 
  	localStorage.setItem(idJeu, val);
} else {
 
}
}

function clearData(){
	if(localStorage)
		localStorage.clear();
}


