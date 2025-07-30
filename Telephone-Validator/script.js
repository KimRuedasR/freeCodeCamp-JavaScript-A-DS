const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkInput = () => {
    const inputValue = document.getElementById("user-input").value;
    if (!inputValue) {
        alert("Please provide a phone number");
        return;
    }
    isValidPhoneNumber(inputValue);
};

const isValidPhoneNumber = (phoneNumber) => {
   if (
       /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(phoneNumber)
   ){    
   resultsDiv.innerText = "Valid US number: " + phoneNumber;
   } else {
    resultsDiv.innerText = "Invalid US number: " + phoneNumber;
   }
}

clearButton.addEventListener("click", () => {
    document.getElementById("user-input").value = "";
    resultsDiv.innerHTML = "";
});

checkButton.addEventListener("click", checkInput);
