// Requirements
// An online betting website called QuickBetOnline needs to have a modal popup to be shown to the user. 
// Inside this modal, they need an online tool to convert betting odds. 
// They would also like to capture the users inputs for future analyses.
// Develop this tool with the following minimum features:
// -	User is able to input only one of the following:
//     -	Fractional Odds (UK)
//     -	Decimal Odds (EU)
//     -	Moneyline Odds (USA)
// -	The tool will automatically fill in the other fields based on the conversion chart which is not hard coded, but saved in a MySQL table. 
// -	The details are captured by the web application as a log which is stored in json file
//        - You can use API from node.js to get the conversion and call it via fetch
// -	Explain your code, provide a README file and properly format all code.

// `fractional_odds`, `decimal_odds`, `moneyline_odds`
//  '1/5',           '1.20',             '-500'
//  '2/9',           '1.22',             '-450'
//  '1/4',           '1.25',             '-400'
//  '2/7',           '1.28',             '-350'
//  '3/10',              '1.30',             '-333.30'
//  '1/3',           '1.33',             '-300'
//  '7/20',              '1.35',             '-285.70'
//  '4/11',              '1.36',             '-275'
//  '2/5',           '1.40',             '-250'
//  '4/9',           '1.44',             '-225'
//  '9/20',              '1.45',             '-222.20'