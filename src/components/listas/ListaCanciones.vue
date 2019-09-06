<template>
  <div class="row">
    <Cancion v-for="cancion of canciones" :cancion="cancion" :key="cancion.id"/>
  </div>
</template>
<script>
  import Cancion from '@/components/cards/Cancion.vue'
  export default{
    name:'ListaCanciones',
    props: ['canciones'],
    components: {
      Cancion
    },
  }
</script>
