<template>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Введите название задачи</label>
      <Input :class="{'border-error': v$.title.$error}" type="email" v-model="title" id="email" placeholder="Название задачи" required/>
      <ErrorText v-if="v$.title.$error">Name field has an error.</ErrorText>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Выберите время</label>
      <Select id="countries" v-model="date" :class="{'border-error': v$.date.$error}">
        <option selected>1d</option>
        <option>7d</option>
        <option>30d</option>
      </Select>
      <ErrorText v-if="v$.date.$error">Name field has an error.</ErrorText>
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
import { required } from '@vuelidate/validators'
import useVuelidate from "@vuelidate/core";
import ErrorText from "@/shared_components/ErrorText.vue";

export default {
  name: "CreateSchedulerForm",
  setup() {
    return {v$: useVuelidate()}
  },
  components: {ErrorText, ButtonOutlined, ButtonFilled, Input, Select},
  data() {
    return {
      title: "",
      date: "1d"
    }
  },
  validations () {
    return {
      title: {required},
      date: {required},
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
        date: this.date
      }

      console.log(formData)
    }
  }
}
</script>