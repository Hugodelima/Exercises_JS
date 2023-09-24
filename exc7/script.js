const BtnAdicionar = document.getElementById("BtnAdicionar");
let condicao = false


let array = []

function adicioanar(){
    const div = document.createElement("div")
    BtnFinalizar.after(div)
    div.innerHTML +=`<p> Total de elementos ${array.length} </p>`
    div.innerHTML +=`<p>o maior valor informado ${Math.max.apply(null, array)}</p>`
    div.innerHTML +=`<p>o menor valor informado${Math.min.apply(null, array)}</p>`
    div.innerHTML +=`<p>Somando todos os vaores ${somarArraY()}</p>`
    div.innerHTML +=`<p>A media dos elementos é ${somarArraY() /array.length}</p>`



}
function somarArraY(){
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += parseInt(array[i]);
    }
    return soma
    
}

BtnAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    const numero = document.getElementById("numero").value;




    if (!condicao){
        const select = document.createElement("select")
        select.setAttribute("id", "resultado")
        select.setAttribute("size", "6")
        BtnAdicionar.after(select)
        condicao = true   
    }
    if (numero >=1 && numero <=100){
        array.push(numero)
        const select = document.querySelector("select")
        const lista = document.createElement("option")
        lista.innerHTML = numero
        select.appendChild(lista) 
        console.log(array)

    }else{
        alert("digite um numero entre 1 e 100")
    }
 
    

    


});

const BtnFinalizar = document.getElementById("BtnFinalizar")
BtnFinalizar.addEventListener("click",(event)=>{
    event.preventDefault()
   
    if (array.length == 0){
        alert("digite algum numero")
    }else{
        const condicao2 = false
        if(!condicao2){
            adicioanar()
            condicao2 = true
        }else{
            alert("já foi finalizado")
        }
        
    
    
       
    }





});