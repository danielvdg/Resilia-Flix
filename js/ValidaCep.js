$("#cep").on("blur",function(event){
    event.preventDefault();
    
    let numCep = $("#cep").val();
    let url = `https://viacep.com.br/ws/${numCep}/json/`;
    
    $.ajax({
        
        url : url ,
        
        success: function(numCep){
            
           console.log(numCep);
            console.log(buscaCep(numCep))
            console.log(mostraTela(buscaCep));
            
            
        },
        
        
    })
})

function buscaCep(numCep){

  
    cep = {
       cep: numCep.cep,
       rua: numCep.logradouro,
       bairro:numCep.bairro,
       cidade:numCep.localidade,
       uf:numCep.uf
        
    }
    
    return cep;

}

function mostraTela (cep){

    $("#cep").text(cep.cep)
    $("#rua").text(cep.rua)
    $("#bairro").text(cep.bairro)
    $("#bairro").text(cep.bairro)
    $("#cidade").text(cep.localidade)
    $("#uf").text(cep.uf)

}

