
function validate(){
  let username= document.getElementById('username').value;
  let password= document.getElementById('password').value;
  let passerror= document.getElementById('passerror');
  let usererror= document.getElementById('usererror');

  if(username==='apoorva' && password==='krishnan'){
    location.assign("index.html");
    return true;
  }
  else if(username=='' && password==''){
    passerror.classList.toggle('active');
    usererror.classList.toggle('active');
  }
  else if(username==='' && password!==''){
    usererror.classList.toggle('active');
    passerror.classList.remove('active');
  }
  else if(username!=='' && password===''){
    usererror.classList.remove('active');
    passerror.classList.toggle('active');
  }
  else{
    alert('false');
    return true;
  }
}

 
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

