baciaTable()


var tbody = document.getElementById("tBody")
var table = document.getElementById("tb")

function removerLinhas() {
    
    if (tbody) {
      while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
      }
    } else {
      console.error('Não foi possível encontrar o tbody com o id "seuTbody"');
    }
  }

function baciaTable(){
    
    removerLinhas()
fetch("../../mocks/bacias.json")
    .then(response => response.json()) 
    .then(data => {

        console.log(data.bacias)        
        data.bacias.forEach(bacia => {
            
            const newLine = tBody.insertRow()
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
}

function pocoTable(){

    removerLinhas()

    fetch("../../mocks/pocos.json")
    .then(response => response.json()) 
    .then(data => {
        console.log(data.poco);
        
        data.poco.forEach(poco => {
            
            const newLine = tBody.insertRow()
            newLine.insertCell(0).textContent = poco.name
            newLine.insertCell(1).textContent = poco.estado
            newLine.insertCell(2).textContent = poco.cidade
            newLine.insertCell(3).textContent = poco.tamanho_km2
            newLine.insertCell(4).textContent = poco.tipo_fluidos
        });
    })
    .catch(error => {
        console.log('Erro ao carregar o JSON:', error);
    });
}