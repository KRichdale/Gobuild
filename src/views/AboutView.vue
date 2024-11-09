<template>
  <v-container class="about-container py-12">
    <v-row class="text-center">
      <v-col>
        <h1>About GoClean</h1>
        <p class="lead">
          At GoClean, we’re committed to providing top-notch window cleaning, house washing, and roof cleaning services across New Zealand. 
          Our mission is to keep your home or business looking pristine, while prioritizing safety, quality, and efficiency in every job we do.
        </p>
      </v-col>
    </v-row>

    <v-row class="my-10">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          :src="image3"
          alt="Window Cleaning Service"
          max-width="100%"
        />
      </v-col>
      <v-col cols="12" md="6">
        <h2>Our Story</h2>
        <p>
          GoClean started with a simple vision: to offer reliable, professional cleaning services that make a difference in how properties look and feel. 
          We take pride in our work and believe in using the best techniques and equipment to get the job done right.
          As we continue to grow, we remain focused on delivering quality services that exceed customer expectations.
        </p>
      </v-col>
    </v-row>

    <v-row class="my-10">
      <v-col cols="12" md="6" order-md="2" class="d-flex justify-center">
        <v-img
          :src="image1"
          alt="House Washing Service"
          max-width="100%"
        />
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced, highly trained team</li>
          <li>State-of-the-art cleaning equipment and techniques</li>
          <li>Eco-friendly solutions and safety-focused processes</li>
          <li>Flexible scheduling and customized services for each property</li>
          <li>Dedicated to improving your property’s appearance and longevity</li>
        </ul>
      </v-col>
    </v-row>

    <v-row class="my-10">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          :src="image2"
          alt="Team Working Together"
          max-width="100%"
        />
      </v-col>
      <v-col cols="12" md="6">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to enhance the lives of our customers and employees by providing excellent service, fostering a great work environment, and leveraging cutting-edge technology for the best results.
        </p>
        <p>
          Whether you need regular window cleaning or a full exterior wash, GoClean is here to ensure your property remains clean, safe, and beautiful, all while taking care of the details so you don’t have to.
        </p>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <v-btn href="/contact" color="primary" large>
          Get in Touch
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import image1 from '@/assets/1.jpeg';
import image2 from '@/assets/7.webp';
import image3 from '@/assets/3.jpeg';

</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.lead {
  font-size: 1.25rem;
  color: #555;
}

h1, h2 {
  font-weight: 600;
  color: #333;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
