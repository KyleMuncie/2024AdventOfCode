const fs = require("fs");

function main() {
    const data = fs.readFileSync("input copy.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    let regexComplex = /(^.*?(?=don't\(\))|do\(\).*?mul\([0-9]+,[0-9]+\).*?(?=do\(\)|don't\(\)|$))/g;
    let regex = /mul\([0-9]+,[0-9]+\)/g;
    let count = 0;
    lines.forEach(line => {
        let matches = line.match(regexComplex);
        matches.forEach(strings => {
            let newMatches = strings.match(regex);
            newMatches.forEach(mulMatch => {
                let trimmed = mulMatch.substring(4, mulMatch.length - 1);
                count += parseInt(trimmed.split(',')[0]) * parseInt(trimmed.split(',')[1]);
            });
        });
    });
    console.log(`The count of the output is: ${count}`);
}

main();