var blurToggle = (value) => {
   var container = document.querySelector('.container');
   if (value === 'back') {
      container.classList.toggle('active');
      var elements = document.querySelectorAll('.popup.active');
      for (var i = 0; i < elements.length; i++) {
         elements[i].classList.toggle('active')
      }
   } else {
      container.classList.toggle('active');
      document.querySelector(`#${value}.popup`).classList.toggle('active');
   }
}

