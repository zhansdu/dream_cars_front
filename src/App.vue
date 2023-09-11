<template>
  <main-view />
</template>
<script>
import { defineComponent } from "vue";
import MainView from "./views/__layout";

export default defineComponent({
  components: {
    MainView
  },
  created () {
    this.set_theme();
  },
  methods: {
    set_theme () {
      const id = "theme";
      const theme = "default";
      if (theme) {
        if (document.getElementById(id)) {
          document.getElementById(id).remove();
        }
        const head = document.getElementsByTagName("head")[0];
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/styles/themes/" + theme + ".css";
        link.media = "all";
        head.appendChild(link);
        localStorage.setItem("theme", theme);
      }
    }
  }
});
</script>
