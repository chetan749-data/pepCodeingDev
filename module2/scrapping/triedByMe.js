const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link ="https://www.cricbuzz.com/live-cricket-scores/45886/csk-vs-kkr-1st-match-indian-premier-league-2022"

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsName = document.querySelectorAll(".cb-col.cb-col-100.ng-scope .cb-col.cb-col-100.ng-scope .cb-com-ln.ng-binding.ng-scope.cb-col.cb-col-100");
        console.log(teamsName[6].textContent)  
    }
}

//getting object,, there is some error