<template>
  <div class="padding">
    <filter-div class="my-5" />
    <div class="mb-5">
      <div class="row flex-wrap font-size-20">
        <div
          v-for="index in [1,2,3,4,5,6,7,8,9]"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <car-card class="m-2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import filter from "@/components/filterComponent";
import CarCard from "@/components/carCard.vue";
export default {
  components: {
    filterDiv: filter,
    CarCard
  }

};
</script>
<style lang="scss" scoped>

</style>
