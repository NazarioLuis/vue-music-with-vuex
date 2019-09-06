import AlbumService from "@/services/AlbumService";

const state = {
    filtro:"",
    albums:[],
    albumSeleccionado:null,
}

const mutations = {
    setAlbums (state, albums) {
        state.albums = albums;
    },
    setFiltro (state, filtro) {
        state.filtro = filtro;
    },
    setAlbumSeleccionado (state, album) {
        state.albumSeleccionado = album;
    },
}

const actions= {
    recuperarPorFiltro: async function ({commit},filtro) {
        let albums = await AlbumService.recuperarPorFiltro(filtro)
        commit("setAlbums",albums)
        commit("setFiltro",filtro)
    },
    recuperarPorId: async function ({commit},id) {
        let album = await AlbumService.recuperarPorId(id)
        commit("setAlbumSeleccionado",album)
    },
    seleccionarAlbum({commit},album){
        commit("setAlbumSeleccionado",album)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};