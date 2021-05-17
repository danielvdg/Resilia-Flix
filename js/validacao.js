let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let confirmacaoSenha = document.querySelector("#confirmacaoSenha")
let rg = document.querySelector("#rg")
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


btnCadastrar.addEventListener("click",function(e){
 e.preventDefault()
                 
    validaNome(nome)
    validaEmail(email)
    validaSenha(senha)
    validaConfirmacao(senha, confirmacaoSenha)
    validaRg(rg)
    validaCep(cep)
    validaRua(rua)
    validaNumero(numero)
    validaComplemento(complemento)
    validaBairro(bairro)
    validaCidade(cidade)
    validaUf(uf)
});


function validaNome (nome){
    
   let nomeCompleto = nome.value.split(" ")
    console.log(nomeCompleto);
    if(nomeCompleto.length < 2){
        $(".mensagens-erros")[0]
        erros[0].classList.remove("mensagens-erros")
        verificar[0].classList.add("verificar")
        erros[0].innerText = "Erro!!! Por Favor Insira o Nome Completo"
        erros[0].style.color ="rgba(184, 6, 6, 0.808)"        

    }else{
        erros[0].classList.add("mensagens-erros")
        verificar[0].classList.remove("verificar")
        verificar[0].style.color="rgba(51, 167, 40, 0.699)"
        
    }
    


}

function validaEmail(email){

    if(email.value.indexOf("@") == -1 ){

        erros[1].classList.remove("mensagens-erros")
        verificar[1].classList.add("verificar")
        erros[1].innerText = "Email Invalído"
        erros[1].style.color ="rgba(184, 6, 6, 0.808)"  

    }else{
     
        erros[1].classList.add("mensagens-erros")
        verificar[1].classList.remove("verificar")
        verificar[1].style.color="rgba(51, 167, 40, 0.699)"
        
    }
   
}

function validaSenha(senha) {
   if(senha.value.length < 6 ){

    erros[2].classList.remove("mensagens-erros")
    verificar[2].classList.add("verificar")
    erros[2].style.color ="rgba(184, 6, 6, 0.808)"  
    erros[2].innerText = "Senha insuficiente, Digite no minimo 6 caracteres"
    
}else if(senha.value == "" ){
    
    erros[2].classList.remove("mensagens-erros")
    verificar[2].classList.add("verificar")
    erros[2].style.color ="rgba(184, 6, 6, 0.808)"  
    
} else {
    erros[2].classList.add("mensagens-erros")
    verificar[2].classList.remove("verificar")
    verificar[2].style.color="rgba(51, 167, 40, 0.699)"
}
}

function validaConfirmacao(senha, confirmacaoSenha) {
    
    if(senha.value == confirmacaoSenha.value){
        verificar[3].classList.remove("verificar")
        erros[3].classList.add("mensagens-erros")
        verificar[3].style.color="rgba(51, 167, 40, 0.699)"
        
    }else {
        
        erros[3].classList.remove("mensagens-erros")
        verificar[3].classList.add("verificar")
        erros[3].innerText = "Senha Estão diferentes"
        erros[3].style.color ="rgba(184, 6, 6, 0.808)"  
        

    }
    
}

function validaRg(rg) {
    if (rg.value.length === 9 ){
        verificar[4].classList.remove("verificar")
        erros[4].classList.add("mensagens-erros")
        verificar[4].style.color="rgba(51, 167, 40, 0.699)"

    }else{

        erros[4].classList.remove("mensagens-erros")
        verificar[4].classList.add("verificar")
        erros[4].innerText = "Rg inválido"
        erros[4].style.color ="rgba(184, 6, 6, 0.808)"
    }
}

function validaCep(cep) {
    if (cep.value.length == 8 ){
        verificar[5].classList.remove("verificar")
        erros[5].classList.add("mensagens-erros")
        verificar[5].style.color="rgba(51, 167, 40, 0.699)"

    }else{

        erros[5].classList.remove("mensagens-erros")
        verificar[5].classList.add("verificar")
        erros[5].innerText = "Cep inválido"
        erros[5].style.color ="rgba(184, 6, 6, 0.808)"
    }
}
function validaRua(rua) {
    if (rua.value.length > 1 ){
        verificar[6].classList.remove("verificar")
        erros[6].classList.add("mensagens-erros")
        verificar[6].style.color="rgba(51, 167, 40, 0.699)"

    }
}

function validaNumero(numero) {
    if (numero.value.length > 1 ){
        verificar[7].classList.remove("verificar")
        erros[7].classList.add("mensagens-erros")
        verificar[7].style.color="rgba(51, 167, 40, 0.699)"

    }
}

function validaComplemento(complemento) {
    if (complemento.value.length > 1 ){
        verificar[8].classList.remove("verificar")
        erros[8].classList.add("mensagens-erros")
        verificar[8].style.color="rgba(51, 167, 40, 0.699)"

    }
}

function validaBairro(bairro) {
    if (bairro.value.length > 1 ){
        verificar[9].classList.remove("verificar")
        erros[9].classList.add("mensagens-erros")
        verificar[9].style.color="rgba(51, 167, 40, 0.699)"

    }
    
}

function validaCidade(cidade) {
    if (cidade.value.length > 1 ){
        verificar[10].classList.remove("verificar")
        erros[10].classList.add("mensagens-erros")
        verificar[10].style.color="rgba(51, 167, 40, 0.699)"

    }
}

function validaUf(uf) {
    if (uf.value.length > 1 ){
        verificar[11].classList.remove("verificar")
        erros[11].classList.add("mensagens-erros")
        verificar[11].style.color="rgba(51, 167, 40, 0.699)"

    }
}