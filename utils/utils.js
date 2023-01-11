/**
 * Source: https://writingjavascript.com/round-number-to-a-specific-precision-in-javascript 
*/
export function round(n, precision = 1) {
    const exponent = Math.pow(10, precision);
    return Math.round(n * exponent) / exponent;
}