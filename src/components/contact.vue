<template> 
<section>
      <v-container fluid>
        <v-row justify="center" align="center" style="text-align: center;">
          <v-col
            cols="12"
            md="6"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <v-card flat class="transparent">
              <div style="padding: 24px 0;">
                <v-card-title
                  style="display: flex; justify-content: center; align-items: center;"
                >
                  <div class="text-h5 font-medium">
                    <a href="https://www.topreviews.co.nz/">
                      <v-img
                        style="padding-top: 24px; margin-bottom: 48px;"
                        max-width="150"
                        :src="topReviewsLogo"
                      ></v-img>
                    </a>
                    <h3>Contact Us</h3>
                  </div>
                 
                </v-card-title>
                <v-card-text>
                  We will be in contact with you within
                  <span class="font-black">24 hours</span>, any day of the week.
                  <div style="padding: 20px;">
                    <dialog1 title="Contact Us" />
                  </div>
                </v-card-text>
              </div>
              <v-row justify="center">
                <v-list>
                  <v-list-item>
                    <v-avatar>
                      <v-icon
                        :icon="svgPath[7]"
                        size="medium"
                        color="#00aeef"
                      />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a href="tel:+64-027-440-6794">
                          <h2>027-440-6794</h2>
                        </a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-avatar>
                      <v-icon :icon="svgPath[8]" color="#00aeef" />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a href="mailto:info@goclean.co.nz">
                          <h2>info@goclean.co.nz</h2>
                        </a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-avatar>
                      <v-icon :icon="svgPath[6]" color="#00aeef" />
                    </v-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        Johnsonville<br />
                        Wellington
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<script setup>
import dialog1 from '@/components/dialog1.vue';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { onMounted } from 'vue';
import topReviewsLogo from '@/assets/Topreviewslogo.png';

const svgPath = [
  'mdi-window-closed-variant',
  'mdi-home',
  'mdi-water',
  'mdi-robot-vacuum-variant',
  'mdi-chevron-up',
  'mdi-chevron-down',
  'mdi-map-marker',
  'mdi-phone',
  'mdi-email',
];

onMounted(() => {
  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');
});
</script>

<style lang="scss" scoped>
@use 'sass:color';

$primary-color: #00aeef;

// Custom Font Weight Classes
.font-bold {
  font-weight: bold;
}

.font-black {
  font-weight: 900;
}

.font-medium {
  font-weight: 500;
}

// Retained styles used in the component
.v-card.white {
  border-radius: 16px;
}

.v-card-text {
  font-size: 1.1rem;
  line-height: 1.6;
};

</style>