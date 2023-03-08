
function blurToggle() {
   
for (let index = 0; index < document.querySelectorAll('.blur').length; index++) {
        let blur= document.querySelectorAll('.blur')[index];
        let popup= document.querySelectorAll('.popup')[index];

         blur.addEventListener("click" , function(){
            blur.classList.toggle('active')[index];
               popup.classList.toggle('active')[index];
            })
   }
}     
         // let popup= document.querySelectorAll('.popup')[index];
         // popup.addEventListener("click" , function(){
         //    popup.classList.toggle('active')[index];
         // })
         
      //    console.log("sss");
        
        
      //   document.addEventListener("click",function(event){
      //    if(event===document.querySelector('.blur')[index])
      //    blur.classList.toggle('active')[index];
      //   })
        
