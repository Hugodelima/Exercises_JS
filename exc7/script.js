const BtnAdicionar = document.getElementById("BtnAdicionar");
let condicao = false

BtnAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    const numero = document.getElementById("numero").value;
    

    const li = document.createElement("li")

    if (!condicao){
        const select = document.createElement("select")
        select.setAttribute("id", "resultado")
        select.setAttribute("size", "6")
        const lista = document.createElement("ul")
        select.appendChild(lista) 
        BtnAdicionar.after(select)
        condicao = true   
    }
    const select = document.querySelector("select")
    const lista = select.querySelector("ul")
    li.textContent = numero
    li.style.color = "red";
    lista.appendChild(li)

    


});