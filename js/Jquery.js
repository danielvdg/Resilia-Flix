
function tituloFilme(){

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=535fd7a8`;
    
    $.ajax({
        url: url,
        "success": function(resultado){
    
            MostrarFilme(resultado);
            console.log(resultado);
            
        }
    
    
    })
    

}

class Filme {constructor(titulo, atores,genero,producao,diretor,linguagem,tempoDeFilme){
    this.titulo = titulo
    this.atores = atores
    this.genero = genero
    this.producao = producao
    this.diretor = diretor
    this.ano = ano
    this.linguagem = linguagem
    this.tempoDeFilme = tempoDeFilme


}}


function MostrarFilme (resultado){

    const filme = {
        
        capa: `img src="${resultado.Poster}"`,
        titulo: `${resultado.Title}`,
        atores: `${resultado.Actors}`,
        genero: `${resultado.Genre}`,
        producao: `${resultado.Production}`,
        diretor: `${resultado.Director}`,
        ano: `${resultado.Year}`,
        linguagem: `${resultado.lenguage}`,
        tempoDeFilme: `${resultado.Runtime}` 

    } 
    console.log(filme);
  
}



