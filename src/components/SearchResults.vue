<template>
  <div class="center">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Namn </vs-th>
          <vs-th> Artist </vs-th>
          <vs-th> Typ </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="index" v-for="(tr, index) in $store.state.SearchResult" @click="SelectVideo(index)" >
          <vs-td style="text-align: left">
            {{ tr.name }}
          </vs-td>
          <vs-td v-if="tr.type != 'song' " style="text-align: left">
            {{ tr.author }}
          </vs-td>
           <vs-td v-if="tr.type == 'song' " style="text-align: left">
            {{ tr.artist.name }}
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
    results: [],
  }),
  methods:{
    SelectVideo: function(index){
      this.$store.commit("ChangeSelectedVideo",index);
      //funkar inte
    }
  },
  mounted: function () {
    this.results = this.$store.state.SearchResult;
  },
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