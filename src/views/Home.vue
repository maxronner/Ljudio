<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '../components/partials/sidebar'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Sidebar
  }
}
</script>
