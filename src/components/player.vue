
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
         @playing="onVideoPlaying"
        ref="youtube"
        width="235"
        height="100"
      ></youtube>

      <div class="slider" style="width:200px; margin:0 auto;">
      <!-- <input type="range" :value="CurrentTime" width="200px" min='0' max="100" @change="onSliderChange" /> -->
         <vue-slider :min=0 :max=VideoLength :value=CurrentTime @change="onSliderChange($event)" width="210px" />
    </div>

      <div class="button-group" style=" margin-top:4%">
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
  import VueSlider from "vue-slider-component";
 import "vue-slider-component/theme/antd.css";
export default {
  components: {
     VueSlider
  },
  mounted: function(){
  },
  data() {
    return {
      playerVars: {
        autoplay: 0,
        controls: 0,
      },
      id: "",
      processId:null,
      CurrentVideo:0,
      SelectedVideoId:this.$store.state.SelectedVideo,
      playlist: this.$store.state.CurrentPlaylist,
      activePlayer: true,
      activeShare: false,
      previousIndex: 0,
      CurrentTime: 0,
      VideoLength:100,
    };
  },
  methods: {
    Onabc(event){
      console.log(event)
    },
   onVideoPlaying: async function() {
     console.log("kör")
         let Length = await this.player.getDuration();
         this.VideoLength = Math.round(Length);
         if( await this.player.getPlayerState() === 1){
           console.log("row100");
           let tete = 0;
         let processId = setInterval(() => {
           this.player.getCurrentTime().then((time) => {
             let progress = (time/Length) * 100;
             this.CurrentTime = time;
             this.player.getPlayerState().then((state) => {
               if(state === 2){
               clearInterval(processId);
               }
             })
           });
         },400);
         }
  },
    test(){
  this.activePlayer=!this.activePlayer;
  if(this.activePlayer == true){
  document.getElementById("ytbPlayer").style.display = "";
  }else{
  document.getElementById("ytbPlayer").style.display = "none";
  }
    },
    playVideo() {
      this.id = this.$store.state.CurrentPlaylist[this.$store.state.CurrentVideo];
      console.log(this.id)
      this.PlayTimeOut();
    },
    async pauseVideo() {
      this.player.pauseVideo();
    },
    playnext: function(){
      if(this.$store.state.CurrentVideo < this.$store.state.CurrentPlaylist.length - 1){
      this.$store.commit("IncreaseCurrentVideo");
      }
      this.id = this.$store.state.CurrentPlaylist[this.$store.state.CurrentVideo];
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
     if(this.$store.state.CurrentVideo > 0){
      this.$store.commit("DecreaseCurrentVideo");
      }
    this.id = this.$store.state.CurrentPlaylist[this.$store.state.CurrentVideo];
    this.PlayTimeOut();
  },
  shufflePlay: async function() {
   // this.player.setShuffle(true)

  },
  seek:async function(time){
     console.log(time);
   await this.player.seekTo(time,true)
  },
    onSliderChange(time) {
       if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.seek(time);
      }, 800);
     
    },
  },
  watch:{

SelectedVideoId: function(){
  if(this.SelectedVideoId != this.$store.state.CurrentVideo){
  this.$store.state.CurrentVideo = this.SelectedVideoId
  PlayTimeOut();
  }
  
console.log(this.CurrentVideo)
}
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  
  
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
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider:hover {
  opacity: 1;
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