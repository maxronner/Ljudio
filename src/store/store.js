import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    test:function(){},
    SearchResult: [],
    CurrentPlaylist: [],
    SelectedVideo: 0,
    CurrentVideo: 0,
    LoggedInUsername:sessionStorage.getItem("UserName"),
    LoggedIn:false,
    CurrentVideoId: "",
    Playlists:[],
  },
  mutations: {
    SetUsername(state, payload){
      state.LoggedInUsername = payload},
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
    },
    ChangeSelectedVideo(state,index){
      state.SelectedVideo = index;
      console.log("uppdaterade" + index)
    },
    IncreaseCurrentVideo(state){
      if(state.CurrentVideo < state.CurrentPlaylist.length - 1)
      state.CurrentVideo++;
    },
    DecreaseCurrentVideo(state){
      if(state.CurrentVideo > 0)
      state.CurrentVideo--;
    },
    test(state,index){
      state.CurrentVideo = index;
    }
    

  }
})