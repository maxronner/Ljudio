<template>
  <div >
      <Login style="float: right; margin-top: 20px"></Login>
      <Welcome></Welcome>

<div class="grid">
  <vs-row style="justify-content: center;">
    <Album></Album>


  </vs-row>
  


  <SearchResults></SearchResults>
</div>
  
    <!-- <v-tour name="myTour" :steps="steps"></v-tour> -->

  </div>
</template>

<script>
//import Router from 'vue-router'
//import Welcome from '../components/Welcome'
// eslint-disable-next-line no-unused-vars
//import test from '../components/Login'
import Login from '../components/Login'
//import Album from '../components/Album'



import SearchResults from '../components/SearchResults'
export default {
  name: 'HelloWorld',
  props: {
    
    msg: String
  },
 
 
  components: {
    Login,
    //Welcome,
    //Album,
    SearchResults
  },
   
       data () {
      return {
        active: false,
        num: 2,
          num2: 10,
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '#v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '#v-step-2',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
     mounted: function () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>