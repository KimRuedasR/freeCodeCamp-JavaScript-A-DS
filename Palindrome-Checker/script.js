const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const original = document.getElementById("original");
const reversed = document.getElementById("reversed");

const checkInput = () => {
  const inputValue = textInput.value;
  if (inputValue === "") {
    alert("Please input a value");
    result.innerText = "";
  } else {
    let reversedString = inputValue.split("").reverse().join("");
    let inputClean = inputValue.toLowerCase().replace(/[^0-9a-z]/gi, "");
    let reversedClean = reversedString.toLowerCase().replace(/[^0-9a-z]/gi, "");
    if (inputClean === reversedClean) {
      result.innerText = `${inputValue} is a palindrome`;
    } else {
      result.innerText = `${inputValue} is not a palindrome`;
    }
    original.innerText = `Original: ${inputValue} Cleaned: ${inputClean}`;
    reversed.innerText = `Reverse: ${reversedString} Cleaned: ${reversedClean}`;
  }
};

checkButton.addEventListener("click", checkInput);
