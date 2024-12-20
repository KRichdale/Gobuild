<template>
  <div class="faq-section ma-6">
    <h2 class="faq-heading text-center mb-8">Window Washing Industry FAQs</h2>
    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="(faq, index) in faqs"
        :key="index"
      >
        <v-expansion-panel-title>
          <v-row align="center" class="faq-title-row">
            <v-col cols="1" class="d-flex justify-center">
              <v-icon :icon="faq.icon" class="faq-icon"></v-icon>
            </v-col>
            <v-col cols="11">
              <div class="faq-title">{{ faq.title }}</div>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="faq-content" v-html="faq.content"></div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  mdiWindowClosedVariant,
  mdiHome,
  mdiWater,
  mdiRobotVacuumVariant,
  mdiHelpCircleOutline,
  mdiPhone,
  mdiEmail
} from '@mdi/js'

const faqs = ref([
  {
    title: 'What Tools Do Professional Window Cleaners in Wellington Use for Streak-Free Results?',
    content: `Professional window cleaners in Wellington utilize a combination of high-quality tools and techniques to achieve streak-free results. This typically includes:
    <ul>
      <li><strong>Squeegees:</strong> High-grade squeegees with sharp rubber blades are essential for removing water efficiently.</li>
      <li><strong>Microfiber Cloths:</strong> These cloths are used for wiping edges and frames, ensuring a clean and dry finish.</li>
      <li><strong>Applicators:</strong> Used for applying cleaning solutions evenly to the window surface.</li>
      <li><strong>Eco-Friendly Cleaning Solutions:</strong> Many professionals in Wellington prioritize environmentally friendly cleaning solutions that effectively remove grime and salt buildup without harming the environment.</li>
    </ul>
    By using these tools and proper techniques, professionals can deliver sparkling clean, streak-free windows even in Wellington’s challenging weather conditions. For more information, please contact us.`,
  },
  {
    title: 'How Often Should I Get My House Windows Professionally Cleaned in Wellington\'s Windy Climate?',
    content: `Wellington's unique and often windy climate, combined with its coastal location, means that windows can quickly accumulate salt spray, dust, and grime. For most residential properties in Wellington, we recommend professional window cleaning at least six times a year, or roughly every two months. This regular cleaning helps maintain the clarity of your windows, prevents long-term damage from salt and grime buildup, and improves your property's curb appeal. Properties located directly on the waterfront or in particularly exposed areas may benefit from more frequent cleaning, perhaps monthly or after periods of heavy storms. If you're unsure about the ideal cleaning frequency for your property, please contact us for a free consultation.`,
  },
  {
    title: 'Why Should I Hire Local Wellington Window Cleaning Companies?',
    content: `Hiring a local Wellington window cleaning company offers several advantages:
    <ul>
      <li><strong>Local Expertise:</strong> Local companies understand Wellington’s unique environmental conditions, such as the wind, salt spray, and typical grime buildup.</li>
      <li><strong>Competitive Pricing:</strong> Local businesses often offer competitive pricing tailored to the Wellington market.</li>
      <li><strong>Personalized Service:</strong> You'll receive more personalized service and direct communication with a local business.</li>
      <li><strong>Supporting the Local Economy:</strong> By choosing a local company, you're supporting the Wellington economy.</li>
    </ul>
    We proudly serve various Wellington suburbs. Contact us to find out if we service your area!`,
  },
  {
    title: 'What\'s the Difference Between Pressure Washing and Power Washing in Wellington?',
    content: `While often used interchangeably, pressure washing and power washing have a key difference: temperature. Pressure washing uses high-pressure cold water to clean surfaces, effectively removing dirt, grime, and mildew. Power washing, on the other hand, uses heated water in addition to high pressure, making it more effective at removing stubborn stains like grease, oil, and graffiti. Both methods are suitable for various cleaning tasks in Wellington, but power washing is generally preferred for tougher cleaning jobs. Contact us to discuss which method is best for your needs.`,
  },
  {
    title: 'Are Professional Pressure Washing Services in Wellington Eco-Friendly?',
    content: `Many professional pressure washing companies in Wellington are committed to eco-friendly practices. This often includes:
    <ul>
      <li><strong>Biodegradable Cleaners:</strong> Using environmentally friendly cleaning solutions minimizes the impact on the local ecosystem, especially in coastal suburbs.</li>
      <li><strong>Water-Efficient Methods:</strong> Utilizing techniques and equipment that minimize water usage.</li>
      <li><strong>Responsible Waste Disposal:</strong> Properly disposing of any waste generated during the cleaning process.</li>
    </ul>
    We prioritize eco-friendly practices in all our services. Contact us to learn more about our commitment to sustainability.`,
  },
  {
    title: 'How Much Does Professional Window Cleaning Cost in Wellington, NZ?',
    content: `Investing in professional window cleaning in Wellington means more than just clean windows; it's an investment in quality, safety, and peace of mind. Our pricing reflects several important factors that ensure a top-tier service:
    <ul>
        <li><strong>Comprehensive Insurance:</strong> We maintain full insurance coverage to protect your property and our staff.</li>
        <li><strong>Rigorous Health and Safety Practices:</strong> We adhere to strict health and safety protocols.</li>
        <li><strong>Highly Trained and Well-Compensated Staff:</strong> Our team members are professionally trained and experienced.</li>
        <li><strong>Specialized Equipment and Eco-Friendly Solutions:</strong> We use professional-grade equipment and prioritize environmentally responsible cleaning solutions.</li>
    </ul>
    While the cost can vary, our focus is on providing excellent value for a premium service. For larger commercial buildings, multi-story apartments, or properties with difficult-to-access windows, we recommend requesting a custom quote. Get your free quote today!`,
  },
  {
    title: 'Can I Do Pressure Washing Myself, or Should I Hire a Professional in Wellington?',
    content: `While DIY pressure washing is possible for small tasks, hiring a professional in Wellington offers several advantages:
    <ul>
      <li><strong>Experience and Expertise:</strong> Professionals have the experience and knowledge to use the equipment safely and effectively.</li>
      <li><strong>Proper Equipment:</strong> Professionals have access to high-quality, commercial-grade equipment.</li>
      <li><strong>Safety:</strong> Pressure washing can be dangerous if not done correctly. Professionals are trained in safety procedures.</li>
      <li><strong>Time Savings:</strong> Hiring a professional saves you time and effort.</li>
    </ul>
    For larger or more complex jobs, hiring a professional pressure washing service is highly recommended to ensure safe and effective cleaning. Contact us for a hassle-free experience.`,
  },
  {
    title: 'How Do I Find Reliable Cleaning Services in Wellington, New Zealand?',
    content: `Finding reliable cleaning services in Wellington involves a few key steps:
    <ul>
      <li><strong>Online Reviews:</strong> Check online reviews on platforms like Google, Neighbourly, and Facebook.</li>
      <li><strong>Referrals:</strong> Ask friends, family, and neighbors for recommendations.</li>
      <li><strong>Licensing and Insurance:</strong> Ensure the company is licensed and insured.</li>
      <li><strong>Experience:</strong> Choose a company with proven experience in dealing with Wellington’s specific environmental challenges.</li>
    </ul>
    We pride ourselves on our reputation for providing reliable and high-quality cleaning services in Wellington.`,
  }
]);
</script>

