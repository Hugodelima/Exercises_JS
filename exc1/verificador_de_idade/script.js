function dataAtual(){
    let data = new Date()
    let dataAtual = data.getFullYear()
    return dataAtual

}
function inserirImagem(link){
    let adicionarImagem =  document.getElementById("adicionarImagem")
    let imagem = document.createElement("img")
    imagem.src = link
    limparImagem()
    adicionarImagem.appendChild(imagem)
   

}
function limparImagem(){
    adicionarImagem.innerHTML = ''
}
function pegarValorRadio(radio){
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked){
            return (radio[i].value)
        }
        
    }
}
function verificarCampos(anoNascimento,radio){
    limparImagem()
    if (anoNascimento <= 0 || anoNascimento > dataAtual() || isNaN(anoNascimento))  {
        resultado.textContent = "Peenche sua data de nascimento de forma valida com 4 digitos"
        return false
    }else if(pegarValorRadio(radio) == undefined ){
        resultado.textContent = "Informe seu genero"
        return false
    }
    else{
        return true
    }
    

}
const btnVerificar = document.getElementById("btnVerificar")

btnVerificar.addEventListener("click",(naorecarregar) =>{
    let resultado = document.getElementById("resultado")
    let radio = document.getElementsByName("genero");
    
    naorecarregar.preventDefault()


    let anoNascimento = parseInt(document.getElementById("idade").value)
    if (verificarCampos(anoNascimento,radio)){
        resultado.textContent = `Detectamos ${pegarValorRadio(radio)} com ${dataAtual()-anoNascimento} anos`
        if ((dataAtual()-anoNascimento) <= 18 && (pegarValorRadio(radio)) == "Homem"){
            inserirImagem("https://images.pexels.com/photos/15734051/pexels-photo-15734051/free-photo-of-people-cute-portrait-joy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        }else if((dataAtual()-anoNascimento) <= 25 && (pegarValorRadio(radio)) == "Homem"){
            inserirImagem('https://images.pexels.com/photos/14192145/pexels-photo-14192145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }else if((dataAtual()-anoNascimento) <= 45 && (pegarValorRadio(radio)) == "Homem"){
            inserirImagem('https://images.pexels.com/photos/15835201/pexels-photo-15835201/free-photo-of-fashion-man-people-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }else if((dataAtual()-anoNascimento) <= 116 && (pegarValorRadio(radio)) == "Homem"){
            inserirImagem('https://media.gettyimages.com/id/1390893027/pt/foto/portrait-of-a-senior-man-at-home.webp?s=612x612&w=gi&k=20&c=gkpWHsbMlU9c6RnAT-EpACzWCwcIcfsSIhtek9amP40=')
        }else if((dataAtual()-anoNascimento) >= 117 && (pegarValorRadio(radio)) == "Homem"){
            resultado.textContent = `Detectamos ${pegarValorRadio(radio)} com ${dataAtual()-anoNascimento} anos que acabou de quebrar o recorde do guinessbook parabens :D`
            inserirImagem('https://images.pexels.com/photos/15835201/pexels-photo-15835201/free-photo-of-fashion-man-people-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }else if ((dataAtual()-anoNascimento) <= 12 && (pegarValorRadio(radio)) == "Mulher"){
            inserirImagem('https://images.pexels.com/photos/17055725/pexels-photo-17055725/free-photo-of-relaxation-summer-girl-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }else if((dataAtual()-anoNascimento) <= 25 && (pegarValorRadio(radio)) == "Mulher"){
            inserirImagem('https://media.gettyimages.com/id/610678308/pt/foto/be-yourself-and-your-confidence-will-shine-through.webp?s=612x612&w=gi&k=20&c=HrRSRSRIMNOIcOsyaIx4FMebvwfuQ3hZA8Sy47i9TOc=')
        }else if((dataAtual()-anoNascimento) <= 45 && (pegarValorRadio(radio)) == "Mulher"){
            inserirImagem('https://media.gettyimages.com/id/1180926773/pt/foto/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.webp?s=612x612&w=gi&k=20&c=D404PCDpHgZ96b1QrqQ0yHUPMOTIm8yc8Y6ZE_QFfmw=')
        }else if((dataAtual()-anoNascimento) <=116 && (pegarValorRadio(radio)) == "Mulher"){
            inserirImagem('https://media.gettyimages.com/id/688914676/pt/foto/life-is-right-in-track.webp?s=612x612&w=gi&k=20&c=HVM35EfhGNRDzimAneg6JwXqQv60BgDbhzdF1aEtM4c=')
        }else if((dataAtual()-anoNascimento) >= 117 && (pegarValorRadio(radio)) == "Mulher"){
            resultado.textContent = `Detectamos ${pegarValorRadio(radio)} com ${dataAtual()-anoNascimento} anos que acabou de quebrar o recorde do guinessbook parabens :D`
            inserirImagem('https://media.gettyimages.com/id/688914676/pt/foto/life-is-right-in-track.webp?s=612x612&w=gi&k=20&c=HVM35EfhGNRDzimAneg6JwXqQv60BgDbhzdF1aEtM4c=')
        }
    } 
});













