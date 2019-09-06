<template>
  <div class="col s12" id="breadcrumbs" v-if="breadCrumbs">
    <router-link v-for="item of breadCrumbs"
                 :to="item.to" class="breadcrumb" :key="item.name">
      {{item.text}}
    </router-link>
  </div>
</template>

<script>
  export default{
    name:'BreadCrumbs',
    data(){
      return {breadCrumbs:this.$route.meta.breadCrumbs}
    },
  }
</script>

<style scoped>
  #breadcrumbs{
    background: gray;
  }
</style>
