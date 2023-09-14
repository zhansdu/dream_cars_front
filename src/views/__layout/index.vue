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
  </div>
</template>
<script>
import NavbarView from "./navbar";
import FooterView from "./footer";
export default {
  components: {
    "navbar-view": NavbarView,
    "footer-view": FooterView
  }
};
</script>
