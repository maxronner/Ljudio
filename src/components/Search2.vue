<template>
  <div class="search">
    
    <vs-input placeholder="Search"  v-model="Searchstr" />
    <div class="center examplex">
   </div>
  </div>
</template>
<script>
export default {
  name: 'Search2',
      data () {
      return {
       Searchstr:'',
       test:[]
      }
    },
    watch:{
      async Searchstr(){
        let datatest = [];
        console.log(this.Searchstr);
        if(this.Searchstr.length > 3){
 await fetch('http://localhost:3000/api/yt/search/' + this.Searchstr).then(response => response.json())
  .then(data => (datatest.push(data)));
window.SearchResult = datatest[0].content
console.log(window.SearchResult);

        }
      } 
    }
}
</script>

<style scoped>
.search{
  margin-left: 20px;
}
</style>