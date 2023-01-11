import fibonacci from './utils/fibonacci.js';
import { celciusToFarenheit, farenheitToCelcius } from './utils/temperature.js';

document.getElementById("submit-fib").addEventListener('click', () => { 
    let n = document.getElementById("fib").value;
    let fn = fibonacci(n);
    document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;
});

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