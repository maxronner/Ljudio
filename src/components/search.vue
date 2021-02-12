<template>
  <div class="search">
    
    <vs-input   placeholder="Search" v-model="this.value" @change="search(this.value1)"/>
    <div class="center examplex">
     
    


    
   </div>
  </div>
</template>
<script src="../scripts/DAL.js">
export default {
  name: 'Search',
      data () {
      return {
       value:'',
      }
    },
    methods:{
      search(str){
    let response = fetch('http://localhost:3000/api/yt/search/' + str)
    let data =  response.json()
   console.log(data);
  }
    }
    
    
}
</script>

<style scoped>
.search{
  margin-left: 20px;
}
</style>
