<template>
  <footer class="bg-white py-5">
    <div class="d-flex padding justify-content-between flex-grow-1">
      <!-- logo -->
      <div>
        <div class="text-blue font-size-32 text-uppercase">
          {{ $t('main_view.dream_cars') }}
        </div>
        <div class="text-darkgrey max-width-300 mt-3">
          {{ $t("main_view.vision") }}
        </div>
      </div>

      <!-- links -->
      <div class="d-flex">
        <div
          v-for="index in [1,2,3]"
          :key="index"
          class="d-flex flex-column justify-content-around mx-3"
        >
          <div class="font-size-20 mb-4">
            {{ index }}
          </div>
          <div
            v-for="l in [1,2,3,4]"
            :key="l"
            class="my-2"
          >
            <div class="text-darkgrey">
              {{ l }} child of {{ index }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border border-lightgrey my-4" />

    <!-- all rights reserved -->

    <div class="py-5 pt-3 padding d-flex justify-content-between">
      <div>
        {{ $t('main_view.all_rights',{year:new Date().getFullYear()}) }}
      </div>
      <div>
        link
        <span class="ms-4"> another link</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

const links = [
  {
    name: "main_view.home",
    link: "/"
  }
];

export default defineComponent({
  setup () {
    return {
      links
    };
  }
});
</script>

<style scoped>
.max-width-300{
  max-width: 18.75em;
}
</style>
