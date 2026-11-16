/*
  ARCHIVO EDITABLE DEL VIAJE
  Cambia fechas, lugares, noches y visitas aquí.
  Al guardar el cambio en el repositorio GitHub, GitHub Pages publica la nueva versión.
  Los kilómetros son estimaciones preliminares; no son trazados GPS.
*/
window.TRIP_DATA = {
  stays: [
    {name:'Los Ángeles',country:'Chile',dates:'25–26 nov.',nights:1,desc:'Primer descanso después del trayecto largo desde Santiago.'},
    {name:'Malalcahuello',country:'Chile',dates:'26–27 nov.',nights:1,desc:'Araucarias, paisajes de montaña y miradores accesibles por asfalto.'},
    {name:'Pucón',country:'Chile',dates:'27–28 nov.',nights:1,desc:'Lago Villarrica y pueblo. Una noche; no hay jornada libre completa.'},
    {name:'Puerto Fuy',country:'Chile',dates:'28–29 nov.',nights:1,desc:'Huilo Huilo, lago Pirehueico y noche previa a la barcaza.'},
    {name:'San Martín de los Andes',country:'Argentina',dates:'29 nov.–1 dic.',nights:2,desc:'Lago Lácar, costanera, descansos y preparativos para Siete Lagos.'},
    {name:'Bariloche',country:'Argentina',dates:'1–4 dic.',nights:3,desc:'Base para Circuito Chico, Villa La Angostura y el Nahuel Huapi.'},
    {name:'Futrono',country:'Chile',dates:'4–8 dic.',nights:4,desc:'Base para Lago Ranco, Llifén, Maihue y excursión a Puyehue.'},
    {name:'Temuco',country:'Chile',dates:'8–9 dic.',nights:1,desc:'Noche de tránsito para llegar a Bulnes el 9 de diciembre.'},
    {name:'Bulnes',country:'Chile',dates:'9–11 dic.',nights:2,desc:'Estadía fija. Regreso a Santiago el 11 de diciembre.'}
  ],
  mapPoints: {
    'Santiago':{lat:-33.4489,lon:-70.6693},
    'Los Ángeles':{lat:-37.4697,lon:-72.3537},
    'Malalcahuello':{lat:-38.465,lon:-71.570},
    'Pucón':{lat:-39.2797,lon:-71.9754},
    'Puerto Fuy':{lat:-39.8729,lon:-71.8901},
    'Puerto Pirehueico':{lat:-39.882,lon:-71.720},
    'Hua Hum':{lat:-40.07,lon:-71.65},
    'San Martín de los Andes':{lat:-40.157,lon:-71.353},
    'Villa La Angostura':{lat:-40.762,lon:-71.647},
    'Bariloche':{lat:-41.134,lon:-71.310},
    'Cardenal Samoré':{lat:-40.676,lon:-72.127},
    'Entre Lagos':{lat:-40.680,lon:-72.601},
    'Osorno':{lat:-40.574,lon:-73.134},
    'Futrono':{lat:-40.1318,lon:-72.395},
    'Temuco':{lat:-38.7359,lon:-72.5904},
    'Bulnes':{lat:-36.7424,lon:-72.2986}
  },
  days: [
    {day:1,date:'25 nov.',country:'Chile',title:'Santiago → Los Ángeles',origin:'Santiago, Chile',destination:'Los Ángeles',travel:true,km:'≈ 515 km',desc:'El primer gran tramo por la Ruta 5. Jornada larga: hacer pausas y recargar combustible.',visits:'San Fernando · Talca · Chillán'},
    {day:2,date:'26 nov.',country:'Chile',title:'Los Ángeles → Malalcahuello',origin:'Los Ángeles, Chile',destination:'Malalcahuello',travel:true,km:'≈ 190–220 km',desc:'Rumbo a la cordillera y primeras araucarias. Evitar desvíos por caminos no pavimentados.',visits:'Victoria · Curacautín · Malalcahuello'},
    {day:3,date:'27 nov.',country:'Chile',title:'Malalcahuello → Pucón',origin:'Malalcahuello, Chile',destination:'Pucón',travel:true,km:'≈ 220–270 km',desc:'Llegada al lago Villarrica. La prioridad es disfrutar el camino y el pueblo.',visits:'Curacautín · Villarrica · Pucón'},
    {day:4,date:'28 nov.',country:'Chile',title:'Pucón → Puerto Fuy',origin:'Pucón, Chile',destination:'Puerto Fuy',travel:true,km:'≈ 190–250 km',desc:'Cruce por el entorno del lago Calafquén y luego hacia la selva valdiviana. No usar el atajo de ripio Coñaripe–Panguipulli.',visits:'Licán Ray · Coñaripe · Panguipulli · Neltume · Huilo Huilo',mapWaypoints:['Pucón, Chile','Licán Ray, Chile','Coñaripe, Chile','Licán Ray, Chile','Panguipulli, Chile','Puerto Fuy, Chile']},
    {day:5,date:'29 nov.',country:'Argentina',title:'Puerto Fuy → San Martín',origin:'Puerto Fuy, Chile',destination:'San Martín de los Andes',travel:true,km:'≈ 50–60 km + barcaza',desc:'Navegación del lago Pirehueico, frontera Hua Hum y llegada a San Martín. Tramo con ripio: pendiente de aceptar o cambiar itinerario.',visits:'Barcaza Hua Hum · Puerto Pirehueico · lago Nonthué · lago Lácar',flag:true,mapWaypoints:['Puerto Pirehueico, Chile','Paso Hua Hum, Argentina','San Martín de los Andes, Argentina']},
    {day:6,date:'30 nov.',country:'Argentina',title:'Un día en San Martín',origin:'San Martín de los Andes, Argentina',destination:'San Martín de los Andes',travel:false,km:'≈ 0–80 km',desc:'Recorrer la costanera, descubrir miradores accesibles y disfrutar San Martín sin equipaje.',visits:'Lago Lácar · Centro · Miradores'},
    {day:7,date:'1 dic.',country:'Argentina',title:'Siete Lagos → Bariloche',origin:'San Martín de los Andes, Argentina',destination:'Bariloche',travel:true,km:'≈ 190–220 km',desc:'Una de las mejores jornadas: Ruta de los Siete Lagos y Villa La Angostura como parada panorámica. Dormimos en Bariloche.',visits:'Machónico · Falkner · Espejo · Correntoso · Villa La Angostura',mapWaypoints:['San Martín de los Andes, Argentina','Villa La Angostura, Argentina','San Carlos de Bariloche, Argentina']},
    {day:8,date:'2 dic.',country:'Argentina',title:'Circuito Chico',origin:'Bariloche, Argentina',destination:'Bariloche',travel:false,km:'≈ 70–120 km',desc:'Día sin cambiar de alojamiento. Lagos, vistas y cafés, en un circuito asfaltado.',visits:'Llao Llao · Lago Moreno · Circuito Chico · Centro Cívico'},
    {day:9,date:'3 dic.',country:'Argentina',title:'Bariloche y Angostura',origin:'Bariloche, Argentina',destination:'Bariloche',travel:false,km:'≈ 0–180 km',desc:'Día flexible para profundizar Bariloche o visitar Villa La Angostura sin trasladar maletas.',visits:'Nahuel Huapi · Bahía Manzano · Villa La Angostura'},
    {day:10,date:'4 dic.',country:'Chile',title:'Bariloche → Futrono',origin:'Bariloche, Argentina',destination:'Futrono',travel:true,km:'≈ 350–380 km',desc:'Vuelta a Chile por el Paso Cardenal Samoré. Etapa larga y con frontera; salir temprano, con combustible y margen.',visits:'Villa La Angostura · Paso Samoré · Entre Lagos · Osorno',flag:true,mapWaypoints:['Bariloche, Argentina','Villa La Angostura, Argentina','Paso Cardenal Samoré, Chile','Entre Lagos, Chile','Osorno, Chile','Futrono, Chile']},
    {day:11,date:'5 dic.',country:'Chile',title:'Lago Ranco desde Futrono',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 90–170 km',desc:'Día de costa lacustre y miradores. Volver a la misma base al atardecer.',visits:'Futrono · Lago Ranco · miradores'},
    {day:12,date:'6 dic.',country:'Chile',title:'Llifén y Lago Maihue',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 90–160 km',desc:'Recorrer Llifén y el entorno del Maihue solo hasta donde haya pavimento confirmado.',visits:'Llifén · Lago Maihue · Termas (opcional)',flag:true},
    {day:13,date:'7 dic.',country:'Chile',title:'Puyehue desde Futrono',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 300–350 km',desc:'Excursión larga al sector Aguas Calientes. Revisar ruta asfaltada, tiempos y estaciones antes de salir.',visits:'Entre Lagos · Lago Puyehue · Aguas Calientes',flag:true},
    {day:14,date:'8 dic.',country:'Chile',title:'Futrono → Temuco',origin:'Futrono, Chile',destination:'Temuco',travel:true,km:'≈ 260–310 km',desc:'Traslado hacia el norte por la Ruta 5, conservando margen para descansar.',visits:'Los Lagos · Loncoche · Pitrufquén'},
    {day:15,date:'9 dic.',country:'Chile',title:'Temuco → Bulnes',origin:'Temuco, Chile',destination:'Bulnes',travel:true,km:'≈ 250–270 km',desc:'Llegada a Bulnes el 9 de diciembre, como estaba acordado.',visits:'Victoria · Los Ángeles · Chillán'},
    {day:16,date:'10 dic.',country:'Chile',title:'Descanso en Bulnes',origin:'Bulnes, Chile',destination:'Bulnes',travel:false,km:'0 km',desc:'Día libre sin tramos de carretera largos. Dos noches en la misma base.',visits:'Bulnes y visitas locales'},
    {day:17,date:'11 dic.',country:'Chile',title:'Bulnes → Santiago',origin:'Bulnes, Chile',destination:'Santiago',travel:true,km:'≈ 420–430 km',desc:'Regreso largo por Ruta 5 Norte. El viaje termina en Santiago este día.',visits:'Chillán · Talca · San Fernando'}
  ]
};

/* Calendario visible en la tabla de alojamientos. */
const DETALLES_BASES = [
  {llegada:"25 nov.",salida:"26 nov.",visitas:"Ruta 5, centro de Los Ángeles",estado:"Por reservar"},
  {llegada:"26 nov.",salida:"27 nov.",visitas:"Curacautín, Lonquimay, araucarias",estado:"Por reservar"},
  {llegada:"27 nov.",salida:"28 nov.",visitas:"Villarrica, lago Villarrica, Pucón",estado:"Por reservar"},
  {llegada:"28 nov.",salida:"29 nov.",visitas:"Licán Ray, Coñaripe, Panguipulli, Huilo Huilo, Pirehueico",estado:"Por reservar"},
  {llegada:"29 nov.",salida:"1 dic.",visitas:"Lago Lácar, costanera, miradores, San Martín",estado:"Por reservar"},
  {llegada:"1 dic.",salida:"4 dic.",visitas:"Ruta de los Siete Lagos, Villa La Angostura, Circuito Chico, Bariloche",estado:"Por reservar"},
  {llegada:"4 dic.",salida:"8 dic.",visitas:"Lago Ranco, Llifén, Maihue, Puyehue, Aguas Calientes",estado:"Por reservar"},
  {llegada:"8 dic.",salida:"9 dic.",visitas:"Ruta 5, Temuco, descanso",estado:"Por reservar"},
  {llegada:"9 dic.",salida:"11 dic.",visitas:"Bulnes, descanso y visitas locales",estado:"Por confirmar"}
];
window.TRIP_DATA.stays.forEach((stay,i)=>Object.assign(stay,DETALLES_BASES[i]));
