<template>
<section>
  <div class="button">
 <vs-button color= "#42b983"
    
    @click="active=!active"
  >
  Skapa spellista
  </vs-button>

    <vs-dialog v-model="active">
        <template #header>           
          <h4>
              Spellista
          </h4>
        </template>
          <div>
          <vs-input v-model="input" block >
          </vs-input>
          <vs-button @click="AddPlaylist"  color= "#42b983"
    
 
  >
  Lägg till
  </vs-button>

        
        </div>

      </vs-dialog>


       <!-- <vs-dialog >
        <template #header>           
          <h4>
              Spellista
          </h4>
        </template>
          <div>
          <vs-input v-model="input"  block >
          </vs-input>
          <vs-button  color= "#42b983"
    
  >
  copy
  </vs-button>

        
        </div>

      </vs-dialog> -->
  </div>
 
  <div class="table" style="overflow-y: scroll;width:200px; height: 200px;">
    <table>
      <template>
        <vs-tr
          :key="i"
          v-for="(tr, i) in playlists"
          :data="tr"
         
        >
          <vs-td  style="width:200px;">
            <div class="ListDisplay">
            {{ input}}
            <vs-button style="float:right;   width:25px; height: 20px;"  color= "#42b983"><i class="fa fa-times" ></i></vs-button>
            
            </div>
          
          </vs-td>
        </vs-tr>
      </template>
    </table>
  </div>
</section>
</template>

<script>
export default {
  name: 'playlist-component',
  data() {
    return {
       input:"",
      selected: {},
      active: false,
       
      playlists: [
     
      
      ]
    }
    
  },
  methods: {
    AddPlaylist: function () {
    //   // this.warningsContainer.push()
      this.playlists.push({input: this.input})
   },
    //  deleteplayList() {
    //   this.$store.commit("removePlayList", this.movie);
    // },
    // Deleteplaylist( playlistToRemove) {
    //   this.playlists = this.playlists.filter((playlist) => playlistToRemove !== playlist);
    // },
      }
}
</script>

<style>
.button{
  margin-left: 15px;
  margin-top: 10px;
}
.table{
   margin-left: 20px;
   margin-top: 20px;
}
</style>