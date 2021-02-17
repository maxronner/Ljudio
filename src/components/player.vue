
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- <div class="iframe">
      <iframe width="420" margin-left="3000" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
    </div>  -->

    <div class="slider">
      <vue-slider v-model="value" width="200px" />
    </div>


      <div class="button-group" >
        <vs-button-group>
          <vs-button  color="#42b983"> <i class="fa fa-step-backward"></i> </vs-button>
          <vs-button  color="#42b983" ><i class="fa fa-play"></i> </vs-button>
          <vs-button  color="#42b983"><i class="fa fa-step-forward"></i> </vs-button>
          <vs-button  color="#42b983"> <i class="fa fa-random"></i> </vs-button>
          <vs-button  color="#42b983" @click="activePlayer = !activePlayer">
            <i class="fa fa-step-backward"></i>
          </vs-button>
        </vs-button-group>
      </div>
   
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
      activePlayer: true,
    };
  },
};
</script>

<style>

/* .iframe.iframe {
 
} */



.button-group{
  float: left;
  margin-left: 20px;
 
}
.slider{
  margin-top: 200px;
  margin-left: 20px;
}





</style>