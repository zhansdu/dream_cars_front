<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white border padding position-sticky top-0 py-3"
    style="z-index: 2"
  >
    <div class="d-flex flex-wrap flex-fill justify-content-between align-items-center flex-lg-nowrap">
      <!-- logo -->
      <router-link
        class="navbar-brand"
        :to="'/'"
      >
        <div class="font-size-32 text-uppercase cursor-pointer">
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
          class="cursor-pointer fw-normal text-decoration-none me-4 text-black "
          :to="link.link"
        >
          {{ $t(link.name) }}
        </router-link>
      </div>

      <!-- contacts buttons -->
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center">
          <button
            class="d-flex align-items-center py-3"
            data-bs-toggle="modal"
            data-bs-target="#contactMe"
          >
            <phone class="font-size-20" />
            <span class="ms-2">
              {{ $t('call') }}
            </span>
          </button>
          <div class="d-none d-md-flex align-items-center">
            <whatsapp
              class="font-size-36 text-green mx-2"
            />
            <facebook
              class="font-size-32 text-blue"
            />
          </div>
        </div>

        <div class="d-none d-md-flex align-items-center mt-3">
          <div class="d-flex align-items-center border-end pb-1 pe-2">
            <location class="font-size-24 " />
            <div class="ms-2">
              Locations
            </div>
          </div>
          <div class="d-flex align-items-center border-end pb-1 pe-2 mx-2">
            <globe class="font-size-24 " />
            <dropdown
              class="ms-1"
              :title="{
                title:$i18n.locale.toUpperCase()
              }"
              :links="languages"
              :linkOnClick="changeLocale"
            />
          </div>
          <div class="d-flex align-items-center pb-1">
            <dollar class="font-size-24 " />
            <div class="ms-2">
              Currencies
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
import { defineComponent } from "vue";

import phone from "@/assets/icons/phone";
import whatsapp from "@/assets/icons/whatsapp";
import facebook from "@/assets/icons/facebook";
import location from "@/assets/icons/location";
import globe from "@/assets/icons/globe";
import dollar from "@/assets/icons/dollar";

import dropdown from "@/components/dropdown";

import ContactMeModal from "@/components/ContactMeModal.vue";

import { get } from "@/services/ApiService";
import { setLocale } from "@/services/LocaleService";

const links = [
  {
    name: "main_view.home",
    link: "/"
  },
  {
    name: "main_view.catalogue",
    link: "/results"
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
const languages = {
  array: [
    {
      title: "en"
    },
    {
      title: "ru"
    },
    {
      title: "kz"
    }
  ]
};
export default defineComponent({
  components: {
    phone,
    whatsapp,
    facebook,
    location,
    globe,
    dollar,

    dropdown,

    ContactMeModal
  },
  data () {
    return {
      links,
      languages,
      exchange_rates: []
    };
  },
  created () {
    this.getExchangeRates();
  },
  methods: {
    changeLocale (locale) {
      setLocale(locale.title);
    },
    getExchangeRates () {
      get("/utils/exchangerates/").then(res => {
        this.exchange_rates = res.data;
      });
    }
  }
});
</script>

<style scoped>
</style>
