
/*Met le premier caractère d'une chaine en majuscule*/
function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Obtiens la dimension d'un objet */
Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function multipleOfThree(value) {
	if (value%3 == 0)
		return true;
	else
		return false;
}