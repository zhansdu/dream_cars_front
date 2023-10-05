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
          <div class="d-flex flex-wrap justify-content-between my-3">
            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr d-none d-md-block" />

            <div class="d-flex flex-column col-12 col-md-3 mt-2">
              <div>
                {{ $t('year') }}
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  class="stick-left border-grey"
                  :placeholder="$t('from')"
                >
                <input
                  class="stick-right border-grey"
                  type="text"
                  :placeholder="$t('till')"
                >
              </div>
            </div>

            <div class="vr" />

            <div class="d-flex flex-column col-12 col-md-3 mt-2">
              <div>
                {{ $t('price') }}
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  class="stick-left border-grey"
                  :placeholder="$t('from')"
                >
                <input
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
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr d-none d-md-block" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr" />

            <div class="col-5 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('model') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>

            <div class="vr d-none d-md-block" />

            <div class="col-12 col-md-1 mt-2">
              <div class="fs-bold">
                {{ $t('brand') }}
              </div>
              <dropdown
                class="font-size-12 mt-2 text-grey"
                :title="brand_title"
                :links="brand_links"
              />
            </div>
          </div>
          <!-- /back row -->
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-center my-3 mt-4">
          <div class="d-flex align-items-center mt-2">
            <toggle />
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
import Dropdown from "@/components/dropdown.vue";

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

.max-height{
  max-height: 0;
}
.active{
  max-height: 5em;
}
</style>
