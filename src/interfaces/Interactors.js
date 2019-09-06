import { Interface, type } from "implement-js";

export const AlbumInteractor = Interface('AlbumInteractor')({
    getAlbumsPorFiltro: type('function'),
}, { error: true });