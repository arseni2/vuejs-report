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

      <ButtonFilled @click="handleOpen" class="flex justify-center items-center">
        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 18 18">
          <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
      </ButtonFilled>
      <Dialog v-model:open="isOpenDialog">
        <CreateTemplateSchedulerForm />
      </Dialog>
    </div>
    <!--    end header-->

    <div class="relative overflow-x-auto mt-4">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-gray-500 border-b-borderGray border-b-[1px]">
        <tr>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Название
          </th>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Выбранные колонки
          </th>
        </tr>
        </thead>
        <tbody class="divide-y-[1px] divide-gray">
        <tr v-for="item in allTemplateReports" class="bg-white">
          <td class="px-6 py-4">
            {{ item.title }}
          </td>
          <td class="px-6 py-4">
            {{ item.selectedItems }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";
import ButtonFilled from "@/shared_components/ButtonFilled.vue";
import CreateTemplateSchedulerForm from "@/forms/CreateTemplateForm.vue";
import Dialog from "@/shared_components/Dialog.vue";
import {mapGetters} from "vuex";

export default {
  name: "TemplateReports",
  components: {Dialog, CreateTemplateSchedulerForm, PageLayout, ButtonFilled},
  data() {
    return {
      isOpenDialog: false
    }
  },
  computed: mapGetters(["allTemplateReports"]),
  methods: {
    handleOpen() {
      this.isOpenDialog = true
    }
  }
}
</script>