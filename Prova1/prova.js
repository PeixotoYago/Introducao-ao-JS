/**
 * Created by yago on 03/11/15.
 */

//01
function calcular() {

    var nome;
    var idade;
    var dataNs;
    var peso;
    var altura;
    var imc;
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    dataNs = document.getElementById("dataNS").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    var data;

    data = document.getElementById("dataNS").value;
    var dataString = data.split("-");

    var dia = dataString[2];//no modelo americano o dia fica na 3º posição por isso ele esta na posição 2
    var mes = dataString[1];
    var ano = dataString[0];//no modelo americano o ano fica na 1º posição por isso ele esta na posição 0

    if (mes == "01") {
        dataNs = dia + " de Janeiro" + " de " + ano;
    }
    if (mes == "02") {
        dataNs = dia + " de Fevereiro" + " de " + ano;
    }
    if (mes == "03") {
        dataNs = dia + " de Março" + " de " + ano;
    }
    if (mes == "04") {
        dataNs = dia + " de Abril" + " de " + ano;
    }
    if (mes == "05") {
        dataNs = dia + " de Maio" + " de " + ano;
    }
    if (mes == "06") {
        dataNs = dia + " de Junho" + " de " + ano;
    }
    if (mes == "07") {
        dataNs = dia + " de Julho" + " de " + ano;
    }
    if (mes == "08") {
        dataNs = dia + " de Agosto" + " de " + ano;
    }
    if (mes == "09") {
        dataNs = dia + " de Setembro" + " de " + ano;
    }
    if (mes == "10") {
        dataNs = dia + " de Outubro" + " de " + ano;
    }
    if (mes == "11") {
        dataNs = dia + " de Novembro" + " de " + ano;
    }
    if (mes == "12") {
        dataNs = dia + " de Dezembro" + " de " + ano;
    }
    imc = peso / (altura * altura);

    if (idade < 16) {
        alert("Não é possivel calcular o IMC por você ter menos que 16 anos.");
    }
    if (idade > 16) {
        if (imc < 17) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Muito abaixo do peso: " + imc;

        } else if (imc > 17 && imc <= 18.49) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Abaixo do peso: " + imc;

        } else if (imc >= 18.5 && imc <= 24.99) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Peso normal: " + imc;

        } else if (imc >= 25 && imc <= 29.99) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Acima do peso: " + imc;

        } else if (imc >= 30 && imc <= 34.99) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Obesidade 1 : " + imc;

        } else if (imc >= 35 && imc <= 39.99) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Obesidade 2: " + imc;

        } else if (imc >= 40) {
            document.getElementById("pegarNome").innerHTML = "Nome: " + nome;
            document.getElementById("pegarIdade").innerHTML = "Idade: " + idade;
            document.getElementById("pegarData").innerHTML = "Nascimento: " + dataNs;
            document.getElementById("pegarPeso").innerHTML = "Peso: " + peso;
            document.getElementById("pegarAltura").innerHTML = "Altura: " + altura;

            document.getElementById("pegarTotal").innerHTML = "Obesidade 3: " + imc;
        }
        else {
            alert("Algo errado, verifique os campos do formulario!!!");
        }
    }
}
