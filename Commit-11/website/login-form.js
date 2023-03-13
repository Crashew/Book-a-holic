
function validate(){
  let username= document.getElementById('username').value;
  let password= document.getElementById('password').value;

  if(username==='apoorva' && password==='krishnan'){
    location.assign("index.html");
    return true;
  }
  else{
    alert('false');
    return true;
  }
}


function register(){
  let fullBook= document.getElementById('book');
  let loginPage= document.getElementById('loginpage');
  let registerPage= document.getElementById('registerpage');

 
    loginPage.style.transform= "rotateY(-130deg) scale(1.1)";

  
  registerPage.addEventListener("onmouseout", function attachEvent(){
    loginPage.style.transform= "rotateY(-20deg) scale(1.1)"
  }, false);
    
}