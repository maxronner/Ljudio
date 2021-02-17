
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    
     <vs-dialog v-model="activeShare">
        <template #header>           
          <h4>
              Spellista
          </h4>
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
    <youtube :video-id="id"  :player-vars="playerVars"  v-if="activePlayer" ref="youtube"  width="235"  height="100" ></youtube> 

<div class="slidecontainer">
  <input type="range" min="0" max="" value="0" class="slider" id="myRange"  onchange="changeProgressBar()">
  <p> <span id="demo"></span></p>
</div>
    <!-- <div class="slider">
      <vue-slider v-model="value" width="210px" />
    </div> -->


      <div class="button-group" >
        <vs-button-group>
          <vs-button  color="#42b983"> <i class="fa fa-step-backward"></i> </vs-button>
          <vs-button  color="#42b983" @click="playVideo"><i class="fa fa-play"></i> </vs-button>
           <vs-button  color="#42b983" @click="pauseVideo"><i class="fa fa-pause"></i> </vs-button>
          <vs-button  color="#42b983" > <i class="fa fa-step-forward"></i> </vs-button>
          <vs-button  color="#42b983" > <i class="fa fa-random"></i> </vs-button>
           <vs-button  color="#42b983"> <i class="fa fa-share"></i> </vs-button>
             <vs-button  color="#42b983"> <i class="fa fa-heart"></i> </vs-button>
          <vs-button  color="#42b983" @click="activePlayer = !activePlayer">

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
     
      playerVars:{
        autoplay:1,
         controls:0
      },
      
      
       id:"2Z4m4lnjxkY",
      activePlayer: true,
     
        
        activeShare:false,
        previousIndex :0,
        
      
    };
  },


  methods: {

 playVideo() {

  //  this.player.loadPlaylist({playlist: ['UA_yqByuFP4', "2Z4m4lnjxkY","Mp4D0oHEnjc"] })
   this.player.playVideo()


      // if(this.newVideoId == ""){
      //    this.newVideoId = this.videoIds[0];
      // }
      // console.log(this.newVideoId)
      // // this.player.playVideo()
      //  this.player.loadVideoById(this.videoIds[0])
   
    //  this.player.loadPlaylist({playlist: ['UA_yqByuFP4', "2Z4m4lnjxkY"] })
    

    }
    
  },
   pauseVideo(){
     this.player.pauseVideo()
   },
   computed: {
    player() {
      return this.$refs.youtube.player
    }
  
  }
 
  // playnext: function(){
      
  //    this.player.loadPlaylist({playlist: ['UA_yqByuFP4', "2Z4m4lnjxkY","Mp4D0oHEnjc"] })
  
  //   // player.loadPlaylist(playlist, this.previousIndex+1)
  // },
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

#video{
margin-bottom: 200px;
  margin-left: 10px;
}

.button-group{
  float: left;

  
 
 
}
.slider{
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
  -webkit-transition: .2s;
  transition: opacity .2s;
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
 @media  screen and (min-width: 820px ) {
  .playerDiv {
   margin-top: 600px 
  }
}

/* @media only screen and (min-height: 1440px) {
  
   .playerDiv{
  margin-top: 630px  
   }
  } */



</style>