<template>
  <div class="border-radius-10 bg-white">
    <div class="p-4 px-5">
      <div class="d-flex justify-content-between">
        <div class="font-size-24 fw-bold">
          {{ $t('find_car') }}
        </div>
        <div
          class="cursor-pointer"
          @click="showMore()"
        >
          <bars
            class="text-grey"
            :class="{'text-blue':moreShown}"
          />
        </div>
      </div>

      <form
        @submit.prevent="search()"
      >
        <div>
          <!-- front row -->
          <div class="d-flex flex-wrap justify-content-between my-3">
            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.brand') }}
              </div>
              <!-- <dropdown
                v-model="carParams.brand_name"
                class="font-size-12 mt-2 text-grey"
                :title="{title:carParams.brand_name}"
                :links="{array:car_brands}"
              /> -->
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.brand__name"
                  class="text-grey"
                  @change="getModels()"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    v-for="(item,index) in car_brands"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.model') }}
              </div>
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.model__name"
                  class="text-grey"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    v-for="(item,index) in car_models"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="vr d-none d-md-block" />

            <div class="d-flex flex-column col-12 col-md-3 mt-2">
              <div>
                {{ $t('car.year') }}
              </div>
              <div class="mt-1">
                <input
                  v-model="carParams.min_year"
                  type="text"
                  class="stick-left border-grey"
                  :placeholder="$t('from')"
                >
                <input
                  v-model="carParams.max_year"
                  class="stick-right border-grey"
                  type="text"
                  :placeholder="$t('till')"
                >
              </div>
            </div>

            <div class="vr" />

            <div class="d-flex flex-column col-12 col-md-3 mt-2">
              <div>
                {{ $t('car.price') }}
              </div>
              <div class="mt-1">
                <input
                  v-model="carParams.min_price"
                  type="text"
                  class="stick-left border-grey"
                  :placeholder="$t('from')"
                >
                <input
                  v-model="carParams.max_price"
                  class="stick-right border-grey"
                  type="text"
                  :placeholder="$t('till')"
                >
              </div>
            </div>
          </div>
          <!-- /front row -->
          <!-- back row -->
          <div
            v-if="moreShown"
            class="d-flex flex-wrap justify-content-between my-4"
          >
            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.category') }}
              </div>
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.category__name"
                  class="text-grey"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    v-for="(item,index) in car_categories"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.fuel') }}
              </div>
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.fuel_type__name"
                  class="text-grey"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    v-for="(item,index) in car_fuel"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="vr d-none d-md-block" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.transmission_type') }}
              </div>
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.transmission_type"
                  class="text-grey"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    value="auto"
                  >
                    Auto
                  </option>
                  <option
                    value="manual"
                  >
                    Manual
                  </option>
                </select>
              </div>
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('car.color') }}
              </div>
              <div class="custom_select font-size-12 mt-2">
                <select
                  v-model="carParams.color__name"
                  class="text-grey"
                >
                  <option :value="null">
                    --
                  </option>
                  <option
                    v-for="(item,index) in car_color"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="vr d-none d-md-block" />

            <!-- <div class="col-12 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div> -->
          </div>
          <!-- /back row -->
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-center my-3 mt-4">
          <div class="d-flex align-items-center mt-2">
            <toggle @set-is-active="setMileage" />
            <div class="ms-2 mb-2">
              {{ $t('mileage') }}
            </div>
          </div>
          <div class="mt-2">
            <button class="d-flex align-items-center">
              <span>
                <search />
              </span>
              <span class="ms-2 mt-1">
                {{ $t('find') }}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import bars from "@/assets/icons/bars.vue";
import search from "@/assets/icons/search.vue";

import toggle from "@/components/toggle.vue";

import { mapGetters } from "vuex";
import { get } from "@/services/ApiService";
import store from "@/store";

export default {
  components: {
    bars,
    search,
    toggle
  },
  data () {
    return {
      moreShown: false,
      brand_title: {
        title: "choose"
      },
      brand_links: {
        array: [
          {
            title: "choose"
          },
          {
            title: "1"
          },
          {
            title: "1"
          }
        ]
      },
      car_brands: [],
      car_models: [],
      car_categories: [],
      car_fuel: [],
      car_color: []
    };
  },
  computed: {
    ...mapGetters(["car", "carParams"])
  },
  created () {
    this.getInitialData();
  },
  methods: {
    showMore () {
      this.moreShown = !this.moreShown;
    },
    getModels () {
      this.carParams.model__name = null;
      get("/cars/model", { brand__name: this.carParams.brand__name }).then(res => {
        this.car_models = res.data;
      });
    },
    getInitialData () {
      get("/cars/brands").then(res => {
        this.car_brands = res.data;
      });
      get("/cars/model").then(res => {
        this.car_models = res.data;
      });
      get("/cars/categories").then(res => {
        this.car_categories = res.data;
      });
      get("/cars/fuel").then(res => {
        this.car_fuel = res.data;
      });
      get("/cars/color").then(res => {
        this.car_color = res.data;
      });
    },
    setMileage (bool) {
      if (bool) {
        this.carParams.mileage = 0;
      } else {
        this.carParams.mileage = 1;
      }
    },
    search () {
      get("/cars", this.carParams).then(res => {
        store.commit("setSearchCars", res.data);
        this.$router.push({ name: "results" });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.stick-left,.stick-right{
  width: 50%;
  height: 2em;
  min-width: unset;
}
.stick-left{
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.stick-right{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vr{
  width:1px;
  background-color: lightgrey;
  margin-top: .5em;
}

</style>
