<template>
  <div>
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a class="brand-logo">
          <i class="material-icons">{{icono}}</i><span id="titulo">{{titulo}}</span>
        </a>
        <ul class="right hide-on-med-and-down">
          <li class="tab"><router-link to="/favoritos"><i class="material-icons">favorite</i></router-link></li>
        </ul>
      </div>
      <BreadCrumbs/>
    </nav>
  </div>
</template>

<script>
  import BreadCrumbs from '@/components/breadcrumbs/BreadCrumbs.vue'
  export default{
    name:'Header',
    components: {
      BreadCrumbs
    },
    props: {
      titulo: String,
      icono: String,
    }
  }
</script>

<style scoped>
  #titulo{
    font-size: 1em !important;
  }
  nav .material-icons{
    font-size: 2em !important;
  }
  nav .brand-logo {
    max-height: 60px;
    overflow: hidden;
  }
</style>
