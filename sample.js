// Prompt the user to enter their name
const userName = prompt("Enter Your Name:");

// Check if the user provided a name or canceled the prompt
if (userName !== null) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("No name was entered.");
}
