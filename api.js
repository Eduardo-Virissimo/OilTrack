fetch("./mocks/bacias.json")
    .then(response => response.json()) 
    .then(data => {

        data.bacias.forEach(bacia =>{
            L.polygon(bacia.coords, {
                color: bacia.color,
                weight: 2,
                opacity: 0.6
            }).addTo(map).bindPopup(bacia.name);
        })
    })
    .catch(error => {
        console.log('Erro ao carregar o JSON:', error);
    });


    fetch("./mocks/pocos.json")
    .then(response => response.json()) 
    .then(data => {
        console.log(data.poco);
        data.poco.forEach(poco =>{
            const marker = L.marker(poco.coord).addTo(map);
            marker.bindPopup(poco.name).openPopup();
        }) 

    })
    .catch(error => {
        console.log('Erro ao carregar o JSON:', error);
    });

// Inicializa o mapa com a vista central e desativa os controles de zoom
const map = L.map('map', {
    center: [-23.5505, -46.6333],
    zoom: 4,
    zoomControl: true, // Desativa os botões de zoom
    attributionControl: false
});

// Adiciona a camada de tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define limites para o mapa para que ele não ultrapasse os polos
const bounds = [
    [90, -180], // Nordeste (Polo Norte)
    [-90, 180]  // Sudoeste (Antártica)
];
map.setMaxBounds(bounds);

// Limites de zoom
map.options.minZoom = 2;
map.options.maxZoom = 19;

// Cria a polilinha para a trilha de óleo
const oiltrack = L.polyline(oiltrackCoordinates, {
    color: 'orange',      // Cor da linha
    weight: 4,            // Espessura da linha
    opacity: 0.7          // Opacidade
}).addTo(map);

// Ajusta a visualização do mapa para que a trilha fique centralizada
map.fitBounds(oiltrack.getBounds());
