<template>
  <section class="background-section">
      <!-- Mid headers -->
      <v-container fluid style="text-align: center;">
        <v-card variant="text">
          <h1
            :class="[
              smAndDown ? 'text-h2' : 'text-h1',
              'font-black',
              'text-white',
            ]"
            style="margin: 48px 0; padding: 48px 0;"
          >
            Window Cleaning & House Washing
          </h1>
          <h3
            class="subheading text-white"
            style="margin-bottom: 48px; font-weight: normal;"
          >
            Wellington Window Cleaning & House Washing Professionals <br />
          </h3>
        </v-card>
      </v-container>

      <!-- Cards -->
      <v-container fluid>
        <!-- First Row -->
        <v-row justify="center">
          <!-- Window Cleaning Card -->
          <v-col cols="12" sm="6" md="4" style="margin-bottom: 16px;">
            <v-card class="white">
              <v-card-text style="text-align: center;">
                <v-icon size="50" color="#00aeef">mdi-water</v-icon>
              </v-card-text>
              <v-card-title>
                <div
                  class="text-h5 font-bold"
                  style="text-align: center; padding-bottom: 12px;"
                >
                  <h3>Window Cleaning</h3>
                </div>
              </v-card-title>
              <v-card-text style="text-align: center; padding-bottom: 48px;">
                • Interior & Exterior Clean <br />
                • Enhanced Visibility <br />
                • Frame cleaning <br />
                • Track cleaning
              </v-card-text>
              <v-card-actions class="card-actions">
                <v-btn color="light-blue" text @click="show0 = !show0">
                  More
                  <v-icon color="light-blue">
                    {{ show0 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <div v-if="show0">
                <v-card-text style="text-align: center;">
                  The <span class="font-bold">exterior</span> of your
                  property is the first thing that family and friends will
                  see when entering your home or business.
                  <br /><br />
                  A <span class="font-bold">clean</span> set of windows will
                  provide a great
                  <span class="font-bold">first impression</span> to guests
                  or clients.
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <!-- House Washing Card -->
          <v-col cols="12" sm="6" md="4" style="margin-bottom: 16px;">
            <v-card class="white">
              <v-card-text style="text-align: center;">
                <v-icon size="50" color="#00aeef">mdi-home</v-icon>
              </v-card-text>
              <v-card-title>
                <div
                  class="text-h5 font-bold"
                  style="text-align: center; padding-bottom: 12px;"
                >
                  <h3>House Washing</h3>
                </div>
              </v-card-title>
              <v-card-text style="text-align: center; padding-bottom: 48px;">
                • Refresh and shine your home<br />
                • Clean pathways/driveways <br />
                • High/Low-pressure wash <br />
                • Impress your neighbors
              </v-card-text>
              <v-card-actions class="card-actions">
                <v-btn color="light-blue" text @click="show1 = !show1">
                  More
                  <v-icon color="light-blue">
                    {{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <div v-if="show1">
                <v-card-text style="text-align: center;">
                  <span class="font-bold">High-pressure</span> water
                  blasting is often required before painting or when dirt
                  is ingrained in the property exterior.
                  <br /><br />
                  <span class="font-bold">Low-pressure</span> wash is useful
                  for ensuring no water entry into the building—a great
                  alternative for treating more delicate areas.
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Second Row -->
        <v-row justify="center">
          <!-- Commercial Jobs Card -->
          <v-col cols="12" sm="6" md="4" style="margin-bottom: 16px;">
            <v-card class="white">
              <v-card-text style="text-align: center;">
                <v-icon size="50" color="#00aeef">mdi-briefcase</v-icon>
              </v-card-text>
              <v-card-title>
                <div
                  class="text-h5 font-bold"
                  style="text-align: center; padding-bottom: 12px;"
                >
                  <h3>Commercial Jobs</h3>
                </div>
              </v-card-title>
              <v-card-text style="text-align: center; padding-bottom: 48px;">
                • Office cleaning<br />
                • Building maintenance<br />
                • Storefront cleaning<br />
                • Custom contracts
              </v-card-text>
              <v-card-actions class="card-actions">
                <v-btn color="light-blue" text @click="show2 = !show2">
                  More
                  <v-icon color="light-blue">
                    {{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <div v-if="show2">
                <v-card-text style="text-align: center;">
                  We offer comprehensive cleaning services for commercial
                  properties, ensuring a professional appearance for your
                  business.
                  <br /><br />
                  Contact us to discuss custom contracts tailored to your
                  needs.
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <!-- Gutter Cleaning Card -->
          <v-col cols="12" sm="6" md="4" style="margin-bottom: 16px;">
            <v-card class="white">
              <v-card-text style="text-align: center;">
                <v-icon size="50" color="#00aeef">mdi-water-pump</v-icon>
              </v-card-text>
              <v-card-title>
                <div
                  class="text-h5 font-bold"
                  style="text-align: center; padding-bottom: 12px;"
                >
                  <h3>Gutter Cleaning</h3>
                </div>
              </v-card-title>
              <v-card-text style="text-align: center; padding-bottom: 48px;">
                • Remove debris<br />
                • Prevent blockages<br />
                • Protect your property<br />
                • Seasonal maintenance
              </v-card-text>
              <v-card-actions class="card-actions">
                <v-btn color="light-blue" text @click="show3 = !show3">
                  More
                  <v-icon color="light-blue">
                    {{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <div v-if="show3">
                <v-card-text style="text-align: center;">
                  Regular gutter cleaning prevents water damage and
                  prolongs the life of your gutters.
                  <br /><br />
                  Schedule seasonal maintenance to keep your gutters in
                  optimal condition.
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        
      </v-container>

      <!-- Aesthetic Icons -->
      <ServiceIcons /> <!-- Ensures icons are rendered correctly -->


  </section>
</template>

<script setup>
// filepath: /home/druss/GoBuild/src/components/serviceCard.vue
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import ServiceIcons from '@/components/service-icons.vue'; // Ensure correct path

// Import images
import backImage from '@/assets/back.svg?url';

const show0 = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
// Add more show variables if there are additional service cards

const { smAndDown } = useDisplay();
</script>

<style lang="scss" scoped>
  @use 'sass:color';
  
  /* Variables for consistent styling */
  $primary-color: #00aeef;
  $overlay-color: rgba(0, 0, 0, 0.5);
  $shadowed-bg-color: rgba(0, 0, 0, 0.55);
  $transition-speed: 0.3s;
  
  /* Custom Font Weight Classes */
  .font-bold {
    font-weight: bold;
  }
  
  .font-black {
    font-weight: 900;
  }
  
  /* Contact Button Glow Animation */
  .contact-button {
    animation: glowing 3s infinite;
  }

  .background-section {
    background-image: url('@/assets/back.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    /* Remove height to allow section to expand based on content */
    /* height: 100vh; // Removed */
    /* Optionally, add padding to prevent content from touching edges */
    padding-bottom: 250px;
  }

  /* Ensure content is positioned correctly */
  .background-section > * {
    position: relative;
    z-index: 1;
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
  
  /* Card Section Enhancements */
  .v-card.white {
    border-radius: 16px;
    transition: transform $transition-speed, box-shadow $transition-speed;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  .v-card-text {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  /* Buttons */
  .v-btn {
    border-radius: 30px;
    transition: background-color $transition-speed, color $transition-speed;
    &:hover {
      background-color: adjust-color($primary-color, $lightness: -10%);
      color: #ffffff;
    }
  }
  
  /* Media Queries for Enhanced Responsiveness */
  @media (max-width: 600px) {

      /* Increase padding-bottom to add extra space on mobile */
  .background-section {
    padding-bottom: 150px; // Increased from 50px to 150px
  }


    .shadowed-background {
      padding: 1rem;
    }
  
    h1.text-h1 {
      font-size: 2.5rem;
    }
  
    h1.text-h2 {
      font-size: 1.8rem;
    }
  
    h3.subheading {
      font-size: 1.2rem;
    }
  
    .v-card-text {
      font-size: 1rem;
    }
  
    .content-section {
      padding: 1rem;
    }
  
    .title-container {
      // Center vertically and horizontally on mobile devices
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center; // Ensure text is centered
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
  
    h3.subheading {
      font-size: 1.8rem;
    }
  
    .v-card-text {
      font-size: 1.3rem;
    }
  }
  
  /* Smooth Scrolling for Enhanced UX */
  html {
    scroll-behavior: smooth;
  }
  
  /* Limit each card's maximum width and center them */
  .v-card.white {
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* New Styles for Centering the Contact Button */
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px; // Adjust spacing as needed
  }
  
  .contact-button {
    // Existing animation and styles
    animation: glowing 3s infinite;
  }

  /* New styles for aligning the "More" button */
  .card-actions {
    display: flex;
    justify-content: flex-end;
    padding: 16px; // Adjust padding as needed
  }

  .card-actions .v-btn {
    padding: 8px 16px; // Add padding to the button for better spacing
  }
  
  /* Optional: Add hover effects or transitions for the button */
  .card-actions .v-btn:hover {
    background-color: adjust-color($primary-color, $lightness: -10%);
    color: #ffffff;
  }



  .background-section {
  /* Stack the backgrounds: 
     The first listed (image) is on top, 
     the second (gradient) is beneath it. */
  background: 
    url('@/assets/back.svg') no-repeat bottom/cover,
    linear-gradient(to top, #2e3192 25%, transparent 25%);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 250px;
  position: relative;
}



</style>


