const { createInterface } = require('readline');

const reader = createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

const result = {};
reader.on('close', () => console.log(JSON.stringify(result)));

let passedFirstLine = false;
reader.on('line', (line) => {
    if (!passedFirstLine === false) {
        passedFirstLine = true;
        return;
    }
    const [ticker, id, industry, indicator, period, value] = line.split(';');
    if (!ticker) return;
    if (!result[ticker]) result[ticker] = {}
    if (!result[ticker][period]) result[ticker][period] = {};
    result[ticker][period][indicator] = value;
});

