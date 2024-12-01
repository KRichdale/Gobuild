<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <!-- Menu Header -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Menu Items -->
      <v-list-item link @click="navigateTo('/')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="navigateTo('/services')">
        <v-list-item-icon>
          <v-icon>mdi-window-cleaner</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="navigateTo('/contact')">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Contact Us</v-list-item-title>
      </v-list-item>
      <!-- Contact Buttons -->
      <v-list-item>
        <v-btn
          href="tel:+64-027-440-6794"
          text
          block
          prepend-icon="mdi-phone"
        >
          Call Us: 027-440-6794
        </v-btn>
      </v-list-item>
      <v-list-item>
        <Dialog1 title="Free Quote" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Add the Bubbles component -->
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Dialog1 from '@/components/dialog1.vue';
// Import the new Bubbles component
import Bubbles from '@/components/bubbles.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const router = useRouter();

function navigateTo(path) {
  drawer.value = false;
  router.push(path);
}

</script>
<style scoped>
.v-btn {
  text-transform: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #2e3192;
}

.free-quote-btn {
  margin-right: 50px;
}

@media (max-width: 600px) {
  .v-btn {
    padding: 4px 8px;
    font-size: 12px;
    /* Adjust padding and font size for small screens */
  }
}

</style>

