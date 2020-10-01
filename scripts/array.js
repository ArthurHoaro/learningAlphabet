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
	//ES6 way to copy an array
	const arr2 = [...arr1];
}
