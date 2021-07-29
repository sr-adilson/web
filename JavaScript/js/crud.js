var bandas = [
                {"id":1,"nome":"Blink","genero":"PunkRock","pais":"EUA","integrantes":3 },
                {"id":2,"nome":"RedHotChilliPepers","genero":"Rock","pais":"EUA","integrantes":4 }
            ];

            function salvar(){
                let id = parseInt(document.getElementById("id").value);
                let nome = document.getElementById("nome").value;
                let genero = document.getElementById("genero").value;
                let pais = document.getElementById("pais").value;
                let integrantes = parseInt(document.getElementById("integrantes").value);
                banda = {"id":id, "nome":nome, "genero":genero, "pais":pais, "integrantes":integrantes};
                bandas.push(banda);
                carregaTabela();
            }
            function carregaTabela(){
                let tabela = document.getElementById("bandas");
                let corpo = tabela.getElementsByTagName("tbody")[0];
                corpo.innerHTML = "";
                bandas.forEach(b =>{
                    corpo.innerHTML += `<tr> <td>${b["id"]}</td><td>${b["nome"]}</td><td>${b["genero"]}</td><td>${b["pais"]}</td><td>${b["integrantes"]}</td> </tr>`;
                });
            }
window.onload = function(){
    carregaTabela();
}            