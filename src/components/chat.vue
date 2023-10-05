<template>
  <div
    class="chat bg-green py-2 px-5 rounded-pill text-white d-flex align-items-center cursor-pointer"
    data-bs-toggle="modal"
    data-bs-target="#contactMe"
  >
    <span class="d-flex font-size-28">
      <whatsapp />
    </span>
    <span class="ms-2">
      {{ $t('chat_with_manager') }}
    </span>
  </div>
  <div
    id="contactMe"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="contactMe"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content w-unset">
        <contact-me-modal />
      </div>
    </div>
  </div>
</template>

<script>
import whatsapp from "@/assets/icons/whatsapp.vue";
import ContactMeModal from "@/components/ContactMeModal.vue";

export default {
  components: {
    whatsapp,
    ContactMeModal
  }

};
</script>

<style lang="scss" scoped>
.chat{
  position: fixed;
  bottom: 5%;
  right: 5%;
}
</style>
