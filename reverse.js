var array1 = [1,2,3,4,5,6,7]

const reverse = function(array) {
	var array1 = array
	var array2 = [];
	for (var i= array1.length-1; i>=0; i--) {
		array2.push(array1[i])
	}
	return array2
	};
console.log(reverse(array1));

