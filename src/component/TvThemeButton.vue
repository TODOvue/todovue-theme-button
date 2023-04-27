<template>
  <div class="tv-theme-button">
    <div
      class="tv-theme-switch tv-cursor-pointer"
      :class="{ 'tv-theme-active': theme === 'dark' }"
      @click="changeTheme"
    >
      <span>
        <i class="tv-theme-icon tv-icon-dark"></i>
      </span>
      <span>
        <i class="tv-theme-icon tv-icon-light"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "TvThemeButton",
  setup(_, { emit }) {
    onMounted(() => {
      if (localStorage.getItem("theme")) {
        theme.value = localStorage.getItem("theme");
      }
    });

    const theme = ref("dark");
    const changeTheme = () => {
      if (theme.value === "dark") {
        theme.value = "light";
      } else {
        theme.value = "dark";
      }
      emit("change-theme", theme.value);

      _handleStorageEvent({ key: "theme", newValue: theme.value });
    };

    const _handleStorageEvent = (event) => {
      if (event.key === "theme") {
        localStorage.setItem("theme", event.newValue);
      }
    };

    return {
      theme,
      changeTheme,
    };
  },
  emits: ["change-theme"],
};
</script>

<style></style>
