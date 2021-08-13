function show(){
    document.getElementById("side-menu").classList.toggle("show")
}

function data(){
    var span;
    var date = new Date();

    an = date.getFullYear();

    span = document.getElementById("data");

    span.innerHTML ="@ Comisia metodică MaIF - L.T. „Ion Creangă” <br/>" + an;
}

data();
