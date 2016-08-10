
/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */


  var telephoneWords = function (str){
  	var result = [];
  	var array = [];
  	var telephone = ['0','1','abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  	for (var i = 0; i < 4; i++) {
  		var num = Number(str[i]);
  		newStr = telephone[num];
  		array.push(newStr);
  	}
  	//array = [abc,def,jki,pqrs]
  	//comb = 'adjp'
  	for (var i = 0; i < 24; i++) {
  		var comb = '';
  		for (var j = 0; j <= 3; j++) {
  			// for (var z = 0; z < j[z]; z++) {
  				comb += array[j][i]
  			// }
  		}
  		result.push(comb);
  	}
  	return result;
  }