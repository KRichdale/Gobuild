<template>
  <v-app-bar app color="white" elevated>
    <div class="app-bar-container">
      <!-- Logo and optional nav icon -->
      <router-link to="/" class="text-decoration-none logo-link">
        <LogoIcon class="logo-icon" />
      </router-link>

      <div class="flex-grow-1"></div>

      <!-- Add the phone icon and number -->
      <a href="tel:+640274406794" class="phone-link">
        <v-icon>mdi-phone</v-icon>
        027-440-6794
      </a>

      <!-- Using the named slot from Dialog1 to customize the Free Quote button -->
      <Dialog1 title="Free Quote" class="free-quote-btn">
        <template #dialog-activator="{ dialogProps, openDialog }">
          <v-btn
            color="#00aeef"
            variant="elevated"
            :size="!isMobile ? 'x-large' : undefined"
            style="font-weight: bold; margin-right: 5px;"
            v-bind="dialogProps"
            @click="() => { dialogProps.onClick(); openDialog(); }"
          >
            Free Quote
          </v-btn>
        </template>
      </Dialog1>
    </div>
  </v-app-bar>
</template>

<script setup>
import LogoIcon from '@/assets/goclean-logo.svg'
import Dialog1 from '@/components/dialog1.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { VIcon } from 'vuetify/components'

const isMobile = ref(window.innerWidth <= 600)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.v-app-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  padding-right: 8px;
  margin-bottom: 0;
  position: relative;
}

.logo-icon {
  width: 150px; /* increased width for better spacing */
  height: auto;
  max-height: 80px;
  z-index: 1000;
  margin-top: 8px;
}

.nav-icon {
  transform: scale(1.25);
  transform-origin: center;
  padding-left: 4px;
}

.nav-icon .v-icon {
  font-size: 32px;
}

.app-bar-container {
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  justify-content: space-between;
  width: 100%;
}

.flex-grow-1 {
  flex-grow: 1;
}

.free-quote-btn {
  padding: 16px 48px 16px 32px;
  font-size: 18px;
  padding-right: 40px; /* added right padding */
}

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

.logo-link {
  padding-left: 16px; /* add left padding */
}

.phone-link {
  display: flex;
  align-items: center;
  color: #00aeef; /* GoClean light blue */
  font-weight: bold;
  margin-right: 16px;
  text-decoration: none;
}

.phone-link:hover {
  color: #007bb6; /* Darker blue on hover */
}

.phone-link .v-icon {
  margin-right: 8px;
}

@media (max-width: 600px) {
  .logo-icon {
    width: 135px; /* adjusted for smaller screens */
    max-height: 70px;
  }
  .free-quote-btn {
    margin-right: 5px;
    padding: 12px 32px 12px 24px; /* adjusted for smaller screens */
    font-size: 16px;
    padding-right: 20px; /* adjusted right padding for smaller screens */
  }
  .v-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
  .app-bar-container {
    position: relative;
  }
}
</style>
