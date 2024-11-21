<template>
  <!-- Dialog Component -->
  <v-dialog v-model="dialog" :fullscreen="isMobile" max-width="600">
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
      <!-- Card Title with Centered Logo -->
      <v-card-title class="text-center">
        <Logo class="Logo" />
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
            variant="text"
            color="grey"
            to="/Terms"
            size="x-small"
          >
            Terms of Service
          </v-btn>

          <div style="display: flex; align-items: center;">
            <v-btn
              variant="text"
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
      location="top"
      color="success"
    >
      Thank you for contacting us, we will be in touch shortly!
    </v-snackbar>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import Logo from '@/assets/goclean-logo.svg'; // Ensure SVG is handled correctly
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
/* Logo */
.Logo {
  width: 135px;
  max-height: 60px;
  z-index: 1000;
  display: block;
  margin: 0 auto; /* Center horizontally */
}

/* Dialog Card */
.v-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Ensure children stack vertically */
}

/* Card Title with Logo */
.v-card-title {
  display: flex;
  align-items: center;
  justify-content: center; /* Ensure horizontal centering */
  padding: 24px 16px 16px;
}

.v-card-title .v-img {
  border-radius: 0;
}

/* Form Fields */
.v-text-field,
.v-textarea {
  background-color: #f9f9f9;
  border-radius: 8px;
}

.v-text-field input,
.v-textarea textarea {
  padding-left: 16px;
}

.v-input__control {
  padding-bottom: 8px;
}

.v-label {
  font-weight: 500;
  color: #555;
}

/* Buttons */
.v-btn {
  text-transform: none;
  font-weight: 600;
  flex-grow: 0;   /* Prevent buttons from stretching */
  flex-shrink: 0;
}

.v-btn--variant-text {
  color: #00aeef;
}

.v-btn--variant-elevated {
  background-color: #00aeef;
  color: #fff;
}

.v-btn--variant-elevated:hover {
  background-color: #0099cc;
}

/* Form Actions */
.v-card-actions {
  padding: 16px;
  display: flex;
  justify-content: space-between; /* Adjusted to space between */
  align-items: center;       /* Prevent vertical stretching */
}

.v-card-actions .v-btn {
  margin-left: 8px;
}

.v-card-actions .v-btn:first-child {
  margin-left: 0;
}

/* Snackbar */
.v-snackbar {
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  justify-content: center; /* Center the snackbar content */
}

/* Mobile Adjustments */
@media (max-width: 600px) {
  .v-card {
    border-radius: 0;
  }

  .v-card-title {
    padding: 16px 8px 8px;
  }

  .v-btn {
    margin-right: 2px; 
    justify-content: center;
  }

  .v-card-actions {
    flex-direction: column;
    align-items: center; /* Center buttons instead of stretching */
  }

  .v-card-actions .v-btn {
    margin: 8px 0;
    width: 100%;        /* Ensure buttons span full width */
  }

  .v-card-actions .v-btn:last-child {
    margin-bottom: 0;
  }

  .v-card-actions v-btn[to="/Terms"] {
    order: 3;
    margin-top: 8px;
  }

  .v-card-actions v-btn[type="submit"] {
    order: 1;
    margin-top: 8px;
  }

  .v-card-actions div {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
