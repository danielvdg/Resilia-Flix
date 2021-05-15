//VARIÁVEIS DO DOM
const main = $('#principal')
const nomeBusca = $('#nomeBusca')
const buscarFilme = $('#buscar')
const quadro = $('.principal')
const paginador = $('.pagina')
paginador.hide()
const retornaPaginaFilme = $('#retornaPaginaFilme')
const avancaPaginaFilme = $('#avancaPaginaFilme')
const linkFilme = $('#linkFilme')
var numPagina = $('#numPagina')
var filmes = []
var loader = ` 
            <div id='loader' class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
            </div> 
            `

//FUNÇÃO QUE IMPRIME OS FILMES NA DIV PRINCIPAL
function impressoraDeFilmes(arr) {

    arr.forEach(element => {         

            var botoes = `
                <button type="button" id="playFilme" class="btn btn-outline-dark btn-sm"> <i class="fas fa-play-circle"></i></button>
                <button type="button" id="${element.imdbID}" class="btn btn-outline-dark btn-sm infoBotao" data-bs-toggle="modal" data-bs-target="#filmeInfos"> <i class="fas fa-info-circle"></i></button>  
                        `

            let divBotao = $('<div />', {class: 'divBotao'}) 

            divBotao.append(botoes)        
            
            let img = $('<img />', { id: 'filmebusca', class: 'img-fluid'})

            element.Poster == "N/A" ? img.attr('src', 'img/poster.jpg') : img.attr('src', `${element.Poster}`)

            let div = $('<div />', {class: 'cardCustom'})          
    
            div.hide()

            div.append(img)                      

            div.append(divBotao)

            quadro.append(div)   

            div.fadeIn("slow")               

    });

   // }
}

//BUSCADOR DE FILME
buscarFilme.on('click', function (e) {

    e.preventDefault()

    quadro.html(`${loader}`)

    let nomeFilme = nomeBusca.val()

    if (nomeFilme.length <= 0) {

        quadro.html('<span class="error">Ooops... você não digitou nada!</span>')
        paginador.hide()

    }
    else {

        $.ajax({

            url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&apikey=fbde633c`,
            success: filme => {

                filmes = filme.Search

                console.log(filme)

                if (typeof filmes == 'undefined') {

                    quadro.html('<span class="error">Ooops... Filme não encontrado</span>')

                } else {

                    let totalResults = parseInt(filme.totalResults)

                    setTimeout(function () {

                        $('#loader').hide()

                        impressoraDeFilmes(filmes)

                    }, 500)

                    if (totalResults > 10) {

                        paginador.show()
                        numPagina.val('1')
                        retornaPaginaFilme.hide()
                        console.log()

                    } else {
                        paginador.hide()

                    }
                }
            }
        })
    }
})


//PAGINADOR PARA RETORNO DA PÁGINA
retornaPaginaFilme.on('click', function () {

    quadro.html(`${loader}`)

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

    if (paginaAtual >= 3) {

        $.ajax({

            url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
            success: filme => {
                filmes = filme.Search

                setTimeout(function () {

                    $('#loader').hide()

                    impressoraDeFilmes(filmes)

                }, 500)

                numPagina.val(`${paginaAtual}`)

            }
        })

    } else if (paginaAtual == 2) {

        $.ajax({

            url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
            success: filme => {
                filmes = filme.Search

                setTimeout(function () {

                    $('#loader').hide()

                    impressoraDeFilmes(filmes)

                }, 500)

                numPagina.val(`${paginaAtual}`)
                retornaPaginaFilme.hide()
            }
        })
    }
})

//PAGINADOR PARA AVANÇO DA PÁGINA
avancaPaginaFilme.on('click', function () {

    quadro.html(`${loader}`)

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

    if (paginaAtual >= 1) {

        $.ajax({

            url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${++paginaAtual}&apikey=fbde633c`,
            success: filme => {
                filmes = filme.Search

                setTimeout(function () {

                    $('#loader').hide()

                    impressoraDeFilmes(filmes)

                }, 500)

                numPagina.val(`${paginaAtual}`)
                retornaPaginaFilme.show()

            }
        })

    } else if (paginaAtual == filme.TotalResults / 10) {

        $.ajax({

            url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
            success: filme => {
                filmes = filme.Search

                setTimeout(function () {

                    $('#loader').hide()

                    impressoraDeFilmes(filmes)

                }, 400)

                numPagina.val(`${paginaAtual}`)
                avancaPaginaFilme.hide()
            }
        })
    }

})

//LISTENER PARA CASO O USUÁRIO DESEJE DIGITAR O NÚMERO DA PÁGINA DE resultados, ELE POSSA IR DIRETO A ELA
numPagina.on('blur', function () {

    quadro.html(`${loader}`)

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

    $.ajax({

        url: `http://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${paginaAtual}&apikey=fbde633c`,
        success: filme => {
            filmes = filme.Search

            setTimeout(function () {

                $('#loader').hide()

                impressoraDeFilmes(filmes)

            }, 500)

            numPagina.val(`${paginaAtual}`)

            if (paginaAtual > 1) {
                retornaPaginaFilme.show()
            }
            else {
                retornaPaginaFilme.hide()
            }

        }
    })

})


//VIEW FILME - PAGINA PRINCIPAL DE FILMES
linkFilme.on('click', function(){

    paginador.hide()

    quadro.html(`${loader}`)

    setTimeout(function () {

        let filmesPrincipais = ["tt0371746", "tt0458339", "tt2015381", "tt2395427", "tt0478970", "tt1843866", "tt2250912", "tt1825683", "tt4154756", "tt5095030", "tt4154664", "tt4154796"]
    
    
        for(let i = 0; i < filmesPrincipais.length; i++){            
    
            $.ajax({
    
                url: `http://www.omdbapi.com/?i=${filmesPrincipais[i]}&apikey=fbde633c`,
                success: filme => {
                    
                    let arrFilmes = []
                    arrFilmes.push(filme)    
                    $('#loader').hide()        
                    impressoraDeFilmes(arrFilmes)
        
                }
            })          
    
        }
    
        $('#loader').hide()  
    
    }, 300) 

})

//Informações do Filme, parte em MVC

$(document).delegate('.infoBotao','click', function(){

   $.ajax({
    
    url: `http://www.omdbapi.com/?i=${this.id}&apikey=fbde633c`,
    success: filme => {
        
        const filmeModel = new FilmeModel(filme.Title, filme.Actors, filme.Director, filme.Year, filme.imdbRating, filme.Runtimem, filme.Released, filme.Plot, filme.Poster)  

        const filmeController = new FilmeController()

        const filmeView = new FilmeView()

        filmeController.addFilme(filmeModel)

        filmeView.mostraFilme(filmeModel)              

    }
})          

})

