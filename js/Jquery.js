
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

const nomeBusca = $('#nomeBusca')

const buscarFilme = $('#buscar')

const quadro = $('.principal')

const paginador = $('.pagina')

paginador.hide()

const retornaPaginaFilme = $('#retornaPaginaFilme')

const avancaPaginaFilme = $('#avancaPaginaFilme')

var numPagina = $('#numPagina')

var filmes = []

function impressoraDeFilmes(arr){   

    for(let i = 0; i < arr.length; i++){

        if(arr[i].Poster != "N/A" && arr[i].Type == "movie"){
            
            let filme = `

        <div class="card border .bg-dark.bg-gradient cardCustom" style="width: 18rem; ">
        <img src="${arr[i].Poster}" class="card-img-top" alt="...">
        
        <small class="card-title">${arr[i].Title}</small>
        <span></span>        
        <a href="#" class="btn btn-primary">Sobre</a>
       
        </div>
                `               

        quadro.html($('.principal').html() + `${filme}`)

        }    

    }    
        
}

buscarFilme.on('click', function(e){

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
                
                console.log(filme)

                if(typeof filmes == 'undefined'){

                    quadro.html('<span class="error">Ooops... Filme não encontrado</span>')

                }else{                    
                
                    let totalResults = parseInt(filme.totalResults)

                    impressoraDeFilmes(filmes)  
                    
                    if(totalResults > 10){

                        paginador.show()
                        numPagina.val('1')
                        retornaPaginaFilme.hide()
                        console.log()

                    }else{
                        paginador.hide()

                    }

                                                 
                }
                
            }
        
        })

    }     

})

retornaPaginaFilme.on('click', function(){

    quadro.html('')
    
    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

        if(paginaAtual >= 3){

            $.ajax({     

                url:`http://www.omdbapi.com/?s=${nomeFilme}&page=${--paginaAtual}&apikey=fbde633c`,            
                success: filme =>{            
                    filmes = filme.Search   
                    impressoraDeFilmes(filmes)                    
                    numPagina.val(`${paginaAtual}`)

                }
                
             })

        }else if(paginaAtual == 2){

            $.ajax({        

                url:`http://www.omdbapi.com/?s=${nomeFilme}&page=${--paginaAtual}&apikey=fbde633c`,            
                success: filme =>{            
                    filmes = filme.Search      
                    impressoraDeFilmes(filmes)                    
                    numPagina.val(`${paginaAtual}`)
                    retornaPaginaFilme.hide()
                }
                
             })
        }

})

avancaPaginaFilme.on('click', function(){

    quadro.html('')

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

        if(paginaAtual >= 1){

            $.ajax({        

                url:`http://www.omdbapi.com/?s=${nomeFilme}&page=${++paginaAtual}&apikey=fbde633c`,            
                success: filme =>{            
                    filmes = filme.Search   
                    impressoraDeFilmes(filmes)                    
                    numPagina.val(`${paginaAtual}`)
                    retornaPaginaFilme.show()

                }
                
             })

        }else if(paginaAtual == filme.totalResults){

            $.ajax({        

                url:`http://www.omdbapi.com/?s=${nomeFilme}&page=${--paginaAtual}&apikey=fbde633c`,            
                success: filme =>{            
                    filmes = filme.Search      
                    impressoraDeFilmes(filmes)                    
                    numPagina.val(`${paginaAtual}`)
                    avancaPaginaFilme.hide()
                }
                
             })
        }
  
})



