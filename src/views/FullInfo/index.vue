<template>
  <div class="padding">
    <div class="d-flex flex-wrap justify-content-between my-5">
      <div class="col-12 col-lg-6 pe-0 pe-lg-3">
        <Carousel
          id="gallery"
          v-model="currentSlide"
          :items-to-show="1"
          :wrap-around="false"
        >
          <Slide
            v-for="slide in 10"
            :key="slide"
          >
            <div
              class="carousel__item d-flex flex-column align-items-center justify-content-end bg-blue bg-image border-radius-10 w-100"
              :style="'background-image: url(' + slide + ')'"
            >
              {{ slide }}
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          ref="carousel"
          v-model="currentSlide"
          :items-to-show="4"
          :wrap-around="true"
        >
          <Slide
            v-for="slide in 10"
            :key="slide"
          >
            <div
              class="carousel__item"
              :class="{active:currentSlide==slide-1}"
            >
              <div
                class="bg-blue border-radius-10 mx-2 p-2"
                @click="slideTo(slide - 1)"
              >
                <img
                  class="w-100"
                  src="/images/car.png"
                >
                {{ slide }}
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="col-12 col-lg-6 ps-0 ps-lg-3 mt-3 mt-lg-0 d-flex">
        <div class="p-4 bg-white d-flex flex-fill flex-column justify-content-between border-radius-10">
          <div class="fw-bold font-size-40">
            {{ car.brand.name + ' ' + car.name }}
          </div>

          <div>
            <div class="mt-3">
              {{ $t('full_info.description') }}
            </div>
            <div class="mt-1 text-grey">
              {{ car.description }}
            </div>
          </div>

          <div class="d-flex flex-wrap mt-3">
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.type') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.category.name }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.capacity') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.capacity }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.steering') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.transmission_type }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.fuel') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.tank_volume }}</div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <div class="fw-bold font-size-40">
              {{ getPrice(car.price) }}
            </div>
            <div class="d-flex">
              <button
                class="me-2"
                data-bs-toggle="modal"
                data-bs-target="#contactMe"
              >
                <phone class="font-size-20" />
                <span class="ms-2">
                  {{ $t('call') }}
                </span>
              </button>
              <button class="border border-green outline-green">
                <span class="font-size-28">
                  <whatsapp />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- last cars -->
    <!-- <div class="d-flex justify-content-between align-items-center my-3">
      <div class="text-darkgrey font-size-20">
        {{ $t('full_info.last_cars') }}
      </div>
      <router-link
        :to="{name:'results'}"
        class="text-blue text-decoration-none font-size-20"
      >
        {{ $t('full_info.view_all') }}
      </router-link>
    </div>
    <div class="mb-5">
      <div class="row flex-wrap font-size-20">
        <div
          v-for="index in [1,2,3]"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <car-card class="m-2" />
        </div>
      </div>
    </div> -->
    <!-- /last cars -->

    <!-- recommendations -->
    <div
      v-if="recommended_cars.length>0"
      class="d-flex justify-content-between align-items-center my-3"
    >
      <div class="text-darkgrey font-size-20">
        {{ $t('full_info.recommendations') }}
      </div>
      <router-link
        :to="{name:'results',params:{car_id:car.id}}"
        class="text-blue text-decoration-none cursor-pointer font-size-20"
      >
        {{ $t('full_info.view_all') }}
      </router-link>
    </div>
    <div class="mb-5">
      <div class="row flex-wrap font-size-20">
        <div
          v-for="(c,index) in recommended_cars"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <car-card
            :car="c"
            class="m-2"
          />
        </div>
      </div>
    </div>
    <!-- recommendations -->
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { mapGetters } from "vuex";

import CarCard from "@/components/carCard.vue";
import ContactMeModal from "@/components/ContactMeModal.vue";

import whatsapp from "@/assets/icons/whatsapp.vue";
import phone from "@/assets/icons/phone.vue";

import { get } from "@/services/ApiService";
import { getPrice } from "@/services/ExchangeRateService";

export default {
  components: {
    CarCard,
    ContactMeModal,
    Carousel,
    Slide,
    whatsapp,
    phone
  },
  data () {
    return {
      currentSlide: 0,
      car: {
        name: "Koenigsegg",
        category: {
          name: "Sport"
        },
        brand: {
          name: ""
        },
        tank_volume: "80",
        transmission_type: "Manual",
        capacity: "2",
        price: "80"
      },
      getPrice,
      recommended_cars: []
    };
  },
  computed: {
    ...mapGetters(["carParams"])
  },
  created () {
    this.getCar().then(() => {
      this.getRecommendedCars();
    });
  },
  methods: {
    slideTo (val) {
      this.currentSlide = val;
    },
    getCar () {
      return get("/cars/" + this.$route.params.id).then(res => {
        this.car = res.data;
      });
    },
    getRecommendedCars () {
      const params = JSON.parse(JSON.stringify(this.carParams));
      params.limit = 3;
      params.offset = 0;
      params.car_id = this.car.id;
      params.mileage = null;
      return get("/cars/recommend", params).then(res => {
        this.recommended_cars = res.data.results;
      });
    }
  }
};
</script>
<style>
.carousel__viewport{
  border-radius: 10px;
}
</style>

<style lang="scss" scoped>
.bg-image{
  min-height: 40vh;
}

// .active{
//   border-color:blue;
//   border-width:3px;
//   border-style: solid;
//   border-radius: 10px;
//   padding:5px;
//   padding-top: 8px;
//   padding-bottom: 8px;
// }
</style>
