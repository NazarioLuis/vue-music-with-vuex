<template>
  <div class="col s12">
    <div class="card horizontal">
      <div class="card-image">
        <img :src="cancion.album.cover">
      </div>
      <div class="card-content">
        <span class="card-title">{{cancion.title}}</span>
        <p><strong>Artista: {{cancion.artist.name}}</strong></p>
        <p><strong>Duración: {{duraccionEnMinutos(cancion.duration)}}</strong></p>
      </div>
      <div class="card-stacked">
        <div class="card-action">
          <a class="btn-floating green">
            <i :class="'material-icons'+(esFavorito(cancion)?' yellow-icon':'')" 
            @click="favoriteChange(cancion)">favorite</i>
          </a>
          <router-link :to="{ name: 'DetalleCancion',
                        params: { id: cancion.id }}"
                        class="btn-floating blue">
            <i class="material-icons" @click="seleccionarCancion(cancion)">play_circle_outline</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from "@/utils";
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name:'Cancion',
    props: ['cancion'],
    computed:{
      ...mapGetters('cancion',['esFavorito']),
    },
    methods: {
      ...mapActions('cancion',['favoriteChange','seleccionarCancion']),
      ...utils,
    }
  }
</script>

<style scoped>
  .card-content {
    line-height: normal;
    padding: 0px 25px !important;
  }
  .card-action{
    min-width: 150px;
  }
  .card-title{
    font-size: 14pt !important;
  }
  .card-action a{
    float: right;
    margin:  5px;
  }
  .yellow-icon{
    color: yellow;
  }
</style>
