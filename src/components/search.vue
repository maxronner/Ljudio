<template>
  <div class="search">
    <div class="centerx icons-example">
    <vs-input icon="search" placeholder="Search" v-model="value1"/>
    <div class="center examplex">
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              Name
            </vs-th>
           
           
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in users"
            :data="tr"
          >
            <vs-td>
              {{ tr.name }}
            </vs-td>
           
          </vs-tr>
        </template>
      </vs-table>
    </div>


    
   </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  
  
      data () {
      return {
       
      }
    },
    
    
}
</script>

<style scoped>

</style>
