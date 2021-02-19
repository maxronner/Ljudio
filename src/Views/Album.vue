<template>
  <!-- Image of album -->
  <div class="center">
    <vs-card type="2" style="margin-bottom: 20px; margin-left: 75px">
      <template #title>
        <h3>The Goat</h3>
      </template>
      <template #img>
        <img
          src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/zvajn6grwv2fn5u2yd7g/polo-goat"
          alt=""
        />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
    </vs-card>
    <!-- List of songs in album -->
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th
            style="background-color: #18181a"
            sort
            @click="users = $vs.sortData($event, users, 'track')"
          >
            #
          </vs-th>
          <vs-th
            style="background-color: #18181a"
            sort
            @click="users = $vs.sortData($event, users, 'name')"
          >
            Namn
          </vs-th>
          <vs-th
            sort
            style="background-color: #18181a"
            @click="users = $vs.sortData($event, users, 'songLength')"
          >
            Längd
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in $vs.getSearch(users)" :data="tr">
          <vs-td style="text-align: left">
            {{ tr.track }}
          </vs-td>
          <vs-td style="text-align: left">
            {{ tr.name }}
          </vs-td>
          <vs-td style="text-align: left">
            {{ tr.songLength }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

   <script>
export default {
  data: () => ({
    users: [
      {
        track: 1,
        songLength: "2:30",
        name: "Leanne Graham",
      },
      {
        track: 2,
        songLength: "3:33",
        name: "Ervin Howell",
      },
      {
        track: 3,
        songLength: "3:10",
        name: "Clementine Bauch",
      },
      {
        track: 4,
        songLength: "3:22",
        name: "Patricia Lebsack",
      },
      {
        track: 5,
        songLength: "2:10",
        name: "Chelsey Dietrich",
      },
      {
        track: 6,
        songLength: "2:01",
        name: "Mrs. Dennis Schulist",
      },
      {
        track: 7,
        songLength: "2:11",
        name: "Kurtis Weissnat",
      },
      {
        track: 8,
        songLength: "2:55",
        name: "Nicholas Runolfsdottir V",
      },
      {
        track: 9,
        songLength: "1:57",
        name: "Glenna Reichert",
      },
      {
        track: 10,
        songLength: "5.55",
        name: "Clementina DuBuque",
      },
    ],
  }),
};
</script>
 <style scoped>
</style>