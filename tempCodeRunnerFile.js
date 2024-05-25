var i = '7';
var charCode = i.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
   console.log("The given character is a number", i);
} else if (charCode >= 65 && charCode <= 90) {
   console.log("The given character is a Capital Alphabet", i);
} else if (charCode >= 97 && charCode <= 122) {
   console.log("The given character is a Small Alphabet", i);
} else if (charCode >= 33 && charCode <= 47) {
   console.log("The given character is a special character", i);
} else {
   console.log("Invalid input! Please enter a single character, digit, or alphabet.");
}