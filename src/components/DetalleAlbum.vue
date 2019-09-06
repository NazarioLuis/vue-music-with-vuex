<template>
  <div class="row">
    <Header v-if="albumSeleccionado" :titulo="'Album: '+albumSeleccionado.title" icono="queue_music"/>
    <ListaCanciones :canciones="canciones"/>
  </div>
</template>
<script>
  import Header from '@/components/headers/Header.vue'
  import ListaCanciones  from '@/components/listas/ListaCanciones.vue'
  import { mapState, mapActions } from 'vuex';
  
  export default{
    name:'DetalleAlbum',
    props: ['id'],
    components: {
      Header,ListaCanciones
    },
    computed:{
      ...mapState('cancion',['canciones']),
      ...mapState('album',['albumSeleccionado']),
    },
    methods:{
      ...mapActions('cancion',['recuperarPorAlbum']),
      ...mapActions('album',['recuperarPorId']), 
    },
    async mounted() {
      if(!this.albumSeleccionado) await this.recuperarPorId(this.id)
      this.recuperarPorAlbum(this.albumSeleccionado)
    }
  }
</script>
