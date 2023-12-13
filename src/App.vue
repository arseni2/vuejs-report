<!--ZAqxswcde333-qwerty123098- -->
<template>
  <div class="flex gap-1">
    <SideBarNavigation />
    <div class="p-3 w-full h-[100vh]">
      <router-view></router-view>
    </div>
    </div>
</template>

<script setup lang="ts">

import SideBarNavigation from "@/components/SideBarNavigation.vue";
</script>
