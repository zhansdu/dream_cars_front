<template>
  <form
    class="d-flex flex-column align-items-center py-5 px-4 circled"
    @submit.prevent="sendIt"
  >
    <div class="text-blue text-center max-width font-size-24">
      {{ $t('main_view.please_contact_us') }}
    </div>
    <div class="mt-3 w-100">
      <input
        id="phone"
        class="w-100 font-size-18"
        type="tel"
        pattern="(\+7|8)[0-9]{10}"
        required
      >
    </div>
    <div class="mt-3">
      <button>{{ $t('main_view.send') }}</button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    sendIt () {
    }
  }
};
</script>

<style lang="scss" scoped>
.max-width{
  max-width: 40em;
}
.circled{
  position: relative;
  overflow: hidden;
}
.circled::before{
  content: "";
  position: absolute;
  left:-9.375em;
  top: -9.375em;
  width: 18.75em;
  height: 18.75em;
  border:2.5em solid #3563E90F;
  border-radius: 100%;
}
.circled::after{
  content: "";
  position: absolute;
  right:-150px;
  bottom: -150px;
  width: 300px;
  height: 300px;
  border:40px solid #3563E90F;
  border-radius: 100%;
}
</style>
