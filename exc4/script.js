function verificaCampo(inicio,fim,passo){
    if (isNaN(inicio) || inicio < fim || fim >inicio ||isNaN(fim) || isNaN(passo)){
        resultado.innerHTML = 'impossivel contar';
        return false
    }
    else{
        return true
    }
}
const btnContar = document.getElementById("btnContar")


btnContar.addEventListener ("click", (naorecarregar) =>{
    naorecarregar.preventDefault()

    const inicio = parseInt(document.getElementById("inicio").value)
    const fim = parseInt(document.getElementById("fim").value)
    const passo = parseInt(document.getElementById("passo").value)

    const resultado = document.getElementById("resultado")
    
    let array = [];
    if (verificaCampo(inicio,fim,passo)){
        for (let i = inicio; i <= fim; i +=passo){
            array.push(i+" 👉");
            resultado.innerHTML = array.join(" ")+'🏁' ;
        }

    }
    
    
    



    
});
