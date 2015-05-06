(function() {
  var color, h, i, a, avatars;

  avatars = document.querySelectorAll(".c-avatar--no-img");

  for (i = 0; i < avatars.length; i++) {
    a = avatars[i];
    h = Math.floor(Math.random() * 256);
    color = "hsl(" + h + ", 65%, 45%)";
    a.style.color = color;
  }

}).call(this);
var navBar = document.querySelector('.sc-site__nav');
var activeLink = document.querySelector('.is-active');


navBar.scrollLeft = (activeLink.parentNode.offsetLeft - 30);
