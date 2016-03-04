/**
 * Created by yago on 02/11/15.
 */
//15

function entrar(){
    if (nomedamsg.value){

    document.getElementById("NB").innerHTML="Bem-vindo "+ nomedamsg.value;

}else{
   document.getElementById("NB").innerHTML="Bem-vindo visitante";

}
}
//16

function separa(){

    var texto = separar.value;
    var string = "";

    for (var i=0;i< texto.length;i++){
     string += texto.charAt(i);
        string +=i;
      string +=" ";
    }
    document.getElementById("sepr").innerHTML=string;
}
//17

function mudarimg(){
    var imag = document.getElementById("imag");
    imag.src="1.jpg";
}
//18

//19

function reajuste() {
    var string = document.getElementById("salario");
    var salario = parseInt(string.value);
    var porcentagem = 0;

    if (salario <= 280) {
        porcentagem = 20;

    } else if (salario > 280 && salario <= 700) {
        porcentagem = 15;

    } else if (salario > 700 && salario <= 1500) {
        porcentagem = 10;

    } else if (salario > 1500) {
        porcentagem = 5;
    }

    document.getElementById("resultado").innerHTML=salario+(salario/100)*porcentagem;
}
