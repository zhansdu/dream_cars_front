<template>
  <navbar-view />
  <router-view />
  <footer-view />
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

