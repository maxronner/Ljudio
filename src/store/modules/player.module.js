export const player = {
    state: {
        activePlaylist: null,
        currentlyPlaying: null
    },
    actions: {
        async fetchPlaylistContent() {
            //API call
        },
        selectSong({ commit }, message) {
            commit('selectSong', message)
        },
        nextSong({ commit }) {
            let nextSong = this.activePlaylist[this.currentlyPlaying.index + 1]
            commit('nextSong', nextSong)
        },
        previousSong({ commit }) {
            let previousSong = this.activePlaylist[this.currentlyPlaying.index - 1]
            commit('previousSong', previousSong)
        }
    },
    mutations: {
        selectSong(state, message) {
            state.currentlyPlaying = message
        },
        nextSong(state, message) {
            state.currentlyPlaying = message
        },
        previousSong(state, message) {
            state.currentlyPlaying = message
        }
    }
}