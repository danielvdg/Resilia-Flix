mensagemSucesso = document.querySelector("#mensagem-sucesso")
emailEnviado = document.querySelector("#email-enviado")
btnEnviar = document.querySelector("#btnEnviar")
email = document.querySelector("#email")
caixaMensagem = document.querySelector(".mensagem-conteiner-invisivel")
emailInvalido = document.querySelector("#erro-email-invisivel")



function validaEmail(email) {
    
    if(email.value.indexOf("@") == -1 ){
        
        caixaMensagem.classList.remove("mensagem-conteiner-invisivel")
        mensagemSucesso.innerText = "Email inválido , Por favor tente novamente"

        return false
       
    }else{
        caixaMensagem.classList.remove("mensagem-conteiner-invisivel")
        mensagemSucesso.innerText = `Uma mensagem foi enviada para o seu Email ${email.value} , por favor verifique sua caixa de E-mail` 
        
        return true
    }
}

btnEnviar.addEventListener("click" ,()=>{
    validaEmail(email)

})

