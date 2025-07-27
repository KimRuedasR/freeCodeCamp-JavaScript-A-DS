const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
let roman = "";

const checkInput = () => {
  const input = parseInt(number.value);
  if (!input) {
    output.textContent = "Please enter a valid number.";
  } else if (input <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    romanNum(input);
    console.log("Input: ", input);
    console.log("Roman: ", roman);
    output.textContent = roman;
    roman = "";
  }
};

const romanNum = (num) => {
  if (num >= 1000) {
    roman += "M";
    num -= 1000;
    return romanNum(num);
  }
  if (num >= 900) {
    roman += "CM";
    num -= 900;
    return romanNum(num);
  }
  if (num >= 500) {
    roman += "D";
    num -= 500;
    return romanNum(num);
  }
  if (num >= 400) {
    roman += "CD";
    num -= 400;
    return romanNum(num);
  }
  if (num >= 100) {
    roman += "C";
    num -= 100;
    return romanNum(num);
  }
  if (num >= 90) {
    roman += "XC";
    num -= 90;
    return romanNum(num);
  }
  if (num >= 50) {
    roman += "L";
    num -= 50;
    return romanNum(num);
  }
  if (num >= 40) {
    roman += "XL";
    num -= 40;
    return romanNum(num);
  }
  if (num >= 10) {
    roman += "X";
    num -= 10;
    return romanNum(num);
  }
  if (num >= 9) {
    roman += "IX";
    num -= 9;
    return romanNum(num);
  }
  if (num >= 5) {
    roman += "V";
    num -= 5;
    return romanNum(num);
  }
  if (num >= 4) {
    roman += "IV";
    num -= 4;
    return romanNum(num);
  }
  if (num >= 1) {
    roman += "I";
    num -= 1;
    return romanNum(num);
  }
};

convertButton.addEventListener("click", checkInput);
