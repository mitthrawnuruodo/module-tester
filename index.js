/** Fibonacci-numbers */
import fibonacci from './utils/fibonacci.js';
document.getElementById("submit-fib").addEventListener('click', () => { 
    let n = document.getElementById("fib").value;
    let fn = fibonacci(n);
    document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;
});

/** Temperature converter */
import { celciusToFarenheit, farenheitToCelcius } from './utils/temperature.js';
document.getElementById("submit-temp").addEventListener('click', () => { 
    const out = document.getElementById("temp-result");
    const temp = document.getElementById("temp").value;
    const radioButtons = document.querySelectorAll('input[name="temp-type"]');
    let fromType; 
    for (let btn of radioButtons){
        if (btn.checked) {
            fromType = btn.id;
            break;
        }
    }
    //console.log(`Convert ${temp} from ${fromType}`);
    if (fromType === 'celcius'){
        out.innerHTML = `${temp}°C = ${celciusToFarenheit(temp)}°F`;
    } else if (fromType === 'farenheit') {
        out.innerHTML = `${temp}°F = ${farenheitToCelcius(temp)}°C`;
    } else {
        out.innerText = "Her er det noe muffens!";
    }
});

/** Currency converter */
import { currencyConverter, getAllCurrencies } from './utils/currency.js';
document.getElementById("submit-currency").addEventListener('click', () => { 
    const out = document.getElementById("currency-result");
    let amount = document.getElementById("amount").value;
    const from = document.getElementById("convertFrom").value;
    const to = document.getElementById("convertTo").value;
    //console.log({amount, from, to, out});
    if (amount === "") amount = 100;
    currencyConverter(amount, from, to, out);
});

const fromCurrencyList = document.getElementById("convertFromSymbols");
const toCurrencyList = document.getElementById("convertToSymbols");
getAllCurrencies(fromCurrencyList, toCurrencyList); 

/** Amiibos */
import { getAllAmiibos, filterAmiibos } from './utils/amiibos.js';
const outPutElement = document.getElementById("amiibos");
getAllAmiibos(outPutElement);

let searchBox = document.getElementById("search-amiibos");

/*
searchBox.addEventListener('input', () => {
    let searchString = searchBox.value;
    let nameOpt = document.getElementById("amiibo-name").checked;
    let gameSeriesOpt = document.getElementById("amiibo-game").checked;
    let amiiboSeriesOpt = document.getElementById("amiibo-series").checked;

    let options = { nameOpt, gameSeriesOpt, amiiboSeriesOpt };
    console.log(`Will search for ${searchString}`, options);
    filterAmiibos(searchString, outPutElement, options);
});
*/

searchBox.addEventListener('input', updateSearch);

let nameCheckBox = document.getElementById("amiibo-name");
nameCheckBox.addEventListener('input', updateSearch);

let gameSeriesCheckBox = document.getElementById("amiibo-game");
gameSeriesCheckBox.addEventListener('input', updateSearch);

let amiiboSeriesCheckbox = document.getElementById("amiibo-series")
amiiboSeriesCheckbox.addEventListener('input', updateSearch);

function updateSearch() {

    let searchString = searchBox.value;

    let nameOpt = nameCheckBox.checked;
    let gameSeriesOpt = gameSeriesCheckBox.checked;
    let amiiboSeriesOpt = amiiboSeriesCheckbox.checked;
    let options = { nameOpt, gameSeriesOpt, amiiboSeriesOpt };

    //console.log(`Will search for ${searchString}`, options);
    filterAmiibos(searchString, outPutElement, options);

}
