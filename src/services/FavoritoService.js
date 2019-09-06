const getFavoritos = function(){
  try{
    return JSON.parse(localStorage.getItem('favoritos'));
  }catch(e){
    return {};
  }
}

const addFavorito = function(cancion) {
  let favoritos = getFavoritos()||{};
  favoritos[cancion.id] = cancion;
  localStorage.favoritos = JSON.stringify(favoritos);
  return favoritos;
}

const removeFavorito = function(cancion) {
  let favoritos = getFavoritos()
  delete favoritos[cancion.id];
  localStorage.favoritos = JSON.stringify(favoritos);
  return favoritos;
}

export default {
  getFavoritos,
  addFavorito,
  removeFavorito
};