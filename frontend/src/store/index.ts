import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPlace: {
      lat: '',
      lng: ''
    },
    weatherForecastResult: {}
  },
  getters: {
    getSelectedPlace(state) {
      return state.selectedPlace
    },
    getWeatherResult(state) {
      return state.weatherForecastResult
    }
  },
  mutations: {
    setSelectedPlace(state, payload) {
      state.selectedPlace = payload
    },
    setWeatherResult(state, payload) {
      state.weatherForecastResult = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
