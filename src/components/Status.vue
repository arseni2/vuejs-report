<template>
  <p class="p-2 w-fit rounded-lg" :style='classes'>
    {{status}}
  </p>
</template>

<script>
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../../tailwind.config.js";

export default {
  name: "Status",
  props: {
    status: String
  },
  data() {
    const fullConfig = resolveConfig(tailwindConfig)
    switch (this.status) {
      case "Выполнено":
        return {
          classes: `color: ${fullConfig.theme.colors.statusCompleteText}; background: ${fullConfig.theme.colors.statusCompleteBG}`
        }
      case "Выполняется":
        return {
          classes: `color: ${fullConfig.theme.colors.statusRunningText}; background: ${fullConfig.theme.colors.statusRunningBG}`
        }
      default: {
        return {classes: "test"}
      }
    }
  }
}
</script>