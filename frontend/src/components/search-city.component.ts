import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;
  store = useStore()

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.store.commit('setSelectedPlace', this.selectedPlace)
  }


}