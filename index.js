const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function minCost(N, H, M) {
    let cost = 0;
    for (let i = 1; i <= N; i++) {
        if (H[i - 1] === H[i]) {
            if (M[i - 1] < M[i]) {
                cost += M[i - 1];
                H[i - 1]++;
            } else {
                cost += M[i];
                H[i]++;
            }
        }
    }
    return cost
}

function init() {
    rl.on("line", line => {
        input.push(...line.split(" ").map(x => parseInt(x)));
    });

    rl.on("close", () => {
        const N = input[0];
        const H = [];
        const M = [];
        for (let i = 1; i < input.length; i = i + 2) {
            H.push(parseInt(input[i]));
            M.push(parseInt(input[i + 1]));
        }

        console.log(minCost(N, H, M));
    });
}

init();

module.exports = {
    minCost
}