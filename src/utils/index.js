const duraccionEnMinutos = function(segundos) {
    var minutos = Math.floor(segundos / 60);
    segundos = segundos - minutos * 60;
    var pad = "00";
    segundos = (pad+segundos).slice(-pad.length);
    return `${minutos}:${segundos} min.`;
}

export default {
    duraccionEnMinutos
}