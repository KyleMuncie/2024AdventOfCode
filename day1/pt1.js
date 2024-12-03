const fs = require("fs");

function main() {
    const data = fs.readFileSync("input.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");

    let listOne = [];
    let listTwo = [];

    lines.forEach(line => {
        const parts = line.split("   ");
        listOne.push(parts[0]);
        listTwo.push(parts[1]);
    });

    listOne.sort();
    listTwo.sort();

    let sum = 0;
    for (let i = 0; i < listOne.length; i++) {
        sum += Math.abs(listOne[i] - listTwo[i]);
    }

    console.log(`The sum of absolute differences is: ${sum}`);
}

main();
