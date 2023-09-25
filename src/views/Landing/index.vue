<template>
  <div class="d-flex flex-column">
    <!-- mashinka v nachale -->
    <div class="padding my-5">
      <div
        class="bg-blue d-flex align-items-center flex-wrap justify-content-center border-radius-24 bg-image p-5 py-3 text-white"
        style="background-image: url('/images/circles.svg');"
      >
        <div class="p-5 text-center text-xxl-left ">
          <div class="font-size-48 text-capitalize">
            zagolovok v 2 stroki
          </div>
          <div class="font-size-20 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>
            <button class="bg-white text-blue">
              Show more cars
            </button>
          </div>
        </div>
        <div class="ms-xxl-auto pe-5">
          <img
            src="/images/car.png"
            alt="A car"
          >
        </div>
      </div>
    </div>
    <!-- /mashinka -->

    <!-- filter -->
    <div class="padding">
      <div class="border-radius-10 bg-white mb-5">
        <div class="p-3">
          <div class="font-size-24 fw-bold">
            <input type="checkbox">
            Podobrat' avto
          </div>
          <form
            action=""
          >
            <div class="d-flex justify-content-between my-3">
              <div>
                <div>
                  Marka
                </div>
                <div class="dropdown">
                  <div
                    id="dropdownMenuButton1"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </div>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Action</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Another action</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between my-3">
              <div class="d-flex">
                <toggle />
                <div class="ms-2">
                  slider bezprobega
                </div>
              </div>
              <div>
                <button>Naiti</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /filter -->
    <!-- new cars -->
    <div class="padding mb-5">
      <div class="row flex-wrap">
        <div
          v-for="index in [1,2,3,4,5,6,7,8]"
          :key="index"
          class="col-12 col-md-6 col-lg-4 col-xl-3"
        >
          <car-card class="m-2" />
        </div>
      </div>
    </div>
    <!-- /new cars -->
    <!-- car categories -->
    <div class="padding">
      <div class="bg-white p-4 border-radius-10">
        <div class="text-bold">
          Podobrat' avto po kategoriam
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
            class="bg-lightgrey d-flex flex-column align-items-center p-4 m-2"
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
      <div />
    </div>
    <!-- /car categories -->

    <!-- news -->
    <div class="d-flex flex-column padding my-5">
      <div class="d-flex justify-content-between align-items-center">
        <div class="font-size-40 fw-bold">
          Novosti
        </div>
        <div>
          <button class="border border-blue outline-blue text-blue">
            Posyrkat' vse
          </button>
        </div>
      </div>
      <div
        v-for="index in [1,2,3]"
        :key="index"
        class="mt-4"
      >
        <news-card />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import toggle from "@/components/toggle.vue";
import CarCard from "@/components/carCard.vue";
import tabs from "@/components/tabs.vue";
import newsCard from "@/components/newsCard.vue";

export default defineComponent({
  components: {
    toggle,
    CarCard,
    tabs,
    newsCard
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
      }
      ],
      currentTab: "tab1"
    };
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
.max-width-200px{
  max-width: min(40%,10em);
}
</style>
