baciaTable()


var tbody = document.getElementById("tBody")
var table = document.getElementById("tb")

var bacias;
var pocos;

var isBacia = true;

function filtroSelect(){

    var select = document.getElementById("filterSelect").value
    console.log(select)
    removerLinhas()
    if(select != null ){

        if(isBacia){
            var baciasFiltradas = [];
            
            switch(select){
                case "alphabet": bacias.sort((a,b) =>
                    a.name.localeCompare(b.name)); break;
                case "size": bacias.sort((a,b) =>
                b.tamanho_km2 - a.tamanho_km2); break;
                case "type": bacias.sort((a,b) =>
                    a.tipo_de_fluido.localeCompare(b.tipo_de_fluido)); break;

        }

        console.log(bacias);
        
        bacias.forEach(bacia => {
            
            const newLine = tBody.insertRow()
            newLine.insertCell(0).textContent = bacia.name
            newLine.insertCell(1).textContent = bacia.estado
            newLine.insertCell(2).textContent = bacia.cidade
            newLine.insertCell(3).textContent = bacia.tamanho_km2
            newLine.insertCell(4).textContent = bacia.tipo_de_fluido
        })
    }
    else{           
        console.log("Cai aqui")
            switch(select){
                case "alphabet": pocos.sort((a,b) =>
                    a.name.localeCompare(b.name)); break;
                case "size": pocos.sort((a,b) =>
                b.tamanho_km2 - a.tamanho_km2); break;
                case "type": pocos.sort((a,b) =>
                    a.tipo_fluidos.localeCompare(b.tipo_fluidos)); break;
    
        }
    
        
        pocos.forEach(poco => {
            const newLine = tBody.insertRow()
            newLine.insertCell(0).textContent = poco.name
            newLine.insertCell(1).textContent = poco.estado
            newLine.insertCell(2).textContent = poco.cidade
            newLine.insertCell(3).textContent = poco.tamanho_km2
            newLine.insertCell(4).textContent = poco.tipo_fluidos
        })
    
    }
    
    }
}

function buscaNome(){
    var input = document.getElementById("filterInput").value
    removerLinhas()

    if(isBacia){
    var baciaTest = []; 
    bacias.forEach(item => {
        if(item.name.includes(input)){

            baciaTest.push(item)
        }
    } 
    );

    baciaTest.forEach(bacia => {
            
        const newLine = tBody.insertRow()
        newLine.insertCell(0).textContent = bacia.name
        newLine.insertCell(1).textContent = bacia.estado
        newLine.insertCell(2).textContent = bacia.cidade
        newLine.insertCell(3).textContent = bacia.tamanho_km2
        newLine.insertCell(4).textContent = bacia.tipo_de_fluido
    });}
    else{
        var pocosFiltered = [];
        pocos.forEach(item => {
            if(item.name.includes(input)){
    
                pocosFiltered.push(item)
            }
        },
        )

        pocosFiltered.forEach(poco => {
            
            const newLine = tBody.insertRow()
            newLine.insertCell(0).textContent = poco.name
            newLine.insertCell(1).textContent = poco.estado
            newLine.insertCell(2).textContent = poco.cidade
            newLine.insertCell(3).textContent = poco.tamanho_km2
            newLine.insertCell(4).textContent = poco.tipo_fluidos
        })
    }


}

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
    isBacia = true;


    removerLinhas()
fetch("../../mocks/bacias.json")
    .then(response => response.json()) 
    .then(data => {
        bacias = data.bacias    


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
    isBacia = false;
    removerLinhas()

    fetch("../../mocks/pocos.json")
    .then(response => response.json()) 
    .then(data => {
        console.log(data.poco);
        pocos = data.poco
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