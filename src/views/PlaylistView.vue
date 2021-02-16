<template>
  <div>
    <vs-table>
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
        >
            <vs-td>
            {{ tr.name }}
            </vs-td>
            <vs-td>
            {{ tr.email }}
            </vs-td>
            <vs-td>
            {{ tr.id }}
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
        ]
     }
 },
 mounted () {
    //get content from api
 },
}
</script>