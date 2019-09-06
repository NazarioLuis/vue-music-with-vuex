<template>
  <div class="row">
    <Header v-if="cancionSeleccionada" :titulo="cancionSeleccionada.title" icono="play_circle_outline"/>
    <Reproductor v-if="cancionSeleccionada"/>
  </div>
</template>
<script>
import Header from '@/components/headers/Header.vue'
import Reproductor from '@/components/cards/Reproductor.vue'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Cancion',
  props: ['id'],
  components: {
    Header,Reproductor
  },
  computed:{
    ...mapState('cancion',['cancionSeleccionada'])
  },
  methods:{
    ...mapActions('cancion',['recuperarPorId'])
  },
  async mounted() {
    if (this.cancionSeleccionada){
      await this.recuperarPorId(this.id);
    }
    this.$route.meta.breadCrumbs.album.to = `/album/${this.cancionSeleccionada.album.id}`;
  }
}
</script>
