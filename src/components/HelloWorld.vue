<template>
  <div >
  <vs-button @click="active=!active">
        Open Dialog
      </vs-button> 
  <vs-dialog v-model="active">
  <div>
   <iframe id="ytplayer" type="text/html" width="720" height="405"
src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&disablekb=1&enablejsapi=1&loop=1&iv_load_policy=3"
frameborder="0" allowfullscreen></iframe>
  </div>
</vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components:{

  },
  props: {
    msg: String
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
      this.$tours['myTour'].start()
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