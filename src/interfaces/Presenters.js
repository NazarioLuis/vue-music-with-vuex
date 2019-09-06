import { Interface, type } from "implement-js";

export const AlbumPresenter = Interface('AlbumPresenter')({
    getAlbumsPorFiltro: type('function'),
    mostarAlbumes: type('function'),
}, { error: true });