// Inicializa o mapa com a vista central e desativa os controles de zoom
const map = L.map('map', {
    center: [-23.5505, -46.6333],
    zoom: 4,
    zoomControl: false // Desativa os botões de zoom
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


// Coordenadas da trilha de óleo
const oiltrackCoordinates = [
    [-23.5505, -46.6333], // Ponto inicial
    [-23.551, -46.634],   // Segundo ponto
    [-23.552, -46.635],   // Terceiro ponto
    [-23.553, -46.636]    // Ponto final
];

// Adiciona marcadores para cada ponto da trilha
oiltrackCoordinates.forEach((coord, index) => {
    const marker = L.marker(coord).addTo(map);
    marker.bindPopup(`Ponto ${index + 1}`).openPopup();
});

// Cria a polilinha para a trilha de óleo
const oiltrack = L.polyline(oiltrackCoordinates, {
    color: 'orange',      // Cor da linha
    weight: 4,            // Espessura da linha
    opacity: 0.7          // Opacidade
}).addTo(map);

// Ajusta a visualização do mapa para que a trilha fique centralizada
map.fitBounds(oiltrack.getBounds());
