document.getElementById("cima_1").addEventListener("click", _cima1);
document.getElementById("cima_2").addEventListener("click", _cima2);
document.getElementById("cima_3").addEventListener("click", _cima3);

document.getElementById("meio_1").addEventListener("click", _meio1);
document.getElementById("meio_2").addEventListener("click", _meio2);
document.getElementById("meio_3").addEventListener("click", _meio3);

document.getElementById("baixo_1").addEventListener("click", _baixo1);
document.getElementById("baixo_2").addEventListener("click", _baixo2);
document.getElementById("baixo_3").addEventListener("click", _baixo3);

document.getElementById("btn_reiniciar").addEventListener("click", reiniciar);

var cima1 = document.getElementById("cima_1");
var cima2 = document.getElementById("cima_2");
var cima3 = document.getElementById("cima_3");
var meio1 = document.getElementById("meio_1");
var meio2 = document.getElementById("meio_2");
var meio3 = document.getElementById("meio_3");
var baixo1 = document.getElementById("baixo_1");
var baixo2 = document.getElementById("baixo_2");
var baixo3 = document.getElementById("baixo_3");
var resultado = document.getElementById("resultado");
var contador = 0;
var contador_cima_1 = 0;
var contador_cima_2 = 0;
var contador_cima_3 = 0;

var contador_meio_1 = 0;
var contador_meio_2 = 0;
var contador_meio_3 = 0;

var contador_baixo_1 = 0;
var contador_baixo_2 = 0;
var contador_baixo_3 = 0;
var velha = 0;
var venceu = 0;

function _cima1(){

    if(contador_cima_1 == 0 && (contador % 2 === 0)){
        contador_cima_1 = 1;
        console.log("cont cima x = " + contador_cima_1);
        cima1.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_cima_1 == 0 && (contador  % 2 !== 0)){
        contador_cima_1 = 2;
        console.log("cont cima o = " + contador_cima_1);
        cima1.textContent = "O"
        cima1.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }/*||*/

    if(contador_cima_1 == 1 && contador_meio_1 == 1 && contador_baixo_1 == 1 || contador_cima_1 == 1 && contador_meio_2 == 1 && contador_baixo_3 == 1
        || contador_cima_1 == 1 && contador_cima_2 == 1 && contador_cima_3 == 1 ){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_1 == 2 && contador_meio_1 == 2 && contador_baixo_1 == 2 || contador_cima_1 == 2 && contador_meio_2 == 2 && contador_baixo_3 == 2
        || contador_cima_1 == 2 && contador_cima_2 == 2 && contador_cima_3 == 2){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;

    } else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}

function _cima2(){

    if(contador_cima_2 == 0 && (contador % 2 === 0)){
        contador_cima_2 = 1;
        console.log("cont cima x = " + contador_cima_2);
        cima2.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_cima_2 == 0 && (contador  % 2 !== 0)){
        contador_cima_2 = 2;
        console.log("cont cima o = " + contador_cima_2);
        cima2.textContent = "O"
        cima2.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }


    if(contador_cima_2 == 1 && contador_meio_2 == 1 && contador_baixo_2 == 1 || contador_cima_1 == 1 && contador_cima_2 == 1 && contador_cima_3 == 1 ){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_2 == 2 && contador_meio_2 == 2 && contador_baixo_2 == 2 || contador_cima_1 == 2 && contador_cima_2 == 2 && contador_cima_3 == 2 ){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }
}

