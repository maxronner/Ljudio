<template>
  <div>
    <vs-table v-model="selected">
        <template #thead>
        <vs-tr>
            <vs-th>
            Name
            </vs-th>
            <vs-th>
            Artist
            </vs-th>
            <vs-th>
            Album
            </vs-th>
        </vs-tr>
        </template>
        <template #tbody>
        <vs-tr
            :key="id"
            v-for="(tr, id) in playlistContent"
            :data="tr"
            :is-selected="selected == tr"
        >
            <vs-td>
            {{ tr.name }}
            </vs-td>
            <vs-td>
            {{ tr.artist }}
            </vs-td>
            <vs-td>
            {{ tr.album }}
            </vs-td>
        </vs-tr>
        </template>
    </vs-table>            
  </div>
</template>

<script>
export default {
 data() {
     return {
        playlistContent: [
          {
            "id": 1,
            "name": "Cool Jazz",
            "artist": "Jazzerr",
            "album": "Jazzin'"
          }
        ],
        selected: null
     }
 },
 mounted () {
    //get content from api
 },
}
</script>