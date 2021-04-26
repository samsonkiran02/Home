/*for offline and online*/
window.addEventListener("online", onFunction);
window.addEventListener("offline", offFunction);

function onFunction() {
  alert ("Your browser is working online.");
}

function offFunction() {
  alert ("Your browser is working offline.");
}

/* for navigation menu-1st open.js */

function openNav() {
  document.getElementById("mySidenav").style.width = "210px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}






