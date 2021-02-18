<template>
  <div>
    <Login style="float: right; margin-top: 20px"></Login>
    <div class="grid">
      <SearchResults></SearchResults>
    </div>
    <!-- <v-tour name="myTour" :steps="steps"></v-tour> -->
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Login from "../components/Login";
import SearchResults from "../components/SearchResults";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Login,
    SearchResults,
  },

  data() {
    return {
      active: false,
      test: false,
      num: 2,
      num2: 10,
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          content: `Discover <strong>Vue Tour</strong>!`,
        },
        {
          target: "#v-step-1",
          content: "An awesome plugin made with Vue.js!",
        },
        {
          target: "#v-step-2",
          content:
            "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
          params: {
            placement: "top",
          },
        },
      ],
    };
  },
  mounted: function () {
    if(sessionStorage.getItem("LoggedIn") == undefined){
      this.$router.replace("/")
    }
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>