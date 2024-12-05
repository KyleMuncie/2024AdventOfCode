const fs = require("fs");

function main() {
    const data = fs.readFileSync("input.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    let regex = /mul\([0-9]+,[0-9]+\)/g;
    let count = 0;
    lines.forEach(line => {
        let matches = line.match(regex);
        matches.forEach(match => {
            let trimmed = match.substring(4, match.length - 1);
            count += parseInt(trimmed.split(',')[0]) * parseInt(trimmed.split(',')[1])
        });
    });
    console.log(`The count of the output is: ${count}`)
}

main();
