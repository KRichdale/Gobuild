<template>
  <v-container class="google-reviews-widget">
    <h2 class="headline">Customer Reviews</h2>

    <!-- Display Reviews -->
    <v-row>
      <v-col
        v-for="(review, index) in reviews"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="review-card"
      >
        <v-card class="mx-auto">
          <v-card-title>{{ review.author_name }}</v-card-title>
          <v-card-subtitle>{{ review.date }}</v-card-subtitle>
          <v-card-text>
            {{ review.text }}
          </v-card-text>
          <v-rating
            :value="review.rating"
            color="yellow darken-3"
            readonly
          ></v-rating>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const reviews = ref([
  {
    author_name: 'Jane Doe',
    date: 'October 12, 2024',
    text: 'Excellent service! My windows are sparkling clean, and the team was very professional.',
    rating: 5
  },
  {
    author_name: 'John Smith',
    date: 'October 5, 2024',
    text: 'Great job! The house washing service was fantastic. Highly recommended!',
    rating: 4
  },
  {
    author_name: 'Alice Johnson',
    date: 'September 29, 2024',
    text: 'Friendly staff and very thorough with their cleaning. Will definitely use again!',
    rating: 5
  },
  // Add more reviews as needed
])
</script>

<style scoped>
.google-reviews-widget {
  padding: 2rem 0;
}

.review-card {
  margin-bottom: 1.5rem;
}

.v-card-title {
  font-weight: bold;
}

.v-rating {
  margin-top: 1rem;
}
</style>

