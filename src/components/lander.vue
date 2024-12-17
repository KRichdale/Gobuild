<template>
  <section class="hero">
    <v-container id="lander" fluid>
      <v-row style="height: 100%;">
        <v-col cols="12">
          <v-img
            :height="smAndDown ? '700px' : '100vh'"
            :src="heroImage"
            cover
            class="hero-image"
          >
            <div class="overlay"></div>
            <v-row class="content-row">
              <v-col cols="12" md="6" class="title-container">
                <div class="title-content">
                  <transition name="fade">
                    <h1
                      :key="dynamicTitle"
                      :class="[smAndDown ? 'text-h2' : 'text-h1', 'font-bold', 'title-words']"
                    >
                      {{ dynamicTitle }}<br />Experts
                    </h1>
                  </transition>
                </div>
              </v-col>
              <v-col cols="12" class="dialog-container">
                <dialog1 title="CONTACT US" :openOnDesktop="mdAndUp" />
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import dialog1 from '@/components/dialog1.vue'; // Correct path
import heroImage from '@/assets/housewashawesome.jpg'; // Correct path

const { smAndDown, mdAndUp } = useDisplay();

const titleOptions = ['House Washing', 'Window Cleaning'];
const titleIndex = ref(0);
const dynamicTitle = computed(() => titleOptions[titleIndex.value]);

onMounted(() => {
  setInterval(() => {
    titleIndex.value = (titleIndex.value + 1) % titleOptions.length;
  }, 5000);
});
</script>

<style lang="scss" scoped>
$primary-color: #00aeef;
$overlay-color: rgba(0, 0, 0, 0.55);

.hero-image {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $overlay-color;
  z-index: 0;
}

.title-words {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.font-bold {
  font-weight: 900;
}

#lander {
  background-color: $primary-color;
}

.content-row {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // Key for vertical centering
  align-items: center;
  position: relative;
  z-index: 1;
}

.title-content {
  /* Styles for the title background if needed. Remove if not needed. */
  /* background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem; */
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    padding-left: 200px;
    text-align: left;
    align-items: flex-start;
  }
}

.dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 960px) {
    margin-top: 0;
    padding-left: 20px;
  }
}

@media (max-width: 600px) {
  h1.text-h1 {
    font-size: 2.5rem;
  }

  h1.text-h2 {
    font-size: 1.8rem;
  }
}

@media (min-width: 1200px) {
  h1.text-h1 {
    font-size: 5rem;
  }

  h1.text-h2 {
    font-size: 3rem;
  }
}

html {
  scroll-behavior: smooth;
}
</style>