function _cima3(){
    if(contador_cima_3 == 0 && (contador % 2 === 0)){
        contador_cima_3 = 1;
        console.log("cont cima x = " + contador_cima_3);
        cima3.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_cima_3 == 0 && (contador  % 2 !== 0)){
        contador_cima_3 = 2;
        console.log("cont cima o = " + contador_cima_3);
        cima3.textContent = "O"
        cima3.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_cima_3 == 1 && contador_meio_3 == 1 && contador_baixo_3 == 1 || contador_cima_3 == 1 && contador_meio_2 == 1 && contador_baixo_1 == 1
        || contador_cima_1 == 1 && contador_cima_2 == 1 && contador_cima_3 == 1 ){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_3 == 2 && contador_meio_3 == 2 && contador_baixo_3 == 2 || contador_cima_3 == 2 && contador_meio_2 == 2 && contador_baixo_1 == 2
        || contador_cima_1 == 2 && contador_cima_2 == 2 && contador_cima_3 == 2 ){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}

function _meio1(){
    if(contador_meio_1 == 0 && (contador % 2 === 0)){
        contador_meio_1 = 1;
        console.log("cont cima x = " + contador_meio_1);
        meio1.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_meio_1 == 0 && (contador  % 2 !== 0)){
        contador_meio_1 = 2;
        console.log("cont cima o = " + contador_meio_1);
        meio1.textContent = "O"
        meio1.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_cima_1 == 1 && contador_meio_1 == 1 && contador_baixo_1 == 1 || contador_meio_1 == 1 && contador_meio_2 == 1 && contador_meio_3 == 1){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_1 == 2 && contador_meio_1 == 2 && contador_baixo_1 == 2 || contador_meio_1 == 2 && contador_meio_2 == 2 && contador_meio_3 == 2){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}
function _meio2(){
    if(contador_meio_2 == 0 && (contador % 2 === 0)){
        contador_meio_2 = 1;
        console.log("cont cima x = " + contador_meio_2);
        meio2.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_meio_2 == 0 && (contador  % 2 !== 0)){
        contador_meio_2 = 2;
        console.log("cont cima o = " + contador_meio_2);
        meio2.textContent = "O"
        meio2.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_meio_1 == 1 && contador_meio_2 == 1 && contador_meio_3 == 1 || contador_cima_2 == 1 && contador_meio_2 == 1 && contador_baixo_2 == 1
        || contador_meio_2 == 1 && contador_cima_1 == 1 && contador_baixo_3 == 1 || contador_meio_2 == 1 && contador_cima_3 == 1 && contador_baixo_1 == 1){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_meio_1 == 2 && contador_meio_2 == 2 && contador_meio_3 == 2 || contador_cima_2 == 2 && contador_meio_2 == 2 && contador_baixo_2 == 2
        || contador_meio_2 == 2 && contador_cima_1 == 2 && contador_baixo_3 == 2 || contador_meio_2 == 2 && contador_cima_3 == 2 && contador_baixo_1 == 2){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }


}


function _meio3(){
    if(contador_meio_3 == 0 && (contador % 2 === 0)){
        contador_meio_3 = 1;
        console.log("cont cima x = " + contador_meio_3);
        meio3.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_meio_3 == 0 && (contador  % 2 !== 0)){
        contador_meio_3 = 2;
        console.log("cont cima o = " + contador_meio_3);
        meio3.textContent = "O"
        meio3.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_cima_3 == 1 && contador_meio_3 == 1 && contador_baixo_3 == 1 || contador_meio_1 == 1 && contador_meio_2 == 1 && contador_meio_3 == 1){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_3 == 2 && contador_meio_3 == 2 && contador_baixo_3 == 2 || contador_meio_1 == 2 && contador_meio_2 == 2 && contador_meio_3 == 2){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}

function _baixo1(){
    if(contador_baixo_1 == 0 && (contador % 2 === 0)){
        contador_baixo_1 = 1;
        console.log("cont cima x = " + contador_baixo_1);
        baixo1.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_baixo_1 == 0 && (contador  % 2 !== 0)){
        contador_baixo_1 = 2;
        console.log("cont cima o = " + contador_baixo_1);
        baixo1.textContent = "O"
        baixo1.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_cima_1 == 1 && contador_meio_1 == 1 && contador_baixo_1 == 1 || contador_baixo_1 == 1 && contador_baixo_2 == 1 && contador_baixo_3 == 1
        || contador_baixo_1 == 1 && contador_meio_2 == 1 && contador_cima_3 == 1 ){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_cima_1 == 2 && contador_meio_1 == 2 && contador_baixo_1 == 2 || contador_baixo_1 == 2 && contador_baixo_2 == 2 && contador_baixo_3 == 2
        || contador_baixo_1 == 2 && contador_meio_2 == 2 && contador_cima_3 == 2 ){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}
function _baixo2(){
    if(contador_baixo_2 == 0 && (contador % 2 === 0)){
        contador_baixo_2 = 1;
        console.log("cont cima x = " + contador_baixo_2);
        baixo2.textContent = "X"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 2"
    }
    else if(contador_baixo_2 == 0 && (contador  % 2 !== 0)){
        contador_baixo_2 = 2;
        console.log("cont cima o = " + contador_baixo_2);
        baixo2.textContent = "O"
        baixo2.style.color = "red"
        contador++;
        console.log(contador);
        resultado.textContent = "Player 1"
    }

    if(contador_baixo_1 == 1 && contador_baixo_2 == 1 && contador_baixo_3 == 1 || contador_cima_2 == 1 && contador_meio_2 == 1 && contador_baixo_2 == 1 ){
        resultado.textContent = "O Player 1 Ganhou!"
        resultado.style.color = "green"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    } 
    else if(contador_baixo_1 == 2 && contador_baixo_2 == 2 && contador_baixo_3 == 2 || contador_cima_2 == 2 && contador_meio_2 == 2 && contador_baixo_2 == 2 ){
        resultado.textContent = "O Player 2 Ganhou!"
        resultado.style.color = "red"
        contador_cima_1 = 3;
        contador_cima_2 = 3;
        contador_cima_3 = 3;
        contador_meio_1 = 3;
        contador_meio_2 = 3;
        contador_meio_3 = 3;
        contador_baixo_1 = 3;
        contador_baixo_2 = 3;
        contador_baixo_3 = 3;
        venceu = 1;
    }
    else if (contador == 9 && contador_cima_1 != 3){
        resultado.textContent = "Deu Velha!" 

    }

}
function _baixo3(){
if(contador_baixo_3 == 0 && (contador % 2 === 0)){
    contador_baixo_3 = 1;
    console.log("cont cima x = " + contador_baixo_3);
    baixo3.textContent = "X"
    contador++;
    console.log(contador);
    resultado.textContent = "Player 2"
}
else if(contador_baixo_3 == 0 && (contador  % 2 !== 0)){
    contador_baixo_3 = 2;
    console.log("cont cima o = " + contador_baixo_3);
    baixo3.textContent = "O"
    baixo3.style.color = "red"
    contador++;
    console.log(contador);
    resultado.textContent = "Player 1"
}

if(contador_baixo_1 == 1 && contador_baixo_2 == 1 && contador_baixo_3 == 1 || contador_cima_3 == 1 && contador_meio_3 == 1 && contador_baixo_3 == 1
    || contador_baixo_3 == 1 && contador_meio_2 == 1 && contador_cima_1 == 1 ){
    resultado.textContent = "O Player 1 Ganhou!"
    resultado.style.color = "green"
    contador_cima_1 = 3;
    contador_cima_2 = 3;
    contador_cima_3 = 3;
    contador_meio_1 = 3;
    contador_meio_2 = 3;
    contador_meio_3 = 3;
    contador_baixo_1 = 3;
    contador_baixo_2 = 3;
    contador_baixo_3 = 3;
    venceu = 1;
} 
else if(contador_baixo_1 == 2 && contador_baixo_2 == 2 && contador_baixo_3 == 2 || contador_cima_3 == 2 && contador_meio_3 == 2 && contador_baixo_3 == 2
    || contador_baixo_3 == 2 && contador_meio_2 == 2 && contador_cima_1 == 2 ){
    resultado.textContent = "O Player 2 Ganhou!"
    resultado.style.color = "red"
    contador_cima_1 = 3;
    contador_cima_2 = 3;
    contador_cima_3 = 3;
    contador_meio_1 = 3;
    contador_meio_2 = 3;
    contador_meio_3 = 3;
    contador_baixo_1 = 3;
    contador_baixo_2 = 3;
    contador_baixo_3 = 3;
    venceu = 1;
}
else if (contador == 9 && contador_cima_1 != 3){
    resultado.textContent = "Deu Velha!" 

}

}
function reiniciar(){
contador = 0;
contador_cima_1 = 0;
contador_cima_2 = 0;
contador_cima_3 = 0;

contador_meio_1 = 0;
contador_meio_2 = 0;
contador_meio_3 = 0;

contador_baixo_1 = 0;
contador_baixo_2 = 0;
contador_baixo_3 = 0;
velha = 0;
venceu = 0;
resultado.textContent = "O Player 1"
resultado.style = "black";
cima1.textContent = ""
cima1.style.color = "green"
cima2.textContent = ""
cima2.style.color = "green"
cima3.textContent = ""
cima3.style.color = "green"

meio1.textContent = ""
meio1.style.color = "green"
meio2.textContent = ""
meio2.style.color = "green"
meio3.textContent = ""
meio3.style.color = "green"

baixo1.textContent = ""
baixo1.style.color = "green"
baixo2.textContent = ""
baixo2.style.color = "green"
baixo3.textContent = ""
baixo3.style.color = "green"


}
