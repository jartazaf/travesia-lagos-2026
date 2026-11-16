(function travelSiteExtras(){
  const $=id=>document.getElementById(id);
  const h=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const stays=window.TRIP_DATA?.stays||[];
  $("calendarRows").innerHTML=stays.map(s=>`<tr><td>${h(s.llegada)}</td><td>${h(s.salida)}</td><td>${h(s.name)} <span style="display:block;color:#9db0ad;font-size:11px">${h(s.country)}</span></td><td>${Number(s.nights)||0}</td><td>${h(s.visitas)}</td><td style="color:#eecb91">${h(s.estado)}</td></tr>`).join("");
  const journal=(window.TRIP_JOURNAL||[]).filter(e=>e&&e.text);
  const picture=url=>{try{const u=new URL(url);return ["https:","http:"].includes(u.protocol)?u.href:null}catch{return null}};
  $("publishedDiary").innerHTML=journal.length?journal.map(e=>`<div class="journal-entry"><div class="journal-date">Día ${h(e.day)}</div><h4>${h(e.title||"Notas de viaje")}</h4><p>${h(e.text)}</p>${picture(e.photo)?`<img alt="Fotografía del día ${h(e.day)}" loading="lazy" src="${h(picture(e.photo))}">`:""}</div>`).join(""):'<div class="journal-empty">Todavía no hay entradas publicadas. El itinerario está listo; las historias se irán sumando durante el viaje.</div>';
  const days=window.TRIP_DATA?.days||[];
  $("diaryDay").innerHTML=days.map(d=>`<option value="${d.day}">${h(d.date)} · ${h(d.title)}</option>`).join("");
  const key="travesia-lagos-journal-drafts-v1";
  let drafts={};
  try{drafts=JSON.parse(localStorage.getItem(key)||"{}")||{}}catch(e){drafts={}}
  const select=$("diaryDay"),title=$("diaryTitle"),note=$("diaryText"),photo=$("diaryPhoto");
  function showDraft(){
    const d=drafts[select.value]||{}; title.value=d.title||"";note.value=d.text||"";photo.value=d.photo||"";
    $("diaryDrafts").textContent=Object.keys(drafts).length+" jornada(s) con borrador guardado en este dispositivo.";
  }
  select.addEventListener("change",showDraft);showDraft();
  $("saveDiary").addEventListener("click",()=>{
    const text=note.value.trim(),t=title.value.trim();
    if(!text){$("diaryStatus").textContent="Escribe una nota antes de guardar.";return}
    drafts[select.value]={day:Number(select.value),title:t||"Notas del día",text,photo:picture(photo.value)||""};
    try{localStorage.setItem(key,JSON.stringify(drafts));$("diaryStatus").textContent="Borrador guardado en este dispositivo (aún no público).";}
    catch(e){$("diaryStatus").textContent="El navegador no permitió guardar. Exporta el archivo para conservarlo.";}
    showDraft();
  });
  $("exportDiary").addEventListener("click",()=>{
    const entries=Object.values(drafts).sort((a,b)=>a.day-b.day);
    if(!entries.length){$("diaryStatus").textContent="No hay borradores que exportar.";return}
    const blob=new Blob([JSON.stringify(entries,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="bitacora-travesia-2026.json";a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    $("diaryStatus").textContent="Archivo descargado. Para hacerlo público, incorpora las entradas a journal-data.js.";
  });
})();
