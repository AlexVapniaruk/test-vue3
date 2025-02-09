<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type {ContactFormData} from "@/api-sdk/contact-us.ts";

const emit = defineEmits<{
  (event: 'submit', payload: ContactFormData): void;
}>();
const valid = ref(false);
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const note = ref('');

const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length <= 20) || 'Name must be less than 20 characters'
];

const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
];

const submitForm = () => {
  emit('submit', {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    note: note.value
  });
};
</script>

<template>
  <v-form v-model="valid" class="w-full" @submit.prevent="submitForm">
    <v-container width="100%">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" :counter="20" :rules="nameRules" label="First name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastname" :counter="20" :rules="nameRules" label="Last name" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea label="Note" v-model="note" :counter="200"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
