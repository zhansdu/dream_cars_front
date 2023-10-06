<template>
  <div class="d-flex flex-wrap flex-md-nowrap">
    <div class="border-radius-15 me-4">
      <div
        v-if="event.image!=null"
        class="bg-image"
        :style="'background-image: url('+event.image+')'"
      />
      <img
        v-else
        src="/images/car_saloon.svg"
      >
    </div>
    <div class="d-flex flex-column  justify-content-between">
      <div class="font-size-32 fw-bold mt-2">
        {{ event.title }}
      </div>
      <div class="my-3">
        {{ $t('news[' + index +
          '].description') }}
      </div>
      <div class="d-flex align-items-center">
        <div class="text-darkgrey me-3 mt-2">
          {{ new Date(event.created_at).toDateInputValue() }}
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
  },
  props: {
    event: Object,
    index: Number
  }
};
</script>

<style scoped>
.bg-image{
  width:20vw;
  height:17vw;
}
</style>
