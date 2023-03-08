function sendToPage(){
  var inputFromUser = document.getElementById("search-box").value;
  var input= inputFromUser.toLowerCase();
  //alert(input);
  if (input == "crooked kingdom" || input == "cruel prince" ||input == "one of us is lying"
      || input == "a good girl's guide to murder" ||input== 'it starts with us' || input=="atomic habits"
      || input=="the miracle morning" || input=="secret"){               
      location.assign("#product");
      return false;
  }
  else if(input== "paperback" || input== "kindle" || input=="hardback" || input=="audiobook"){
      location.assign("#format");
      return false;
  }
  else{
      location.assign("#home");
      return false;
  }
  }