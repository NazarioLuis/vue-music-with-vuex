<template>
  <div id="player" v-if="cancionSeleccionada.title">
    <div class="album" :style="albumStyles">
      <div class="heart"><i class="fas fa-heart"></i></div>
    </div>
    <div class="info row">
      <div class="controls">
        <a :class="`btn-floating btn-large waves-effect waves-light ${(botonActivo=='pause'?'red':'green')}`"
                  @click="reproducirOPausar">
          <i class="material-icons Tiny">{{botonActivo}}</i>
        </a>
      </div>
      <div class="progress-bar" @click="progressBarClickPosition">
        <div class="time--current">{{duraccionEnMinutos(reproducido)}}</div>
        <div class="time--total">- {{duraccionEnMinutos(duracionPreview-reproducido)}}</div>
        <div class="fill" :style="fillStyles"></div>
      </div>
      <div class="currently-playing">
        <h2 class="song-name">{{cancionSeleccionada.title}}</h2>
        <h3 class="artist-name">{{cancionSeleccionada.artist.name}}</h3>
      </div>
    </div>
  </div>

</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name:'Reproductor',
    data(){
      return{
        duracionPreview:0,
        reproducido:0,
        porcentaje:0,
        botonActivo: "play_arrow"
      }
    },
    computed: {
      ...mapState('cancion',['cancionSeleccionada']),
      albumStyles() {
        return {
          "background": `linear-gradient(rgba(54, 79, 60, 0.25),
           rgba(73, 101, 77, 0.55)), url(${this.cancionSeleccionada.album.cover_big })`,
        };
      },
      fillStyles() {
        return {"width" : this.porcentaje+"%"};
      }
    },
    methods: {
      duraccionEnMinutos(segundos) {
        var minutos = Math.floor(segundos / 60);
        segundos = segundos - minutos * 60;
        var pad = "00";
        segundos = (pad+segundos).slice(-pad.length);
        return `${minutos}:${segundos}`;
      },
      reproducirOPausar(e,stop=false){
        if (stop) {
          this.$audio.pause()
          this.$audio.currentTime = 0;
          this.botonActivo = "play_arrow"
        }else if (this.$audio.paused) {
          this.$audio.play()
          this.botonActivo = "pause"
        }else{
          this.$audio.pause()
          this.botonActivo = "play_arrow"
        }
      },
      actualizarProgressBar() {
        this.reproducido = Math.round(this.$audio.currentTime);
        this.porcentaje = (this.reproducido / this.duracionPreview)*100
        if(this.porcentaje==100)this.reproducirOPausar(null,true)
      },
      progressBarClickPosition(e) {
        var elem = document.getElementsByClassName('progress-bar')[0];
        var offset = e.pageX - (elem.getBoundingClientRect().left +
                     (window.pageXOffset || document.documentElement.scrollLeft));
        offset = (offset < 0)?0:( (offset > elem.offsetWidth)?elem.offsetWidth:offset );
        this.$audio.currentTime = (offset/elem.offsetWidth)*this.duracionPreview;
      },
    },
    mounted() {
      this.$audio.src = this.cancionSeleccionada.preview;
      var _this = this;
      this.$audio.onloadedmetadata = function() {
         _this.duracionPreview = Math.round(_this.$audio.duration)
      };
      this.$audio.ontimeupdate = function() {_this.actualizarProgressBar();};
    }
  }
</script>
<style scoped>
#player {
  background: #fff;
  position: relative;
  margin: 80px auto;
  width: 350px;
  height: 550px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(54, 79, 60, 0.4);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#player:hover {
  transform: scale(1.05);
}
.album {
  background-repeat: no-repeat !important;
  background-size: contain !important;
  width: 350px;
  height: 350px;
  border-radius: 5px;
  position: absolute;
}
.heart {
  position: absolute;
  right: 0;
  color: #fff;
  margin: 10px;
  transition: all 0.4s ease;
}
.clicked {
  color: #49654d;
  transform: scale(1.2);
  transition: all 0.4s ease;
}
.info {
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255);
  transform: translateY(35px);
  transition: all 0.5s ease-in-out;
}
.up {
  transform: translateY(0px);
}
.progress-bar {
  height: 5px;
  width: 65%;
  left: 60px;
  margin: 6% auto;
  background: #cdd9c2;
  border-radius: 10px;
  cursor:pointer;
}
.fill {
  background-color: #8ba989;
  height: 0.3rem;
  border-radius: 2px;
}
.time--current, .time--total{
  color: #364f3c;
  font-size: 13px;
  position: absolute;
  margin-top: -4px;
}

.time--current {
  left: 15px;
}
.time--total {
  right: 15px;
}
.controls{
  margin-top: 10px;
  text-align: center;
}

.controls .play{
  margin-right: 10px;
}

.currently-playing {
  text-align: center;
  margin-top: -3px;
}
.song-name, .artist-name {
  font-family: "Questrial", sans-serif;
  text-transform: uppercase;
  margin: 0;
}
.song-name {
  font-size: 0.8em;
  letter-spacing: 3px;
  color: #364f3c;
  height: 25px;
  overflow: hidden;
}
.artist-name {
  font-size: 0.6em;
  letter-spacing: 1.5px;
  color: #557c5f;
  margin-top: 5px;
  height: 25px;
}

</style>
