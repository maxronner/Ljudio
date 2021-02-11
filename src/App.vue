<template>
  <div id="app">
      <div class="grid">
      <vs-row id="main" style="width:100%">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2" style="height:100%;">
          <!-- SIDEBAR -->
           <vs-sidebar id="sidebar"
        absolute
        square
        v-model="active"
        open
        >
           </vs-sidebar>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" style="height:100%" vs-align="center"  w="10" >
          <router-view/>
        </vs-col>
       
      </vs-row>
    </div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #262729;
 
}
#sidebar{
  background-color:#18181a
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