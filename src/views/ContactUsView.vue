<script setup lang="ts">
import { ref } from 'vue';
import ContactForm from '@/components/forms/ContactForm.vue';
import {type ConstactFormResult, type ContactFormData, sendContactUsForm} from "@/api-sdk/contact-us.ts";

const result = ref<ConstactFormResult | null>(null);
const loading = ref(false);

const handleSubmit = async (formData: ContactFormData) => {
  loading.value = true
  result.value = await sendContactUsForm(formData);
  loading.value = false;
};
</script>

<template>
  <v-container width="100%">
    <h1>Contact us</h1>
    <v-progress-linear
        v-if="loading"
        color="green"
        indeterminate
    ></v-progress-linear>
    <v-alert
        v-else-if="result?.message"
        :text="result.message"
        :color="result.success ? 'success' : 'error'"
    ></v-alert>
    <ContactForm @submit="handleSubmit" />
  </v-container>
</template>
