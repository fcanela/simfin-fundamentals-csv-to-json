# SimFin Fundamentals CSV to JSON converter

SimFin offers a free dataset with fundamentals data (incomes, profit, taxes, EBITDA, etc). This is available to download as a CSV file.

I wanted to transform the dataset to JSON format. This script reads the CSV from `stdin` and returns the JSON in `stdout`.

It was tested with a CSV generated with the following options:

- Dataset: Fundamentals (Detailed)
- Update fundamentals & rations on: Reporting period
- Time periods fundamentals: Quarters
- General data format: Narrow
- Delimiter string of CSV: Semicolon

## Example usage

```
git clone https://github.com/fcanela/simfin-fundamentals-csv-to-json.git simfin-convert
cd simfin-convert
cat ~/downloads/output-semicolon-narrow.csv | node index.js > fundamentals.json
```

## Original file example

```
Ticker;SimFin ID;Company Industry Classification Code;Indicator Name;period;Indicator Value
ABT;63877;106004;Cash and Cash Equivalents;Q4-2007;2820.827
ABT;63877;106004;Receivables;Q4-2007;4946.876
ABT;63877;106004;Current Assets;Q4-2007;14042.733
ABT;63877;106004;Net PP&E;Q4-2007;7518.149
ABT;63877;106004;Intangible Assets;Q4-2007;5720.478
ABT;63877;106004;Goodwill;Q4-2007;10128.841
ABT;63877;106004;Total Noncurrent Assets;Q4-2007;25671.191
ABT;63877;106004;Total Assets;Q4-2007;39713.924
ABT;63877;106004;Short term debt;Q4-2007;2725.915
ABT;63877;106004;Accounts Payable;Q4-2007;1219.529
ABT;63877;106004;Current Liabilities;Q4-2007;9103.278
ABT;63877;106004;Long Term Debt;Q4-2007;9487.789
ABT;63877;106004;Total Noncurrent Liabilities;Q4-2007;12786.701
ABT;63877;106004;Total Liabilities;Q4-2007;21889.979
ABT;63877;106004;Preferred Equity;Q4-2007;0.0
ABT;63877;106004;Share Capital;Q4-2007;6104.102
ABT;63877;106004;Treasury Stock;Q4-2007;-1213.134
ABT;63877;106004;Retained Earnings;Q4-2007;10805.809
ABT;63877;106004;Equity Before Minorities;Q4-2007;17778.54
ABT;63877;106004;Minorities;Q4-2007;45.405
ABT;63877;106004;Total Equity;Q4-2007;17823.945
ABT;63877;106004;Current Ratio;Q4-2007;1.5426
ABT;63877;106004;Liabilities to Equity Ratio;Q4-2007;1.2281
ABT;63877;106004;Debt to Assets Ratio;Q4-2007;0.3075
CAT;253953;100009;Cash and Cash Equivalents;Q4-2007;1122.0
CAT;253953;100009;Receivables;Q4-2007;8249.0
CAT;253953;100009;Current Assets;Q4-2007;25477.0
CAT;253953;100009;Net PP&E;Q4-2007;9997.0
CAT;253953;100009;Intangible Assets;Q4-2007;475.0
CAT;253953;100009;Goodwill;Q4-2007;1963.0
CAT;253953;100009;Total Noncurrent Assets;Q4-2007;30655.0
...
```

## JSON file output example

```json
    "A": {
        "Q1-2009": {
            "Abnormal Gains/Losses": "0.0",
            "COGS": "577.0",
            "Cash From Financing Activities": "-49.0",
            "Cash From Investing Activities": "-11.0",
            "Cash From Operating Activities": "17.0",
            "Change in Working Capital": "-205.0",
            "Current Ratio": "2.3925",
            "Debt to Assets Ratio": "0.3033",
            "Depreciation & Amortisation": "41.0",
            "Dividends": "0.0",
            "EBIT": "24.0",
            "EBITDA": "65.0",
            "Free Cash Flow": "-137.0",
            "Gross Margin": "0.5051",
            "Income Taxes": "-37.0",
            "Interest expense, net": "9.0",
            "Liabilities to Equity Ratio": "1.7382",
            "Net Change in Cash": "-43.0",
            "Net Change in PP&E & Intangibles": "-34.0",
            "Net Income from Discontinued Op.": "0.0",
            "Net Profit": "64.0",
            "Net Profit Margin": "0.0549",
            "Operating Margin": "0.0206",
            "R&D": "169.0",
            "Return on Assets": "0.0091",
            "Return on Equity": "0.025",
            "Revenues": "1166.0",
            "SG&A": "396.0"
        },
        "Q1-2010": {
            "Abnormal Gains/Losses": "0.0",
            "Accounts Payable": "315.0",
            "COGS": "553.0",
            "Cash From Financing Activities": "3.0",
            "Cash From Investing Activities": "-31.0",
            "Cash From Operating Activities": "30.0",
            "Cash and Cash Equivalents": "2493.0",
            "Change in Working Capital": "-222.0",
            "Current Assets": "5519.0",
            "Current Liabilities": "2549.0",
            "Current Ratio": "2.1652",
            "Debt to Assets Ratio": "0.3843",
            "Depreciation & Amortisation": "39.0",
            "Dividends": "0.0",
```
