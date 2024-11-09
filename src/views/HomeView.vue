<template>
  <div class="home">
    <!-- Hero section -->
    <section>
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

                <!-- Right Column: Dialog1 (Visible on Desktop) -->
                <v-col cols="12" md="6" class="dialog-container" v-if="mdAndUp">
                  <dialog1 title="CONTACT US" openOnDesktop />
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- SVG / Back Image Container -->
    <div class="svg-container"></div>

    <section>
      <v-img :src="backImage" class="svg-image">
        <!-- Mid headers -->
        <v-container fluid style="text-align: center;">
          <v-card variant="text">
            <h1
              :class="[
                smAndDown ? 'text-h2' : 'text-h1',
                'font-black',
                'white--text',
              ]"
              style="margin: 48px 0; padding: 48px 0;"
            >
              Window Cleaning & House Washing
            </h1>
            <h3
              class="subheading white--text"
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
                <v-card-actions>
                  <v-btn color="light-blue" text @click="show0 = !show0">
                    More
                    <v-icon color="light-blue">
                      {{ show0 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expansion-panels>
                  <v-expansion-panel v-model="show0">
                    <v-expansion-panel-text>
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
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
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
                <v-card-actions>
                  <v-btn color="light-blue" text @click="show1 = !show1">
                    More
                    <v-icon color="light-blue">
                      {{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expansion-panels>
                  <v-expansion-panel v-model="show1">
                    <v-expansion-panel-text>
                      <v-card-text style="text-align: center;">
                        <span class="font-bold">High-pressure</span> water
                        blasting is often required before painting or when dirt
                        is ingrained in the property exterior.
                        <br /><br />
                        <span class="font-bold">Low-pressure</span> wash is useful
                        for ensuring no water entry into the building—a great
                        alternative for treating more delicate areas.
                      </v-card-text>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
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
                <v-card-actions>
                  <v-btn color="light-blue" text @click="show2 = !show2">
                    More
                    <v-icon color="light-blue">
                      {{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expansion-panels>
                  <v-expansion-panel v-model="show2">
                    <v-expansion-panel-text>
                      <v-card-text style="text-align: center;">
                        We offer comprehensive cleaning services for commercial
                        properties, ensuring a professional appearance for your
                        business.
                        <br /><br />
                        Contact us to discuss custom contracts tailored to your
                        needs.
                      </v-card-text>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
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
                <v-card-actions>
                  <v-btn color="light-blue" text @click="show3 = !show3">
                    More
                    <v-icon color="light-blue">
                      {{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expansion-panels>
                  <v-expansion-panel v-model="show3">
                    <v-expansion-panel-text>
                      <v-card-text style="text-align: center;">
                        Regular gutter cleaning prevents water damage and
                        prolongs the life of your gutters.
                        <br /><br />
                        Schedule seasonal maintenance to keep your gutters in
                        optimal condition.
                      </v-card-text>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Aesthetic Icons -->
        <v-container fluid>
          <v-card
            flat
            style="text-align: center; margin-top: 48px; padding-top: 48px; margin-bottom: -48px;"
          >
            <v-icon
              :icon="svgPath[0]"
              size="x-large"
              class="white--text"
            ></v-icon>
            <v-icon
              :icon="svgPath[1]"
              size="x-large"
              class="white--text"
            ></v-icon>
            <v-icon
              :icon="svgPath[2]"
              size="x-large"
              class="white--text"
            ></v-icon>
            <v-icon
              :icon="svgPath[3]"
              size="x-large"
              class="white--text"
            ></v-icon>
          </v-card>
        </v-container>
      </v-img>
    </section>

    <!-- Test Section -->
    <section>
      <v-container fluid>
        <!-- First Row -->
        <v-row style="padding-bottom: 64px;">
          <v-col cols="12" md="6">
            <v-img
              :src="houseWashImage"
              aspect-ratio="1.9"
              style="margin-bottom: 16px;"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" style="display: flex; align-items: center;">
            <div class="content-section" style="padding: 0 16px;">
              <h3 class="text-h4 font-bold" style="padding-bottom: 16px;">
                Professional House Washing Services by GoClean
              </h3>
              <p>
                Transform your home's exterior with GoClean's eco-friendly house
                washing services. Our expert team combines cutting-edge
                technology with environmental responsibility to deliver
                exceptional results.
              </p>
              <p>
                We utilize low-pressure water systems that not only conserve
                water but also protect your home's surfaces from damage. This
                gentle yet effective approach ensures a thorough clean without
                compromising your property's integrity.
              </p>
              <p>
                GoClean's commitment to sustainability extends to our choice of
                cleaning agents. We use biodegradable, chemical-free detergents
                that are tough on dirt but kind to the environment. By avoiding
                single-use plastics, we further reduce our ecological footprint.
              </p>
              <p>
                Choose GoClean for a sparkling clean home and a cleaner planet.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Second Row -->
        <v-row style="padding: 64px 0;">
          <v-col cols="12" md="6" order="last">
            <v-img
              :src="image9"
              aspect-ratio="1.9"
              style="margin-bottom: 16px;"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" style="display: flex; align-items: center;">
            <div class="content-section" style="padding: 0 16px;">
              <h3 class="text-h4 font-bold" style="padding-bottom: 16px;">
                Advanced Window Cleaning Services
              </h3>
              <p>
                Experience crystal-clear views with GoClean's professional
                window cleaning services. We combine cutting-edge technology
                with eco-conscious practices to deliver unparalleled results for
                both residential and commercial properties.
              </p>
              <p>
                Our innovative telescopic pole systems allow us to reach even
                the most challenging windows while prioritizing safety. This
                ground-based approach eliminates the need for ladders, reducing
                risks without compromising on quality.
              </p>
              <p>
                GoClean's water-conserving techniques and biodegradable cleaning
                solutions ensure refreshed and bright windows while minimizing
                environmental impact. Our plastic-free cleaning process further
                demonstrates our commitment to sustainability.
              </p>
              <p>
                Choose GoClean for windows that sparkle and a cleaning service
                that cares for your property and the planet.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Third Row -->
        <v-row style="padding-top: 64px;">
          <v-col cols="12" md="6">
            <v-img
              :src="image1"
              aspect-ratio="1.9"
              style="margin-bottom: 16px;"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" style="display: flex; align-items: center;">
            <div class="content-section" style="padding: 0 16px;">
              <h3 class="text-h4 font-bold" style="padding-bottom: 16px;">
                Sustainable Exterior Cleaning Solutions
              </h3>
              <p>
                At GoClean, we've revolutionized exterior cleaning by putting
                environmental protection at the forefront of our practices. Our
                innovative approach proves that effective cleaning doesn't have
                to come at the cost of the planet.
              </p>
              <p>
                By employing low-pressure water systems, we significantly reduce
                water consumption compared to traditional high-pressure methods.
                This not only conserves a precious resource but also ensures a
                gentler clean for your property.
              </p>
              <p>
                Our carefully formulated, eco-friendly cleaning solutions
                deliver powerful results without harmful chemicals. Combined
                with our plastic-free approach, we're setting new standards in
                sustainable cleaning services.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Us Section -->
    <section>
      <v-container fluid>
        <v-row justify="center" align="center" style="text-align: center;">
          <v-col
            cols="12"
            md="6"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <v-card flat class="transparent">
              <div style="padding: 24px 0;">
                <v-card-title
                  style="display: flex; justify-content: center; align-items: center;"
                >
                  <div class="text-h5 font-medium">
                    <a href="https://www.topreviews.co.nz/">
                      <v-img
                        style="padding-top: 24px; margin-bottom: 48px;"
                        max-width="150"
                        :src="topReviewsLogo"
                      ></v-img>
                    </a>
                    <h3>Contact Us</h3>
                  </div>
                  <svg viewBox="0 0 400 400" width="100%" height="100%">
                    <circle
                      cx="100"
                      cy="150"
                      r="80"
                      fill="rgba(0, 170, 255, 0.4)"
                    />
                    <circle
                      cx="400"
                      cy="300"
                      r="100"
                      fill="rgba(0, 170, 255, 0.4)"
                    />
                    <circle
                      cx="700"
                      cy="500"
                      r="60"
                      fill="rgba(0, 170, 255, 0.4)"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill="rgba(0, 170, 255, 0.4)"
                    />
                  </svg>
                </v-card-title>
                <v-card-text>
                  We will be in contact with you within
                  <span class="font-black">24 hours</span>, any day of the week.
                  <div style="padding: 20px;">
                    <dialog1 title="Contact Us" />
                  </div>
                </v-card-text>
              </div>
              <v-row justify="center">
                <v-list>
                  <v-list-item>
                    <v-avatar>
                      <v-icon
                        :icon="svgPath[7]"
                        size="medium"
                        color="#00aeef"
                      />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a href="tel:+64-027-440-6794">
                          <h2>027-440-6794</h2>
                        </a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-avatar>
                      <v-icon :icon="svgPath[8]" color="#00aeef" />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a href="mailto:info@goclean.co.nz">
                          <h2>info@goclean.co.nz</h2>
                        </a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-avatar>
                      <v-icon :icon="svgPath[6]" color="#00aeef" />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        Johnsonville<br />
                        Wellington
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <faqs />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import dialog1 from '@/components/dialog1.vue';
import faqs from '@/components/faqs.vue';
import 'animate.css';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Import images
import heroImage from '@/assets/Hero.webp';
import backImage from '@/assets/back.svg?url';
import houseWashImage from '@/assets/housewashawesome.jpg';
import image1 from '@/assets/1.jpeg';
import image9 from '@/assets/tall2.jpg';
import topReviewsLogo from '@/assets/Topreviewslogo.png';

const show0 = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);

const svgPath = [
  'mdi-window-closed-variant',
  'mdi-home',
  'mdi-water',
  'mdi-robot-vacuum-variant',
  'mdi-chevron-up',
  'mdi-chevron-down',
  'mdi-map-marker',
  'mdi-phone',
  'mdi-email',
];

const titleOptions = ['Window Cleaning', 'House Washing'];
const titleIndex = ref(0);
const dynamicTitle = computed(() => titleOptions[titleIndex.value]);

onMounted(() => {
  setInterval(() => {
    titleIndex.value = (titleIndex.value + 1) % titleOptions.length;
  }, 5000); // Switch title every 5 seconds
});

// Use Vuetify's useDisplay composable for responsive design
const { smAndDown, mdAndUp } = useDisplay();

onMounted(() => {
  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');
});
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

.font-medium {
  font-weight: 500;
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

/* Aesthetic Icons */
.v-icon.white--text {
  margin: 0 10px;
  transition: transform $transition-speed;
  &:hover {
    transform: scale(1.2);
    color: adjust-color($primary-color, $lightness: 20%);
  }
}

/* Test Section Styling */
.content-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

  h3.subheading {
    font-size: 1.2rem;
  }

  .v-card-text {
    font-size: 1rem;
  }

  .content-section {
    padding: 1rem;
  }

  .v-list-item-title h2 {
    font-size: 1rem;
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

  .v-list-item-title h2 {
    font-size: 1.4rem;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* New Styles for Centering the Contact Button */
.title-container {
  // ...existing styles...
  margin-top: 10%;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; // Adjust spacing as needed
}

.contact-button {
  // Existing animation and styles
  animation: glowing 3s infinite;
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
</style>
