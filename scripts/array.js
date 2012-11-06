function arrayEqual(arr1,arr2) { 
	if(arr1.length !== arr2.length)
		return false;
	for(var i = arr1.length - 1; i >= 0 ; i-- ) {
		if(arr1[i] !== arr2[i])
    		return false;
	}
    return true;
}

function copyArray(arr1) {
	var arr2 = new Array(); 
	for(var i = 0 ; i < arr1.length ; i++ ) {
		arr2[i] = arr1[i];
	}
    return arr2;
}