<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light border padding position-sticky top-0 py-3"
    style="z-index: 2"
  >
    <div class="d-flex flex-fill justify-content-between">
      <!-- logo -->
      <router-link
        class="navbar-brand"
        :to="'/'"
      >
        <div class="font-size-32">
          {{ $t('main_view.dream_cars') }}
        </div>
      </router-link>

      <!-- burger button on mobile screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <!-- links -->
      <div
        id="navbarScroll"
        class="collapse navbar-collapse flex-grow-0"
      >
        <div class="ms-auto" />
        <router-link
          v-for="(link,index) in links"
          :key="index"
          class="fw-normal text-decoration-none me-4 text-black "
          :to="link.link"
        >
          {{ $t(link.name) }}
        </router-link>
      </div>

      <!-- contacts buttons -->
      <div class="d-flex flex-column align-items-center">
        <button class="py-3">
          phone icon
          <span class="ms-2">
            {{ $t('main_view.call') }}
          </span>
        </button>
        <div>
          links
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from "vue";

const links = [
  {
    name: "main_view.home",
    link: "/"
  },
  {
    name: "main_view.catalogue",
    link: "/"
  },
  {
    name: "main_view.services",
    link: "/"
  },
  {
    name: "main_view.contacts",
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
</style>
