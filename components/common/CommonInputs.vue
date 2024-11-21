<template>
  <b-form-group class="my-4">
    <label :for="PROPS.display.labelFor">{{ PROPS.display.label }}</label>
    <b-form-input
      :id="PROPS.display.labelFor"
      v-bind="PROPS.directives"
      :placeholder="PROPS.display.placeholder"
      :value="modelValue"
      :state="checkInputs"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    ></b-form-input>
    <b-form-invalid-feedback>{{
      PROPS.display.errorMessage
    }}</b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
import { isEmailValid, isTextValid } from '../../utils/formValidityChecker';

export default {
  name: 'CommonInputs',
  props: {
    commonProp: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      PROPS: { ...this.commonProp },
      inputValue: this.modelValue,
    };
  },
  computed: {
    checkInputs() {
      return (
        (this.PROPS.data.saveAs === 'fullname' &&
          isTextValid(this.modelValue)) ||
        isEmailValid(this.modelValue)
      );
    },
  },
};
</script>
