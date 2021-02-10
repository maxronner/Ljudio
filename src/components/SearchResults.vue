<template>
    <div class="center">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'song')">
              Låt
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'album')">
              Album
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'artist')">
              Artist
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getSearch(users, search)"
            :data="tr"
          >
            <vs-td>
              {{ tr.song }}
            </vs-td>
            <vs-td>
            {{ tr.album }}
            </vs-td>
            <vs-td>
            {{ tr.artist }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </template>


  <script>
    export default {
      data:() => ({
        search: '',
        users: [
          {
            "song": "I love you",
            "album": "Love",
            "artist": "MG",
          },
          {
            "song": "You love me",
            "album": "Html",
            "artist": "Andre",
          },
          {
            "song": "I hate you",
            "album": "Hate",
            "artist": "Stev",
          },
          {
            "song": "You hate me",
            "album": "CSS",
            "artist": "Saimo",
          }
        ]
      })
    }
    </script>

    <style scoped>
        .center{
            width: 100%;
            height: 100%;
            background-color:  #262729;
            color: #42b983;
        }
    </style>