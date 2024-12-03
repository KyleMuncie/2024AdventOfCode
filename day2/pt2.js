const fs = require("fs");

function main() {
    const data = fs.readFileSync("input.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    let reportResult = 0;
    lines.forEach(line => {
        const parts = line.split(/\s+/);
        if (parseInt(parts[0]) > parseInt(parts[1]))
        {
            reportResult += decreasing(parts);
        }
        else
        {
            reportResult += increasing(parts);
        }
    });

    console.log(`There are ${reportResult} safe reports.`);
}

function increasing(parts)
{
    let problemDampener = 0;
    for (var i = 0; i < parts.length - 2; i++)
    {
        if (parseInt(parts[i]) >= parseInt(parts[i + 1]) || Math.abs(parseInt(parts[i]) - parseInt(parts[i + 1])) > 3)
        {
            problemDampener++;
        }
    }
    if (problemDampener > 1)
    {
        return 0;
    }
    return 1;
}

function decreasing(parts)
{
    let problemDampener = 0;
    for (var i = 0; i < parts.length - 2; i++)
    {
        if (parseInt(parts[i]) <= parseInt(parts[i + 1]) || Math.abs(parseInt(parts[i]) - parseInt(parts[i + 1])) > 3)
        {
            problemDampener++;
        }
    }
    if (problemDampener > 1)
    {
        return 0;
    }
    return 1;
}

main();
