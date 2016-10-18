const creatSpaces = function(spc){
if (spc===0){
	return "";
}
return " " + creatSpaces(spc-1);
};

const creatStars = function(str){
	if (str===0){
		return "";
	}
	return "*" + creatStars(str-1);
};
const printStars = function (spc,str,n){
	if(n===0){
		return "";
	}
	console.log(creatSpaces(spc)+creatStars(str));
	printStars (spc-1,str+2, n-1);
};
const printStarsReverse = function (spc,str,n){
	if(str<=0){
		return "";
	}
	console.log(creatSpaces(spc)+creatStars(str));
	printStarsReverse(spc+1,str-2, n-1);
};

const diamond = function(n) {
	if(n%2 === 0) {
		n = n + 1;
	}
	const x1 = (n+1)/2;
	printStars(x1-1,1,x1);
	const x2 = n-2;
	printStarsReverse(1,x2,x2+1);
};
diamond(5);