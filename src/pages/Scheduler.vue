<template>
  <PageLayout>
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
        <CreateSchedulerForm />
      </Dialog>
    </div>

    <div class="relative overflow-x-auto mt-4">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-gray-500 border-b-borderGray border-b-[1px]">
        <tr>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Название шаблона отчёта
          </th>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Color
          </th>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Category
          </th>
          <th scope="col" class="px-6 py-3 text-sm font-medium text-thTextGray">
            Price
          </th>
        </tr>
        </thead>
        <tbody class="divide-y-[1px] divide-gray">
        <tr class="bg-white">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">
            <Status status="Выполнено" />
          </td>
          <td class="px-6 py-4">
            Laptop
          </td>
          <td class="px-6 py-4">
            $2999
          </td>
        </tr>
        <tr class="bg-white">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">
            <Status status="Выполняется" />
          </td>
          <td class="px-6 py-4">
            Laptop
          </td>
          <td class="px-6 py-4">
            $2999
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";
import Status from '@/components/Status.vue'
import ButtonFilled from "@/shared_components/ButtonFilled.vue";
import CreateSchedulerForm from "@/forms/CreateSchedulerForm.vue";
import Dialog from "@/shared_components/Dialog.vue";

export default {
  components: {CreateSchedulerForm, PageLayout, Status, ButtonFilled, Dialog},
  name: "Scheduler",
  data() {
    return {
      isOpenDialog: false
    }
  },
  methods: {
    handleOpen() {
      this.isOpenDialog = true
    },
    // handleClose() {
    //   this.isOpenDialog = false
    // }
  }
}
</script>