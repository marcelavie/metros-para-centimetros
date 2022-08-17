var metros = document.getElementById('metros');
var centimetros = document.getElementById('centimetros');


metros.addEventListener('keyup', metros2centimetros);
centimetros.addEventListener('keyup', centimetros2metros);

function metros2centimetros(){
    centimetros.value = Number(metros.value) * 100;
}

function centimetros2metros(){
    metros.value = Number(centimetros.value) / 100;
}