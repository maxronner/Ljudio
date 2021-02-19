<template>
  <section>
    <div class="button">
      <vs-button color="#42b983" @click="active = !active">
        Skapa spellista
      </vs-button>

      <vs-dialog v-model="active">
        <template #header>
          <h4>Spellista</h4>
        </template>
        <div>
          <vs-input v-model="input" block> </vs-input>
          <vs-button @click="AddPlaylist" color="#42b983">
            Lägg till
          </vs-button>
        </div>
      </vs-dialog>
    </div>

    <!-- <div class="table">
      <table >
        <template>
          <vs-tr :key="tr.PlaylistId" v-for="tr in $store.state.Playlists" :is-selected="selecta==tr" :data="tr" >
            <vs-td style="width: 200px; height:50px;" >
              <div class="ListDisplay">
                <p>{{tr.Name}}</p>
                <vs-button
                  style="float: right; width: 25px; height: 20px"
                  color="#42b983"
                 
                  ><i class="fa fa-times"></i
                ></vs-button>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </table> -->
    <!-- </div> -->

      <div class="center" style="overflow-y:scroll;">
      <vs-table v-model="selecta" >
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
            v-for="(tr, i) in $store.state.Playlists"
            :data="tr"
            :is-selected="selecta == tr"
          >
            <vs-td>
              <p style="float:left">{{ tr.Name }}</p>
              <vs-button
                  style="float: left; width: 25px; height: 20px"
                  color="#42b983"
                 @click="DeletePlaylist(tr.PlaylistId)"
                  ><i class="fa fa-times"></i
                ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "playlist-component",
  data() {
    return {
      input: "",
      selecta:null,
      active: false,
      playlists: [],
    };
  },
  watch:{
    selecta: async function(){
     await this.ShowPlaylist();
    }
  },
  methods: {
    ShowPlaylist: async function(){  
      var videos = [];
    var temp = await fetch("http://localhost:3000/api/myplaylist/" + this.selecta.PlaylistId, {
      }).then((response) => response.json())
        .then((data) => data.recordset);
      temp.forEach(element => {
        videos.push(element.Video)
      });
      var playlistvideos = [];
      videos.forEach(video => {
        playlistvideos.push( JSON.parse(video));
      })
        this.$store.commit("InsertResults", playlistvideos);
      
    },
    AddPlaylist: async function () {
      await fetch("http://localhost:3000/api/playlist/" + this.input + "/" + parseInt(sessionStorage.getItem("Userid")), {
        method: "POST",
      }).then((response) => response);
       this.UpdatePlaylists();
    },
    DeletePlaylist: async function(PlaylistId){
            await fetch("http://localhost:3000/api/playlist/delete/" + PlaylistId, {
        method: "DELETE",
      }).then((response) => response);
       this.UpdatePlaylists();
    },
    UpdatePlaylists: async function(){
      this.playlists = await fetch("http://localhost:3000/api/playlist/" + parseInt(sessionStorage.getItem("Userid")), {
      }).then((response) => response.json())
        .then((data) => data.recordset);
        this.$store.state.Playlists = this.playlists;
    }
  },
  mounted:async function(){
        this.UpdatePlaylists();

  }
};
</script>

<style>
.button {
  margin-left: 15px;
  margin-top: 10px;
}
.table {
  margin-left: 20px;
  margin-top: 20px;
}
</style>