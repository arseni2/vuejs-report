<template>
  <input :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)" class="bg-gray-50 text-sm rounded-lg block w-full p-2.5 border-borderGray border-[1px] outline-none">
</template>

<script>
export default {
  name: "Input",
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style scoped>

</style>