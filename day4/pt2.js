const fs = require("fs");

let lol = [];

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
            if (lol[j][k] == 'A')
            {
                count += checkFirst(j, k, 1);
            }
        }
    }
    console.log(`The count of the output is: ${count}`)
}

function checkFirst(j, k, iter)
{
    if (iter == 5)
    {
        return 1;
    }
    let l, m;
    if (iter == 1)
    {
        l = j - 1;
        m = k + 1;
    }
    else
    {
        l = j - 1;
        m = k - 1;
    }
    if (l < 0 || m < 0 || l >= lol.length || m >= lol.length)
    {
        return 0;
    }
    if (lol[l][m] == "M")
    {
        return checkSecond(j, k, "S", iter + 1);
    }
    else if (lol[l][m] == "S")
    {
        return checkSecond(j, k, "M", iter + 1);
    }
    return 0;
}

function checkSecond(j, k, shouldBe, iter)
{
    let l, m;
    if (iter == 2)
    {
        l = j + 1;
        m = k - 1;
    }
    else
    {
        l = j + 1;
        m = k + 1;
    }
    if (l < 0 || m < 0 || l >= lol.length || m >= lol.length)
    {
        return 0;
    }
    if (lol[l][m] == shouldBe)
    {
        return checkFirst(j, k, iter + 1);
    }
    return 0;
}

main();
