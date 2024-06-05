const lang = navigator.language;

let data = new Date();

let diaNumero = data.getDate();

let month = data.getMonth();

let diaNome = data.toLocaleString(lang, {
    weekday: 'long'
});

let mesNome = data.toLocaleString(lang, {
    month: 'long'
});

let ano = data.getFullYear(); // Corrected variable name

document.getElementById('mes').innerHTML = mesNome;
document.getElementById('diaNome').innerHTML = diaNome;
document.getElementById('diaNumero').innerHTML = diaNumero;
document.getElementById('ano').innerHTML = ano;