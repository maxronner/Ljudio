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

    <div class="table">
      <table>
        <template>
          <vs-tr :key="i" v-for="(tr, i) in playlists" :data="tr">
            <vs-td>
              <div class="ListDisplay">
                {{ input }}
                <vs-button color="#42b983"
                  ><i class="fa fa-times"></i
                ></vs-button>
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
  name: "playlist-component",
  data() {
    return {
      input: "",
      selected: {},
      active: false,
      playlists: [],
    };
  },
  methods: {
    AddPlaylist: function () {
      this.playlists.push({ input: this.input });
    },
  },
  mounted: function () {
    this.$store.commit("GetMyplaylist");
    //console.log(this.$store.state.Myplaylist);
  },
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
.ListDisplay {
  display: flex;
  justify-content: space-between;
}
</style>