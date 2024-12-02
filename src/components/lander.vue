<template> <section class="hero">
    <v-container id="lander" fluid>
      <v-row style="height: 100%;">
        <v-col cols="12">
          <v-img
            :height="smAndDown ? '700px' : '930px'"
            :src="heroImage"
            cover
            class="hero-image"
          >
            <!-- Full Overlay with shadow -->
            <div class="shadowed-background"></div>

            <v-row
              style="
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 1;
              "
            >
              <!-- Left Column: Title Section -->
              <v-col cols="12" md="6" class="title-container">
                <!-- Title Section with shadowed background -->
                <div class="shadowed-background-content">
                  <transition name="fade">
                    <h1
                      :key="dynamicTitle"
                      :class="[
                        smAndDown ? 'text-h2' : 'text-h1',
                        'font-bold',
                        'title-words',
                      ]"
                    >
                      {{ dynamicTitle }} <br />
                      Experts
                    </h1>
                  </transition>
                </div>
              </v-col>

              <!-- Contact Button Underneath the Title for mdAndDown -->
              <v-col cols="12" class="dialog-container" v-if="mdAndDown">
                <dialog1 title="CONTACT US" />
              </v-col>

              <!-- Right Column: Dialog1 (Visible on Desktop) -->
              <v-col cols="12" md="6" class="dialog-container" v-if="mdAndUp">
                <dialog1 title="CONTACT US" openOnDesktop />
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section> </template>

<script setup>
// Keep only the necessary imports
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import dialog1 from '@/components/dialog1.vue';

// Import the hero image
import heroImage from '@/assets/housewashawesome.jpg';

// Use Vuetify's display composable
const { smAndDown, mdAndUp, mdAndDown } = useDisplay();

// Dynamic title logic
const titleOptions = ['House Washing','Window Cleaning'];
const titleIndex = ref(0);
const dynamicTitle = computed(() => titleOptions[titleIndex.value]);

onMounted(() => {
  setInterval(() => {
    titleIndex.value = (titleIndex.value + 1) % titleOptions.length;
  }, 5000);
});
</script>

<style lang="scss" scoped>
/* Variables for consistent styling */
$primary-color: #00aeef;
$shadowed-bg-color: rgba(0, 0, 0, 0.55);

/* Hero section styling */
.hero-image {
  position: relative;
}

.shadowed-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $shadowed-bg-color;
  z-index: 0;
}

.title-words {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Custom Font Weight Classes */
.font-bold {
  font-weight: bold;
}

/* Container Styling */
#lander {
  background-color: $primary-color;
}

/* Adjusted Shadowed Background to cover full hero image */
.hero-image {
  position: relative;
}

.shadowed-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $shadowed-bg-color;
  z-index: 0;
}

/* Optional: Additional styles for content overlay */
.shadowed-background-content {
  // ...existing styles...
}

/* Contact Button Glow Animation */
.contact-button {
  animation: glowing 3s infinite;
}

@keyframes glowing {
  0%,
  100% {
    box-shadow: 0 0 5px $primary-color;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 20px $primary-color;
    transform: scale(1.05);
  }
}

/* Title Styling */
.title-words {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Media Queries for Enhanced Responsiveness */
@media (max-width: 600px) {
  .shadowed-background {
    padding: 1rem;
  }

  h1.text-h1 {
    font-size: 2.5rem;
  }

  h1.text-h2 {
    font-size: 1.8rem;
  }

  .title-container {
    // Center vertically and horizontally on mobile devices
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; // Ensure text is centered
    transform: translateY(-25%); // Shift title 25% upwards on mobile
  }

  .v-row {
    justify-content: center; // Center the row's content
  }
}

@media (min-width: 1200px) {
  h1.text-h1 {
    font-size: 5rem;
  }

  h1.text-h2 {
    font-size: 3rem;
  }

  .title-container {
    padding-left: 200px; // Adjust the padding value as needed
    transform: translateY(-10%); // Shift title 10% upwards on desktop
  }
}

/* Smooth Scrolling for Enhanced UX */
html {
  scroll-behavior: smooth;
}

/* Removed Unused Font Classes */
// .font-black
// .font-medium

/* Removed Unused Card and Button Styles */
// .v-card.white {
//   border-radius: 16px;
//   transition: transform $transition-speed, box-shadow $transition-speed;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
//   }
// }

// .v-card-text {
//   font-size: 1.1rem;
//   line-height: 1.6;
// }

// .v-btn {
//   border-radius: 30px;
//   transition: background-color $transition-speed, color $transition-speed;
//   &:hover {
//     background-color: adjust-color($primary-color, $lightness: -10%);
//     color: #ffffff;
//   }
// }

/* Removed Unused Icon Styles */
// .v-icon.white--text {
//   margin: 0 10px;
//   transition: transform $transition-speed;
//   &:hover {
//     transform: scale(1.2);
//     color: adjust-color($primary-color, $lightness: 20%);
//   }
// }

/* Removed Unused Content Section */
// .content-section {
//   background: rgba(255, 255, 255, 0.1);
//   padding: 2rem;
//   border-radius: 12px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// }

/* Removed Unused Button Container */
// .button-container {
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// }

/* New Styles for Centering the Contact Button */
.title-container {
  // ...existing styles...
  margin-top: 10%;
}

.dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Optional: Adjust spacing if necessary */
@media (min-width: 601px) {
  .dialog-container {
    padding-left: 20px; // Adjust as needed
  }
}

/* Styles for Viewports Below 960px */
@media (max-width: 959px) {
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 0; // Remove left padding
  }

  .dialog-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px; // Add spacing below the title
  }
}

/* Styles for Viewports Above 960px */
@media (min-width: 960px) {
  .title-container {
    // ...existing styles...
  }

  .dialog-container {
    // ...existing styles...
  }
}
</style>