const fs = require("fs");

function main() {
    const data = fs.readFileSync("input.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");

    let rulesDic = new Map();
    let pageRules = [];
    let safetyManual = [];
    let sum = 0;

    lines.forEach(line => {
        if (line.indexOf('|') > -1)
        {
            let entries = line.trim().split('|');
            if (rulesDic.has(entries[0]))
            {
                let currentValue = rulesDic.get(entries[0]);
                let newValue = `${currentValue},${entries[1]}`;
                rulesDic.set(entries[0], newValue);
            }
            else
            {
                rulesDic.set(entries[0], entries[1]);
            }
            pageRules.push(line);
        }
        else
            safetyManual.push(line);
    });

    for (var j = 0; j < safetyManual.length; j++)
    {
        let entries = safetyManual[j].trim().split(',');
        for (var k = 0; k < entries.length - 1; k++)
        {
            let breakme = false
            for (var l = k + 1; l < entries.length; l++)
            {
                const getstringofl = rulesDic.get(entries[l]);
                if (getstringofl.indexOf(entries[k]) >= 0)
                {
                    breakme = true;
                    break;
                }
            }
            if (breakme)
                break;
            if (k == entries.length - 2)
            {
                sum += parseInt(entries[Math.floor(entries.length / 2)]);
            }
        }
    }

    console.log(`The sum of the middle entry of the manuals is: ${sum}`);
}

main();
