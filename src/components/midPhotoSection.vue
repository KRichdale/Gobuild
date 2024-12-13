<template>
  <section class="midPhotoSection">
    <v-container fluid class="section-wrapper">
      <!-- Title Section -->
      <v-container fluid class="title-section text-center">
        <v-card variant="text" class="no-shadow">
          <h1 :class="[smAndDown ? 'text-h2' : 'text-h1', 'font-black', 'main-heading']">
            Fully Insured
          </h1>
          <h3 class="subheading">
            Cover up to 1 million dollars for your most valuable asset
          </h3>
        </v-card>
      </v-container>

      <!-- First Row -->
      <v-row class="content-row">
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 1"
        >
          <v-img
            :src="houseWashImage"
            aspect-ratio="1.9"
            class="image-style"
            cover
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 2"
          class="align-center text-col"
        >
          <div class="content-section">
            <div class="icon-title">
              <v-icon color="white" size="96" class="mr-4">mdi-water</v-icon>
              <h3 class="text-h4 font-bold">
                Professional House Washing Services
              </h3>
            </div>
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

          </div>
        </v-col>
      </v-row>

      <!-- Second Row -->
      <v-row class="content-row">
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 2"
        >
          <v-img
            :src="image9"
            aspect-ratio="1.9"
            class="image-style"
            cover
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 1"
          class="align-center text-col"
        >
          <div class="content-section">
            <div class="icon-title">
              <v-icon color="white" size="96" class="mr-4">mdi-window-closed-variant</v-icon>
              <h3 class="text-h4 font-bold">
                Advanced Window Cleaning Services
              </h3>
            </div>
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
          </div>
        </v-col>
      </v-row>

      <!-- Third Row -->
      <v-row class="content-row">
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 2 : 1"
        >
          <v-img
            :src="image1"
            aspect-ratio="1.9"
            class="image-style"
            cover
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order="smAndDown ? 1 : 2"
          class="align-center text-col"
        >
          <div class="content-section">
            <div class="icon-title">
              <v-icon color="white" size="96" class="mr-4">mdi-home</v-icon>
              <h3 class="text-h4 font-bold">
                Sustainable Exterior Cleaning Solutions
              </h3>
            </div>
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

const { smAndDown } = useDisplay();
</script>

<style scoped lang="scss">
@use 'sass:color';

$primary-color: #00aeef;
$max-content-width: 900px;
$background-color: #2e3192;
$text-color: #ffffff;

/* Utility Classes */
.no-shadow {
  box-shadow: none !important;
  padding: 0 12px;
}

.text-center {
  text-align: center;
}

.align-center {
  display: flex;
  align-items: center;
}

/* Section and Layout Wrappers */
.midPhotoSection {
  background: $background-color;
  padding: 50px 0;
  @media (max-width: 600px) {
    padding: 30px 0;
  }
}

.section-wrapper {
  max-width: 100%;


}

/* Title Section */
.title-section {
  margin: 80px 0 60px; 
  @media (max-width: 600px) {
    margin: 60px 0 40px;
  }
}

.main-heading {
  margin: 24px 0;
  padding: 24px 0;
  @media (max-width: 600px) {
    margin: 16px 0;
    padding: 16px 0;
  }
}

.subheading {
  margin-bottom: 24px;
  font-weight: normal;
  color: $text-color;
}

/* Rows and Columns */
.content-row {
  margin-bottom: 64px;
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
}

/* Images */
.image-style {
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  margin: 24px 0 16px;
}

/* Text Column */
.text-col {
  padding: 0 16px;
  @media (min-width: 960px) {
    padding: 0 24px;
  }
}

/* Content Section */
.content-section {
  background: $background-color;
  border-radius: 12px;
  padding: 16px;
  border: 5px solid #ffffff;
  @media (min-width: 600px) {
    border: 10px solid #ffffff;
    padding: 36px;
  }
}

/* Typography */
.font-black {
  font-weight: 900;
  color: $text-color;
}

.font-bold {
  font-weight: bold;
  color: $text-color;
}

h1 {
  font-weight: 900;
  color: $text-color;
  font-size: 2.5rem;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.2;
  }
}

h3 {
  font-size: 1.75rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: $text-color;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: $text-color;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
}

/* New Styles for Icon and Title Alignment */
.icon-title {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

.icon-title .mr-4 {
  margin-right: 16px;
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
}

/* New Styles for Icon Size on Mobile */
@media (max-width: 600px) {
  .icon-title v-icon {
    transform: scale(0.75);
  }
}
</style>
