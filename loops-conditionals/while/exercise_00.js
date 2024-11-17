
let loggedIn = false;
let attempts = 0;

while (!loggedIn) {
    console.log("Incorrect login credentials");
    attempts++;

    if (attempts >= 3) {
        loggedIn = true;
    }
}

console.log("Successfully logged in!");