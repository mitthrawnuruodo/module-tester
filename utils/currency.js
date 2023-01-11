import { round } from "./utils.js";

/** Using https://exchangerate.host/#/docs */
export async function currencyConverter(amount, from, to, out) {
    //console.log(`Convert ${from} ${amount} into ${to} and put in ${out}`);
    var requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;    
/*
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response);
    }
*/
    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        let result = round(amount * data.result, 2);
        //console.log(`${from} ${amount} = ${to} ${result}`);
        out.innerText = `${from} ${amount} = ${to} ${result}`;
    });
}

export async function getAllCurrencies() {

    var requestURL = 'https://api.exchangerate.host/symbols';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var response = request.response;
        //console.log(response);
        console.log(response.symbols);
    }
    
}
