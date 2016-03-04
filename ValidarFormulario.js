/**
 * Created by yago on 17/11/15.
 */
/*
 function telefone(phoneInput){
 var re = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;
 var OK = re.exec(phoneInput.value);
 if (!OK)
 window.alert(RegExp.input + " nao e um numero de telefone com codigo de area!");
 else
 window.alert("Obrigado, seu numero de telefone e" + OK[0]);
 }

 function validacaoEmail(field) {
 usuario = field.value.substring(0, field.value.indexOf("@"));
 dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
 if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
 document.getElementById("valEmail").innerHTML = "E-mail valido";
 alert("E-mail valido");
 } else {
 document.getElementById("valEmail").innerHTML = "<font color='red'>E-mail invalido </font>";
 alert("E-mail invalido");
 }
 }

 function validacaoTele(phoneInput){
 var re = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;
 var OK = re.exec(phoneInput.value);
 if (!OK)
 window.alert(RegExp.input + " nao e um numero de telefone com codigo de area!");
 else
 window.alert("Obrigado, seu numero de telefone e" + OK[0]);
 }*/


//validando nome
    function ValidaNome() {

        var vaName = document.getElementsByName("nome");

        for (var i = 0; i < vaName .length; i ++) {
            if (vaName[i].value == null || vaName[i].value == "") {
                vaName[i].classList.add('erro');
            } else {
                vaName[i].classList.remove('erro');
            }
        }
    }

//validando idade
function ValidaIdade() {

    var vaAge = document.getElementsByName("idade");

    for (var i = 0; i < vaAge.length; i ++) {
        if (vaAge[i].value == null || vaAge[i].value == "") {
            vaAge[i].classList.add('erro');
        } else {
            vaAge[i].classList.remove('erro');
        }
    }
}

//validando e-mail
function ValidaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("e-mail").innerHTML = "E-mail valido";
        alert("E-mail valido");
    } else {
        document.getElementById("e-mail").innerHTML = "<font color='red'>E-mail invalido </font>";
        alert("E-mail invalido");
    }
}

//validando telefone
function ValidaTelefone(phoneInput){
    var re = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;
    var OK = re.exec(phoneInput.value);
    if (!OK)
        window.alert(RegExp.input + " nao e um numero de telefone com codigo de area!");
    else
        window.alert("Obrigado, seu numero de telefone e" + OK[0]);
}

//validando radio
    function ValidaSexo(){
        var vaSexo = document.getElementsByName('sexos');
        document.getElementById('sexo').classList.add('erro');

        for(var i = 0; i < sexos.length; i++){
            if(sexos[i].checked){
                document.getElementById('sexo').classList.remove('erro');
                break;
            }
        }
    }

//validando checkBox
function ValidaLinguas(){
    var check = document.getElementsByName('lingua');
    document.getElementById('linguas').classList.add('erro');

    for(var i = 0; i < check.length; i++){
        if(check[i].checked) {
            document.getElementById('linguas').classList.remove('erro');
        }
    }
}

//validar cidades e estados
function ValidaEstadoCidade(){
    var cidadeEstado = document.getElementsByName("estadoCidade");

    for (var i = 0; i < cidadeEstado.length; i ++) {
        if (cidadeEstado[i].value == null || cidadeEstado[i].value == "") {
            cidadeEstado[i].classList.add('erro');
        } else {
            cidadeEstado[i].classList.remove('erro');
        }
    }
}
function vali(){
    ValidaNome();
    ValidaIdade();
    ValidaEmail();
    ValidaTelefone();
    ValidaSexo();
    ValidaLinguas();
    ValidaEstadoCidade();
}


