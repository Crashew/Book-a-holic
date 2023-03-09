const button1 = document.getElementById("slide1");

button1.onclick = () => {
  document.querySelector(".homeImage").scrollLeft -= 100;
};

const button2 = document.getElementById("slide2");

button2.onclick = () => {
  document.querySelector(".homeImage").scrollLeft += 100;
};