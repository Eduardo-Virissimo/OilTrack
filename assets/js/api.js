// Armazena a posição e zoom iniciais do mapa
const initialView = {
    center: [-23.5505, -46.6333],
    zoom: 4
};

// Define os limites máximos do mapa para impedir que o usuário navegue para fora do mundo
const maxBounds = [
    [-90, -180], // Limite inferior esquerdo (latitude, longitude)
    [90, 180]    // Limite superior direito (latitude, longitude)
];

// Inicializa o mapa
const map = L.map('map', {
    center: initialView.center,
    zoom: initialView.zoom,
    minZoom: 3, // Limite mínimo de zoom
    maxBounds: maxBounds, // Define os limites do mapa
    maxBoundsViscosity: 1.0, // Impede a movimentação para fora dos limites
    zoomControl: false,
    attributionControl: false
});

// Adiciona a camada de tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3, // Limite mínimo de zoom para a camada de tiles
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Arrays para armazenar os marcadores e polígonos
const markers = [];
const polygons = [];

// Carrega os dados das baías e poços
Promise.all([
    fetch("./mocks/bacias.json").then(response => response.json()),
    fetch("./mocks/pocos.json").then(response => response.json())
]).then(([baciasData, pocosData]) => {
    // Adiciona os polígonos das baías
    baciasData.bacias.forEach(bacia => {
        const polygon = L.polygon(bacia.coords, {
            color: bacia.color,
            weight: 2,
            opacity: 0.6
        }).addTo(map).bindPopup(bacia.name);
        polygons.push({ name: bacia.name.toLowerCase(), layer: polygon });
    });

    // Adiciona os marcadores dos poços
    pocosData.poco.forEach(poco => {
        const marker = L.marker(poco.coord).addTo(map);
        marker.bindPopup(poco.name);
        markers.push({ name: poco.name.toLowerCase(), layer: marker });
    });
}).catch(error => console.log('Erro ao carregar os dados:', error));

// Função de busca dinâmica
function searchMap() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    // Se o campo de busca estiver vazio, restaura a posição inicial
    if (!searchTerm) {
        resetMap();
        return;
    }

    // Reseta estilos dos polígonos
    polygons.forEach(item => {
        item.layer.setStyle({ color: '#3388ff' }); // Cor padrão
    });

    let found = false;

    // Busca nos marcadores
    markers.forEach(item => {
        if (item.name.includes(searchTerm)) {
            found = true;
            item.layer.openPopup();
            map.setView(item.layer.getLatLng(), 8);
        } else {
            item.layer.closePopup();
        }
    });

    // Busca nos polígonos
    polygons.forEach(item => {
        if (item.name.includes(searchTerm)) {
            found = true;
            item.layer.setStyle({ color: 'red' }); // Destaque
            map.fitBounds(item.layer.getBounds());
        }
    });
}

// Função para restaurar a posição inicial do mapa
function resetMap() {
    // Fecha todos os popups
    markers.forEach(item => item.layer.closePopup());
    polygons.forEach(item => item.layer.setStyle({ color: '#3388ff' })); // Cor padrão

    // Restaura a visão inicial do mapa
    map.setView(initialView.center, initialView.zoom);
}
