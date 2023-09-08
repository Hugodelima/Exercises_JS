




const btnVerificar = document.getElementById("btnVerificar")

function dataAtual(){
    let data = new Date()
    let dataAtual = data.getFullYear()
    return dataAtual

}
function inserirImagem(link){
    let adicionarImagem =  document.getElementById("adicionarImagem")
    let imagem = document.createElement("div")
    imagem.src = link

    adicionarImagem.appendChild(imagem)

}
function pegarValorRadio(radio){
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked){
            return (radio[i].value)
        }
        
    }
}
function verificarCampos(anoNascimento,radio){
    if (anoNascimento <= 0 || anoNascimento > dataAtual() || isNaN(anoNascimento))  {
        alert("Peenche sua data de nascimento")
        return false
    }else if(pegarValorRadio(radio) == undefined ){
        alert("Informe seu genero")
        return false
    }
    else{
        return true
    }
    

}
btnVerificar.addEventListener("click",(naorecarregar) =>{
    let resultado = document.getElementById("resultado")
    let radio = document.getElementsByName("genero");
    
    naorecarregar.preventDefault()


    let anoNascimento = parseInt(document.getElementById("idade").value)
    if (verificarCampos(anoNascimento,radio)){
        resultado.textContent = `${pegarValorRadio(radio)}Sua idade seria ${dataAtual()-anoNascimento}`

    }
    
});













