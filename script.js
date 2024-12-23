// script.js

document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.querySelector("button");
    const dateInput = document.querySelector("#password");

    calculateButton.addEventListener("click", () => {
        const dateOfBirth = dateInput.value;
        if (!dateOfBirth) {
            alert("Please enter your date of birth.");
            return;
        }

        const dob = new Date(dateOfBirth);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();

        if (
            monthDifference < 0 || 
            (monthDifference === 0 && today.getDate() < dob.getDate())
        ) {
            age--;
        }

        alert(`Your age is ${age} years.`);
    });
});
