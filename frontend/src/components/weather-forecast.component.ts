import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Options({
  props: {
  },
  computed: mapState([
    // map this.count to store.state.count
    'selectedPlace'
  ]),
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

   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    this.weatherService.getWeatherForecast(52.52, 13.419998).then((res) => {
      console.log(res);
    });
  }

  

  updateWeatherInfo(lat: number, lng: number) {
    this.weatherService.getWeatherForecast(lat, lng).then((res) => {
      console.log(res);
    });
  }

}


