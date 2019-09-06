<template>
  <div class="row">
    <Header titulo="Buscador de Albums" icono="album"/>
    <CampoBuscador :filtro="filtro" @filtrar="recuperarPorFiltro"/>
    <Album v-for="album of albums" :album="album" :key="album.id"/>
  </div>
</template>

<script>
import Header from '@/components/headers/Header.vue'
import Album from '@/components/cards/Album.vue'
import CampoBuscador from '@/components/inputs/CampoBuscador.vue'

import {mapState, mapActions} from 'vuex'

export default {
  name: 'Albums',
  components: {
    Header,Album,CampoBuscador
  },
  computed:{
    ...mapState('album',['filtro','albums']),
  },
  methods:{
    ...mapActions('album',['recuperarPorFiltro']),
  }
}
</script>
