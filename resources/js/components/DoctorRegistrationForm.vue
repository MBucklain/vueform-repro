<template>
    <div>
      <vue-form :schema="schema" />
    </div>
  </template>
  
  <script>
  import { Vueform } from '@vueform/vueform';
  import '@vueform/vueform/dist/vueform.css';
  
  export default {
    components: {
      'vue-form': Vueform,
    },
    data() {
      return {
        schema: {
          name: { label: 'Name', type: 'text', rules: ['required'] },
          email: { label: 'Email', type: 'email', rules: ['required', 'email'] },
          submit: { type: 'button', buttonLabel: 'Submit', submits: true },
        },
      };
    },
  };
  </script>
  