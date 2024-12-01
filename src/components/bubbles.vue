<template>
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
import { ref } from 'vue';

// Generate bubble data with reactive styles
const bubbles = ref(
  Array.from({ length: 20 }).map(() => {
    const size = (60 + Math.random() * 120) * 2.5; // 2x smaller than previous size
    return {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${(3 + Math.random() * 5) * 15}s`, // Increased duration by 50% for slower animation
        animationDelay: `${Math.random() * 5}s`,
      },
    };
  })
);
</script>

<style scoped>
.bubbles {
  position: fixed; /* Cover the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0; /* Adjusted to sit behind most elements but above the background */
  pointer-events: none; /* Allow clicks through the bubbles */
}

.bubble {
  position: absolute;
  bottom: -50vh; /* Start from -50% viewport height */
  background-color: #00aeef;
  border-radius: 50%;
  opacity: 0.9; /* Increased opacity for more solidity */
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
