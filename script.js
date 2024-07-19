function  $(id){
    return document.getElementById(id);
}
function ch(){
    $("2").style.display="none";
    $("1").style.display="inline";
}

function uc(){
    $("1").style.display="none";
    $("2").style.display="inline";
}
function login(){
    var x = $("un").value;
    var y = $("psw").value;
    
    if(x.trim()!=""&&y.trim()!=""){
        alert("welcome back user : "+x);
        $("info").innerHTML="You are logged in as:<br><br>Username: <b>"+x+"</b><br>Password: <b>"+y+"</b>";
  $("ma").style.display="none";
  $("out").style.display="inline";
    }else {
        alert("Invalid user name or password")
    }
}
function logout(){
  $("un").value="";
  $("psw").value="";
  $("info").innerHTML="";
  $("out").style.display="none";
  $("ma").style.display="inline";
}