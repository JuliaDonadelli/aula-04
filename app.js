function carregarFilmes(){
/*
    let filmeA = "images/filme1.png"
    let filmeB = "images/filme2.png"
    let filmeC = "images/filme3.png"




    document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmeA + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmeB + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmeC + ">"

*/

let filmes = [ "images/filme1.png" , "images/filme2.png" , "images/filme3.jpg" , "images/filme4.jpg" , "images/filme5.jpg" , "images/filme6.jpg"]

document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmes[0] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[1] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[2] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[3] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[4] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[5] + ">"

// laço de repetição
for(let controle = 0; controle < 6 ; controle = controle + 1 ){ document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes [controle] + ">"



 }
}