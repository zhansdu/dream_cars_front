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
        @submit.prevent=""
      >
        <div>
          <!-- front row -->
          <div class="d-flex justify-content-between my-3">
            <div>
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div>
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div>
              <input
                type="text"
                class="stick-left"
                placeholder="year from"
              >
              <input
                class="stick-right"
                type="text"
                placeholder="year till"
              >
            </div>

            <div class="vr" />

            <div>
              <input
                type="text"
                class="stick-left"
                placeholder="money from"
              >
              <input
                class="stick-right"
                type="text"
                placeholder="money till"
              >
            </div>
          </div>
          <!-- /front row -->
          <!-- back row -->
          <div
            v-if="moreShown"
            class="d-flex justify-content-between my-4"
          >
            <div>
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div>
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />
            <div>
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div>
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />
            <div>
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>
          </div>
          <!-- /back row -->
        </div>

        <div class="d-flex justify-content-between my-3 mt-4">
          <div class="d-flex align-items-center">
            <toggle />
            <div class="ms-2 mb-2">
              {{ $t('mileage') }}
            </div>
          </div>
          <div>
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

import Dropdown from "./dropdown.vue";
export default {
  components: {
    bars,
    search,
    toggle,
    Dropdown
  },
  data () {
    return {
      moreShown: false,
      brand_title: {
        title: "1"
      },
      brand_links: {
        array: [
          {
            title: "1"
          },
          {
            title: "1"
          },
          {
            title: "1"
          }
        ]
      }
    };
  },
  methods: {
    showMore () {
      this.moreShown = !this.moreShown;
    }
  }
};
</script>

<style lang="scss" scoped>
.stick-left,.stick-right{
  width:12em;
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
}

.max-height{
  max-height: 0;
}
.active{
  max-height: 5em;
}
</style>
