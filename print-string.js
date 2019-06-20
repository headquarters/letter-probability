const converter = require('number-to-words');

let fullString = "";

for (let i = 1; i < 124; i++) {
  fullString += converter.toWords(i);
}

// replace empty spaces and hyphens that `number-to-words` includes in string
fullString = fullString.replace(/\-/g, "");
fullString = fullString.replace(/\ /g, "");

console.log("String length: ", fullString.length);
console.log(fullString);

/**
 * Example output:
 * onetwothreefourfivesixseveneightnineteneleventwelvethirteenfourteenfifteensixteen
 * seventeeneighteennineteentwentytwentyonetwentytwotwentythreetwentyfourtwentyfive
 * twentysixtwentyseventwentyeighttwentyninethirtythirtyonethirtytwothirtythreethirty
 * fourthirtyfivethirtysixthirtyseventhirtyeightthirtyninefortyfortyonefortytwofortythree
 * fortyfourfortyfivefortysixfortysevenfortyeightfortyninefiftyfiftyonefiftytwofiftythree
 * fiftyfourfiftyfivefiftysixfiftysevenfiftyeightfiftyninesixtysixtyonesixtytwosixtythreesixty
 * foursixtyfivesixtysixsixtysevensixtyeightsixtynineseventyseventyoneseventytwoseventythreeseventy
 * fourseventyfiveseventysixseventysevenseventyeightseventynineeightyeightyoneeightytwo
 * eightythreeeightyfoureightyfiveeightysixeightyseveneightyeighteightynineninetyninetyone
 * ninetytwoninetythreeninetyfourninetyfiveninetysixninetysevenninetyeightninetynineonehundred
 * onehundredoneonehundredtwoonehundredthreeonehundredfouronehundredfiveonehundredsixonehundred
 * sevenonehundredeightonehundrednineonehundredtenonehundredelevenonehundredtwelveonehundredthirteenone
 * hundredfourteenonehundredfifteenonehundredsixteenonehundredseventeenonehundredeighteen
 * onehundrednineteenonehundredtwentyonehundredtwentyoneonehundredtwentytwoonehundredtwentythree
 */