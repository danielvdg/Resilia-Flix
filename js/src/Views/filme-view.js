class FilmeView{

  mostraFilme( model ){

    $('#tituloFilme').text(model._titulo)
    $('#imgFilme').attr('src', `${model._poster}`)
    $('#sinopse').text(model._sinopse)

  }    

}