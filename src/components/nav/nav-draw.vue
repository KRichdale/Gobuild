<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <!-- Menu Header -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Menu Items -->
      <v-list-item link @click="navigateTo('/')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="navigateTo('/services')">
        <v-list-item-icon>
          <v-icon>mdi-window-cleaner</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="navigateTo('/contact')">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Contact Us</v-list-item-title>
      </v-list-item>
      <!-- Contact Buttons -->
      <v-list-item>
        <v-btn
          href="tel:+64-027-440-6794"
          text
          block
          prepend-icon="mdi-phone"
        >
          Call Us: 027-440-6794
        </v-btn>
      </v-list-item>
      <v-list-item>
        <Dialog1 title="Free Quote" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Move the bubbles outside the navigation drawer -->
  <div class="bubbles">
    <div
      class="bubble"
      v-for="(bubble, index) in bubbles"
      :key="index"
      :style="bubble.style"
    ></div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Dialog1 from '@/components/dialog1.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const router = useRouter();

function navigateTo(path) {
  drawer.value = false;
  router.push(path);
}

// Generate bubble data with reactive styles
const bubbles = ref(
  Array.from({ length: 20 }).map(() => {
    const size = 20 + Math.random() * 40;
    return {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      },
    };
  })
);
</script>
<style scoped>
.v-btn {
  text-transform: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #2e3192;
}

.free-quote-btn {
  margin-right: 50px;
}

@media (max-width: 600px) {
  .v-btn {
    padding: 4px 8px;
    font-size: 12px;
    /* Adjust padding and font size for small screens */
  }
}

.bubbles {
  position: fixed; /* Cover the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0; /* Ensure bubbles are behind the content */
  pointer-events: none; /* Allow clicks through the bubbles */
}

.bubble {
  position: absolute;
  bottom: -50px; /* Start below the viewport */
  background-color: #00aeef;
  border-radius: 50%;
  opacity: 0.7;
  animation: float infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-120vh); /* Move bubbles upwards off-screen */
    opacity: 0;
  }
}

/* Reduce motion for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .bubble {
    animation: none;
  }
}
</style>

