<template>
  <div class="bg-lightgrey">
    <!-- navbar -->
    <navbar-view />
    <!-- /navbar -->
    <!-- main content -->
    <router-view />
    <!-- /main content -->
    <!-- footer -->
    <footer-view />
    <!-- /footer -->
    <chat />
  </div>
</template>
<script>
import NavbarView from "@/views/__layout/navbar";
import FooterView from "@/views/__layout/footer";

import chat from "@/components/chat.vue";

export default {
  components: {
    "navbar-view": NavbarView,
    "footer-view": FooterView,
    chat
  }
};
</script>
