import { Interface,type } from "implement-js";

export const AlbumView = Interface('AlbumView')({
    mostarAlbumes: type('function'),
}, { error: true });