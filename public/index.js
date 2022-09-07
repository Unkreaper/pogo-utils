/* jshint esversion: 8 */
// import request from 'request-promise';
// import { load } from 'cheerio';

async function calculate()
{
    // var request = require('request-promise');
    // var cheerio = require('cheerio');
    var pokemonName = document.getElementById("pokemonName").value;
    var atkIV = document.getElementById("atkIV").value;
    var defIV = document.getElementById("defIV").value;
    var hpIV = document.getElementById("hpIV").value;
    var league = document.getElementById("league").value;
    var friendship = document.getElementById("friendship").value;
    var isLuckyTrade = document.getElementById("lucky").checked;

    console.log("name: " + pokemonName);
    console.log("atk: " + atkIV);
    console.log("def: " + defIV);
    console.log("hp: " + hpIV);
    console.log("league: " + league);
    console.log("friend: " + friendship);
    console.log("lucky: " + isLuckyTrade);

    // var searchHtml = await request.get(`https://pvpivs.com/?mon=${pokemonName}&r=4096IVs=${atkIV}_${defIV}_${hpIV}`);
    // var $ = cheerio.load(searchHtml);

    // var rank = 0;
    // var possibleCombinations = [];

    // var results = $('table[id="outTable"] > tbody > tr').map((index, element) => 
    // {
    //     if (index > 0)
    //     {
    //         var values = $(element).children('td');
    //         if ($(element).hasClass("rubbish") || $(element).hasClass("ok") || $(element).hasClass("good"))
    //         {
    //             rank = values[0];
    //         }
    //         else
    //         {
    //             possibleCombinations.push({
    //                 rank: values[0],
    //                 atk: values[3],
    //                 def: values[4],
    //                 hp: values[5],
    //             });
    //         }
    //     }
    // });
}

document.querySelector('#submitForm').addEventListener('click', calculate);