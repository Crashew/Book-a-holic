

// let playBtn= document.getElementById('play');
// let pauseBtn= document.getElementById('pause');

// playBtn.addEventListener("click", function(){
//   var audio = new Audio('iphone.mp3');
//   audio.play();

//   playBtn.classList.toggle('active');
//   pauseBtn.classList.toggle('active');

//   });

  

var audioPlay = (value) => {
  var playBtn= document.querySelector('.fa-play');
  
  if (value === 'play') {
     playBtn.classList.toggle('active');
     var elements = document.querySelectorAll('.fa-pause.active');
     for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('active');
     }
  }
   else {
     playBtn.classList.toggle('active');
     var audio = new Audio('iphone.mp3');
     audio.play();
     document.querySelector(`#${value}.fa-pause`).classList.toggle('active');
  }
}

