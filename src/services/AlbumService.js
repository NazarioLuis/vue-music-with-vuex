import $http from "@/api";

const recuperarPorFiltro = async function(filtro){
  let response = await $http.get('search/album',{
    params: {
      q: filtro,
      limit: 100
    }
  })
  return response.data.data;
};

const recuperarPorId = async function(id){
  let response = await $http.get(`album/${id}`)
  return response.data;
}

export default {
  recuperarPorFiltro,
  recuperarPorId,
};
