let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let rg = document.querySelector("#rg")
let cep = document.querySelector("#cep")

let btnCadastrar = document.querySelector("#btnCadastrar")


btnCadastrar.addEventListener("click",()=>{

    
    validaNome(nome)
    console.log(validaEmail(email))
    

})
 
function validaNome (nome){

    if (nome.value <= 0 ){

        console.log("nome em branco")

    }


}

function validaEmail (email){
    
    if (email.value.indexOf("@") >=0 ){

        console.log("tudo certo")
        
    } else{
        
        console.log("email inválido")

    }
    
}




    