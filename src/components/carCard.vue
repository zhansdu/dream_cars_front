<template>
  <div class="d-flex flex-column bg-white p-5 border-radius-10">
    <div class="d-flex justify-content-between">
      <div>
        <div class="font-size-20 fw-bold">
          {{ car.brand.name + ' ' + car.name }}
        </div>
        <div class="font-size-14 text-grey mt-1">
          {{ car.category.name }}
        </div>
      </div>
      <div>
        <!-- <img
          src="/icons/like_red.svg"
        > -->
        <!-- <img
          src="/icons/like_white.svg"
        > -->
      </div>
    </div>
    <div class="d-flex flex-column">
      <div
        v-if="car.images?.length>0"
        class="p-1 my-4"
      >
        <div
          class="bg-image w-100 h-50"
          :style="'background-image: url('+car.images[0]?.attachment+')'"
        />
      </div>
      <div
        v-else
        class="p-md-4 p-2 mt-5"
      >
        <img
          class="w-100"
          src="/images/car.png"
        >
      </div>
      <div class="d-flex justify-content-around">
        <div class="me-2">
          <img src="/icons/gas-station.svg">  {{ car.tank_volume }} L
        </div>
        <div class="me-2">
          <img src="/icons/transmission.svg"> {{ $t(car.transmission_type) }}
        </div>
        <div>
          <img src="/icons/profile-2user.svg"> {{ car.capacity + ' ' + $t('car.people') }}
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mt-4">
      <div>
        <span class="font-size-20 fw-bold">
          {{ getPrice(car.price) }}/
        </span>
        <span class="text-darkgrey font-size-14"> {{ $t('day') }}</span>
      </div>
      <div>
        <router-link
          class="btn bg-blue text-white px-4 py-2"
          :to="{name:'full_info',params:{id:car.id}}"
        >
          {{ $t("rent") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPrice } from "@/services/ExchangeRateService";
import { mapGetters } from "vuex";
export default {
  props: {
    car: {
      type: Object,
      default () {
        return {
          name: "Koenigsegg",
          category: {
            name: "Sport"
          },
          brand: {
            name: ""
          },
          tank_volume: "80",
          transmission_type: "Manual",
          capacity: "2",
          price: "80"
        };
      }
    }
  },
  data () {
    return {
      getPrice
    };
  },
  computed: {
    ...mapGetters(["currentCurrency"])
  }

};
</script>

<style lang="scss" scoped>
.bg-image{
  height:4em;
}
</style>
