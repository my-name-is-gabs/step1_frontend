<template>
  <b-form @submit.prevent="test">
    <div v-for="(formProp, id) in formProps" :key="id">
      <component
        :is="formProp.directives.name"
        :common-prop="formProp"
        :clearForm="clearData"
        v-model="inputData[formProp.data.saveAs]"
      ></component>
    </div>
    <button
      :disabled="disableBtn"
      :class="disableBtn && 'btn--disabled-active'"
    >
      Clicl Me
    </button>
    <button>clear</button>
  </b-form>
</template>

<script>
import { FORM_PROPS } from './common/recipe/rCommonFormInputs';
import CommonInputs from './common/CommonInputs.vue';
import {
  isBirthdateValid,
  isEmailValid,
  isTextValid,
} from '../utils/formValidityChecker';

export default {
  name: 'RegistrationForm',
  components: {
    CommonInputs,
  },
  mounted() {
    this.formProps = [...FORM_PROPS];
    this.invalidInputs = this.formProps
      .map((data) => data.display.errorMessage)
      .filter((data) => data !== undefined);
  },
  data() {
    return {
      formProps: [...FORM_PROPS],
      inputData: {
        fullname: '',
        nickname: '',
        bday: '',
        cpNum: '',
        email: '',
        faveColor: '',
      },
      isInputError: false,
      disableBtn: true,
    };
  },
  methods: {
    // showValues(obj) {
    //   this.inputData[obj.key] = obj.value;
    // },
    test() {
      if (
        !isTextValid(this.inputData.fullname) ||
        !isTextValid(this.inputData.nickname) ||
        !isEmailValid(this.inputData.email) ||
        !isBirthdateValid(this.inputData.bday)
      ) {
        this.isInputError = true;
        this.disableBtn = true;
        return;
      }
      this.isInputError = false;
      this.disableBtn = false;
      console.log(this.inputData);
    },
  },
};
</script>

<style scoped>
.btn--disabled-active:hover {
  cursor: not-allowed;
}
</style>
