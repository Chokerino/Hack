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
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-7243260-2']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();