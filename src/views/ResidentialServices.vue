<template>
    <v-app>
      <div class="residential-services">
        <!-- Hero Section -->
        <v-container fluid class="pa-0 ma-0">
          <v-img
            src="@/assets/goclean-hero.jpg" 
            height="600px"
            class="hero-image"
            contain
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-col cols="12" class="text-center">
                <div class="shadowed-background">
                  <h1 class="display-2 title-words">Professional Residential Window Cleaning Services</h1>
                  <v-btn
                    color="primary"
                    large
                    class="mt-4 contact-button"
                    @click="openContactDialog"
                  >
                    Get a Free Quote
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <!-- Overlay -->
            <div class="overlay-shadow"></div>
          </v-img>
        </v-container>
  
        <!-- Services Section -->
        <v-container class="my-12">
          <v-row>
            <v-col
              cols="12"
              class="text-center mb-8"
            >
              <h2 class="headline font-weight-bold">Top-Rated Residential Window Cleaning Services</h2>
              <v-divider class="mx-auto" :width="200"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(service, index) in services"
              :key="index"
            >
              <v-card class="service-card">
                <v-card-icon class="primary--text">
                  <v-icon :icon="service.icon" size="48"></v-icon>
                </v-card-icon>
                <v-card-title class="headline">{{ service.title }}</v-card-title>
                <v-card-text>
                  {{ service.description }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  
        <!-- Testimonials Section -->
        <v-container fluid class="testimonial-section pa-12">
          <v-row justify="center">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="headline font-weight-bold">What Our Clients Say</h2>
              <div><GoogleReviewsWidget /> <!-- Include GoogleReviewsWidget component -->   </div>  
              <v-divider class="mx-auto" :width="200"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="8"
              md="6"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <v-card class="testimonial-card">
                <v-card-text>
                  <v-avatar size="64" class="mb-4">
                    <v-img :src="testimonial.avatar"></v-img>
                  </v-avatar>
                  <p class="quote">“{{ testimonial.quote }}”</p>
                  <p class="author">- {{ testimonial.author }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  
        <!-- Contact Section -->
        <v-container class="my-12">
          <v-row justify="center">
            <v-col cols="12" md="6" class="text-center">
              <h2 class="headline font-weight-bold">Get in Touch</h2>
              <v-divider class="mx-auto" :width="200"></v-divider>
              <p class="mt-4">Contact us today to schedule your free window cleaning quote!</p>
              <v-btn
                color="primary"
                large
                class="mt-4 contact-button"
                @click="openContactDialog"
              >
                Contact Us
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
  
        <!-- Contact Dialog -->
        <v-dialog v-model="contactDialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Contact Us</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="contactForm" v-model="formValid">
                <v-text-field
                  v-model="contact.name"
                  label="Name"
                  :rules="[v => !!v || 'Name is required']"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="contact.email"
                  label="Email"
                  :rules="[v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="contact.message"
                  label="Message"
                  :rules="[v => !!v || 'Message is required']"
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeContactDialog">Cancel</v-btn>
              <v-btn color="primary" text @click="submitContactForm" :disabled="!formValid">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  
        <!-- Footer -->
        <v-footer app color="primary" dark>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-img src="@/assets/goclean-logo-white.png" max-width="150"></v-img>
              </v-col>
              <v-col cols="12" sm="4">
                <h3 class="white--text">Contact Us</h3>
                <p class="white--text">Phone: <a href="tel:+1234567890" class="white--text">+1 (234) 567-890</a></p>
                <p class="white--text">Email: <a href="mailto:info@goclean.com" class="white--text">info@goclean.com</a></p>
              </v-col>
              <v-col cols="12" sm="4">
                <h3 class="white--text">Follow Us</h3>
                <v-btn icon href="https://facebook.com/goclean">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon href="https://twitter.com/goclean">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon href="https://instagram.com/goclean">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <p class="white--text">&copy; 2024 GoClean. All rights reserved.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-footer>
      </div>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { mdiFacebook, mdiTwitter, mdiInstagram, mdiWindowOpen, mdiWater, mdiSpray } from '@mdi/js';
  import GoogleReviewsWidget from "@/components/GoogleReviewsWidget.vue";
  
  // Reactive data
  const contactDialog = ref(false);
  const formValid = ref(false);
  const contact = ref({
    name: '',
    email: '',
    message: '',
  });
  
  // Sample services data
  const services = ref([
    {
      icon: mdiWindowOpen, // Replace with actual service icons
      title: 'Window Washing',
      description: 'Professional window cleaning for residential properties, ensuring streak-free and sparkling windows.',
    },
    {
      icon: mdiWater, // Example icon
      title: 'House Washing',
      description: 'Eco-friendly house washing services to refresh and protect your home exterior.',
    },
    {
      icon: mdiSpray, // Example icon
      title: 'Gutter Cleaning',
      description: 'Keep your gutters clean and functioning properly with our expert cleaning services.',
    },
    // Add more services as needed
  ]);
  
  // Sample testimonials data
  const testimonials = ref([
    {
      avatar: '@/assets/testimonial1.jpg', // Replace with actual testimonial avatars
      quote: 'GoClean did an amazing job on our windows! They were professional and thorough.',
      author: 'Jane Doe',
    },
    {
      avatar: '@/assets/testimonial2.jpg',
      quote: 'Our house looks brand new after the house washing service. Highly recommend GoClean!',
      author: 'John Smith',
    },
    // Add more testimonials as needed
  ]);
  
  // Methods
  const openContactDialog = () => {
    contactDialog.value = true;
  };
  
  const closeContactDialog = () => {
    contactDialog.value = false;
  };
  
  const submitContactForm = () => {
    if (formValid.value) {
      // Handle form submission, e.g., send data to backend
      console.log('Contact Form Submitted:', contact.value);
      // Reset form
      contact.value = {
        name: '',
        email: '',
        message: '',
      };
      contactDialog.value = false;
    }
  };
  </script>
  
  <style scoped>
  .residential-services {
    /* General styles */
  }
  
  .hero-image {
    position: relative;
  }
  
  .shadowed-background {
    background-color: rgba(0, 0, 0, 0.6);
    display: inline-block;
    padding: 1.5rem 3rem;
    border-radius: 8px;
  }
  
  .title-words {
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .overlay-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
  
  .v-img .v-row {
    position: relative;
    z-index: 1;
  }
  
  .service-card {
    text-align: center;
    padding: 2rem 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .service-card .v-card-icon {
    margin-bottom: 1rem;
  }
  
  .testimonial-section {
    background-color: #f5f5f5;
  }
  
  .testimonial-card {
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-card .quote {
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .testimonial-card .author {
    font-weight: bold;
  }
  
  .contact-button {
    animation: glowing 3s infinite;
  }
  
  @keyframes glowing {
    0%, 100% {
      box-shadow: 0 0 5px #00aeef;
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 20px #00aeef;
      transform: scale(1.05);
    }
  }
  
  /* Responsive Styles */
  @media (max-width: 600px) {
    .shadowed-background {
      padding: 1rem 1.5rem;
    }
  
    .title-words {
      font-size: 1.8rem;
    }
  
    .headline {
      font-size: 1.5rem;
    }
  }
  
  @media (min-width: 1200px) {
    .shadowed-background {
      padding: 2rem 4rem;
    }
  
    .title-words {
      font-size: 3rem;
    }
  
    .headline {
      font-size: 2.5rem;
    }
  }
  </style>