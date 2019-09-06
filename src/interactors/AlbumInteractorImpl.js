import $http from "@/api";
import implement from "implement-js";
import { AlbumInteractor } from "@/interfaces/Interactors";

function InteractorImpl(presenter) {
    this.getAlbumsPorFiltro = function(filtro){
        $http.get('search/album',{
            params: {
              q: filtro,
              limit: 100
            }
          }).then((response) => {
            presenter.mostarAlbumes(response.data.data);
          })
    };
}
    
export default (presenter) => implement(AlbumInteractor)(new InteractorImpl(presenter));
