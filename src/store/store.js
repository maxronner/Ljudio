import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    SearchResult: [],
    CurrentPlaylist: [],
    Myplaylist:[],


  },
  mutations: {
    InsertResults (state,result) {
      state.SearchResult = [];
      result.forEach(element => {
        if(element.type == "video"  ){
          state.SearchResult.push(element);
        }else if(element.type == "song" ){
          state.SearchResult.push(element);
        }
      });
      var NewPlaylist = [];
    
      state.SearchResult.forEach(element => {
        // eslint-disable-next-line no-constant-condition
        if(element.type == "video"){
          NewPlaylist.push(element.videoId);
        }else if(element.type == "song" ){
          NewPlaylist.push(element.videoId);
        }
        
       });
       state.CurrentPlaylist = NewPlaylist;
       console.log(this.state.CurrentPlaylist)

    },
  
   GetMyplaylist(state) {
    let playlist = [];
       fetch("http://localhost:3000/api/playlist/4")
        .then((response) => response.json())
        .then((data) => playlist.push(data));
        var test = playlist[0];
        console.log(test[0])
        state.Myplaylist = playlist;
}
},
})