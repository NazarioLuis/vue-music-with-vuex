import $http from "@/api";

const recuperarPorAlbum = async function(album){
  let response = await $http.get(`album/${album.id}/tracks`)
  
  for (let index = 0; index < response.data.data.length; index++) {
    response.data.data[index]['album'] = album;
  }
  
  return response.data.data;
};

const recuperarPorId = async function(id){
  let response = await $http.get(`track/${id}`)
  return response.data;
}

export default {
  recuperarPorAlbum,
  recuperarPorId
};
