<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="white" elevated>
      <div class="d-flex align-center justify-space-between" style="width: 100%;">
        <!-- Left Section -->
        <div class="d-flex align-center">
          <v-app-bar-nav-icon class="nav-icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <!-- Logo (desktop) -->
          <router-link to="/" class="text-decoration-none d-none d-md-flex">
            <LogoIcon class="logo-icon" />
          </router-link>
        </div>

        <!-- Logo (mobile) -->
        <router-link to="/" class="text-decoration-none d-flex d-md-none">
          <LogoIcon class="logo-icon" />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn text to="/" exact class="mx-1 x-large">Home</v-btn>
          <v-btn text to="/services" class="mx-1 x-large">Services</v-btn>
          <v-btn text to="/contact" class="mx-1 x-large">Contact</v-btn>
          <!-- Contact Button -->
          <v-btn
            href="tel:+64-027-440-6794"
            text
            class="mx-1 x-large"
            prepend-icon="mdi-phone"
          >
            027-440-6794
          </v-btn>
        </div>

        <!-- Free Quote Button -->
        <Dialog1 title="Free Quote" class="free-quote-btn" />
      </div>
    </v-app-bar>

    <!-- Navigation Drawer -->
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
        <v-list-item link @click="drawer = false" to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/services">
          <v-list-item-icon>
            <v-icon>mdi-window-cleaner</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/contact">
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

    <!-- Main Content -->
    <v-main>
      <v-container class="pa-0 ma-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import LogoIcon from '@/assets/goclean-logo.svg'; // Ensure SVG is handled correctly by vite-svg-loader
import Dialog1 from '@/components/dialog1.vue';

const drawer = ref(false);
</script>

<style scoped>
.v-app-bar {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  padding-left: 0;
  padding-right: 8px;
  margin-bottom: 0;
  position: relative;
}

.logo-nav-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Center logo within container */
  flex: 1; /* Allow container to take available space */
  z-index: 1000;
}

.flex-grow-1 {
  flex-grow: 1;
}

.logo-icon {
  width: 135px;
  height: auto;
  max-height: 60px;
  z-index: 1000;
}

.nav-icon {
  transform: scale(1.25);
  transform-origin: center;
}

.nav-icon .v-icon {
  font-size: 32px;
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
  .v-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}

.free-quote-btn {
  margin-right: 5px;
}
</style>
