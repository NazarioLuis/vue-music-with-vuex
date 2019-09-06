import Vue from 'vue'
import Router from 'vue-router'
import Albums from '@/components/Albums.vue'
import DetalleCancion from '@/components/DetalleCancion.vue'
import DetalleAlbum from '@/components/DetalleAlbum.vue'
import Favoritos from '@/components/Favoritos.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', redirect: '/albums'},
    {
      path: '/albums',name: 'Albums',component: Albums,
      meta: {
        breadCrumbs: null
      }
    },
    {
      path: '/album/:id',name: 'DetalleAlbum',component: DetalleAlbum, props: true,
      meta: {
        breadCrumbs: {
          albums:{to: '/',text: 'Buscar Albums'},
          album:{to: '',text: 'Album'},
        }
      }
    },
    {
      path: '/cancion/:id',name: 'DetalleCancion',component: DetalleCancion, props: true,
      meta: {
        breadCrumbs: {
          albums:{to: '/',text: 'Buscar Albums'},
          album:{to: '/album/:id',text: 'Album'},
          cancion:{to: '',text: 'Canción'}
        }
      }
    },
    {
      path: '/favoritos',name: 'Favoritos',component: Favoritos,
      meta: {
        breadCrumbs: {
          albums:{to: '/',text: 'Buscar Albums'},
          cancion:{to: '',text: 'Favoritos'}
        }
      }
    },
  ]
})
