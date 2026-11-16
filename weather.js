/* Clima para bases del viaje: pronósticos diarios bajo demanda.
   Datos: Open-Meteo (CC BY 4.0). No muestra pronósticos fuera del horizonte de 16 días. */
(function(){
"use strict";
const coords={
 "Los Ángeles":[-37.4697,-72.3537],
 "Malalcahuello":[-38.465,-71.57],
 "Pucón":[-39.2797,-71.9754],
 "Puerto Fuy":[-39.8729,-71.8901],
 "San Martín de los Andes":[-40.157,-71.353],
 "Bariloche":[-41.134,-71.310],
 "Futrono":[-40.1318,-72.395],
 "Temuco":[-38.7359,-72.5904],
 "Bulnes":[-36.7424,-72.2986]
};
const $=id=>document.getElementById(id);
const escapeHTML=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const msDay=86400000;
function toISO(d){return d.toISOString().slice(0,10)}
function fromText(date){
  const parts=String(date).toLowerCase().match(/(\d{1,2})\s*(nov|dic)/);
  if(!parts)return null;
  return "2026-"+(parts[2]==="nov"?"11":"12")+"-"+String(parts[1]).padStart(2,"0");
}
function datesForStay(stay){
  const start=fromText(stay.llegada),end=fromText(stay.salida);
  if(!start||!end)return [];
  const dates=[];
  for(let t=Date.parse(start+"T00:00:00Z");t<Date.parse(end+"T00:00:00Z")&&dates.length<31;t+=msDay)dates.push(toISO(new Date(t)));
  return dates;
}
function todayISO(timezone){
  const parts=new Intl.DateTimeFormat("en-US",{timeZone:timezone,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const obj=Object.fromEntries(parts.map(x=>[x.type,x.value]));
  return obj.year+"-"+obj.month+"-"+obj.day;
}
function weatherText(code){
  if(code===0)return "Despejado";
  if([1,2].includes(code))return "Parcialmente nublado";
  if(code===3)return "Nublado";
  if([45,48].includes(code))return "Niebla";
  if([51,53,55,56,57].includes(code))return "Llovizna";
  if([61,63,65,66,67,80,81,82].includes(code))return "Lluvia";
  if([71,73,75,77,85,86].includes(code))return "Nieve";
  if([95,96,99].includes(code))return "Tormenta";
  return "Variable";
}
function displayDay(date){const [y,m,d]=date.split("-");return Number(d)+" "+(m==="11"?"nov.":"dic.")}
function number(v){return typeof v==="number"&&Number.isFinite(v)?Math.round(v):null}
function metric(v,suffix){const n=number(v);return n===null?"—":n+suffix}
function setEntry(index,html){const el=$("weather-"+index);if(el)el.innerHTML=html}
function renderPeriod(stay,dates,forecast){
  const idx=window.TRIP_DATA.stays.indexOf(stay);
  const dayData=forecast?.daily||{};
  const items=dates.map(date=>{
    const at=(dayData.time||[]).indexOf(date);
    if(at<0)return "<div class='weather-day unavailable'><span>"+escapeHTML(displayDay(date))+"</span><span>Sin pronóstico todavía</span></div>";
    const tempMax=dayData.temperature_2m_max?.[at],tempMin=dayData.temperature_2m_min?.[at];
    const precip=dayData.precipitation_probability_max?.[at];
    const wind=dayData.wind_speed_10m_max?.[at];
    const gust=dayData.wind_gusts_10m_max?.[at];
    const condition=weatherText(dayData.weather_code?.[at]);
    return "<div class='weather-day'><div class='weather-when'>"+escapeHTML(displayDay(date))+"<small>"+escapeHTML(condition)+"</small></div>"+
    "<strong>"+escapeHTML(metric(tempMin,"°"))+" / "+escapeHTML(metric(tempMax,"°"))+"</strong>"+
    "<span title='Probabilidad máxima de precipitación'>Lluvia "+escapeHTML(metric(precip,"%"))+"</span>"+
    "<span title='Viento máximo y ráfagas máximas'>Viento "+escapeHTML(metric(wind,""))+" / "+escapeHTML(metric(gust,""))+" km/h</span></div>";
  }).join("");
  const known=dates.filter(date=>(dayData.time||[]).includes(date)).length;
  const state=known===dates.length?"Pronóstico disponible":known>0?"Pronóstico parcial":"Aún sin pronóstico";
  setEntry(idx,"<div class='weather-stay-top'><span>"+escapeHTML(stay.name)+"</span><small>"+escapeHTML(stay.dates)+" · "+state+"</small></div><div class='weather-days'>"+items+"</div>");
}
async function loadOne(stay,idx,dates,today){
  if(dates.every(date=>date<today)){
    setEntry(idx,"<div class='weather-stay-top'><span>"+escapeHTML(stay.name)+"</span><small>"+escapeHTML(stay.dates)+" · Fechas pasadas</small></div>");
    return;
  }
  const latest=toISO(new Date(Date.parse(today+"T00:00:00Z")+15*msDay));
  if(dates.every(date=>date>latest)){
    setEntry(idx,"<div class='weather-stay-top'><span>"+escapeHTML(stay.name)+"</span><small>"+escapeHTML(stay.dates)+"</small></div><div class='weather-pending'>Sin pronóstico todavía. Disponible al acercarse la fecha (máximo 16 días).</div>");
    return;
  }
  const geo=coords[stay.name];
  if(!geo){setEntry(idx,"<div class='weather-stay-top'><span>"+escapeHTML(stay.name)+"</span></div><div class='weather-pending'>No hay ubicación configurada para esta base.</div>");return}
  const qs=new URLSearchParams({
    latitude:String(geo[0]),longitude:String(geo[1]),
    daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max",
    timezone:stay.country==="Argentina"?"America/Argentina/Buenos_Aires":"America/Santiago",
    forecast_days:"16",wind_speed_unit:"kmh"
  });
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),14000);
  try{
    const response=await fetch("https://api.open-meteo.com/v1/forecast?"+qs.toString(),{signal:controller.signal,cache:"no-store"});
    if(!response.ok)throw new Error("HTTP "+response.status);
    const json=await response.json();
    if(!json.daily||!Array.isArray(json.daily.time))throw Error("Respuesta climática incompleta");
    renderPeriod(stay,dates.filter(date=>date>=today),json);
  }catch(e){
    setEntry(idx,"<div class='weather-stay-top'><span>"+escapeHTML(stay.name)+"</span><small>"+escapeHTML(stay.dates)+"</small></div><div class='weather-pending'>No se pudo consultar el pronóstico. <a href='https://open-meteo.com/en/docs' target='_blank' rel='noopener noreferrer'>Ver proveedor</a>.</div>");
  }finally{clearTimeout(timer)}
}
let hasLoaded=false;
async function loadWeather(force=false){
  const data=window.TRIP_DATA?.stays;
  if(!data||!$("weather-list"))return;
  if(hasLoaded&&!force)return;
  hasLoaded=true;
  const today=todayISO("America/Santiago");
  $("weather-list").innerHTML=data.map((s,idx)=>"<article class='weather-stay' id='weather-"+idx+"'><div class='weather-stay-top'><span>"+escapeHTML(s.name)+"</span><small>Consultando…</small></div></article>").join("");
  const tasks=data.map((stay,idx)=>loadOne(stay,idx,datesForStay(stay),today));
  await Promise.allSettled(tasks);
  const stamp=new Intl.DateTimeFormat("es-CL",{dateStyle:"medium",timeStyle:"short",timeZone:"America/Santiago"}).format(new Date());
  const target=$("weather-updated");if(target)target.textContent="Actualizado: "+stamp+" (hora de Chile)";
}
document.addEventListener("trip-weather-open",()=>loadWeather());
$("weather-reload")?.addEventListener("click",()=>loadWeather(true));
})();