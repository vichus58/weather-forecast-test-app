import { createStore } from 'vuex'

interface CurrentWeather {
  time: string
}

interface Result {
  current_weather: CurrentWeather
}

export default createStore({
  state: {
    selectedPlace: {
      lat: '',
      lng: ''
    },
    weatherForecastResult: < Result > { },
    loading: false
  },
  getters: {
    getSelectedPlace(state) {
      return state.selectedPlace
    },
    getWeatherResult(state) {
      let weatherResult = {...state.weatherForecastResult}
      if(weatherResult.current_weather && weatherResult.current_weather.time) {
        weatherResult.current_weather.time = weatherResult.current_weather.time.split('T').join(' ')
      }
      return weatherResult
    },
    getLoading(state) {
      return state.loading
    },
  },
  mutations: {
    setSelectedPlace(state, payload) {
      state.selectedPlace = payload
    },
    setWeatherResult(state, payload) {
      state.weatherForecastResult = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
