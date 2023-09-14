<template>
  <div class="d-flex flex-column">
    <!-- mashinka v nachale -->
    <div class="padding my-5">
      <div
        class="bg-blue d-flex align-items-center flex-wrap justify-content-center border-rounded-24 bg-image p-5 py-3 text-white"
        style="background-image: url('/images/group2.svg');"
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

    <div class="border-radius-10 bg-white padding mb-5">
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
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
            <div>
              <div>
                Marka
              </div>
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
            <div>
              <div>
                Marka
              </div>
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
            <div>
              <div>
                Marka
              </div>
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
            <div>
              <div>
                Marka
              </div>
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
            <div>
              <div>
                Marka
              </div>
              <select>
                <option value="">
                  Bro
                </option>
              </select>
            </div>
          </div>
          <div class="d-flex justify-content-between my-3">
            <div>
              slider bezprobega
            </div>
            <div>
              <button>Naiti</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data () {
    return {

    };
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
