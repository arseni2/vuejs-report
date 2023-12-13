<template>
  <div class="select-none border-primary border-[1px] font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer hover:bg-grayHover transition-all">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonOutlined"
}
</script>