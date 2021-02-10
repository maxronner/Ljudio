
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="iframe">
      <iframe width="420" margin-left="3000" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
    </div>

    <div class="slider">
      <vue-slider v-model="value" width="560px" />
    </div>

  
      <div class="button-group" >
        <vs-button-group>
          <vs-button> <i class="fa fa-step-backward"></i> </vs-button>
          <vs-button><i class="fa fa-play"></i> </vs-button>
          <vs-button><i class="fa fa-step-forward"></i> </vs-button>
          <vs-button><i class="fa fa-random"></i> </vs-button>
          <vs-button @click="activePlayer = !activePlayer">
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
.ytp-cued-thumbnail-overlay-image{
  float: right;
}
.iframe.iframe {
  margin-top: 30px;
}

.picture {
  width: 150px;
  height: 100px;
}
.btn {
  background-color: rgb(17, 16, 16);
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  
}
.button-group{
  float: left;
}





</style>