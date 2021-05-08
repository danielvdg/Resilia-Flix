
// function tituloFilme(){

//     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=535fd7a8`;
    
//     $.ajax({
//         url: url,
//         "success": function(resultado){
    
//             MostrarFilme(resultado);
//             console.log(resultado);
            
//         }
    
    
//     })
    

// }

// class Filme {constructor(titulo, atores,genero,producao,diretor,linguagem,tempoDeFilme){
//     this.titulo = titulo
//     this.atores = atores
//     this.genero = genero
//     this.producao = producao
//     this.diretor = diretor
//     this.ano = ano
//     this.linguagem = linguagem
//     this.tempoDeFilme = tempoDeFilme


// }}


// function MostrarFilme (resultado){

//     const filme = {
        
//         capa: `img src="${resultado.Poster}"`,
//         titulo: `${resultado.Title}`,
//         atores: `${resultado.Actors}`,
//         genero: `${resultado.Genre}`,
//         producao: `${resultado.Production}`,
//         diretor: `${resultado.Director}`,
//         ano: `${resultado.Year}`,
//         linguagem: `${resultado.lenguage}`,
//         tempoDeFilme: `${resultado.Runtime}` 

//     } 
//     console.log(filme);
  
// }

const main = $('#principal')

let filmes = []

let nomeBusca = $('#nomeBusca')

let buscar = $('#buscar')

let quadro = $('.principal')


function impressora(arr){

    for(let i = 0; i < arr.length; i++){

               let filme = `

                <div class="card" style="width: 18rem;">
                <img src="${arr[i].Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Oi</p>
                <a href="#" class="btn btn-primary">Sobre</a>
                </div>
                </div>
                      `                

        quadro.html($('.principal').html() + `${filme}`)

    }
    
}

buscar.on('click', function(e){

    e.preventDefault()    

    quadro.html('')
    
    let nomeFilme = nomeBusca.val()

    if(nomeFilme.length <= 0){
         
        quadro.html('<span class="error">Ooops... você não digitou nada!</span>')

    }
    else{

        $.ajax({

            url:`http://www.omdbapi.com/?s=${nomeFilme}&apikey=fbde633c`,
        
            success: filme =>{
        
                filmes = filme.Search  
                
                console.log(filmes)
                
                impressora(filmes)
            }
        
        })


    }     

})








