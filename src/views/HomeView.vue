<template>
  <div class="home">

    <MidPhotoSection />

    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getAnalytics, logEvent } from 'firebase/analytics';
import lander from '@/components/lander.vue';
import faqs from '@/components/faqs.vue';
import contact from '@/components/contact.vue';
import serviceCard from '@/components/serviceCard.vue';
import ServiceCard from '@/components/serviceCard.vue';
import MidPhotoSection from '@/components/midPhotoSection.vue';
import bubble from '@/components/bubble1.vue';

onMounted(() => {
  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');
});
</script>

<style lang="scss" scoped>
@use 'sass:color';

$primary-color: #00aeef;
$overlay-color: rgba(0, 0, 0, 0.5);
$shadowed-bg-color: rgba(0, 0, 0, 0.55);
$transition-speed: 0.3s;

html {
  scroll-behavior: smooth;
}
</style>
