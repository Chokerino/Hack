var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'a.jpg') {
      myImage.setAttribute ('src','b.png');
    } else {
      myImage.setAttribute ('src','a.jpg');
    }
}
var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
	var myName = prompt('Enter:');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Welcome , '+myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome , ' + storedName;
}
mybutton.onclick = function(){
	setUserName();
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var modal = (function(){
  var 
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Append the HTML

  // Center the modal in the viewport
  method.center = function () {};

  // Open the modal
  method.open = function (settings) {};

  // Close the modal
  method.close = function () {};

  return method;
}());
$overlay = $('<div id="overlay"></div>');
$modal = $('<div id="modal"></div>');
$content = $('<div id="content"></div>');
$close = $('<a id="close" href="#">close</a>');

$modal.hide();
$overlay.hide();
$modal.append($content, $close);

$(document).ready(function(){
  $('body').append($overlay, $modal);
});
method.center = function () {
  var top, left;

  top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
  left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

  $modal.css({
    top:top + $(window).scrollTop(), 
    left:left + $(window).scrollLeft()
  });
};
method.open = function (settings) {
  $content.empty().append(settings.content);

  $modal.css({
    width: settings.width || 'auto', 
    height: settings.height || 'auto'
  })

  method.center();

  $(window).bind('resize.modal', method.center);

  $modal.show();
  $overlay.show();
};
method.close = function () {
  $modal.hide();
  $overlay.hide();
  $content.empty();
  $(window).unbind('resize.modal');
};
$close.click(function(e){
  e.preventDefault();
  method.close();
});
modal.open({content: "Howdy"});

modal.open({content: "<p>Howdy</p>"});

modal.open({content: $("<p>Howdy</p>"), width: "500px", height: "200px"});

// Ajax
$.get('index.html', function(data){
  modal.open({content: data});
});