<template>
  <v-card
    flat
    class="aesthetic-icons-card"
  >
    <div class="aesthetic-icons-container">
      <v-icon
        v-for="(icon, index) in svgPath"
        :key="index"
        :icon="icon"
        size="x-large"
        class="aesthetic-icon"
      ></v-icon>
    </div>
  </v-card>
</template>

<script setup>
// filepath: /home/druss/GoBuild/src/components/service-icons.vue
import { ref } from 'vue';

const svgPath = [
  'mdi-window-closed-variant',
  'mdi-home',
  'mdi-water',
  'mdi-robot-vacuum-variant',
];
</script>

<style lang="scss" scoped>
// filepath: /home/druss/GoBuild/src/components/service-icons.vue
@use 'sass:color';

/* Aesthetic Icons */
.aesthetic-icons-container {
  display: flex;
  justify-content: center; // Horizontally center
  align-items: center;    // Vertically center
  flex-wrap: wrap;        // Allow wrapping if necessary
  margin: 0;
  padding: 0;
}

.aesthetic-icon {
  margin: 10px; // Added margin to icons
  padding: 10px; // Added padding to icons
  transition: transform 0.3s, color 0.3s; // Added color transition
  color: #ffffff; // Initial color

  &:hover {
    transform: scale(1.2);
    color: var(--v-primary-lighten2); // Use Vuetify CSS variable
  }
}

.aesthetic-icons-card {
  background-color: transparent;
  margin: 20px; // Added margin to card
  padding: 20px; // Added padding to card
}

.aesthetic-icon {
  color: #ffffff; // Ensure icons are white
}
</style>
