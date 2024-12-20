<template>
  <section class="hero" :style="{ height: smAndDown ? '700px' : '100vh' }">
    <v-container fluid class="hero-container pa-0">
      <v-img
        :src="heroImage"
        cover
        class="hero-image"
        :height="smAndDown ? '700px' : '100vh'"
      >
        <div class="overlay"></div>
        <div class="text-container">
          <h1
            :key="titleKey"
            :class="[ 
              smAndDown ? 'text-h2' : 'text-h1', 
              'title-words', 
              'animate__animated', 
              'animate__fadeInDown' 
            ]"
          >
            {{ dynamicTitle }}<br />Experts
          </h1>
          <!-- Add the dialog1 button here -->
          <Dialog1 title="Free Quote" class="free-quote-btn">
            <template #dialog-activator="{ dialogProps, openDialog }">
              <v-btn
                class="contact-button"
                color="#00aeef"
                variant="elevated"
                size="x-large"
                v-bind="dialogProps"
                @click="() => { dialogProps.onClick(); openDialog(); }"
              >
                Contact Us
              </v-btn>
            </template>
          </Dialog1>
        </div>
      </v-img>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';

// Import Animate.css globally
import 'animate.css';

// Your hero image import
import heroImage from '@/assets/housewashawesome.jpg';
import Dialog1 from './dialog1.vue';

const { smAndDown } = useDisplay();

// Array of titles to cycle through
const titleOptions = ['House Washing', 'Window Cleaning'];
const titleIndex = ref(0);
const dynamicTitle = computed(() => titleOptions[titleIndex.value]);

// Key to force re-render of the h1 to re-trigger animation
const titleKey = ref(0);

// On mount, start the interval to change the title every 5 seconds
onMounted(() => {
  console.log('Component mounted, starting title updates...');
  function updateTitle() {
    titleIndex.value = (titleIndex.value + 1) % titleOptions.length;
    titleKey.value += 1; // Forces h1 to re-mount and run the animation again
    console.log(`Title changed to: ${dynamicTitle.value}`);
    setTimeout(updateTitle, 5000);
  }
  setTimeout(updateTitle, 5000);
});
</script>

<style lang="scss" scoped>
$primary-color: #00aeef;
$overlay-color: rgba(0, 0, 0, 0.55);

.hero-container {
  position: relative;
  padding: 0;
}

.hero-image {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $overlay-color;
  z-index: 1;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 150px));
  z-index: 2;
  text-align: center;
  color: #fff;
}

.title-words {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
}

/* Adjust the button padding to prevent it from feeling tight */
.contact-button {
  font-weight: bold;
  padding: 16px 32px; /* Increase padding as desired */
  font-size: 1.25rem; 
  position: relative; 
  top: 100px;
}

/* Responsive title sizing */
@media (max-width: 600px) {
  h1.text-h1 {
    font-size: 2.5rem;
  }

  h1.text-h2 {
    font-size: 1.8rem;
  }

  .contact-button {
    padding: 12px 24px;
    font-size: 1rem;
  }
}

@media (min-width: 1200px) {
  h1.text-h1 {
    font-size: 5rem;
  }

  h1.text-h2 {
    font-size: 3rem;
  }
}

html {
  scroll-behavior: smooth;
}
</style>
