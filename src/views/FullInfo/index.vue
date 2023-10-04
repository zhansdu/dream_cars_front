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
              class="carousel__item bg-blue border-radius-10 mx-2 p-2"
              @click="slideTo(slide - 1)"
            >
              <img
                class="w-100"
                src="/images/car.png"
              >
              {{ slide }}
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="col-12 col-lg-6 ps-0 ps-lg-3 mt-3 mt-lg-0 d-flex">
        <div class="p-4 bg-white d-flex flex-column justify-content-between border-radius-10">
          <div class="fw-bold font-size-40">
            {{ car.title }}
          </div>

          <div class="mt-3">
            {{ $t('full_info.description') }}
          </div>
          <div class="text-grey">
            {{ car.description }}
          </div>

          <div class="d-flex flex-wrap mt-3">
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.type') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.type }}</div>
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
                <div>{{ car.steering }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between col-12 col-md-6 pe-4 my-2">
              <div class="text-grey">
                <div>{{ $t('full_info.fuel') }}</div>
              </div>
              <div class="text-end">
                <div>{{ car.fuel }}</div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <div class="fw-bold font-size-40">
              {{ car.price }}
            </div>
            <div class="d-flex">
              <button class="me-2">
                Che to
              </button>
              <button class="border outline-green">
                Chet eshe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- last cars -->
    <div class="d-flex justify-content-between align-items-center my-3">
      <div>{{ $t('full_info.last_cars') }}</div>
      <div>{{ $t('full_info.view_all') }}</div>
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
    </div>
    <!-- /last cars -->

    <!-- last cars -->
    <div class="d-flex justify-content-between align-items-center my-3">
      <div>{{ $t('full_info.recommendations') }}</div>
      <div>{{ $t('full_info.view_all') }}</div>
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
    </div>
    <!-- /last cars -->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide } from "vue3-carousel";
import CarCard from "@/components/carCard.vue";

export default {
  components: {
    CarCard,
    Carousel,
    Slide
  },
  data () {
    return {
      currentSlide: 0,
      car: {
        title: "Nissan GT",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam assumenda ullam sapiente mollitia tenetur, nihil culpa nisi. Numquam, fugit consequuntur id expedita eos a, ipsam aut, iusto eaque odit voluptate.",
        type: "car",
        steering: "che",
        capacity: "fads fasd fsda famnogo",
        fuel: "tozhe mnnogo"
      }
    };
  },
  methods: {
    slideTo (val) {
      this.currentSlide = val;
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

.active{
  border-color:blue;
  border-width:3px;
  border-style: solid;
  padding:10px
}
</style>
