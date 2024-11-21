<template>
  <section class="midPhotoSection">
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
</template>

<script setup>
import { useDisplay } from 'vuetify';
import houseWashImage from '@/assets/housewashawesome.jpg';
import image1 from '@/assets/1.jpeg';
import image9 from '@/assets/tall2.jpg';

const { smAndDown, mdAndUp } = useDisplay();
</script>

<style lang="scss" scoped>
@use 'sass:color';
$primary-color: #00aeef;

.content-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Media Queries for Enhanced Responsiveness */
@media (max-width: 600px) {
  .content-section {
    padding: 1rem;
  }
}

/* Custom Font Weight Classes */
.font-bold {
  font-weight: bold;
}
</style>