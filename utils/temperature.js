import { round } from "./utils.js";

export function farenheitToCelcius(f) {
    // °C = °F - 32 / 1.8000
    if (f < -459.67) console.error(`${f} is too cold`);
    //return (f-32.00)/1.8000;
    return round((f-32.00)/1.8000);
}

export function celciusToFarenheit(c) {
    // °F = °C * 1.8000 + 32.00
    if (c < -273.15) console.error(`${c} is too cold`);
    //return c * 1.8000 + 32.00;
    return round((c * 1.8000 + 32.00));
}

/*
function round(n, precision = 1) {
    const exponent = Math.pow(10, precision);
    return Math.round(n * exponent) / exponent;
}
*/
/*

console.log(`-40°C = ${celciusToFarenheit(-40)}°F`); // -40
console.log(`0°C = ${celciusToFarenheit(0)}°F`); // 32
console.log(`37°C = ${celciusToFarenheit(37)}°F`); // 98.6
console.log(`100°C = ${celciusToFarenheit(100)}°F`); // 212


console.log(`-40°F = ${farenheitToCelcius(-40)}°C`);// -40
console.log(`32°F = ${farenheitToCelcius(32)}°C`); // 0
console.log(`98.6°F = ${farenheitToCelcius(98.6)}°C`); // 37
console.log(`212°F = ${farenheitToCelcius(212)}°C`); // 100

*/