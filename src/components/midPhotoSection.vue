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
  Transform your home's exterior with GoClean's professional eco-friendly house washing services. Our expert team uses cutting-edge soft washing techniques and environmentally responsible methods to deliver outstanding results for all types of homes.
</p>
<p>
  Our low-pressure washing system (also known as soft washing) is safe for all exterior surfaces, including siding, brick, stucco, and more. This gentle yet effective approach removes dirt, grime, mold, and algae without the risk of damage associated with high-pressure washing, while also conserving water.
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
  Experience crystal-clear views with GoClean's professional window cleaning services. We use cutting-edge, pure water technology and eco-conscious methods to deliver unparalleled results for both residential window cleaning and commercial window cleaning projects.
</p>
<p>
  Our innovative telescopic pole window cleaning system allows us to safely and efficiently clean even hard-to-reach windows from the ground. This ladder-free approach minimizes risks, protects your property, and ensures a spot-free, streak-free finish every time.
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
  GoClean provides innovative and environmentally responsible exterior cleaning services. We believe in delivering exceptional results without compromising the planet. Our commitment to sustainable practices makes us a leader in eco-friendly cleaning.
</p>
<p>
  Using low-pressure washing techniques, we significantly reduce water consumption compared to traditional high-pressure washing. This eco-friendly approach conserves water and provides a safer, gentler clean for your home or business, protecting surfaces from damage.
</p>
<p>
  Our biodegradable and non-toxic cleaning solutions deliver powerful cleaning power without harmful chemicals. Combined with our commitment to minimizing plastic waste, we offer truly sustainable exterior cleaning services. Choose GoClean for environmentally conscious cleaning that delivers outstanding results.
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
    margin-bottom: 185px;
    
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
