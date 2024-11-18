import { createApp } from 'vue';
import DoctorRegistrationForm from './components/DoctorRegistrationForm.vue';

const app = createApp({});
app.component('doctor-registration-form', DoctorRegistrationForm);
app.mount('#app');
