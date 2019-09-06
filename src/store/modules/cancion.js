import CancionService from "@/services/CancionService";
import FavoritoService from "@/services/FavoritoService";

const state = {
    canciones:[],
    cancionSeleccionada:null,
    favoritos:FavoritoService.getFavoritos()||{}
}

const getters = {
    esFavorito:(state) => (cancion) =>{
        return state.favoritos[cancion.id] !== undefined;
    },
    getFavoritosCopy:function(state){
        return JSON.parse(JSON.stringify(state.favoritos))
    }
}

const mutations = {
    setAlbum (state, album) {
        state.album = album;
    },
    setCanciones (state, canciones) {
        state.canciones = canciones;
    },
    setFavoritos(state, canciones) {
        state.favoritos = canciones;
    },
    setCancionSeleccionada (state, cancion) {
        state.cancionSeleccionada = cancion;
    },
}

const actions= {
    recuperarPorAlbum: async function ({commit},album) {
        let canciones = await CancionService.recuperarPorAlbum(album)
        commit("setCanciones",canciones)
    },
    favoriteChange({commit,getters}, cancion) {
        if(getters.esFavorito(cancion)) commit('setFavoritos', FavoritoService.removeFavorito(cancion))  
        else commit('setFavoritos', FavoritoService.addFavorito(cancion))
    },
    seleccionarCancion({commit},cancion){
        commit("setCancionSeleccionada",cancion)
    },
    recuperarPorId: async function ({commit},id) {
        let cancion = await CancionService.recuperarPorId(id)
        commit("setCancionSeleccionada",cancion)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};