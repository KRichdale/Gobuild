<template>
    <v-footer  class="white--text" padless>
      <v-container class="py-5">
        <v-row>
          <!-- Logo and Description Section -->
          <v-col cols="12" md="4" class="text-center text-md-left">
            <v-img
              src="/path-to-goclean-logo.png" 
              alt="GoClean Logo"
              max-width="150"
              class="mb-3"
            ></v-img>
            <p>
              GoClean provides top-quality residential and commercial cleaning services
              focused on customer satisfaction and safety.
            </p>
            <!-- links area -->
            <div class="mt-6 d-flex justify-center justify-md-start">
              <v-btn icon>
                <v-icon color="blue">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="blue">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="blue">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="blue">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="blue">mdi-youtube</v-icon>
              </v-btn>
            </div>
          </v-col>
  
          <!-- Navigation Links Section -->
          <v-col cols="12" md="3" class="text-center text-md-left">
            <ul class="list-unstyled">
              <li><a href="#about" class="white--text">About us</a></li>
              <li><a href="#services" class="white--text">Services</a></li>
              <li><a href="#commercial" class="white--text">Commercial</a></li>
              <li><a href="#residential" class="white--text">Residential</a></li>
              <li><a href="#pricing" class="white--text">How much</a></li>
              <li><a href="#access" class="white--text">Access and Insurance</a></li>
              <li><a href="#location" class="white--text">Location</a></li>
            </ul>
          </v-col>
  
          <!-- Contact Info Section -->
          <v-col cols="12" md="3" class="text-center text-md-left">
            <div class="contact-info">
              <p><v-icon>mdi-phone</v-icon> 0274406794 </p>
              <p><v-icon>mdi-email</v-icon> info@goclean.co.nz</p>
              <p><v-icon>mdi-clock</v-icon> Mon - Fri: 5:00 AM - 8:00 PM</p>
              <p><v-icon>mdi-map-marker</v-icon> 64 Dominion Park Street, Johnsonville, Wellington</p>
            </div>
          </v-col>
  
          <!-- Subscription Section -->
          <v-col cols="12" md="2" class="text-center text-md-left">
            <p>
              Subscribe to stay connected with us and have easy access to our
              services. As an added benefit, our email subscribers receive
              exclusive discounts!
            </p>
            <v-text-field
              label="Email"
              dense
              outlined
              class="mb-2 mt-6"
            ></v-text-field>
            <v-btn block color="white" class="black--text rounded-pill">Subscribe</v-btn>
          </v-col>
        </v-row>
        <v-divider class="white my-4"></v-divider>
        <div class="text-center">
          <p>© {{ new Date().getFullYear() }} GoClean. All rights reserved.</p>
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  </script>
  
  <style scoped>
  /* Improve spacing and layout */
  .v-footer {
    padding: 24px 16px;
    background-color: #2e3192; /* GoClean primary color */
    color: #ffffff;
  }
  
  .v-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .v-col {
    margin-bottom: 16px;
  }
  
  .v-btn {
    margin-right: 8px;
  }
  
  /* Enhance link styles */
  .white--text a {
    color: #ffffff;
  }
  
  .white--text a:hover {
    color: #80cbc4;
  }

  /* Add spacing to Contact Info section */
  .contact-info p {
    margin-bottom: 12px;
    color: #ffffff; /* Ensure paragraph text is white */
  }
  
  .contact-info p:last-child {
    margin-bottom: 0;
  }

  /* Remove specific icon colors to inherit white */
  .contact-info v-icon {
    color: #ffffff;
  }

  /* Ensure subscription section text is white */
  .v-col p {
    color: #ffffff;
  }

  /* Change icon colors in links area to match background */
  .v-footer .v-btn v-icon {
    color: #2e3192; /* Match GoClean primary color */
  }

  /* Optionally add hover effect */
  .v-footer .v-btn:hover v-icon {
    color: #80cbc4; /* Example hover color */
  }

  /* Change social media icon colors to match background */
  .v-footer .d-flex .v-btn v-icon {
    color: #2e3192; /* Same as footer background color */
  }

  /* Optionally, add a contrasting background to the buttons */
  .v-footer .d-flex .v-btn {
    background-color: #ffffff; /* White background for icon buttons */
    border-radius: 50%;
  }

  /* Add hover effect */
  .v-footer .d-flex .v-btn:hover v-icon {
    color: #80cbc4; /* Change icon color on hover */
  }

  .scroll-to-top-button {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }
  </style>
