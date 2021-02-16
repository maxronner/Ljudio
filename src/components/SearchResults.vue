<template>
  <div class="center">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th >
            Namn
          </vs-th>
          <vs-th >
            Artist
          </vs-th>
          <vs-th >
            Typ
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="tr" v-for="tr in results">
          <vs-td style="text-align: left">
            {{ tr.name }}
          </vs-td>
          <vs-td style="text-align: left">
            {{ tr.author }}
          </vs-td>
          <vs-td style="text-align: left">
            {{ tr.type }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>


  <script>
export default {
  data: () => ({
    search: "",
    results: window.SearchResult,
  }),
    watch: {
     ttest(){

       
        //fixa så att listan uppdateras, listan sparas i results men uppdateras inte efter man sökt i sökrutan.
        
      }
    },
  mounted:function () {
     
    }
};
</script>

    <style scoped>
.center {
  width: 100%;
  height: 100%;
  background-color: #262729;
  color: #42b983;
}
</style>