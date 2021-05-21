//VARIÁVEIS DO DOM
$('.logado').hide()
const main = $('#principal')
const nomeBusca = $('#nomeBusca')
nomeBusca.hide()
var inputNomeBusca = true;
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
            <div id='loader' class="spinner-border text-warning loaderLogin" role="status">
            <span class="sr-only">Loading...</span>
            </div> 
            `

//FUNÇÃO QUE IMPRIME OS FILMES NA DIV PRINCIPAL
function impressoraDeFilmes(arr) {

    quadro.html(`${loader}`)

    arr.forEach(element => {

        var botoes = `
                <button type="button" id="playFilme" class="btn btn-outline-dark btn-sm"> <i class="fas fa-play-circle"></i></button>
                <button type="button" id="${element.imdbID}" class="btn btn-outline-dark btn-sm infoBotao" data-bs-toggle="modal" data-bs-target="#filmeInfos"> <i class="fas fa-info-circle"></i></button>  
                        `

        let divBotao = $('<div />', { class: 'divBotao' })

        divBotao.append(botoes)

        let img = $('<img />', { id: 'filmebusca', class: 'img-fluid' })

        element.Poster == "N/A" ? img.attr('src', 'img/poster.jpg') : img.attr('src', `${element.Poster}`)

        let div = $('<div />', { class: 'cardCustom' })

        div.hide()

        div.append(img)

        div.append(divBotao)

        quadro.append(div)

        div.fadeIn("slow")

    });

    $('#loader').hide()
    // }
}

//BUSCADOR DE FILME
buscarFilme.on('click', function (e) {

    if (inputNomeBusca == true) {
        nomeBusca.fadeIn()
        inputNomeBusca = false
    } else {
        nomeBusca.fadeOut()
        inputNomeBusca = true
    }


})

nomeBusca.on('keyup', function () {

    if (nomeBusca.val().length >= 3) {
        let nomeFilme = nomeBusca.val()

        $.ajax({

            url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&apikey=fbde633c`,
            success: filme => {

                filmes = filme.Search

                console.log(filme)

                if (typeof filmes == 'undefined') {

                    $('.resultados').text("")

                    quadro.html('<span class="error">Ooops... Filme não encontrado</span>')
                    paginador.hide()

                } else {

                    let totalResults = parseInt(filme.totalResults)

                    setTimeout(function () {

                        $('#loader').hide()

                        impressoraDeFilmes(filmes)

                        $('.resultados').text(`${totalResults} ${totalResults > 1 ? "resultados" : "resultado"}`)

                        if (totalResults > 10) {

                            paginador.show()
                            numPagina.val('1')
                            retornaPaginaFilme.hide()
                            console.log()

                        } else {
                            paginador.hide()

                        }

                    }, 500)


                }
            }
        })


    }
    else {
        if (nomeBusca.val() == "") {

            logar()
            $('.resultados').text("Melhores filmes")

        }
    }


})


