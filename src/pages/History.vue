<template>
<PageLayout>
  <!--  start header-->
  <div class="flex justify-between">

    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="search" id="default-search"
             class="outline-none border-gray block min-w-[300px] w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
             placeholder="Поиск" required>
    </div>

    <ButtonFilled  @click="handleOpen" class="flex justify-center items-center">
      <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 18 18">
        <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
      </svg>
    </ButtonFilled>
    <Dialog v-model:open="isOpenDialog">
      <CreateReportForm />
    </Dialog>
  </div>
  <!--    end header-->

  <div class="relative overflow-x-auto mt-4">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-gray-500 border-b-borderGray border-b-[1px]">
      <tr>
        <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
          Название отчёта
        </th>
        <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
          Дата создания отчёта
        </th>
        <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
          Шаблон отчёта
        </th>
      </tr>
      </thead>
      <tbody class="divide-y-[1px] divide-gray">
      <tr v-if="allReports" v-for="item in allReports" class="bg-white">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {{ item.title }}
        </th>
        <td class="px-6 py-4">
          {{ item.date[0] }}
          -
          {{ item.date[1] }}
        </td>
        <td class="px-6 py-4">
          {{ item.template }}
        </td>
        <td>
          <svg class="w-6 h-6 cursor-pointer stroke-primary hover:stroke-error transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.34186 1.66669L4.3252 4.69169" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.6582 1.66669L15.6749 4.69169" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.6665 6.54167C1.6665 5 2.4915 4.875 3.5165 4.875H16.4832C17.5082 4.875 18.3332 5 18.3332 6.54167C18.3332 8.33333 17.5082 8.20833 16.4832 8.20833H3.5165C2.4915 8.20833 1.6665 8.33333 1.6665 6.54167Z" stroke-width="1.5"/>
            <path d="M8.1333 11.6667V14.625" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.9668 11.6667V14.625" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.9165 8.33331L4.0915 15.5333C4.35817 17.15 4.99984 18.3333 7.38317 18.3333H12.4082C14.9998 18.3333 15.3832 17.2 15.6832 15.6333L17.0832 8.33331" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </td>

        <td>
          <svg class="w-6 h-6 cursor-pointer stroke-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"/>
          </svg>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</PageLayout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";
import {mapGetters} from "vuex";

export default {
  name: "History",
  components: {PageLayout},
  computed: mapGetters(["allReports"]),
}
</script>

<style scoped>

</style>