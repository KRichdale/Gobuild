<template>
  <v-app-bar app color="white" elevated>
    <div class="app-bar-container">
      <!-- Hamburger Icon -->
    <v-app-bar-nav-icon class="nav-icon" @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
      <!-- Logo moved next to Hamburger Icon -->
      <router-link to="/" class="text-decoration-none logo-link">
        <LogoIcon class="logo-icon" />
      </router-link>

      <!-- Spacer to push Free Quote Button to right -->
      <div class="flex-grow-1"></div>

      <!-- Free Quote Button -->
      <Dialog1 title="Free Quote" class="free-quote-btn" />
    </div>
  </v-app-bar>
</template>

<script setup>
import { defineEmits } from 'vue';
import LogoIcon from '@/assets/goclean-logo.svg';
import Dialog1 from '@/components/dialog1.vue';

const emit = defineEmits(['toggle-drawer']);
</script>

<style scoped>
.v-app-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  padding-right: 8px;
  margin-bottom: 0;
  position: relative;
}

.logo-icon {
  width: 135px;
  height: auto;
  max-height: 60px;
  z-index: 1000;
  margin-top: 4px;
}

.nav-icon {
  transform: scale(1.25);
  transform-origin: center;
  padding-left: 4px;
}

.nav-icon .v-icon {
  font-size: 32px;
}

.app-bar-container {
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  justify-content: flex-start;
  width: 100%;
}

.flex-grow-1 {
  flex-grow: 1;
}

.free-quote-btn {
  margin-right: 50px;
}

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

@media (max-width: 600px) {
  .logo-icon {
    width: 121.5px; /* 10% smaller */
  }
  .free-quote-btn {
    margin-right: 5px;
  }
  .v-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
  .app-bar-container {
    position: relative;
  }
}
</style>