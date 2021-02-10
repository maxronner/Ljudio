<template>
  <div id="app">
      <div class="grid">
      <vs-row id="main">
        <router-view/>
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
