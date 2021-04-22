/*for offline and online*/
window.addEventListener("online", onFunction);
window.addEventListener("offline", offFunction);

function onFunction() {
  alert ("Your browser is working online.");
}

function offFunction() {
  alert ("Your browser is working offline.");
}

