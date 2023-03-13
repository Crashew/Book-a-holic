

 
let fullBook= document.getElementById('book');
let loginPage= document.getElementById('loginpage');
let registerPage= document.getElementById('registerpage');
function register(){  
    loginPage.classList.toggle('active');
    fullBook.addEventListener("onmouseout", function (){
      loginPage.classList.toggle('active');
    });
}

function goToLogin(){
  loginPage.classList.toggle('active');
}


  let data=[];
  function registration(){

  let regemail= document.getElementById('reg-email').value;
  let regpass= document.getElementById('reg-password').value;
  let usererror= document.getElementById('usererror');
  let passerror= document.getElementById('passerror');
  let regmsg= document.getElementById('reg-msg');


    

    const pe=/^[a-zA-Z0-9!@#\$]{8,}$/g;

        pswd=regpass.match(pe);
        if(regpass==0 && regemail==0){
            usererror.style.visibility= "visible";
            passerror.style.visibility= "visible";
        }
        else if(regemail==0){
            usererror.style.visibility= "visible";
        } 
        else if(regpass==0){
            passerror.style.visibility= "visible";
        }
        
        if(pswd){
                data.push({Email:regemail,Password:regpass});
                if(localStorage.length != 0){
                var retrieved=localStorage.getItem("users");
                var stored=JSON.parse(retrieved);
                stored.push({Email:regemail,Password:regpass});
                localStorage.setItem("users",JSON.stringify(stored));
                regmsg.style.visibility= "visible";
                return true;
                
                }
                else{
                localStorage.setItem("users",JSON.stringify(data));
                regmsg.style.visibility= "visible";
                }
            }
}

//checking
function validate(){

    let username= document.getElementById('username').value;
    let password= document.getElementById('password').value;
    let usererror= document.getElementById('usererror');
    let passerror= document.getElementById('passerror');
    let logmsg= document.getElementById('log-msg');
    let logfail= document.getElementById('logfail-msg');

    
    if(username==0 && password==0){
        usererror.style.visibility= "visible";
        passerror.style.visibility= "visible";
    }
    else if(username==0){
        usererror.style.visibility= "visible";
    } 
    else if(password==0){
        passerror.style.visibility= "visible";
    }
    var retrieved=localStorage.getItem("users");
    var stored=JSON.parse(retrieved);
    let success=false;
    for (let i=0 ;i< stored.length ;i++) {
        var retrievedemail=stored[i].Email;
        var retrievedpass=stored[i].Password;
        if(retrievedemail==username && retrievedpass ==password){
            success=true;
            logms.style= "visibility: visible; background-color: green";

            location.assign("index.html");
            return true;
        }
    }
    if (success==false){
        alert('Login failed');        
        return false;
    }
}
