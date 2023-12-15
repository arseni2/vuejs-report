<template>
  <form class="max-w-sm mx-auto">

    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Введите название
        отчёта</label>
      <Input type="email" v-model="title" id="email" placeholder="Сетевой отчёт" required :class="{'border-error': v$.title.$error}"/>
      <ErrorText v-if="v$.title.$error">Name field has an error.</ErrorText>
    </div>

    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Введите название организации</label>
      <Input type="email" v-model="orgname" id="email" placeholder="ОАО" required :class="{'border-error': v$.orgname.$error}"/>
      <ErrorText v-if="v$.orgname.$error">Name field has an error.</ErrorText>
    </div>

    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Выберите период</label>
      <VueDatePicker v-model="date" range :class="{'border-error': v$.date.$error}" />
      <ErrorText v-if="v$.date.$error">Name field has an error.</ErrorText>
    </div>

    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Выберите шаблон</label>
      <Select id="countries" v-model="template">
        <option selected>Обычный шаблон</option>
        <option value="US">Сетевой шаблон</option>
      </Select>
      <ErrorText v-if="v$.template.$error">Name field has an error.</ErrorText>
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
import VueDatePicker from '@vuepic/vue-datepicker';
import ErrorText from "@/shared_components/ErrorText.vue";
import {mapActions} from "vuex";

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  name: "CreateReportForm",
  components: {ButtonOutlined, ButtonFilled, Input, Select, VueDatePicker, ErrorText},
  data() {
    return {
      title: "",
      template: "Обычный шаблон",
      date: [],
      orgname: ""
    }
  },
  validations () {
    return {
      title: {required},
      template: {required},
      orgname: {required},
      date: {required},
    }
  },
  methods: {
    ...mapActions(['createReport']),
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      this.date[0] = this.date[0].toISOString().split('T')[0]
      this.date[1] = this.date[1].toISOString().split('T')[1]

      const formData = {
        title: this.title,
        template: this.template,
        date: this.date,
        orgname: this.orgname,
      }
      console.log(formData)
      this.createReport(formData)
    }
  },
  // mounted() {
  //   const startDate = new Date();
  //   const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  //   this.date.value = [startDate, endDate];
  // }
}
</script>