<template>
  <div class="row">
    <form class="col s12" @submit.prevent="actualizarFiltro">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input :placeholder="placeholder" type="text" class="validate" v-model="filtroValue">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name:'CampoBuscador',
    props: {
			placeholder: {
				type: String,
        default: 'Introducir un filtro de busqueda'
      },
      filtro: {
        type: String,
      }
    },
    data(){
      return {
        filtroValue: this.filtro
      }
    },
		methods: {
			actualizarFiltro() {
				this.$emit('filtrar', this.filtroValue);
			}
		},
  }
</script>
