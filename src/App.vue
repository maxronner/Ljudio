<template>
  <div id="app">
      <div class="grid">
      <vs-row id="main" style="width:100%">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w=2 style="height:100%;">
          <!-- SIDEBAR -->
           <vs-sidebar id="sidebar"
        absolute
        square
        open
        >

        <Search2/>
        <playlist-component/>
        <Player></Player>

            

           </vs-sidebar>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" style="height:100%; margin-left:2.5%" vs-align="center"  w="9" >
          <router-view/>
        </vs-col>
       
      </vs-row>
    </div>

  </div>
</template>

<script>

import Player from './components/player'

import PlaylistComponent from './components/PlaylistComponent'
import Search2 from './components/Search2.vue'
export default {
   components: {
     Player,
     PlaylistComponent,
      Search2
   },
    mounted: function () {
       window.LoggedIn = true;
       window.SearchResult = [];
     }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background-color: #262729;
 
}
#sidebar{
  background-color:#18181a;
  width:120%
}
#main{
  height: 100vh;
  width: 100vh;
}
body{
   margin: 0 auto;
  padding: 0;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>