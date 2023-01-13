(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function b(e){let t=[0,1];if(e<2)return t[e];for(let n=2;n<=e;n++)t[n]=t[n-1]+t[n-2];return t[e]}function u(e,t=1){const n=Math.pow(10,t);return Math.round(e*n)/n}function L(e){return e<-459.67&&console.error(`${e} is too cold`),u((e-32)/1.8)}function E(e){return e<-273.15&&console.error(`${e} is too cold`),u(e*1.8+32)}async function v(e,t,n,o){var i=`https://api.exchangerate.host/convert?from=${t}&to=${n}`;fetch(i).then(r=>r.json()).then(r=>{let l=u(e*r.result,2);o.innerText=`${t} ${e} = ${n} ${l}`})}async function $(e,t){var n="https://api.exchangerate.host/symbols";fetch(n).then(o=>o.json()).then(o=>{let i="";for(let r in o.symbols){let l=o.symbols[r].code,g=o.symbols[r].description;i+=`<option value="${l}">${g} (${l})</option>
`}i&&(e.innerHTML=i,t.innerHTML=i)})}let s=[];async function B(e){e.innerHTML="Loading...",fetch("https://www.amiiboapi.com/api/amiibo/").then(n=>n.json()).then(n=>{s=n.amiibo,m(s,e)})}function m(e,t){let n="";for(let o of e)n+=`
        <details>
            <summary>${o.name}</summary>
            <img src="${o.image}" height="100" alt="${o.name}">
            <ul>
                <li>Name: ${o.name}</li>
                <li>Character: ${o.character}</li>
                <li>AmiiboSeries: ${o.amiiboSeries}</li>
                <li>GameSeries: ${o.gameSeries}</li>
                <li>Type: ${o.type}</li>
                <li>ID: ${o.head}${o.tail}</li>
            <ul>
        </details>`;t.innerHTML=n}function I(e,t,n){const o=s.filter(i=>!!(i.character.toLowerCase().includes(e.toLowerCase())||n.nameOpt&&i.name.toLowerCase().includes(e.toLowerCase())||n.gameSeriesOpt&&i.gameSeries.toLowerCase().includes(e.toLowerCase())||n.amiiboSeriesOpt&&i.amiiboSeries.toLowerCase().includes(e.toLowerCase())));m(o,t)}document.getElementById("submit-fib").addEventListener("click",()=>{let e=document.getElementById("fib").value,t=b(e);document.getElementById("fib-result").innerHTML=`F<sub>${e}</sub> = ${t}`});document.getElementById("submit-temp").addEventListener("click",()=>{const e=document.getElementById("temp-result"),t=document.getElementById("temp").value,n=document.querySelectorAll('input[name="temp-type"]');let o;for(let i of n)if(i.checked){o=i.id;break}o==="celcius"?e.innerHTML=`${t}°C = ${E(t)}°F`:o==="farenheit"?e.innerHTML=`${t}°F = ${L(t)}°C`:e.innerText="Her er det noe muffens!"});document.getElementById("submit-currency").addEventListener("click",()=>{const e=document.getElementById("currency-result");let t=document.getElementById("amount").value;const n=document.getElementById("convertFrom").value,o=document.getElementById("convertTo").value;t===""&&(t=100),v(t,n,o,e)});const C=document.getElementById("convertFromSymbols"),S=document.getElementById("convertToSymbols");$(C,S);const a=document.getElementById("amiibos");B(a);let d=document.getElementById("search-amiibos");d.addEventListener("input",c);let f=document.getElementById("amiibo-name");f.addEventListener("input",c);let y=document.getElementById("amiibo-game");y.addEventListener("input",c);let p=document.getElementById("amiibo-series");p.addEventListener("input",c);function c(){let e=d.value,t=f.checked,n=y.checked,o=p.checked;I(e,a,{nameOpt:t,gameSeriesOpt:n,amiiboSeriesOpt:o})}document.getElementById("openAll").addEventListener("click",()=>{h("open")});document.getElementById("closeAll").addEventListener("click",()=>{h("close")});function h(e){let t=document.querySelectorAll("details");for(let n of t)e==="open"&&n.setAttribute("open",!0),e==="close"&&n.removeAttribute("open")}
