<template>
  <div class="row">
    <Header titulo="Canciones favoritas" icono="favorite"/>
    <ListaCanciones :canciones="canciones"/>
  </div>
</template>
<script>
  import Header from '@/components/headers/Header.vue'
  import ListaCanciones  from '@/components/listas/ListaCanciones.vue'
  import { mapGetters } from 'vuex';

  export default{
    name:'Favoritos',
    data(){
      return {
        canciones: this.getFavoritosCopy()
      }
    },
    components: {
      Header,ListaCanciones
    },
    methods:{
      ...mapGetters('cancion',['getFavoritosCopy']),
    }
  }
</script>
