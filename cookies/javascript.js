function logar(){
    var nome = document.querySelector("#login").value;
    var senha = document.querySelector("#senha").value;
    
    if (nome == "user" && senha == "123"){
       addCookie("logado", "OK", 10, 5, 20, 30);
        window.location = "logado.html";
    }else{
        alert("Usuario e senha incorreta");
    }
  }
  
  
  function verificarLogin(){
           var cookie = getCookie("logado");
     if(cookie != null){
         window.location = "logado.html";
     }
  }
  
  function verificaLogout(){
  
     var cookie = getCookie("logado");
     if(cookie == null){
         window.location = "index.html";
     }
 } 
      
  
 function logout(){
     var cookie = getCookie("logado");
     if(cookie != null){
         removeCookie("logado");
         window.location = "index.html";
     }
 } 
 
  function removeCookie(cname){
      var data = new Date(2000,12,1, 12,12,30);
      var expires = "expires="+data.toUTCString();
      document.cookie = cname+"= ;"+expires;
      
  }

function addCookie(cname, cvalue, days, hours, minutes, seconds){    //função universal para criar cookie
var d = new Date();
var day = days*24*60*60*1000;
var hour = hours*60*60*1000;
var minute = minutes*60*1000;
var second = seconds*1000; 

d.setTime(d.getTime() + day + hour + minute + second);
var expires = "expires="+ d.toUTCString();
document.cookie = cname+"=" +cvalue+";"+expires;
}
function getCookie(cname){
    var name = cname+"=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i<cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) == " ")
            cookie = cookie.substring(1);
        if(cookie.indexOf(name)!= -1)
            return cookie.substring(name.length, cookie.length);
    }
    return null;
}



    
    

    
     
    
    

   
    
