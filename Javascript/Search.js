














/* for search */

document.write( '<div class=\"clicktopopup\" id=\"open-close\">\n' );
document.write( '\n' );
document.write( '<h2 align=\"center\">search result</h2>\n' );
document.write( '\n' );
document.write( '<input type=\"text\" id=\"myInput\" onkeyup=\"search()\" placeholder=\"Search...\" title=\"Type in a name\">\n' );
document.write( '\n' );
document.write( '<ul id=\"myUL\">\n' );
document.write( '  <li><a href=\"Comingsoon.html\">A</a></li>\n' );
document.write( '  <li><a href=\"Comingsoon.html\">a</a></li>\n' );
document.write( '\n' );
document.write( '  <li><a href=\"Comingsoon.html\">B</a></li>\n' );
document.write( '  <li><a href=\"Comingsoon.html\">b</a></li>\n' );
document.write( '\n' );
document.write( '  <li><a href=\"Comingsoon.html\">C</a></li>\n' );
document.write( '  <li><a href=\"Comingsoon.html\">c</a></li>\n' );
document.write( '\n' );
document.write( '  <li><a href=\"Comingsoon.html\">D</a></li>\n' );
document.write( '  <li><a href=\"Comingsoon.html\">d</a></li>\n' );
document.write( '\n' );
document.write( '</ul>\n' );
document.write( '\n' );
document.write( '<h3 align=\"center\" style=\"color:red;\">\"no search result\"</h3>\n' );
document.write( '<button type=\"button\" class=\"searchclosebutton\"onclick=\"closeform()\"><b>×</b></button>\n' );
document.write( '</div>' );

















function openform() {
  document.getElementById("open-close").style.display = "block";
}

function closeform() {
  document.getElementById("open-close").style.display = "none";
}





function search() { 
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
