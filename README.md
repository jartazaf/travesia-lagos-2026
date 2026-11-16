# Travesía Lagos & Andes 2026

Sitio personal e independiente para compartir el viaje en moto **25 de noviembre a 11 de diciembre de 2026** por Chile y Argentina.

## Qué contiene
- **Mapa interactivo**: bases y recorrido esquemático; no es una certificación de pavimento ni navegación GPS.
- **Itinerario de 17 jornadas**: salida, llegada, visitas, distancias aproximadas, enlaces a Google Maps y alertas.
- **Calendario de alojamientos**: llegada, salida, lugar, noches, principales visitas y estado de reserva.
- **Bitácora compartida**: entradas publicadas en `journal-data.js`.
- **Cuaderno local**: notas que pueden guardarse sin conexión en el navegador y exportarse como JSON; **no se sincronizan** ni aparecen públicamente hasta publicarse en GitHub.
- **Logística**: barcaza, ripio de Hua Hum, autonomía de 14 litros y límite diario de kilómetros.

## Cómo cambiar el viaje
- Edita `route-data.js` para cambiar días, kilometrajes estimados, visitas, bases, fechas o estado de reserva.
- Para publicar crónicas en la bitácora, edita `journal-data.js` con entradas del formato:
```js
window.TRIP_JOURNAL = [
  {day:1,title:"Primer día",text:"Nuestro relato del viaje",photo:"https://ejemplo.com/foto.jpg"}
];
```
- El cuaderno de viaje guarda **borradores solo en el navegador utilizado**; pulsa «Exportar JSON» y conserva el archivo. Cuando lo subas aquí o lo adjuntes en ChatGPT podremos convertir las entradas en bitácora pública.
- `index.html`: estructura y estética del sitio.
- `site-extras.js`: renderiza calendario y bitácora.

## Publicación
El repositorio se llama actualmente `jartazaf/travesia-lagos-2026.` (incluye un punto final). Si quieres una URL más limpia, renómbralo en **Settings → General → Repository name** como `travesia-lagos-2026`.
Para habilitar publicación gratuita: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
La dirección pública exacta aparecerá en la misma pantalla de GitHub Pages cuando se haya desplegado correctamente.

## Seguridad y fuentes
No publiques domicilios particulares, teléfonos, documentos, números de reservas ni información privada en archivos del repositorio: es público.
La ruta por **Hua Hum** tiene sectores de ripio; la conexión exacta a Maihue está pendiente de validar. El día **4 de diciembre**, Bariloche–Futrono, puede superar 350 km y requiere una decisión final antes de reservar.
- [Barcaza Hua Hum](https://barcazahuahum.com/es/horarios-tarifas/)
- [Paso Cardenal Samoré](https://www.pasosfronterizos.gov.cl/complejos-fronterizos/loslagos/paso-cardenal-samore/)
- [Parque Nacional Puyehue (CONAF)](https://www.conaf.cl/parque_nacionales/parque-nacional-puyehue/)
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

> No se han confirmado reservas de alojamiento ni de la barcaza. Reconfirmar horarios, pavimento y combustible antes de viajar.
