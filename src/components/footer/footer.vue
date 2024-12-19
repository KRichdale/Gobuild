<template>
  <v-footer class="footer white--text" padless>
    <v-container class="py-5">
      <serviceIcons />
      <v-row>
        <!-- Logo and Description Section -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-4 mb-md-0">
          <v-img
            src="/path-to-goclean-logo.png" 
            alt="GoClean Logo"
            max-width="150"
            class="mb-3"
          ></v-img>
          <p class="mb-0">
            GoClean provides top-quality residential and commercial cleaning services,
            focused on customer satisfaction and safety.
          </p>
        </v-col>

        <!-- Useful Links Section -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-4 mb-md-0">
        </v-col>

        <!-- Contact Info Section -->
        <v-col cols="12" md="4" class="text-left">
          <h3 class="footer-heading">Contact Us</h3>
          <div class="contact-info">
            <p><v-icon>mdi-phone</v-icon><a href="tel:0274406794" class="phone-link">0274406794</a></p>
            <p><v-icon>mdi-email</v-icon>info@goclean.co.nz</p>
            <p><v-icon>mdi-clock</v-icon> Mon - Fri: 5:00 AM - 8:00 PM</p>
            <p><v-icon>mdi-map-marker</v-icon> Johnsonville, Wellington</p>
          </div>
        </v-col>
      </v-row>
      <v-divider class="white my-4"></v-divider>
      <div class="text-center">
        <p class="mb-0">© {{ new Date().getFullYear() }} GoClean. All rights reserved.</p>
      </div>
    </v-container>
    <v-btn
      fab
      color="white"
      class="scroll-to-top-button"
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-footer>
</template>

<script setup>
import serviceIcons from '../service-icons.vue';
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.footer {
  background-color: #2e3192; /* GoClean primary color */
  color: #ffffff;
}

.v-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Typography and headings */
.footer-heading {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #ffffff;
}

/* Link list styling */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #80cbc4;
}

p .v-icon{
  padding-right: 24px;
}

/* Contact Info */
.contact-info p {
  margin-bottom: 12px;
  color: #ffffff; 
  font-size: 0.95rem;
  padding: 6px;
}
.contact-info p:last-child {
  margin-bottom: 0;
}
.contact-info v-icon {
  color: #ffffff;
  margin-right: 8px;
}

.phone-link {
  text-decoration: none;
  color: inherit;
}

.phone-link:hover {
  color: #80cbc4;
}

/* Scroll to top button */
.scroll-to-top-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
}

.scroll-to-top-button:hover v-icon {
  color: #2e3192;
}

/* Ensure white text where needed */
.white--text p, 
.white--text span,
.white--text h3 {
  color: #ffffff;
}
</style>
