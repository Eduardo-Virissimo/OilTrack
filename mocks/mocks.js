const baciaCampos = [
  [-22.5, -41.0],
  [-23.0, -41.5],
  [-23.5, -41.0],
  [-23.0, -40.5],
  [-22.5, -41.0]
];

const baciaSantos = [
  [-24.0, -45.0],
  [-24.5, -45.5],
  [-25.0, -45.0],
  [-24.5, -44.5],
  [-24.0, -45.0]
];


const baciaEspiritosanto = [
  [-20.0, -40.5],
  [-20.5, -41.0],
  [-21.0, -40.5],
  [-20.5, -40.0],
  [-20.0, -40.5]
];


const baciaPotiguar = [
  [-5.5, -36.5],
  [-6.0, -37.0],
  [-6.5, -36.5],
  [-6.0, -36.0],
  [-5.5, -36.5]
];


const baciaReconcavo = [
  [-12.3, -38.9],
  [-12.5, -39.0],
  [-12.7, -38.8],
  [-12.5, -38.5],
  [-12.3, -38.9]
];


const baciaSergipeAlagoas = [
  [-10.5, -37.5],
  [-10.7, -37.7],
  [-10.9, -37.5],
  [-10.7, -37.3],
  [-10.5, -37.5]
];



const baciaAlagoas = [
  [-9.5, -36.5],
  [-9.7, -36.7],
  [-9.9, -36.5],
  [-9.7, -36.3],
  [-9.5, -36.5]
];


const baciaCamamuAlmada = [
  [-13.4, -39.2],
  [-13.6, -39.4],
  [-13.8, -39.2],
  [-13.6, -39.0],
  [-13.4, -39.2]
];


const baciaJequitinhonha = [
  [-17.0, -39.0],
  [-17.2, -39.2],
  [-17.4, -39.0],
  [-17.2, -38.8],
  [-17.0, -39.0]
];



const baciaSaoFrancisco = [
  [-15.0, -43.0],
  [-15.2, -43.2],
  [-15.4, -43.0],
  [-15.2, -42.8],
  [-15.0, -43.0]
];



// Criação dos polígonos das bacias
const bacias = [
  { coords: baciaCampos, color: 'orange', name: 'Bacia de Campos' },
  { coords: baciaSantos, color: 'blue', name: 'Bacia de Santos' },
  { coords: baciaEspiritosanto, color: 'green', name: 'Bacia do Espírito Santo' },
  { coords: baciaPotiguar, color: 'red', name: 'Bacia Potiguar' },
  { coords: baciaReconcavo, color: 'purple', name: 'Bacia do Recôncavo' },
  { coords: baciaSergipeAlagoas, color: 'cyan', name: 'Bacia de Sergipe-Alagoas' },
  { coords: baciaAlagoas, color: 'magenta', name: 'Bacia de Alagoas' },
  { coords: baciaCamamuAlmada, color: 'yellow', name: 'Bacia de Camamu-Almada' },
  { coords: baciaJequitinhonha, color: 'brown', name: 'Bacia de Jequitinhonha' },
  { coords: baciaSaoFrancisco, color: 'grey', name: 'Bacia do São Francisco' },
];

// Adiciona os polígonos ao mapa
bacias.forEach(bacia => {
  L.polygon(bacia.coords, {
      color: bacia.color,
      weight: 2,
      opacity: 0.6
  }).addTo(map).bindPopup(bacia.name);
});



const poçoTupi = [-23.7025, -44.0537];
const poçoGuara = [-23.7050, -44.0550];
const poçoFranco = [-23.5999, -44.0866];
const poçoSapinhoa = [-23.6441, -44.2137];
const poçoCarcara = [-23.4810, -45.0048];
const poçoParqueConchas = [-22.8091, -41.4008];
const poçoMarlim = [-22.7373, -41.3434];
const poçoP54 = [-22.7631, -41.1341];
const poçoP50 = [-22.8747, -41.3086];
const poçoC21 = [-5.9505, -36.6495];


// Criação dos poços
const poços = [
  { coord: poçoTupi, name: 'Poço Tupi' },
  { coord: poçoGuara, name: 'Poço Guará' },
  { coord: poçoFranco, name: 'Poço Franco' },
  { coord: poçoSapinhoa, name: 'Poço Sapinhoá' },
  { coord: poçoCarcara, name: 'Poço Carcará' },
  { coord: poçoParqueConchas, name: 'Poço Parque das Conchas' },
  { coord: poçoMarlim, name: 'Poço Marlim' },
  { coord: poçoP54, name: 'Poço P-54' },
  { coord: poçoP50, name: 'Poço P-50' },
  { coord: poçoC21, name: 'Poço C-21' },
];

// Adiciona os poços ao mapa
poços.forEach(poco => {
  const marker = L.marker(poco.coord).addTo(map);
  marker.bindPopup(poco.name).openPopup();
});
