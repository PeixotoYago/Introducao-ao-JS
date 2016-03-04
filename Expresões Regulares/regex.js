function expressaoRegular(){
    var expressao = document.querySelector("#regex").value;
    var texto = document.querySelector("#texto").value;
    var regex = new RegExp (expressao, 'ig');
    
    if (regex.test(texto)){
        alert ("Deu bao");
        
    }else{
        alert('Deu Ruim');
    }
}

