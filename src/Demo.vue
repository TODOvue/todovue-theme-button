<template>
  <tv-demo :component="component" :variants="demos" />
</template>

<script>
import { shallowRef } from "vue";
import TvThemeButton from "@/component/TvThemeButton.vue";
import TvDemo from "todovue-demo";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoThemeButton",
  setup() {
    const component = shallowRef(TvThemeButton);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
};
</script>

<style></style>
