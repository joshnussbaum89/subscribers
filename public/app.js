// Firestore database
const db = firebase.firestore();
// Access emails
const users = db.collection("users");

// DOM elements for event handler
const submit = document.querySelector(".submit-btn");
const email = document.querySelector(".email");
const title = document.querySelector(".title");
/**
 * Saves value from email input field and submits email to DB
 */
function submitEmailToFirebase() {
  const userEmail = email.value;

  users.add({
    email: `${userEmail}`,
  });

  email.value = "";

  if (!email.value) {
    title.textContent = "Thank you for subscribing! 👏";
  }
}

/**
 * After user submits an email - if they start typing a different email, the text reverts back to normal
 * @param {*} e listens for what user types
 */
function listenForUserInput(e) {
  const userInput = e.target.value;

  if (userInput !== "") {
    title.textContent = "Subscribe to my mailing list 🔥";
  }
}

submit.addEventListener("click", submitEmailToFirebase);
email.addEventListener("keyup", listenForUserInput);
// TODO: add a seach function to the app
// Query a specific user with this
// db.collection("users").where("email", "==", "joe@email.com");
