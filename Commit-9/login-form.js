
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
