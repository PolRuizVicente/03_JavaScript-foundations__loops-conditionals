for (let i = 0; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber >= 5) {
        console.log(`Logged In with ${randomNumber}!`);
    } else {
        console.log(`Logged Out with ${randomNumber}!`);
    }
}