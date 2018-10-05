var instruct = document.getElementById("insBtn");
var pop = document.getElementById("Pg");

instruct.addEventListener('click', rules);
window.addEventListener('click', outsideClick);

function outsideClick(e){
  if(e.target == Pg){
    pop.style.display = 'none';
  }
}
function rules(){
        pop.style.display = 'block';
        window.addEventListener('click', outsideClick);
}