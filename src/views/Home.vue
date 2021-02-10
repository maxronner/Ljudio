<template>
  <div class="home">
    <SearchResults msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchResults from '@/components/SearchResults.vue'

export default {
  name: 'Home',
  components: {
    SearchResults
  }
}
</script>
