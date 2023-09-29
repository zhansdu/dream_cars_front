<template>
  <div class="d-flex flex-column bg-white p-5 border-radius-10">
    <div class="d-flex justify-content-between">
      <div>
        <div class="font-size-20 fw-bold">
          {{ car.brand }}
        </div>
        <div class="font-size-14 text-grey mt-1">
          {{ car.model }}
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
    <div class="p-4 mt-5">
      <img
        class="w-100"

        src="/images/car.png"
      >
    </div>
    <div class="d-flex justify-content-around">
      <div class="me-2">
        <img src="/icons/gas-station.svg">  {{ car.fuel }}
      </div>
      <div class="me-2">
        <img src="/icons/transmission.svg"> {{ car.steering }}
      </div>
      <div>
        <img src="/icons/profile-2user.svg"> {{ car.capacity }}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div>
        <span class="font-size-20 fw-bold">
          ${{ car.price }}/
        </span>
        <span class="font-size-14 text-darkgrey">
          {{ car.duration }}
        </span>
      </div>
      <div>
        <router-link
          class="btn bg-blue text-white px-4 py-2"
          :to="{name:'full_info'}"
        >
          {{ $t("rent") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      default () {
        return {
          brand: "Koenigsegg",
          model: "Sport",
          fuel: "80L",
          steering: "Manual",
          capacity: "2 people",
          price: "80",
          duration: "hour"
        };
      }
    }
  }

};
</script>

<style lang="scss" scoped>

</style>
