const botao = document.getElementById("botao")


botao.addEventListener("click",(naorecarregar) =>{

    naorecarregar.preventDefault()
    resultado.textContent = ""

    const numero = parseInt(document.getElementById("numero").value)
    const div = document.getElementById("resultado")

    for(i=0; i <=10;i++){
        const resultado = document.createElement("p")
        resultado.textContent = (`${numero} X ${i} = ${numero*i}`)
        div.appendChild(resultado)
    }
    
    
});
