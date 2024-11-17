let i = 1;

while (i <= 100) {
    if (i % 10 === 0 && i !== 50 && i !== 100) {
        console.log(`Checkpoint! ${i}`);
    }
    else if (i === 50) {
        console.log("Halfway there!");
    }
    else if (i === 100) {
        console.log("You made it!");
    }
    i++;
}
console.log("All done!");
