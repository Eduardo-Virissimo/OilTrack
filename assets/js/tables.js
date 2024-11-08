


var baciasTable = document.getElementById("tBody")


fetch("../../mocks/bacias.json")
    .then(response => response.json()) 
    .then(data => {

        console.log(data.bacias)
        
        data.bacias.forEach(bacia => {
            
            const newLine = baciasTable.insertRow()
            newLine.insertCell(0).textContent = bacia.name
            newLine.insertCell(1).textContent = bacia.estado
            newLine.insertCell(2).textContent = bacia.cidade
            newLine.insertCell(3).textContent = bacia.tamanho_km2
            newLine.insertCell(4).textContent = bacia.tipo_de_fluido
        });
    })
    .catch(error => {
        console.log('Erro ao carregar o JSON:', error);
    });


    fetch("../../mocks/pocos.json")
    .then(response => response.json()) 
    .then(data => {
        console.log(data.poco);
        

    })
    .catch(error => {
        console.log('Erro ao carregar o JSON:', error);
    });
