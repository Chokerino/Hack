var instruct = document.getElementById("insBtn");
var pop = document.getElementById("Pg");

var meme1 = document.getElementById("meme1");
var pop1 = document.getElementById("memee");

var meme2 = document.getElementById("meme2");
var pop2 = document.getElementById("memef");

var meme3 = document.getElementById("meme3");
var pop3 = document.getElementById("memeg");

instruct.addEventListener('click', rules);
window.addEventListener('click', outsideClick);

meme1.addEventListener('click', rules1);
meme2.addEventListener('click', rules2);
meme3.addEventListener('click', rules3);

function outsideClick(e){
  if(e.target == Pg){
    pop.style.display = 'none';
  }
}
function outsideClick1(e){
  if(e.target == memee){
    pop1.style.display = 'none';
  }
}
function outsideClick2(e){
  if(e.target == memef){
    pop2.style.display = 'none';
  }
}
function outsideClick3(e){
  if(e.target == memeg){
    pop3.style.display = 'none';
  }
}

function rules(){
        pop.style.display = 'block';
        window.addEventListener('click', outsideClick);
}
function rules1(){
        pop1.style.display = 'block';
        window.addEventListener('click', outsideClick1);
}
function rules2(){
        pop2.style.display = 'block';
        window.addEventListener('click', outsideClick2);
}
function rules3(){
        pop3.style.display = 'block';
        window.addEventListener('click', outsideClick3);
}

