<template>
  <div class="d-flex flex-wrap flex-md-nowrap">
    <div class="border-radius-15 me-4">
      <img
        src="/images/car_saloon.svg"
      >
    </div>
    <div class="d-flex flex-column  justify-content-between">
      <div class="font-size-32 fw-bold mt-2">
        Title
      </div>
      <div class="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis quibusdam facilis voluptatibus libero quos commodi, impedit voluptatem nisi cumque atque iusto, consectetur est autem aliquam aspernatur nulla possimus quia.
      </div>
      <div class="d-flex align-items-center">
        <div class="text-lightblue me-3 mt-2">
          date
        </div>
        <div class="me-3 font-size-28">
          <whatsapp />
        </div>
        <div class="me-3 font-size-24">
          <facebook />
        </div>
        <div class="me-3 font-size-24">
          <mail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "@/assets/icons/facebook.vue";
import whatsapp from "@/assets/icons/whatsapp.vue";
import mail from "@/assets/icons/mail.vue";
export default {
  components: {
    facebook,
    whatsapp,
    mail
  }
};
</script>

<style lang="scss" scoped>

</style>
