/*
  ARCHIVO EDITABLE DEL VIAJE
  Cambia fechas, lugares, noches y visitas aquí.
  Al guardar el cambio en el repositorio GitHub, GitHub Pages publica la nueva versión.
  Los kilómetros son estimaciones preliminares; no son trazados GPS.
*/
window.TRIP_DATA = {
  stays: [
    {name:'Los Ángeles',country:'Chile',dates:'25–26 nov.',nights:1,desc:'Noche de tránsito desde Santiago.'},
    {name:'Malalcahuello',country:'Chile',dates:'26–27 nov.',nights:1,desc:'Curacautín, araucarias y miradores de Malalcahuello.'},
    {name:'Pucón',country:'Chile',dates:'27–28 nov.',nights:1,desc:'Lago Villarrica y Pucón. Una noche.'},

    {name:'San Martín de los Andes',country:'Argentina',dates:'28 nov.–1 dic.',nights:3,desc:'Lago Lácar, costanera y miradores de San Martín. Tres noches.',lodging:{name:'Habitación Privada en Cabaña Compartida',provider:'Airbnb',host:'Juan Carlos',address:'Gabriel Saurel 261, San Martín de los Andes, Neuquén, Argentina',phone:'+54 9 351 324-2605',guests:'2 adultos',checkIn:'Sáb. 28 nov., desde las 12:00',checkOut:'Mar. 1 dic., antes de las 10:00',url:'https://www.airbnb.mx/rooms/597123081635727419'}},
    {name:'Bariloche',country:'Argentina',dates:'1–4 dic.',nights:3,desc:'Circuito Chico, Villa La Angostura, Puerto Manzano y lago Nahuel Huapi. Villa Traful queda como excursión opcional con ripio.'},
    {name:'Futrono',country:'Chile',dates:'4–8 dic.',nights:4,desc:'Base para Lago Ranco, Llifén, Maihue y excursión a Puyehue.'},
    {name:'Temuco',country:'Chile',dates:'8–9 dic.',nights:1,desc:'Noche de tránsito para llegar a Bulnes el 9 de diciembre.'},
    {name:'Bulnes',country:'Chile',dates:'9–11 dic.',nights:2,desc:'Estadía fija. Regreso a Santiago el 11 de diciembre.'}
  ],
  days: [
    {day:1,date:'25 nov.',country:'Chile',title:'Santiago → Los Ángeles',origin:'Santiago, Chile',destination:'Los Ángeles',travel:true,km:'≈ 515 km',desc:'El primer gran tramo por la Ruta 5. Jornada larga por Ruta 5. Hacer pausas.',visits:'San Fernando · Talca · Chillán'},
    {day:2,date:'26 nov.',country:'Chile',title:'Los Ángeles → Malalcahuello',origin:'Los Ángeles, Chile',destination:'Malalcahuello',travel:true,km:'≈ 190–220 km',desc:'Ruta por Victoria y Curacautín. Evitar caminos no pavimentados.',visits:'Victoria · Curacautín · Malalcahuello'},
    {day:3,date:'27 nov.',country:'Chile',title:'Malalcahuello → Pucón',origin:'Malalcahuello, Chile',destination:'Pucón',travel:true,km:'≈ 220–270 km',desc:'Recorrido por Villarrica y llegada a Pucón.',visits:'Curacautín · Villarrica · Pucón'},
    {day:4,date:'28 nov.',country:'Argentina',title:'Pucón → San Martín de los Andes',origin:'Pucón, Chile',destination:'San Martín de los Andes',travel:true,km:'≈ 185–200 km',desc:'Cruce a Argentina por Curarrehue y Paso Mamuil Malal (Tromen), siguiendo por Junín de los Andes hasta San Martín. Hay ripio y obras en la RP60 argentina; verificar apertura y posibles cortes antes de salir.',visits:'Curarrehue · Paso Mamuil Malal · Parque Nacional Lanín · Junín de los Andes · Lago Lácar',flag:true,mapWaypoints:['Pucón, Chile','Curarrehue, Chile','Paso Mamuil Malal, Chile','Junín de los Andes, Argentina','San Martín de los Andes, Argentina']},
    {day:5,date:'29 nov.',country:'Argentina',title:'Descanso en San Martín',origin:'San Martín de los Andes, Argentina',destination:'San Martín de los Andes',travel:false,km:'≈ 0–30 km',desc:'Día libre tras el cruce de frontera. Caminar por el centro y la costanera del lago Lácar, sin traslado de alojamiento.',visits:'Costanera · Lago Lácar · Centro'},
    {day:6,date:'30 nov.',country:'Argentina',title:'Un día en San Martín',origin:'San Martín de los Andes, Argentina',destination:'San Martín de los Andes',travel:false,km:'≈ 0–80 km',desc:'Costanera del lago Lácar, centro de San Martín y miradores.',visits:'Lago Lácar · Centro · Miradores'},
    {day:7,date:'1 dic.',country:'Argentina',title:'Siete Lagos → Bariloche',origin:'San Martín de los Andes, Argentina',destination:'Bariloche',travel:true,km:'≈ 190–220 km',desc:'Ruta de los Siete Lagos. Paradas en Villa La Angostura y Puerto Manzano (Bahía Manzano) antes de llegar a Bariloche.',visits:'Machónico · Falkner · Espejo · Correntoso · Villa La Angostura · Puerto Manzano',mapWaypoints:['San Martín de los Andes, Argentina','Villa La Angostura, Argentina','Puerto Manzano, Villa La Angostura, Argentina','San Carlos de Bariloche, Argentina']},
    {day:8,date:'2 dic.',country:'Argentina',title:'Circuito Chico',origin:'Bariloche, Argentina',destination:'Bariloche',travel:false,km:'≈ 70–120 km',desc:'Visita a Circuito Chico, Llao Llao y lago Moreno.',visits:'Llao Llao · Lago Moreno · Circuito Chico · Centro Cívico'},
    {day:9,date:'3 dic.',country:'Argentina',title:'Bariloche o Villa La Angostura',origin:'Bariloche, Argentina',destination:'Bariloche',travel:false,km:'≈ 0–180 km',desc:'Día flexible en Bariloche o Villa La Angostura. Villa Traful solo como desvío opcional: la RP65 tiene ripio y obras; no se agrega a la ruta principal.',visits:'Nahuel Huapi · Villa La Angostura · Villa Traful (opcional)',optionalStop:{name:'Villa Traful',country:'Neuquén, Argentina',warning:'Opción con ripio y posibles trabajos en la RP65. Confirmar transitabilidad antes de decidir; no está incluida en el recorrido principal.',roadInfoUrl:'https://www.dpvneuquen.gov.ar/'}},
    {day:10,date:'4 dic.',country:'Chile',title:'Bariloche → Futrono',origin:'Bariloche, Argentina',destination:'Futrono',travel:true,km:'≈ 350–380 km',desc:'Vuelta a Chile por el Paso Cardenal Samoré. Etapa larga y con frontera; salir temprano y dejar margen para trámites fronterizos.',visits:'Villa La Angostura · Paso Samoré · Entre Lagos · Osorno',flag:true,mapWaypoints:['Bariloche, Argentina','Villa La Angostura, Argentina','Paso Cardenal Samoré, Chile','Entre Lagos, Chile','Osorno, Chile','Futrono, Chile']},
    {day:11,date:'5 dic.',country:'Chile',title:'Lago Ranco desde Futrono',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 90–170 km',desc:'Recorrido por Lago Ranco y miradores. Regreso a Futrono.',visits:'Futrono · Lago Ranco · miradores'},
    {day:12,date:'6 dic.',country:'Chile',title:'Llifén y Lago Maihue',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 90–160 km',desc:'Recorrer Llifén y el entorno del Maihue solo hasta donde haya pavimento confirmado.',visits:'Llifén · Lago Maihue · Termas (opcional)',flag:true},
    {day:13,date:'7 dic.',country:'Chile',title:'Puyehue desde Futrono',origin:'Futrono, Chile',destination:'Futrono',travel:false,km:'≈ 300–350 km',desc:'Excursión larga al sector Aguas Calientes. Revisar ruta asfaltada, tiempos y estaciones antes de salir.',visits:'Entre Lagos · Lago Puyehue · Aguas Calientes',flag:true},
    {day:14,date:'8 dic.',country:'Chile',title:'Futrono → Temuco',origin:'Futrono, Chile',destination:'Temuco',travel:true,km:'≈ 260–310 km',desc:'Traslado hacia el norte por la Ruta 5, conservando margen para descansar.',visits:'Los Lagos · Loncoche · Pitrufquén'},
    {day:15,date:'9 dic.',country:'Chile',title:'Temuco → Bulnes',origin:'Temuco, Chile',destination:'Bulnes',travel:true,km:'≈ 250–270 km',desc:'Llegada a Bulnes el 9 de diciembre, como estaba acordado.',visits:'Victoria · Los Ángeles · Chillán'},
    {day:16,date:'10 dic.',country:'Chile',title:'Descanso en Bulnes',origin:'Bulnes, Chile',destination:'Bulnes',travel:false,km:'0 km',desc:'Estadía en Bulnes.',visits:'Bulnes y visitas locales'},
    {day:17,date:'11 dic.',country:'Chile',title:'Bulnes → Santiago',origin:'Bulnes, Chile',destination:'Santiago',travel:true,km:'≈ 420–430 km',desc:'Regreso largo por Ruta 5 Norte. El viaje termina en Santiago este día.',visits:'Chillán · Talca · San Fernando'}
  ]
};

/* Calendario visible en la tabla de alojamientos. */
const DETALLES_BASES = [
  {llegada:"25 nov.",salida:"26 nov.",visitas:"Ruta 5, centro de Los Ángeles",estado:"Por reservar"},
  {llegada:"26 nov.",salida:"27 nov.",visitas:"Curacautín, Lonquimay, araucarias",estado:"Por reservar"},
  {llegada:"27 nov.",salida:"28 nov.",visitas:"Villarrica, lago Villarrica, Pucón",estado:"Por reservar"},

  {llegada:"28 nov.",salida:"1 dic.",visitas:"Lago Lácar, costanera, miradores, San Martín",estado:"Reservado"},
  {llegada:"1 dic.",salida:"4 dic.",visitas:"Siete Lagos, Villa La Angostura, Puerto Manzano, Circuito Chico, Bariloche; Villa Traful (opcional con ripio)",estado:"Por reservar"},
  {llegada:"4 dic.",salida:"8 dic.",visitas:"Lago Ranco, Llifén, Maihue, Puyehue, Aguas Calientes",estado:"Por reservar"},
  {llegada:"8 dic.",salida:"9 dic.",visitas:"Ruta 5, Temuco, descanso",estado:"Por reservar"},
  {llegada:"9 dic.",salida:"11 dic.",visitas:"Bulnes, descanso y visitas locales",estado:"Por confirmar"}
];
window.TRIP_DATA.stays.forEach((stay,i)=>Object.assign(stay,DETALLES_BASES[i]));
