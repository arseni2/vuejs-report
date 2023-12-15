<template>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Введите название шаблона отчёта</label>
      <Input :class="{'border-error': v$.title.$error}" type="email" v-model="title" id="email" placeholder="Название задачи" required/>
      <ErrorText v-if="v$.title.$error">Name field has an error.</ErrorText>
    </div>
    <div class="mb-5">
      <div class="flex gap-2">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">
          Выберите поля
        </label>
        <ButtonOutlined @click="handleClickSelectAllFields" class="h-[12px] flex justify-center items-center text-xs px-1 w-[84px]">
          выбрать все
        </ButtonOutlined>
        <ButtonOutlined @click="handleClickClearAll" class="h-[12px] flex justify-center items-center text-xs px-1 w-[70px]">
          очистить
        </ButtonOutlined>
      </div>
      <!--      <Select id="countries" multiple :value="fields" @input="$emit('update:title', $event.target.value)">-->
      <!--        <option selected v-for="field in fields">-->
      <!--          {{ field }}-->
      <!--        </option>-->
      <!--      </Select>-->

      <div>
        <select v-model="selectedItems" multiple @change="handleSelectionChange"
                class="bg-gray-50 text-sm rounded-lg block w-full p-2.5 border-borderGray border-[1px] outline-none">
          <option :selected="selectedItems.includes(option)" v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <div v-if="selectedItems.length > 0">
          <p>Selected Items:</p>
          <div v-for="(item, index) in selectedItems" :key="index">
            {{ item }}
            <button @click="removeItem(index)">Remove</button>
          </div>
        </div>
      </div>

      <div v-if="v$.selectedItems.$error">Name field has an error.</div>
    </div>

    <div class="flex justify-between mt-8">
      <ButtonFilled class="text-white w-full" @click="submitHandler">
        Создать
      </ButtonFilled>
    </div>
  </form>
</template>

<script>
import ButtonOutlined from "@/shared_components/ButtonOutlined.vue";
import ButtonFilled from "@/shared_components/ButtonFilled.vue";
import Input from "@/shared_components/Input.vue";
import Select from "@/shared_components/Select.vue";
import {required} from '@vuelidate/validators'
import useVuelidate from "@vuelidate/core";
import ErrorText from "@/shared_components/ErrorText.vue";

export default {
  name: "CreateTemplateSchedulerForm",
  components: {ErrorText, ButtonOutlined, ButtonFilled, Input, Select},
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      title: "",
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedItems: []
    }
  },
  methods: {
    handleClickClearAll() {
      this.selectedItems = []
    },
    handleSelectionChange(event) {
      const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
      this.selectedItems = selectedOptions;
    },
    handleClickSelectAllFields() {
      this.selectedItems = this.options;
    },
    removeItem(index) {
      this.selectedItems.splice(index, 1);
    },
    submitHandler() {
      console.log('condition')
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      console.log('end condition')
      const formData = {
        title: this.title,
        selectedItems: this.selectedItems
      }

      console.log(formData)
    }
  },
  validations() {
    return {
      title: {required},
      selectedItems: {required},
    }
  },
}
</script>

<style scoped>

</style>