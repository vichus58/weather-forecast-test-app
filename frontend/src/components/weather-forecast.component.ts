import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { mapGetters, mapState, useStore } from 'vuex';

@Options({
  props: {
  },
  computed: {
    ...mapGetters({
      weatherReport: 'getWeatherResult'
    }),
    ...mapState([
    // map this.count to store.state.count
    'selectedPlace'
    ])
  },
  watch: {
    selectedPlace: {
      handler(val) {
        this.updateWeatherInfo(val.lat, val.lng)
      }
    }
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  store = useStore()

  errorMsg = {}

  dataLabels = {
    temperature: {
      label: 'Temperature',
      unit: 'C'
    },
    windspeed: {
      label: 'Wind speed',
      unit: 'm/s'
    },
    winddirection: {
      label: 'Wind direction',
      unit: 'C'
    },
    weathercode: {
      label: 'Weather code',
      unit: ''
    },
    time: {
      label: 'Time',
      unit: ''
    }
  }
   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    this.weatherService.getWeatherForecast(52.52, 13.419998).then((res) => {
      console.log(res);
    });
  }

  

  updateWeatherInfo(lat: number, lng: number) {
    this.errorMsg = {}
    this.weatherService.getWeatherForecast(lat, lng).then((res) => {
      this.store.commit('setWeatherResult', res)
    }).catch((err) => {
      this.errorMsg = { ...err, ...{ error: true} };
    });
  }

}


