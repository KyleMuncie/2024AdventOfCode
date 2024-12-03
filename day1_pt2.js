const fs = require("fs");

function main() {
    const data = fs.readFileSync("day1_data.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    const map1 = new Map();

    lines.forEach(line => {
        const parts = line.split(/\s+/);
        if (map1.has(parts[1]))
        {
            map1.set(parts[1], map1.get(parts[1]) + 1);
        }
        else
        {
            map1.set(parts[1], 1);
        }
    });

    var count = 0;
    lines.forEach(line => {
        const parts = line.split(/\s+/);
        if (map1.has(parts[0]))
        {
            count += parseInt(parts[0], 10) * parseInt(map1.get(parts[0]), 10);
        }
    });

    console.log(`Their similarity score is: ${count}`);
}

main();