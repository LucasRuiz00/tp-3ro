var a, f, m, ffd, ffe, fuerzaNeta, fx, g, inc, material, pesoy, ud, ue;


g = 9.8;

function capmasa() {
    var m = document.getElementById("masa").value;
    console.log(m);
    pesoy = m * g;
}

function capfuerza() {
    var f = document.getElementById("fuerza").value;
    console.log(f); 
    fx = f;
    
}

var checkp = document.getElementById("planoS");
var checkf = document.getElementById("friccionS");

var grados = document.getElementById("gradosp");



checkp.addEventListener('click' , function() {
    if (checkp.checked) {
        grados.innerHTML = `<h2>cuantos grados esta inclinado el plano? </h2>
        <input type="number" name="numgrados" placeholder="ingrese la inclinacion del plano" id="gradosS">
        <button type="button" onclick="capgrados()">hecho </button>   `
        
    }
    
})

function capgrados() {
    var gr = document.getElementById("gradosS");
    console.log(gr);
    
}