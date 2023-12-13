<template>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Введите название
        отчёта</label>
      <Input type="email" v-model="title" id="email" placeholder="Сетевой отчёт" required/>
      <div v-if="v$.title.$error">Name field has an error.</div>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Выберите шаблон</label>
      <Select id="countries" v-model="template">
        <option selected>Обычный шаблон</option>
        <option value="US">Сетевой шаблон</option>
      </Select>
      <div v-if="v$.template.$error">Name field has an error.</div>
    </div>

    <div class="flex justify-between mt-8">
      <ButtonFilled class="text-white w-full" @click="submitHandler">
        Создать
      </ButtonFilled>
    </div>
  </form>

</template>

<script>
import ButtonFilled from "@/shared_components/ButtonFilled.vue";
import ButtonOutlined from "@/shared_components/ButtonOutlined.vue";
import useVuelidate from "@vuelidate/core";
import { required  } from '@vuelidate/validators'
import Input from "@/shared_components/Input.vue";
import Select from "@/shared_components/Select.vue";

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  name: "CreateReportForm",
  components: {ButtonOutlined, ButtonFilled, Input, Select},
  data() {
    return {
      title: "",
      template: "Обычный шаблон"
    }
  },
  validations () {
    return {
      title: {required},
      template: {required},
    }
  },
  methods: {
    submitHandler() {
      console.log('condition')
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      console.log('end condition')
      const formData = {
        title: this.title,
        template: this.template
      }

      console.log(formData)
    }
  }
}
</script>