console.log("=== User Input and Age Validation ===");

// Prompt the user for their name and age
let userName = prompt("Enter Name?");
let userAge = parseInt(prompt("Enter Age?"));

// Display a message based on age eligibility
if (userAge >= 18) {
  console.log(`Access granted: ${userName} is ${userAge} years old.`);
  document.getElementById("output").innerText = `Welcome, ${userName}! You're old enough to enter.`;
} else {
  console.log(`Access denied: ${userName} is only ${userAge} years old.`);
  document.getElementById("output").innerText = `Sorry, ${userName}. You must be 18 or older to enter.`;
}
