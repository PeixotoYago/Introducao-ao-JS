

//function Clickeveja(){
	//document.getElementById("demo").innerHTML = "Bem-vindo Yago";
//alert(msg);}

//EX 14

//a) Booleano para Numeric

function NumeroBooleano(){
	var boolean = true;
	var int = bolean ? 1 : 0;
}

//b) Booleano para String

function BooleanoString(){
	var boolean ="1";
	var String = boolean.toString();
}

//c) String para Booleano

function StringBooleano(){
	var String = "true";
	var boolean = String ? true:false;
}

//d) String para Numeric

var strg = "2" ;
var numero = parseInt(strg);

//e) Numeric para String

var numero = 2 ;
var str = numero.toString();


//f) Numeric para Boolean

var numero = 2 ;
var boolea = numero ? true:false;



//EX 15
function login(){
	if (msgtext.value) {
			document.getElementById("bemvindo").innerHTML ="Bem-vindo: "+ msgtext.value;

		}else {
				document.getElementById("bemvindo").innerHTML ="Bem-vindo visitante";
	}
}
//EX 16
function separa(){
	var text=msgtext.value;
	var str="";
	for (var i=0;i<text.length;i++){
		str+=text.charAt(i);
		str+=i;
		str+=" ";

	}
	document.getElementById("funcaosepara").innerHTML=str;
}
//EX 17
function mudarimg(){
	var imag=document.getElementById("imag");
	imag.src="2.jpg";
}

// EX 18
function preencherTabela(){
	var num1 = 2;
	var num2 = 3;

	document.getElementById("soma").innerHTML=2+3;
	document.getElementById("subtracao").innerHTML=2-3;
	document.getElementById("divisao").innerHTML=2/3;
	document.getElementById("multiplicacao").innerHTML=2*3;
}

//EX 19

function reajuste(){
	var s = document.getElementById("salario");
	var salario = parseInt(s.value);
    var porcentagem = 0;

	if(salario<=280){
		porcentagem=20;

	}else if (salario >280 && salario <=700){
porcentagem=15;

	}else if (salario >700 && salario <=1500){
	porcentagem=10;

	}else if (salario >1500 ){
	porcentagem=5;
}

document.getElementById("resultado").innerHTML=salario+(salario/100)*porcentagem;

}
//EX 20

function novaData(){

	var mesextenso;
	var adddata = document.getElementById("date");
	var data= adddata.value.substr(8,2);
	data+= "/";
	data+= adddata.value.substr(5,2);
	data+= "/";
	data+= adddata.value.substr(0,4);
	 var separa = data.split("/");
	 var dia =separa[0];
	 var mes =separa[1];
	 var ano =separa[2];

	if(mes=="01"){
		mesextenso="janeiro"

	}else if(mes=="02"){
		mesextenso="fevereiro"
	}else if(mes=="03"){
		mesextenso="março"
	}else if(mes=="04"){
		mesextenso="abril"
	}else if(mes=="05"){
		mesextenso="maio"
	}else if(mes=="06"){
		mesextenso="junho"
	}else if(mes=="07"){
		mesextenso="julho"
	}else if(mes=="08"){
		mesextenso="agosto"
	}else if(mes=="09"){
		mesextenso="setembro"
	}else if(mes=="10"){
		mesextenso="outubro"
	}else if(mes=="11"){
		mesextenso="novenbro"
	}else if(mes=="12"){
		mesextenso="dezembro"
	}
	document.getElementById("datanova").innerHTML=dia+" de "+ mesextenso +" de "+ano;

}
//EX 21
function separaString(){
	var str = "gatos,cachorro,pássaros,cavalos";
	var arr= str.split(",");

	document.getElementById("separaS").innerHTML=arr[2];

}
//EX 22
function separaString2() {
	var str = "maçã.laranja-morango,limão-,lima";
	var str2 = str.replace(".", ",");
	str2 = str2.replace("-",",");
	var arr= str2.split(",");

	document.getElementById("separaS2").innerHTML = arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]+" "+arr[4] ;
}
//EX 23
function mudadata(){
	var datahj= new Date();
	var datamudada=datahj.getDate()+7;
	var datadoida=new Date();
	datadoida.setDate(datamudada);
	document.getElementById("mudadata").innerHTML=datahj+" "+datadoida;
}
//EX 24
function Bemvindo(){

	var dataNasc = document.getElementById("datanasc");
	var dataHJ = new Date();
	//var maiorIdade=dataHJ.getDate();
    var subtracaodatas= 0;

	subtracaodatas= dataHJ-dataNasc;

	if (nomeus.value && subtracaodatas > 18) {

	 document.getElementById("bvindo").innerHTML ="acesso negado!!!";

 }else {

	 document.getElementById("bvindo").innerHTML ="Bem vindo: "+ nomeus.value;
	}
}

//EX 25

function arrumaNotas(){

	var n0,n1,n2,n3,n4,n5,n6,n7,n8,n9 = 0;//document.getElementById("notas").value;
	//var pegaNotas = document.getElementById("notas").value = n0,n1,n2,n3,n4,n5,n6,n7,n8,n9;
	var troca = str.replace(",", "-");
	var arr= str2.split("-");
	var valores = Math.ceil (pegaNotas);


	var n0=arr[0];
	var n1=arr[1];
	var n2=arr[2];
	var n3=arr[3];
	var n4=arr[4];
	var n5=arr[5];
	var n6=arr[6];
	var n7=arr[7];
	var n8=arr[8];
	var n9=arr[9];

	document.getElementById("vnotas").innerHTML= arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]+" "+arr[4]+" "+arr[0]+" "+arr[6]+" "+arr[7]+
		" " +arr[8]+" "+arr[9];

}