

const body = document.body
function pegarHora(){
    let data = new Date();
    return hora = data.getHours();
}
const resultado = document.getElementById("resultado");
resultado.innerHTML = `Agora são ${pegarHora()} horas`;


function exibirImagem(link){
    let div = document.getElementById("imagem")
    let imagem = document.createElement("img")
    imagem.src = link
    div.appendChild(imagem)
    
}
if(pegarHora() >= 6 & pegarHora() <= 11){
    exibirImagem("https://metsul.com/wp-content/uploads/2021/05/22C3C0B5-E123-44D9-AF81-8C262EE5B495-1280x640.png")
  
    body.style.background = "#20b2aa";
} else if (pegarHora() >= 12 & pegarHora() <= 16){
    exibirImagem("https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2017/07/mensagens-de-boa-tarde-ka0z3-fxl.jpg?fit=1120%2C588&ssl=1")
  
    body.style.background = "orange";
}else{
    exibirImagem("https://st.depositphotos.com/2627021/3210/i/450/depositphotos_32109269-stock-photo-moon-and-clouds-in-the.jpg")
    body.style.background = "gray";
}


 


