<template>
  <v-app>
    <!-- Replace v-app-bar with NavBar component -->


<NavBar />

    <!-- Main Content -->
    <v-main>
      <v-container class="pa-0 ma-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

<Footer />

  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '@/components/nav/nav-bar.vue';
import NavDraw from '@/components/nav/nav-draw.vue';
import LogoIcon from '@/assets/goclean-logo.svg'; // Ensure SVG is handled correctly by vite-svg-loader
import Dialog1 from '@/components/dialog1.vue';
import Footer from '@/components/footer/footer.vue';
// Import the new Bubbles component
import Bubbles from '@/components/bubbles.vue';

const drawer = ref(false);
</script>

<style scoped>
/* Remove styles that have been moved to NavBar and NavDraw */

/* Remaining styles specific to App.vue */
</style>
