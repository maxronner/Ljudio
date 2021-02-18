
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <vs-dialog v-model="activeShare">
      <template #header>
        <h4>Spellista</h4>
      </template>
      <div>
        <!-- <vs-input v-model="input" block > -->
        <!-- </vs-input> -->
        <!-- <vs-button @click=" AddPlaylist" color= "#42b983" -->

        <!-- >
  Lägg till
  </vs-button> -->
      </div>
    </vs-dialog>

    <div class="playerDiv">
      <!-- <div id='video' v-if="activePlayer">
    <iframe src="https://www.youtube.com/embed/RpRpyCJmL1s"
   width="235" height="100" align="left"></iframe>   
   </div > -->
      <youtube
      id="ytbPlayer"
      :video-id="id"
        :player-vars="playerVars"
        ref="youtube"
        width="235"
        height="100"
      ></youtube>

      <div class="slidecontainer">
        <input
          type="range"
          min="0"
          max=""
          value="0"
          class="slider"
          id="myRange"
          onchange="changeProgressBar()"
        />
        <p><span id="demo"></span></p>
      </div>
      <!-- <div class="slider">
      <vue-slider v-model="value" width="210px" />
    </div> -->

      <div class="button-group">
        <vs-button-group>
          <vs-button color="#42b983" @click="playPrevious">
            <i class="fa fa-step-backward"></i>
          </vs-button>
          <vs-button color="#42b983" @click="playVideo"
            ><i class="fa fa-play"></i>
          </vs-button>
          <vs-button color="#42b983" @click="pauseVideo"
            ><i class="fa fa-pause"></i>
          </vs-button>
          <vs-button color="#42b983" @click="playnext">
            <i class="fa fa-step-forward"></i>
          </vs-button>
          <vs-button color="#42b983" @click="shufflePlay"> <i class="fa fa-random"></i> </vs-button>
          <vs-button color="#42b983"> <i class="fa fa-share"></i> </vs-button>
          <vs-button color="#42b983"> <i class="fa fa-heart"></i> </vs-button>
          <vs-button color="#42b983" @click="test">
            <i class="fa fa-expand"></i>
          </vs-button>
        </vs-button-group>
      </div>
    </div>
  </div>
</template>
<script src="vue-youtube/dist/vue-youtube.js"></script>
<script>
// import VueSlider from "vue-slider-component";
// import "vue-slider-component/theme/antd.css";

export default {
  components: {
    // VueSlider,
  },

  data() {
    return {
      playerVars: {
        autoplay: 0,
        controls: 0,
      },
      id: "",
      CurrentVideo:0,
      playlist: this.$store.state.CurrentPlaylist,
      activePlayer: true,
      activeShare: false,
      previousIndex: 0,
    };
  },
  methods: {
    test(){
  this.activePlayer=!this.activePlayer;
  if(this.activePlayer == true){
  document.getElementById("ytbPlayer").style.display = "";
  }else{
  document.getElementById("ytbPlayer").style.display = "none";
  }
    },
    playVideo() {
      this.id = this.$store.state.CurrentPlaylist[this.CurrentVideo];
      console.log(this.id)
      this.PlayTimeOut();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    playnext: function(){
      if(this.CurrentVideo < this.$store.state.CurrentPlaylist.length - 1){
      this.CurrentVideo++;
      }
      
      this.id = this.$store.state.CurrentPlaylist[this.CurrentVideo];
      this.PlayTimeOut();
  },
   PlayTimeOut() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
         this.player.playVideo();
      }, 200);
    },
  playPrevious: function(){
     if(this.CurrentVideo != 0){
      this.CurrentVideo--;
      }
    this.id = this.$store.state.CurrentPlaylist[this.CurrentVideo];
    this.PlayTimeOut();
  },
  shufflePlay: async function() {
   // this.player.setShuffle(true)

  }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  
  //   playNextVideo(newVideoId){
  // // this.player.playNextVideo()
  // // this.videoIds.next() = videoId
  //       var currentvideoIndex = videoIds.indexOf(newVideoId);
  //       this.newVideoId = videoIds[currentvideoIndex + 1];
  //        console.log(newVideoId)
  //   },
  // playPreviousVideo(newVideoId){

  // var currentvideoIndex = videoIds.indexOf(newVideoId);
  //       this.newVideoId = songlist[currentvideoIndex - 1];
  //        console.log(newVideoId)
  //   },
  //   shuffle(){
  //  player.setShuffle(true)
};
</script>
<style>
#video {
  margin-bottom: 200px;
  margin-left: 10px;
}
.button-group {
  float: left;
}
.slider {
  margin-top: 15px;
  margin-left: 10px;
}
.slidecontainer {
  width: 237px;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 1opx;
  border-radius: 10%;
  background: #42b983;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #42b983;
  cursor: pointer;
}
/* .playerDiv{
  margin-top: 630px  ;

}    */
@media screen and (min-width: 820px) {
  .playerDiv {
    margin-top: 600px;
  }
}
/* @media only screen and (min-height: 1440px) {
  
   .playerDiv{
  margin-top: 630px  
   }
  } */
</style>