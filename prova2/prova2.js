/**
 * Created by yago on 05/01/16.
 */
function enviar() {

    var nome = document.getElementById("nome");
    var dataNS = document.getElementById("dtNasc");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");


    validarNome(nome);
    validarData(dataNS);
    validarEmail(email);
    validarCpf(cpf);
    validarTelefone(telefone);
    validarSenha(senha);

    criarCookie(nome.value);
}

function validarNome(nome) {
    var exNome = new RegExp('[A-Za-z ]{6,15}$');

    var resultado = exNome.test(nome.value);

    if (resultado) {
        document.getElementById("nome");

    } else {
        alert("O seu nome esta fora dos padrões");
    }
}

function validarData(dataNS) {
    var exData = new RegExp('([1-9])+\/([1-9])+\/([1-9]{4}$)');

    var data = exData.test(dataNS.value);

    if (data) {
        document.getElementById("dtNasc");

    } else {
        alert("A sua dada esta fora dos padrões");
    }
}


function validarEmail(email) {
    var exEmail = new RegExp('([\w])+@([\w])+.com.br');

    var resultado = exEmail.test(email.value);

    if (resultado) {

        document.getElementById("email");

    } else {
        alert("O seu E-mail esta fora dos padrões");
    }

}

function validarCpf(cpf) {
    var exData = new RegExp('([0-9]{3})+.([0-9]{3})+.([0-9]{3})+-([0-9]{2})');

    var resultado = exData.test(cpf.value);

    if (resultado) {
        document.getElementById("cpf");

    } else {
        alert("A seu cpf esta fora dos padrões");
    }

}

function validarTelefone(telefone) {
    var exTelefone = new RegExp('(\([0-9]{2}\))+([0-9]{4})+-([0-9]{4}$)');

    var resultado = exTelefone.test(telefone.value);

    if (resultado) {
        document.getElementById("telefone");

    } else {
        alert("A seu telefone esta fora dos padrões");
    }

}

function validarSenha(senha) {
    var exSenha = new RegExp('([\D]{3})+([\d]{3})');

    var resultado = exSenha.test(senha.value);

    if (resultado) {
        document.getElementById("senha");
    } else {
        alert("A sua senha esta fora dos padrões");
    }
}

function criarCookie(nome) {
    window.location.href = "tela2.html";

    document.cookie = "nome=" + nome + "; expires=Thu, 18 Dec 2017 00:00:00 UTC; path=/";
}

function sair() {
    window.alert("cookie criado " + document.cookie.toString());

    document.cookie = "nome=; expires=Thu, 18 Dec 1777 00:00:00 UTC; path=/";

    window.alert("cookie apagado " + document.cookie.toString());

}