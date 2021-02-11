<template>
<section>
  <vs-button
    :active="active == 0"
    @click="active = 0"
  >
  Add Playlist
  </vs-button>
  <div>
    <table>
      <template>
        <vs-tr
          :key="i"
          v-for="(tr, i) in playlists"
          :data="tr"
        >
          <vs-td>
            {{ tr.name }}
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
      selected: {},
      active: false,
      playlists: [
        {
          "name": 'Playlist 1',
        },
        {
          "name": 'Playlist 2',
        }
      ]
    }
  }
}
</script>

<style>

</style>