//PAGINADOR PARA RETORNO DA PÁGINA
retornaPaginaFilme.on('click', function () {

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

    if (paginaAtual >= 3) {

        $.ajax({

            url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
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

            url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
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

    let nomeFilme = nomeBusca.val()

    let paginaAtual = parseInt(numPagina.val())

    if (paginaAtual >= 1) {

        $.ajax({

            url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${++paginaAtual}&apikey=fbde633c`,
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

            url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${--paginaAtual}&apikey=fbde633c`,
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

        url: `https://www.omdbapi.com/?s=${nomeFilme}&type=movie&page=${paginaAtual}&apikey=fbde633c`,
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
linkFilme.on('click', function () {

    paginador.hide()

    quadro.html(`${loader}`)

    setTimeout(function () {

        let filmesPrincipais = ["tt0371746", "tt0458339", "tt2015381", "tt2395427", "tt0478970", "tt1843866", "tt2250912", "tt1825683", "tt4154756", "tt5095030", "tt4154664", "tt4154796"]


        for (let i = 0; i < filmesPrincipais.length; i++) {

            $.ajax({

                url: `https://www.omdbapi.com/?i=${filmesPrincipais[i]}&apikey=fbde633c`,
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

$(document).delegate('.infoBotao', 'click', function () {

    $.ajax({

        url: `https://www.omdbapi.com/?i=${this.id}&apikey=fbde633c`,
        success: filme => {

            const filmeModel = new FilmeModel(filme.Title, filme.Actors, filme.Director, filme.Year, filme.imdbRating, filme.Runtime, filme.Released, filme.Plot, filme.Poster)

            const filmeController = new FilmeController()

            const filmeView = new FilmeView()

            filmeController.addFilme(filmeModel)

            filmeView.mostraFilme(filmeModel)

        }
    })

})

function logar() {

    

    setTimeout(function () {
        $("#bemVindo").fadeIn()
        $('#pgQEA').hide()
        $('.logado').fadeIn()

        paginador.hide()

    }, 500)

    setTimeout(function () {

        let filmesPrincipais = ["tt0371746", "tt0458339", "tt2015381", "tt2395427", "tt0478970", "tt1843866", "tt2250912", "tt1825683", "tt4154756", "tt5095030", "tt4154664", "tt4154796"]

        let arrFilmes = []

        for (let i = 0; i < filmesPrincipais.length; i++) {

            $.ajax({

                url: `https://www.omdbapi.com/?i=${filmesPrincipais[i]}&apikey=fbde633c`,
                success: filme => {

                    arrFilmes.push(filme)
                    $('#loader').hide()
                    impressoraDeFilmes(arrFilmes)

                }
            })
        }

        $('#loader').hide()

    }, 700)

}

function deslogar() {

    setTimeout(function () {
        $('#bemVindo').hide()
        $('.sair').hide()
        $('.deslogado').fadeIn()
        $('.logado').fadeOut()
        $('#pgQEA').hide()
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        paginador.hide()
        $("#logar").show()
        $("#loaderLogin").hide()
    }, 500)

}

$('form').submit(false)

$(document).delegate('#logar', 'click', function (e) {

    e.preventDefault();

    let login = $('#txtLogin').val()
    let senha = $('#txtSenha').val()

    if ((senha == "admin" && login == "admin") || (senha == localStorage.senha && login == localStorage.email)) {

        $('.msgErroCadastro').hide()

        $(".badge").hide()

        $('.msgErroCadastro2').hide()

        $('.cadastroTransp').hide()

        $("#logar").hide()

        $("#loaderLogin").fadeIn()

        setTimeout(function () {

            paginaQEA()

        }, 1000)
    }else{
        $(".badge").fadeIn()

        setTimeout(function(){
            $(".badge").fadeOut() 

        }, 5000)
    }

})

function paginaQEA() {

    $(".deslogado").hide()
    $(".fechaModal").click()
    $(".logadoSair").fadeIn()
    $('#pgQEA').fadeIn()

}

function sair() {

    setTimeout(function () {
        $('.sair').hide()
        $('.deslogado').fadeIn()
        $('.logado').fadeOut()
        $('#pgQEA').hide()
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        paginador.hide()
        $("#logar").show()
        $("#loaderLogin").hide()
    }, 500)

}

$("#logout").on('click', function () {
    $("#ficar").click()
    sair()
    deslogar()

})

function paginaCadastro() {

    setTimeout(function () {
        $(".deslogado").hide()
        $(".cadastroTransp").fadeIn()
    })

}

$("#btnHomeCadastro").on('click', function () {

    let emailHome = $("#emailHome").val()


    if (validateEmail(emailHome)) {

        if (emailHome == localStorage.email) {
            $('.msgErroCadastro2').show()
            $('.msgErroCadastro').hide()
        }
        else {
            $('.msgErroCadastro').hide()
            $('.msgErroCadastro2').hide()
            paginaCadastro()
        }


    }
    else {
        $('.msgErroCadastro2').hide()
        $('.msgErroCadastro').show()
    }

})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

$(document).delegate('#voltarHome', 'click', function () {
    $('.contatoSec').hide()
    $('.recSenha').hide()
    $('.cadastroTransp').hide()
    $('.deslogado').fadeIn()
    $('html, body').animate({ scrollTop: 0 }, 'slow');

})

$("#btnRecSenha").on('click', function () {

    let emailRec = $("#recSenhatxt").val()

    if(validateEmail(emailRec)){

        if(emailRec == localStorage.email){
            $(".recuperasenha").fadeIn()
            setTimeout(function(){
                $(".recuperasenha").fadeOut()

            }, 5000)
        }
        else{
            $(".naocadastrado").fadeIn()
            setTimeout(function(){
                $(".naocadastrado").fadeOut()

            }, 5000)
        }       

    }

})

function paginaRecSenha(){

$('.deslogado').hide()
$('.recSenha').fadeIn()

}

function paginaContato(){
    $('.deslogado').hide()
    $('.contatoSec').fadeIn()
}

$(document).delegate('#esqueciAsenha', 'click', function(){

    $(".fechaModal").click()   
    paginaRecSenha()
    
})

$(document).delegate('#Cadastrese', 'click', function(){
    $(".fechaModal").click() 
 paginaCadastro()

})

$(document).delegate('.faleconosco', 'click', function(){
    paginaContato()

})

$(document).delegate('.imgCresce', 'click', function(){
    let nome = this.id
    
    $('#bemVindo').html(`Seja bem vindo(a), ${nome}`)
    logar()

})



