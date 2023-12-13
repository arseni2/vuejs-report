<template>
  <OnClickOutside class="absolute" v-if="this.open" @trigger="handleClose">
    <dialog style="margin-left: 450px; margin-top: 120px; z-index: 120" class="min-w-[330px] absolute mx-auto my-auto bg-white p-5 rounded-2xl shadow-2xl" :open="this.open">
      <div class="flex justify-end">
        <svg @click="handleClose"
             class="w-3 h-3 md:w-4 md:h-4 text-gray-600 hover:text-primary transition duration-400 cursor-pointer"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
        </svg>
      </div>

      <div class="mt-2">
        <slot/>
      </div>

    </dialog>
  </OnClickOutside>
</template>

<script>
import {OnClickOutside} from '@vueuse/components'

export default {
  name: "Dialog",
  components: {OnClickOutside},
  props: {
    open: Boolean
  },
  methods: {
    handleClose() {
      this.$emit("update:open", false)
    }
  }
}
</script>