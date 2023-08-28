////// Roman Numeral Converter 1 of 3   with object and using while loop

// object template with properties arabic number passed and result
// method in object to cycle thru roman numeral identifiers
class ConvertArabicRoman {
  constructor(arabic) {
    this.arabic = arabic;
    this.result = "";
  }
  // cycle thru roman set points where arabic provided > roman set point
  // iterate by subtracting roman set point for each step
  processArabic(roman, romanArabic) {
    while (this.arabic >= romanArabic) {
      this.result += roman;
      this.arabic -= romanArabic;
    }
  }
}
// convert function creates new object from class and cycles thru roman numerals
function convertToRoman1(arabic) {
  let process = new ConvertArabicRoman(arabic);
  process.processArabic("M", 1000);
  process.processArabic("CM", 900);
  process.processArabic("D", 500);
  process.processArabic("CD", 400);
  process.processArabic("C", 100);
  process.processArabic("XC", 90);
  process.processArabic("L", 50);
  process.processArabic("XL", 40);
  process.processArabic("X", 10);
  process.processArabic("IX", 9);
  process.processArabic("V", 5);
  process.processArabic("IV", 4);
  process.processArabic("I", 1);

  return process.result;
}
////// end of Roman Numeral Converter 1

////// Roman Numeral Converter 2 of 3 with arrays

const tensRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const hundredsRoman = [
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
];
const thousandsRoman = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
];
const tenThousandsRoman = ["", "M", "MM", "MMM"];

function convertToRoman2(num) {
  let romanNum = "";
  // using modulus of Math.floor to isolate each digit per Base-10 number input
  let numTens = num % 10;
  let numHundreds = Math.floor((num / 10) % 10);
  let numThousands = Math.floor((num / 100) % 10);
  let numTenThousands = Math.floor((num / 1000) % 10);
  // use isolated digits to add Roman numeral from arrays
  romanNum =
    tenThousandsRoman[numTenThousands] +
    thousandsRoman[numThousands] +
    hundredsRoman[numHundreds] +
    tensRoman[numTens];

  return romanNum;
}
////// end of Roman Numeral Converter 2

////// Roman Numeral Converter 3 of 3   with object and using for...in

const pairsRomanArabic = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
function convertToRoman(arabic) {
  let romanNum = "";
  // cycle throug each property in pairsRomanArabic object
  for (let prop in pairsRomanArabic) {
    while (arabic >= pairsRomanArabic[prop]) {
      romanNum += prop;
      arabic -= pairsRomanArabic[prop];
    }
  }

  return romanNum;
}
////// end of Roman Numeral Converter 3
