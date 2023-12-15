<template>
  <div class="p-3 h-[100vh] min-w-[230px] bg-white flex flex-col gap-2">
    <router-link
        class="w-full p-4 flex gap-2 hover:bg-gray rounded-xl font-medium"
        active-class="text-primary bg-gray"
        to="/"
    >
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8v4m0 0-2-2m2 2 2-2M3 5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5H3ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
      </svg>
      <p>
        Отчёты
      </p>
    </router-link>
    <router-link
        class="w-full p-4 flex gap-2 hover:bg-gray rounded-xl font-medium"
        active-class="text-primary bg-gray"
        to="/scheduler"
    >
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8v4m0 0-2-2m2 2 2-2M3 5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5H3ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
      </svg>
      <p>
        Планировщик
      </p>
    </router-link>
    <router-link
        class="w-full p-4 flex gap-2 hover:bg-gray items-center rounded-xl font-medium"
        active-class="text-primary bg-gray"
        to="/template"
    >
      <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8v4m0 0-2-2m2 2 2-2M3 5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5H3ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
      </svg>
      <p>
        Шаблоны Отчетов
      </p>
    </router-link>
    <router-link
        class="w-full p-4 flex gap-2 hover:bg-gray items-center rounded-xl font-medium"
        active-class="text-primary bg-gray"
        to="/history"
    >
      <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8v4m0 0-2-2m2 2 2-2M3 5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5H3ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
      </svg>
      <p>
        История отчётов
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBarNavigation"
}
</script>