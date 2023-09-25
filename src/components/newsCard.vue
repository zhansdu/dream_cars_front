<template>
  <div class="d-flex">
    <div class="border-radius-15 me-4">
      <img
        src="/images/car_saloon.svg"
      >
    </div>
    <div class="d-flex flex-column justify-content-between">
      <div class="font-size-32 fw-bold">
        Title
      </div>
      <div class="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis quibusdam facilis voluptatibus libero quos commodi, impedit voluptatem nisi cumque atque iusto, consectetur est autem aliquam aspernatur nulla possimus quia.
      </div>
      <div class="d-flex ">
        <div class="text-lightblue me-3">
          date
        </div>
        <div
          v-for="index in [1,2,3]"
          :key="index"
          class="me-3"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
