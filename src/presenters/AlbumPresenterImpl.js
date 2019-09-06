import { AlbumPresenter } from "@/interfaces/Presenters.js";
import { AlbumView } from "@/interfaces/Views.js";
import implement from "implement-js";
import AlbumInteractorImpl from "../interactors/AlbumInteractorImpl";

function PresenterImpl(view) {
    this.view = implement(AlbumView)(view);
    this.interactor = AlbumInteractorImpl(this);
    
    this.getAlbumsPorFiltro = function(filtro){
        this.interactor.getAlbumsPorFiltro(filtro)
    };
    this.mostarAlbumes= function(alubumes){
        this.view.mostarAlbumes(alubumes)
    }
}

export default (view) => implement(AlbumPresenter)(new PresenterImpl(view));