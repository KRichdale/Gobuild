<template>
  <!-- Dialog Component -->
  <v-dialog v-model="dialog" :fullscreen="isMobile" max-width="600" :draggable="true">
    <!-- Activator Slot -->
    <template #activator="{ props }">
      <v-btn
        color="#00aeef"
        variant="elevated"
        v-bind="props"
        @click="openDialog"
        style="font-weight: bold;"
        size="large"
      >
        {{ title }}
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <!-- Card Title with Logo -->
      <v-card-title class="text-center">
        <v-img
          width="140"
          height="40"
          :src="Logo"
          cover
        />
      </v-card-title>

      <!-- Form -->
      <v-form @submit.prevent="validate">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="First Name*"
                v-model="formData.firstName"
                :rules="nameRules"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Last Name*"
                v-model="formData.lastName"
                :rules="nameRules"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                type="email"
                v-model="formData.email"
                :rules="emailRules"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Address*"
                v-model="formData.address"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Phone*"
                type="tel"
                v-model="formData.phone"
                :rules="phoneRules"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Details"
                v-model="formData.details"
                rows="4"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <!-- Form Actions -->
        <v-card-actions style="display: flex; justify-content: space-between;">
          <v-btn
            text
            color="grey"
            to="/Terms"
            size="large"
          >
            Terms of Service
          </v-btn>

          <div style="display: flex; align-items: center;">
            <v-btn
              text
              @click="closeDialog"
              color="grey"
              style="margin-right: 16px;"
              size="large"
            >
              Cancel
            </v-btn>

            <v-btn
              type="submit"
              color="#00aeef"
              text-color="white"
              style="font-weight: bold;"
              size="large"
            >
              Submit
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card>

    <!-- Snackbar for Success Message -->
    <v-snackbar
      v-model="snackbar"
      timeout="3000"
      location="top center"
      color="success"
    >
      Thank you for contacting us, we will be in touch shortly!
    </v-snackbar>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import Logo from '@/assets/goclean-logo.svg';
import { db } from '../fb.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  openOnDesktop: {
    type: Boolean,
    default: false,
  },
  // Other props
});

// Dialog visibility
const dialog = ref(false);

// Snackbar visibility
const snackbar = ref(false);

// Responsive design
const { xs } = useDisplay();
const isMobile = computed(() => xs.value);

// Open dialog based on props
if (props.openOnDesktop && !isMobile.value) {
  dialog.value = true;
}

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  details: '',
});

// Validation rules
const nameRules = [
  (v) => !!v || 'Name is required',
  (v) => (v && v.length <= 50) || 'Name must be less than 50 characters',
];

const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
];

const phoneRules = [
  (v) => !!v || 'Phone number is required',
  (v) => /^\+?[0-9]{7,15}$/.test(v) || 'Phone number must be valid',
];

// Open dialog method
const openDialog = () => {
  const analytics = getAnalytics();
  logEvent(analytics, 'open_quote_form');
  dialog.value = true;
};

// Close dialog method
const closeDialog = () => {
  dialog.value = false;
};

// Form submission
const validate = async () => {
  // Manually validate each field
  let valid = true;

  const firstNameValid = nameRules.every((rule) => rule(formData.value.firstName) === true);
  const lastNameValid = nameRules.every((rule) => rule(formData.value.lastName) === true);
  const emailValid = emailRules.every((rule) => rule(formData.value.email) === true);
  const phoneValid = phoneRules.every((rule) => rule(formData.value.phone) === true);
  const addressValid = formData.value.address ? true : 'Address is required';

  valid = firstNameValid && lastNameValid && emailValid && phoneValid && addressValid === true;

  if (valid) {
    snackbar.value = true;
    try {
      // Get the current date and time in New Zealand Time
      const nzDate = new Date().toLocaleString('en-NZ', {
        timeZone: 'Pacific/Auckland',
      });

      const user = {
        ...formData.value,
        time: serverTimestamp(), // Store server timestamp in UTC
        nzTime: nzDate, // Store formatted NZ time string
      };

      // Save to Firestore
      await addDoc(collection(db, 'gocleanTester'), user);

      // Send message
      await addDoc(collection(db, 'messages'), {
        to: '+64274406794',
        body: `${formData.value.firstName} ${formData.value.lastName}\n${formData.value.phone}\n${formData.value.address}\n${formData.value.email}\n${formData.value.details || 'N/A'}\nTime: ${nzDate}`,
      });

      // Reset form data
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        details: '',
      };

      // Close dialog after a delay
      setTimeout(() => {
        closeDialog();
      }, 500);
    } catch (error) {
      console.error('Error adding document:', error);
      snackbar.value = false;
    }
  } else {
    // Handle invalid form
  }
};
</script>

<style scoped>
.v-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.v-btn {
  text-transform: none;
}

.v-img {
  width: 140px;
  height: auto;
  max-height: 60px;
}

@media (max-width: 600px) {
  .v-img {
    width: 126px; /* 10% smaller */
  }
}

.v-card-actions div {
  display: flex;
  align-items: center;
}
</style>
