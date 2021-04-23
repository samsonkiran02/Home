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

/* for navigation menu-3st click to share */

const shareButton = document.querySelector('.share');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: '𝐬𝐚𝐦𝐬𝐨𝐧𝐤𝐢𝐫𝐚𝐧.𝐜𝐨𝐦',
      url: 'https://codepen.io/Samson-kiran-02/pen/vYgQEQd '
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});
