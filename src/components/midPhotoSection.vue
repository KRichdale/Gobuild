<template>
  <section class="midPhotoSection">
    <v-container fluid style="padding-left: 0; padding-right: 0;">
      <!-- New Title Section -->
      <v-container fluid style="text-align: center; margin: 100px 0; padding-left: 0; padding-right: 0;">
        <v-card variant="text">
          <h1
            :class="[
              smAndDown ? 'text-h2' : 'text-h1',
              'font-black',
              'text-black',
            ]"
            style="margin: 24px 0; padding: 24px 0;"
          >
            Full Insurance
          </h1>
          <h3
            class="subheading text-black"
            style="margin-bottom: 24px; font-weight: normal;"
          >
            Cover up to 1 million dollars for your most valuable asset <br />
          </h3>
        </v-card>
      </v-container>
      <!-- First Row -->
      <v-row style="padding-bottom: 64px;">
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 1" 
        >
          <v-img
            :src="houseWashImage"
            aspect-ratio="1.9"
            style="margin-top: 24px; margin-bottom: 16px;"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 2" 
          style="display: flex; align-items: center;"
        >
          <div class="content-section" style="padding: 0;">
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
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 1" 
        >
          <v-img
            :src="image9"
            aspect-ratio="1.9"
            style="margin-top: 24px; margin-bottom: 16px;"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 2" 
          style="display: flex; align-items: center;"
        >
          <div class="content-section" style="padding: 0;">
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
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 1" 
        >
          <v-img
            :src="image1"
            aspect-ratio="1.9"
            style="margin-top: 24px; margin-bottom: 16px;"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 2"  
          style="display: flex; align-items: center;"
        >
          <div class="content-section" style="padding: 0;">
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
</template>

<script setup>
import { useDisplay } from 'vuetify';
import houseWashImage from '@/assets/deckwash.jpg';
import image1 from '@/assets/1.jpeg';
import image9 from '@/assets/tall2.jpg';

const { smAndDown, mdAndUp } = useDisplay();
</script>

<style lang="scss">
@use 'sass:color';
$primary-color: #00aeef;

// Add padding to the entire section
.midPhotoSection {
  padding: 50px 0; // Removed side padding

  @media (max-width: 600px) {
    padding: 30px 0; // Removed side padding
  }
}

.content-section {
  position: relative;
  z-index: 1000;
  background: #ffffff;
  padding: 0; // Removed side padding
  border-radius: 12px;
  // Removed backdrop-filter and box-shadow for a solid appearance
  // backdrop-filter: blur(10px);
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 0; // Removed side padding
  }
}

/* Increase spacing between rows */
.v-row {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

/* Media Queries for Enhanced Responsiveness */
@media (max-width: 600px) {
  .content-section {
    padding: 1.5rem 1rem;
  }
}

/* Custom Font Weight Classes */
.font-black {
  font-weight: 900;
}

.font-bold {
  font-weight: bold;
}

.text-black {
  color: #000000;
}

/* Apply ServiceCard Title Styles */
h1 {
  margin: 48px 0;
  padding: 48px 0;
  font-weight: 900;
  color: #000000;
  font-size: 2.5rem; // Increased font size for main heading
  line-height: 1.2; // Adjusted line height for better spacing
}

h3.subheading {
  margin-bottom: 48px;
  font-weight: normal;
  color: #000000;
}

h3 {
  font-size: 1.75rem; // Increased font size for subheadings
  line-height: 1.3; // Improved line height
  margin-bottom: 1.5rem; // Enhanced bottom margin for spacing
}

p {
  font-size: 1rem; // Standardized paragraph font size
  line-height: 1.6; // Enhanced readability with better line height
  margin-bottom: 1rem; // Consistent spacing between paragraphs
}

/* Responsive Typography Adjustments */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem; // Adjusted font size for smaller screens
  }

  h3 {
    font-size: 1.5rem; // Adjusted subheading size for mobile devices
  }

  p {
    font-size: 0.95rem; // Slightly smaller paragraphs for better fit
  }
}

.midPhotoSection * {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>