for (let i = 1; i <= 100; i++) {
    if (i === 50) {
        console.log("Halfway there!");
    } else if (i === 100) {
        console.log("You made it!");
    } else if (i % 10 === 0) {
        console.log(`Checkpoint! ${i}`);
    }
}

console.log("All done!");
