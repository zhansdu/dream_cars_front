<template>
  <div class="padding">
    <filter-div class="my-5" />
    <div class="mb-5">
      <div
        class="row flex-wrap font-size-20"
      >
        <div
          v-for="(car,index) in search_cars"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <car-card
            :car="car"
            class="m-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import filter from "@/components/filterComponent";
import CarCard from "@/components/carCard.vue";
import { mapGetters } from "vuex";
import { get } from "@/services/ApiService";
import store from "@/store";
export default {
  components: {
    filterDiv: filter,
    CarCard
  },
  computed: {
    ...mapGetters(["search_cars", "carParams"])
  },
  created () {
    console.log(this.search_cars);
    if (this.search_cars.length <= 0) {
      get("/cars", this.carParams).then(res => {
        if (res.data.results != null & res.data.results !== undefined) {
          store.commit("setSearchCars", res.data.results);
        } else {
          store.commit("setSearchCars", res.data);
        }
      });
    }
  }

};
</script>
<style lang="scss" scoped>

</style>
