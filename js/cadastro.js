// quando inserir algum valor no meu cep execute
$("#cep").on("blur",function (){
    
    //pegando meu valor do input cep
    const numCep = $("#cep").val()

    //requisição estar recebendo o valor do cep inserido
    requisicao(numCep)    
    
})


//função que requisição esta buscando os dados da api
function requisicao (numCep){
    
    let url = `https://viacep.com.br/ws/${numCep}/json/`
    
    $.ajax({
        url : url,
        success : function (resposta){
           
            const cep = mostraCep(resposta)
            console.log(resposta);
          
            mostraNaTela(cep)
            
        }
        
    })
    
}

//funçao onde recebe um objeto
function mostraCep(resposta){

    const cep ={
        
        cep: resposta.cep,
        rua: resposta.logradouro,
        complemento: resposta.complemento,
        bairro: resposta.bairro,
        cidade: resposta.localidade,
        uf: resposta.uf        
        
    }
    console.log(cep)
    return cep
}

// função para mostrar as informações do banco de dados do Viacep
 function mostraNaTela(cep){

    // iniciando jquery para pegar o valor do meu objeto e exibir na tela
    $("#rua").val(cep.rua)
    $("#complemento").val(cep.complemento)
    $("#bairro").val(cep.bairro)
    $("#cidade").val(cep.cidade)
    $("#uf").val(cep.uf)
    
  
}

 




