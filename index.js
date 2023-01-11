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

/** @todo Use getAllCurrencies() to update the convertFrom and convertTo selects... */
// getAllCurrencies();