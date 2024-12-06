<template>
    <section class="bubble-bg">
      <v-container fluid class="bubble-content text-center">
        <h2 class="font-black text-white bubble-heading">Let Us Take Care of Your Most Valuable Asset</h2>
        <p class="text-white bubble-subheading">
          Experience professional, eco-friendly services<br>
          that preserve and enhance your property's value.
        </p>
      </v-container>
    </section>
  </template>
  
  <script setup>
  // No specific script logic needed if this is a purely presentational component.
  // You can add props, emits, or imports here as needed.
  </script>
  
  <style scoped lang="scss">
  @use 'sass:color';
  
  $primary-color: #00aeef;
  
  /* Bubble Background Section */
  .bubble-bg {
    background-color: $primary-color;
    position: relative;
    overflow: hidden;
    padding: 80px 16px;
  }
  
  /* Bubbles using pseudo-elements for decorative background */
  .bubble-bg::before,
  .bubble-bg::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    background: #fff;
  }
  
  /* Large bubble positions */
  .bubble-bg::before {
    width: 300px;
    height: 300px;
    top: -100px;
    left: -100px;
  }
  
  .bubble-bg::after {
    width: 200px;
    height: 200px;
    bottom: -50px;
    right: -50px;
  }
  
  /* Content inside the bubble section */
  .bubble-content {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  /* Typography within the bubble section */
  .font-black {
    font-weight: 900;
  }
  
  .text-white {
    color: #fff;
  }
  
  .bubble-heading {
    font-size: 2rem;
    line-height: 1.2;
    margin: 40px 0 20px;
  }
  
  .bubble-subheading {
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 600px) {
    .bubble-bg {
      padding: 60px 16px;
    }
  
    .bubble-heading {
      font-size: 1.75rem;
    }
  
    .bubble-subheading {
      font-size: 0.95rem;
      line-height: 1.4;
    }
  }
  </style>
