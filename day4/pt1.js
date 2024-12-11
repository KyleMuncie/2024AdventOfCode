const fs = require("fs");

let lol = [];
const myMap = new Map([
    [1, "M"],
    [2, "A"],
    [3, "S"]
])

function main() {
    const data = fs.readFileSync("input.txt", "utf8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    let count = 0;
    lines.forEach(line => {
        let currentLine = [];
        for (var i = 0; i < line.length; i++)
        {
            currentLine.push(line[i]);
        }
        lol.push(currentLine);
    });
    for (var j = 0; j < lol.length; j++)
    {
        for (var k = 0; k < lol.length; k++)
        {
            if (lol[j][k] == 'X')
            {
                count = count + checkDir(j, k, 'N') + checkDir(j, k, 'NE') + checkDir(j, k, 'E') + checkDir(j, k, 'SE') + checkDir(j, k, 'S') + checkDir(j, k, 'SW') + checkDir(j, k, 'W') + checkDir(j, k, 'NW');
            }
        }
    }
    console.log(`The count of the output is: ${count}`)
}

function checkDir(j, k, direction, iter = 1)
{
    const directions = {
        'N': [-1, 0],
        'NE': [-1, 1],
        'E': [0, 1],
        'SE': [1, 1],
        'S': [1, 0],
        'SW': [1, -1],
        'W': [0, -1],
        'NW': [-1, -1]
    }
    let [rowDelta, columnDelta] = directions[direction];

    j += rowDelta;
    k += columnDelta;

    if (iter == 4)
    {
        return 1;
    }
    if (j < 0 || k < 0 || j >= lol.length || k >= lol.length)
    {
        return 0;
    }
    if (lol[j][k] != myMap.get(iter))
    {
        return 0;
    }
    return checkDir(j, k, direction, iter + 1);
}

main();
