<template>
  <div class="border-radius-10 bg-white">
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
            <div class="dropdown">
              <div
                id="dropdownMenuButton1"
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </div>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Another action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-flex">
            <toggle />
            <div class="ms-2">
              slider bezprobega
            </div>
          </div>
          <div>
            <button>Naiti</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import toggle from "@/components/toggle.vue";
export default {
  components: {
    toggle
  }
};
</script>

<style lang="scss" scoped>

</style>