<style scoped lang="scss">
@use 'sass:color';

/* Variables for colors */
$primary-color: #00aeef;
$secondary-color: #f5f5f5;
$accent-color: #ff4081;
$icon-color: $primary-color;
$faq-title-color: #333;
$faq-content-color: #555;

/* FAQ Section Styling */
.faq-section {
  background-color: $secondary-color;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.faq-heading {
  font-size: 2rem;
  color: $faq-title-color;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.v-expansion-panels {
  margin-top: 1rem;
}

.v-expansion-panel {
  border: none;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba($primary-color, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .some-class {
    background-color: color.adjust($secondary-color, $lightness: 5%);
  }
}

.faq-title-row {
  width: 100%;
}

.faq-icon {
  color: $icon-color;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.faq-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: $faq-title-color;
}

.faq-content {
  font-size: 1rem;
  color: $faq-content-color;
  line-height: 1.6;
  padding-top: 0.5rem;
}

/* Expansion Panel Title Styling */
.v-expansion-panel-title {
  padding: 0.75rem 1rem !important;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* Expansion Panel Text Styling */
.v-expansion-panel-text {
  padding: 0.75rem 1rem !important;
  background-color: color.adjust($secondary-color, $lightness: 5%);
  border-top: 1px solid #eee;
}

/* Active Panel Styling */
.v-expansion-panel--active {
  background-color: rgba($primary-color, 0.1);
}

.v-expansion-panel--active .faq-icon {
  color: $accent-color;
}

.v-expansion-panel--active .faq-title {
  color: $primary-color;
}


/* Responsive Design */
@media (max-width: 600px) {
  .faq-section {
    margin: 0;
    padding: 0;
  }

  .faq-heading {
    font-size: 1.5rem;
  }

  .faq-title {
    font-size: 1rem;
  }

  .faq-content {
    font-size: 0.9rem;
  }

  .faq-icon {
    font-size: 1.2rem;
  }
}
</style>