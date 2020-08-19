document.getElementById('bt').addEventListener('click', function () {

    if (document.querySelectorAll(':invalid').length > 0) {

        alert("Campos não preenchidos!")
    }
})






const produtoArray = [];
function saveProduto() {
    const nome = document.getElementById("nomeProduto").value;
    produtoArray.push(nome);
    const nomesJson = JSON.stringify(produtoArray);
    localStorage.setItem("Produtos", nomesJson);
}



function changeName(name, fielId) {
    localStorage.setItem(fielId, name);
}

function init() {
    const name = localStorage.getItem("Produto");
    setInput(name);
}

function setInput(name) {
    document.getElementById("nomeProduto").value = name;
}

init();




const serieArray = [];
function saveSerie() {
    const nome = document.getElementById("serie").value;
    serieArray.push(nome);
    const nomesJson = JSON.stringify(serieArray);
    localStorage.setItem("Serie", nomesJson);
}

function changeName(name, fielId) {
    localStorage.setItem(fielId, name);
}

function init() {
    const name = localStorage.getItem("");
    setInput(name);
}

function setInput(name) {
    document.getElementById("serie").value = name;
}


init();


const optArray = [];
function saveOption() {
    const nome = document.getElementById("tp").value;
    optArray.push(nome);
    const nomesJson = JSON.stringify(optArray);
    localStorage.setItem("Tipo", nomesJson);
}

function changeName(name, fielId) {
    localStorage.setItem(fielId, name);
}

function init() {
    const name = localStorage.getItem("");
    setInput(name);
}

function setInput(name) {
    document.getElementById("tp").value = name;
}

init();


const textoArray = [];
function saveText() {
    const nome = document.getElementById("txta2").value;
    textoArray.push(nome);
    const nomesJson = JSON.stringify(textoArray);
    localStorage.setItem("Caracteristicas", nomesJson);
}

function changeName(name, fielId) {
    localStorage.setItem(fielId, name);
}

function init() {
    const name = localStorage.getItem("");
    setInput(name);
}

function setInput(name) {
    document.getElementById("txta2").value = name;
}

init();

var Nserie = document.getElementById('NumeroSerie');

if (Nserie.value.length == 3) {
    Nserie.value += "."
}










//Adicionar pontos altomaticamente

function mascara_serie() {
    var serie = document.getElementById("serie")
    if (serie.value.length == 3) {
        serie.value += "."
    }
}
