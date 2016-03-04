/**
 * Created by yago on 10/11/15.
 */
function validaSelect(){

    var index = document.getElementById('SelectAlgo').selectedIndex;
    var option = document.getElementById('SelectAlgo').options[index];
    alert(option.value);

    if(index == 0){
        alert('Selecione um valor no Select');
        return false;
    }
    return true;
}

function validaSelect(){

    var index = document.getElementById('SelectMulti').selectedIndex;
    var option = document.getElementById('SelectMulti').options[index];
    alert(option.value);

    if(index == 0){
        alert('Selecione um valor no Select');
        return false;
    }
    return true;
}

function validaMultiplo(){
    var opcoes =document.getElementById("SelectMulti").multiplo.options;
    var sel = false;


}