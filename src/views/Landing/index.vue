<template>
  <div class="padding">
    <div class="d-flex flex-column">
      <!-- mashinka v nachale -->
      <div class="my-5">
        <div
          class="bg-blue d-flex align-items-center flex-wrap border-radius-24 bg-image p-2 p-md-5 py-3 text-white"
          style="background-image: url('/images/circles.svg');"
        >
          <div class="p-2 p-lg-5 text-center text-xxl-left m-auto">
            <div class="font-size-48 text-capitalize">
              {{ $t('landing.title') }}
            </div>
            <div class="font-size-20 mt-3">
              {{ $t('landing.title_description') }}
            </div>
            <div class="mt-4">
              <router-link
                :to="{name:'results'}"
                target="_blank"
                class="btn bg-white text-blue px-4 py-2"
              >
                {{ $t('landing.show_more') }}
              </router-link>
            </div>
          </div>
          <div class="m-auto">
            <img
              class="w-100"
              src="/images/car.png"
              alt="A car"
            >
          </div>
        </div>
      </div>
      <!-- /mashinka -->

      <!-- filter -->
      <filter-div class="mb-5" />
      <!-- /filter -->

      <!-- new cars -->
      <div class="my-4">
        <span class="font-size-40 fw-bold">
          {{ $t('landing.new_cars') }}
        </span>
      </div>
      <div class="mb-5">
        <div class="row flex-wrap">
          <div
            v-for="(car,index) in popular_cars"
            :key="index"
            class="d-flex col-12 col-md-6 col-lg-4 col-xl-3"
          >
            <car-card
              :car="car"
              class="m-2"
            />
          </div>
        </div>
      </div>
      <!-- /new cars -->
      <!-- car categories -->
      <div class="bg-white p-4 border-radius-10">
        <div class="font-size-24 fw-bold mb-4">
          {{ $t('landing.car_by_category') }}
        </div>
        <div>
          <tabs
            :tabs="tabs"
            :current-tab="currentTab"
            @onClick="handleClick"
          />
        </div>
        <div class="d-flex justify-content-between flex-wrap mt-3">
          <div
            v-for="index in [1,2,3,4,5,6]"
            :key="index"
            class="bg-lightgrey d-flex flex-column align-items-center p-4 m-auto my-2 m-md-2"
          >
            <img
              src="/icons/car-estate.svg"
              alt=""
            >
            <div class="mt-1">
              Deshevaya mashina {{ index }}
            </div>
          </div>
        </div>
      </div>
      <!-- /car categories -->

      <!-- news -->
      <div class="d-flex flex-column my-5">
        <div class="d-flex justify-content-between align-items-center">
          <div class="font-size-40 fw-bold">
            {{ $t('landing.news') }}
          </div>
          <div>
            <button class="border border-blue outline-blue text-blue">
              {{ $t('landing.see_all_news') }}
            </button>
          </div>
        </div>
        <div
          v-for="(event,index) in news"
          :key="index"
          class="mt-4"
        >
          <news-card
            :event="event"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import CarCard from "@/components/carCard.vue";
import tabs from "@/components/tabs.vue";
import newsCard from "@/components/newsCard.vue";
import filter from "@/components/filterComponent.vue";

import { mapGetters } from "vuex";

import { get } from "@/services/ApiService";
import store from "@/store";

import { addLang } from "@/locale";
export default defineComponent({
  components: {
    CarCard,
    tabs,
    newsCard,
    FilterDiv: filter
  },
  data () {
    return {
      tabs:
      [{
        title: "Tabka",
        value: "tab1"
      },
      {
        title: "eshe Tabka",
        value: "tab2"
      },
      {
        title: "eshe Tabka",
        value: "tab3"
      },
      {
        title: "eshe Tabka",
        value: "tab4"
      },
      {
        title: "eshe Tabka",
        value: "tab5"
      },
      {
        title: "eshe Tabka",
        value: "tab6"
      },
      {
        title: "eshe Tabka",
        value: "tab7"
      },
      {
        title: "eshe Tabka",
        value: "tab8"
      },
      {
        title: "eshe Tabka",
        value: "tab9"
      },
      {
        title: "eshe Tabka",
        value: "ta0"
      }
      ],
      currentTab: "tab1"
    };
  },
  computed: {
    ...mapGetters(["popular_cars", "carParams", "news"])
  },
  created () {
    if (store.getters.popular_cars.length <= 0) {
      get("/cars").then((res) => {
        store.commit("setPopularCars", res.data);
      });
    }

    get("/news").then((res) => {
      const news = res.data;

      // add dsecription translations
      news.map(event => {
        event.description_ru = event.description;
        event.description_kz = event.description_kk;
        delete event.description;
        delete event.description_kk;
        return event;
      });
      const newsT = { en: [], ru: [], kz: [] };
      for (let i = 0; i < news.length; i++) {
        const event = news[i];
        for (const lang in newsT) {
          newsT[lang].push({ description: event["description_" + lang] });
        }
      }
      for (const lang in newsT) {
        addLang(lang, { news: newsT[lang] });
      }
      // /add description translations

      store.commit("setNews", news);
    });
  },
  methods: {
    handleClick (newTab) {
      this.currentTab = newTab;
    }
  }
});
</script>
<style scoped type="scss">
.bg-image{
  width:100%;
  min-height: 18.75em;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
