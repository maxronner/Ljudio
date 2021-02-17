<template>
  <div class="search">
    <vs-input placeholder="Search" v-model="Searchstr" />
    <div class="center examplex"></div>
  </div>
</template>
<script>
export default {
  name: "Search2",
  data() {
    return {
      Searchstr: "",
      test: [],
    };
  },
  methods: {
    searchTimeOut() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.testacb();
      }, 800);
    },
    async testacb() {
      let datatest = [];
      if (this.Searchstr.length > 3) {
        await fetch("http://localhost:3000/api/yt/search/" + this.Searchstr)
          .then((response) => response.json())
          .then((data) => datatest.push(data));
        this.$store.commit("InsertResults", datatest[0].content);
      }
    },
  },
  watch: {
    async Searchstr() {
      this.searchTimeOut();
    },
  },
};
</script>
<style scoped>
.search {
  margin-left: 20px;
}
</style>