class FilmeView{

  mostraFilme( model ){

    $('#tituloFilme').text(`Título: ${model._titulo}`)
    $('#notaFilme').html(`Nota: ${model._nota} <img src="img/imdb.png" class="mx-1 d-inline">`)
    $('#imgFilme').attr('src', `${model._poster}`)
    $('#sinopse').text(model._sinopse)
    $('#elenco').text(model._elenco)
    $('#diretor').text(model._diretor)
    $('#lancamentoEDuracao').text(`Lançamento: ${model._estreia} | Duração: ${model._duracao}`)

  }    

}