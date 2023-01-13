(()=>{"use strict";function e(e,t=1){const n=Math.pow(10,t);return Math.round(e*n)/n}let t=[];function n(e,t){let n="";for(let t of e)n+=`\n        <details>\n            <summary>${t.name}</summary>\n            <img src="${t.image}" height="100" alt="${t.name}">\n            <ul>\n                <li>Name: ${t.name}</li>\n                <li>Character: ${t.character}</li>\n                <li>AmiiboSeries: ${t.amiiboSeries}</li>\n                <li>GameSeries: ${t.gameSeries}</li>\n                <li>Type: ${t.type}</li>\n                <li>ID: ${t.head}${t.tail}</li>\n            <ul>\n        </details>`;t.innerHTML=n}document.getElementById("submit-fib").addEventListener("click",(()=>{let e=document.getElementById("fib").value,t=function(e){let t=[0,1];if(e<2)return t[e];for(let n=2;n<=e;n++)t[n]=t[n-1]+t[n-2];return t[e]}(e);document.getElementById("fib-result").innerHTML=`F<sub>${e}</sub> = ${t}`})),document.getElementById("submit-temp").addEventListener("click",(()=>{const t=document.getElementById("temp-result"),n=document.getElementById("temp").value,o=document.querySelectorAll('input[name="temp-type"]');let i;for(let e of o)if(e.checked){i=e.id;break}var l,r;"celcius"===i?t.innerHTML=`${n}°C = ${r=n,r<-273.15&&console.error(`${r}°C is too cold`),e(1.8*r+32)}°F`:"farenheit"===i?t.innerHTML=`${n}°F = ${l=n,l<-459.67&&console.error(`${l}°F is too cold`),e((l-32)/1.8)}°C`:t.innerText="Her er det noe muffens!"})),document.getElementById("submit-currency").addEventListener("click",(()=>{const t=document.getElementById("currency-result");let n=document.getElementById("amount").value;""===n&&(n=100),async function(t,n,o,i){fetch(`https://api.exchangerate.host/convert?from=${n}&to=${o}`).then((e=>e.json())).then((l=>{let r=e(t*l.result,2);i.innerText=`${n} ${t} = ${o} ${r}`}))}(n,document.getElementById("convertFrom").value,document.getElementById("convertTo").value,t)})),async function(e,t){fetch("https://api.exchangerate.host/symbols").then((e=>e.json())).then((n=>{let o="";for(let e in n.symbols){let t=n.symbols[e].code;o+=`<option value="${t}">${n.symbols[e].description} (${t})</option>\n`}o&&(e.innerHTML=o,t.innerHTML=o)}))}(document.getElementById("convertFromSymbols"),document.getElementById("convertToSymbols"));const o=document.getElementById("amiibos");!async function(e){e.innerHTML="Loading...",fetch("https://www.amiiboapi.com/api/amiibo/").then((e=>e.json())).then((o=>{t=o.amiibo,n(t,e)}))}(o);let i=document.getElementById("search-amiibos");i.addEventListener("input",c);let l=document.getElementById("amiibo-name");l.addEventListener("input",c);let r=document.getElementById("amiibo-game");r.addEventListener("input",c);let m=document.getElementById("amiibo-series");function c(){let e=i.value,c=l.checked,s=r.checked,a=m.checked;var d,u,y;d=e,u=o,y={nameOpt:c,gameSeriesOpt:s,amiiboSeriesOpt:a},n(t.filter((e=>!!(e.character.toLowerCase().includes(d.toLowerCase())||y.nameOpt&&e.name.toLowerCase().includes(d.toLowerCase())||y.gameSeriesOpt&&e.gameSeries.toLowerCase().includes(d.toLowerCase())||y.amiiboSeriesOpt&&e.amiiboSeries.toLowerCase().includes(d.toLowerCase())))),u)}function s(e){let t=document.querySelectorAll("details");for(let n of t)"open"===e&&n.setAttribute("open",!0),"close"===e&&n.removeAttribute("open")}m.addEventListener("input",c),document.getElementById("openAll").addEventListener("click",(()=>{s("open")})),document.getElementById("closeAll").addEventListener("click",(()=>{s("close")}))})();