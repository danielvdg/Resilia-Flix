let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let confirmacaoSenha = document.querySelector("#confirmacaoSenha")
let rg = document.querySelector("#rg")
let data = document.querySelector("#data")
let cep = document.querySelector("#cep")
let rua = document.querySelector("#rua")
let numero = document.querySelector("#numero")
let complemento = document.querySelector("#complemento")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let uf = document.querySelector("#uf")

let btnCadastrar = document.querySelector("#btnCadastrar")
let form = document.querySelector("#form-conteiner")
let erros = document.querySelectorAll(".mensagens-erros")
let verificar = document.querySelectorAll(".verificar")



function validaNome (nome){
    
   let nomeCompleto = nome.value.split(" ")
        if(nomeCompleto.length < 2){
        erros[0].classList.remove("mensagens-erros")
        verificar[0].classList.add("verificar")
        
        return false
    }else{
        erros[0].classList.add("mensagens-erros")
        verificar[0].classList.remove("verificar")
  
      return true
    }
    

}


function validaEmail(email){

    if(email.value.indexOf("@") == -1 ){

        erros[1].classList.remove("mensagens-erros")
        verificar[1].classList.add("verificar")
        
        return false

    }else{
     
        erros[1].classList.add("mensagens-erros")
        verificar[1].classList.remove("verificar")

        return true
        
        
    }
   
}

function validaSenha(senha) {
   if(senha.value.length < 6 ){

        erros[2].classList.remove("mensagens-erros")
        verificar[2].classList.add("verificar")
    
        return false
    }else if(senha.value == "" ){
        
        erros[2].classList.remove("mensagens-erros")
        verificar[2].classList.add("verificar")
        return false
        
    } else {
        erros[2].classList.add("mensagens-erros")
        verificar[2].classList.remove("verificar")
        return true
    }

}

function validaConfirmacao(senha, confirmacaoSenha) {
    
    if(senha.value != confirmacaoSenha.value ){
        erros[3].classList.remove("mensagens-erros")
        verificar[3].classList.add("verificar")
        return false
        
    }else if(confirmacaoSenha.value == "" ){

        erros[3].classList.remove("mensagens-erros")
        verificar[3].classList.add("verificar")
        return false
        
    }else if(confirmacaoSenha.value.length < 6 ){

        erros[3].classList.remove("mensagens-erros")
        verificar[3].classList.add("verificar")
        return false
        
    }else  {
        verificar[3].classList.remove("verificar")
        erros[3].classList.add("mensagens-erros")
        return true
    }
    
}

function validaRg(rg) {
    if (rg.value.length === 9 ){
        verificar[4].classList.remove("verificar")
        erros[4].classList.add("mensagens-erros")
        
        return true

    }else{

        erros[4].classList.remove("mensagens-erros")
        verificar[4].classList.add("verificar")
        
        return false
    }
}

function validaData(data) {
  
    if(data.value.length != 0){
        verificar[5].classList.remove("verificar")
        erros[5].classList.add("mensagens-erros")

        return true

    }else{

        erros[5].classList.remove("mensagens-erros")
        verificar[5].classList.add("verificar")
        return false
    }
    
}

function validaCep(cep) {
    if (cep.value.length == 8 ){
        verificar[6].classList.remove("verificar")
        erros[6].classList.add("mensagens-erros")
        return true
      
    }else{

        erros[6].classList.remove("mensagens-erros")
        verificar[6].classList.add("verificar")

        return false
    }
}
function validaRua(rua) {
    if (rua.value.length > 1 ){
        verificar[7].classList.remove("verificar")
        erros[7].classList.add("mensagens-erros")
       

    }
}

function validaNumero(numero) {
    if (numero.value.length > 1 ){
        verificar[8].classList.remove("verificar")
        erros[8].classList.add("mensagens-erros")
       

    }
}

function validaComplemento(complemento) {
    if (complemento.value.length > 1 ){
        verificar[9].classList.remove("verificar")
        erros[9].classList.add("mensagens-erros")
        

    }
}

function validaBairro(bairro) {
    if (bairro.value.length > 1 ){
        verificar[10].classList.remove("verificar")
        erros[10].classList.add("mensagens-erros")
        

    }
    
}

function validaCidade(cidade) {
    if (cidade.value.length > 1 ){
        verificar[11].classList.remove("verificar")
        erros[11].classList.add("mensagens-erros")
        

    }
}

function validaUf(uf) {
    if (uf.value.length > 1 ){
        verificar[12].classList.remove("verificar")
        erros[12].classList.add("mensagens-erros")
       

    }
}

nome.addEventListener("blur", ()=>{
     validaNome(nome)

})

email.addEventListener("blur", ()=>{
    validaEmail(email)

})

senha.addEventListener("blur", ()=>{
    validaSenha(senha)
    
})

confirmacaoSenha.addEventListener("blur", ()=>{
    validaConfirmacao(senha, confirmacaoSenha)

})

rg.addEventListener("blur", ()=>{
    validaRg(rg)

})

data.addEventListener("blur", ()=>{
    validaData(data)
    
})

cep.addEventListener("blur", ()=>{
    validaCep(cep)

})

numero.addEventListener("blur", ()=>{
    validaNumero(numero)

})

complemento.addEventListener("blur", ()=>{
    validaComplemento(complemento)

})

btnCadastrar.addEventListener("click",function(e){
    e.preventDefault()

    validacao = [
    validaNome(nome),
    validaEmail(email),
    validaSenha(senha),
    validaConfirmacao(senha, confirmacaoSenha),
    validaRg(rg),validaData(data),
    validaCep(cep)]
    
    validaNome(nome)
    validaEmail(email)
    validaSenha(senha)
    validaConfirmacao(senha, confirmacaoSenha)
    validaRg(rg)
    validaData(data)
    validaCep(cep)
    validaRua(rua)
    validaNumero(numero)
    validaComplemento(complemento)
    validaBairro(bairro)
    validaCidade(cidade)
    validaUf(uf)

    for(let i = 0 ;i < validacao.length ; i ++){

        if (validacao[i] == true){
            console.log("Certo");
           
            
        }else{
    
            console.log("erro");
        }

    }
    
});
console.log(btnCadastrar.value)

// validaNome(nome)
// validaEmail(email)
// validaSenha(senha)
// validaConfirmacao(senha, confirmacaoSenha)
// validaRg(rg)
// validaData(data)
// validaCep(cep)
// validaRua(rua)
// validaNumero(numero)
// validaComplemento(complemento)
// validaBairro(bairro)
// validaCidade(cidade)
// validaUf(uf)