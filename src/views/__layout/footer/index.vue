<template>
  <footer class="bg-white py-5">
    <div class="d-flex padding justify-content-between flex-grow-1">
      <!-- logo -->
      <div>
        <div class="text-blue font-size-32">
          {{ $t('main_view.dream_cars') }}
        </div>
        <div class="text-darkgrey ">
          {{ $t("main_view.vision") }}
        </div>
      </div>

      <!-- links -->
      <div class="d-flex">
        <div
          v-for="index in [1,2,3]"
          :key="index"
          class="d-flex flex-column justify-content-around mx-3"
        >
          <div class="font-size-20 mb-4">
            {{ index }}
          </div>
          <div
            v-for="l in [1,2,3,4]"
            :key="l"
            class="my-2"
          >
            <div class="text-darkgrey">
              {{ l }} child of {{ index }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border border-lightgrey my-4" />

    <!-- all rights reserved -->

    <div class="py-5 pt-3 padding d-flex justify-content-between">
      <div>
        {{ $t('main_view.all_rights') }}
      </div>
      <div>
        link
        <span class="ms-4"> another link</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

const links = [
  {
    name: "main_view.home",
    link: "/"
  }
];

export default defineComponent({
  setup () {
    return {
      links
    };
  }
});
</script>

<style scoped>
  .top-container-height{
    /* 150px / 16 */
    height: 9.375em;
  }

  .center-container-height{
    /* 300px / 16 */
    height: 18.75em;
  }
  .bottom-container-height{
    /* 100px / 16 */
    height: 6.25em;
  }

  .form_input{
    position: relative;
    /* 472px / 16 */
    width:29.5em;
    /* 50px / 16 */
    height:3.125em;
  }

  .form_input>button{
    position: absolute;
    right:7px;
    top:6px;
  }

  .icon_wrapper{
    width: 2.5em;
    height:2.5em;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon{
    font-size:1.4em;
  }
  .icon_wrapper:hover{
    transform:rotate(180deg);
    background-color:#9E2629 !important
  }
  .icon_wrapper:hover > .icon{
    transform:rotate(180deg);
    font-size: 1.6em;
    color:white;
  }

</style>
