<template>
  <div class="padding">
    <div class="d-flex justify-content-between my-5">
      <div class="w-50 me-4">
        <div
          class="d-flex flex-column align-items-center justify-content-end bg-blue bg-image border-radius-10"
          :style="'background-image: url(' + currentImage + ')'"
        />
        <div class="mt-3 d-flex justify-content-between align-items-center">
          <div
            class="w-33 border-radius-10 me-2"
            :class="{active:true}"
          >
            <hooper>
              <slide>
                slide 1
              </slide>
              <slide>
                slide 2
              </slide>
              ...
            </hooper>
            <div class="bg-blue border-radius-10">
              <img
                class="w-100"
                src="/images/car.png"
              >
            </div>
          </div>
          <div
            class="w-33 border-radius-10 me-2"
          >
            <div class="bg-blue border-radius-10">
              <img
                class="w-100"
                src="/images/car.png"
              >
            </div>
          </div>
          <div
            class="w-33 border-radius-10"
          >
            <div class="bg-blue border-radius-10">
              <img
                class="w-100"
                src="/images/car.png"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-50 p-4 bg-white d-flex flex-column justify-content-between border-radius-10">
        <div class="fw-bold font-size-40">
          Title
        </div>

        <div class="mt-3">
          opisanie
        </div>
        <div class="text-grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum beatae totam quaerat id suscipit tenetur. Nam ipsa porro voluptate ab repudiandae cum, sunt quisquam, veniam id non iste aspernatur at?
        </div>

        <div class="d-flex mt-3">
          <div class="flex-fill d-flex justify-content-between me-3">
            <div class="text-grey">
              <div>Type</div>
              <div>Steering</div>
            </div>
            <div class="text-end">
              <div>Sport</div>
              <div>Manual</div>
            </div>
          </div>
          <div class="flex-fill d-flex justify-content-between ms-3">
            <div class="text-grey">
              <div>Capacity</div>
              <div>Gasoline</div>
            </div>
            <div class="text-end">
              <div>2 person</div>
              <div>70 L</div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between mt-3">
          <div class="fw-bold font-size-40">
            $57k
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
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide
  },
  data () {
    return {
      currentImage: "/images/car.png"
    };
  }
};
</script>

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
