import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPlace: {
      lat: '',
      lng: ''
    }
  },
  getters: {
    getSelectedPlace(state) {
      return state.selectedPlace
    }
  },
  mutations: {
    setSelectedPlace(state, payload) {
      state.selectedPlace = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
