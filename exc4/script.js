
const btnContar = document.getElementById("btnContar")


btnContar.addEventListener ("click", (naorecarregar) =>{
    naorecarregar.preventDefault()

    const inicio = parseInt(document.getElementById("inicio").value)
    const fim = parseInt(document.getElementById("fim").value)
    const passo = parseInt(document.getElementById("passo").value)

    const resultado = document.getElementById("resultado")

    const array = [];
    for (let i = inicio; i <= fim; i +=passo){
        array.push(i+" 👉");
        resultado.innerHTML = array.join(" ")+'🏁' ;
    }
    
    



    
});
