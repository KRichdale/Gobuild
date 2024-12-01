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
          <div class="faq-content">{{ faq.content }}</div>
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
    title: 'WHAT DO PROFESSIONAL WINDOW CLEANERS USE TO CLEAN WINDOWS IN WELLINGTON?', 
    content: 'In Wellington, professional window cleaners use specialized tools like squeegees, microfiber cloths, and eco-friendly cleaning solutions to achieve streak-free results. These tools help them efficiently remove dirt, grime, and hard water stains from glass surfaces. Squeegees are the most commonly used tool because they allow for quick, streak-free cleaning. Professional-grade cleaning solutions, often biodegradable and environmentally safe, are used to protect the glass and surrounding areas in Wellington’s coastal environment, which can cause more frequent salt and dirt buildup.' 
  },
  { 
    title: 'HOW OFTEN SHOULD WINDOWS BE CLEANED PROFESSIONALLY IN WELLINGTON?', 
    content: 'For optimal results, homeowners in Wellington should have their windows cleaned professionally at least six times a year. Due to Wellington’s windy climate and proximity to the ocean, homes in suburbs like Miramar, Kilbirnie, and Island Bay may experience more dust and salt buildup, requiring more frequent cleanings. Businesses in high-traffic areas like Te Aro or Lambton Quay may need quarterly or even monthly window cleaning to maintain a polished appearance.' 
  },
  { 
    title: 'HOW TO FIND A RELIABLE PRESSURE WASHING COMPANY IN WELLINGTON?', 
    content: 'To find a reliable pressure washing company in Wellington or its suburbs like Lower Hutt and Johnsonville, start by checking online reviews on platforms like Google or Yelp. Ask for referrals from friends and neighbors, and make sure the company is licensed, insured, and experienced in handling Wellington’s coastal grime and weather conditions. Look for companies that specialize in residential or commercial pressure washing and offer eco-friendly solutions. A good company will offer transparent pricing, guarantees on their work, and a strong track record of satisfied customers. Always ask for a free estimate before hiring.' 
  },
  { 
    title: 'HOW ARE WINDOWS CLEANED ON SKYSCRAPERS IN WELLINGTON?', 
    content: 'Cleaning windows on Wellington’s skyscrapers and high-rise buildings is a specialized job that requires professional high-rise window cleaners to use safety harnesses, ropes, and scaffolding. These cleaners use advanced tools like water-fed poles, squeegees, and cleaning solutions designed for high-altitude environments to ensure a spotless finish. Wellington’s frequent wind and rain can make high-rise window cleaning more challenging, but trained professionals ensure both safety and quality in compliance with strict safety regulations.' 
  },
  { 
    title: 'WHY SHOULD MY WELLINGTON BUSINESS HIRE PROFESSIONAL WINDOW CLEANERS?', 
    content: 'Hiring professional window cleaners for your Wellington business enhances both the appearance of your property and the overall customer experience. Clean windows allow for better natural light, which improves the ambiance inside. This is especially important in busy commercial districts like Courtenay Place or Lambton Quay. Professional cleaners in Wellington have the tools and techniques to handle large-scale jobs quickly, improving your building’s appearance while preventing damage caused by salt or wind-related debris.' 
  },
  { 
    title: 'WHY SHOULD I HIRE A PRESSURE WASHING SERVICE IN WELLINGTON?', 
    content: 'Hiring a professional pressure washing service in Wellington helps maintain your property’s appearance and longevity by removing dirt, mold, mildew, and other contaminants that are common in Wellington���s climate. Local professionals are familiar with the specific environmental factors in areas like Hataitai and Karori that can cause grime buildup. DIY pressure washing can lead to damage if done incorrectly, but professionals have the right equipment and knowledge to clean surfaces safely and effectively.' 
  },
  { 
    title: 'WHAT ARE THE ADVANTAGES OF HIRING A LOCAL WELLINGTON WINDOW CLEANING COMPANY OVER A NATIONAL ONE?', 
    content: 'Local window cleaning companies in Wellington, like those serving Newtown or Kelburn, often offer personalized service and have a better understanding of the local climate and environmental factors, like the salt and moisture from the ocean that affect windows. Local businesses are also more responsive to urgent cleaning requests and can offer competitive pricing. Hiring locally also helps support Wellington’s small businesses, contributing to the local economy.' 
  },
  { 
    title: 'IS THERE A DIFFERENCE BETWEEN POWER AND PRESSURE WASHING IN WELLINGTON?', 
    content: 'Yes, there is a key difference between power washing and pressure washing in Wellington. Power washing uses heated water, which can be more effective for removing stubborn stains like oil, grease, or mildew—common issues in Wellington’s damp climate. Pressure washing uses cold water at high pressure and is suitable for routine cleaning of surfaces like sidewalks, patios, and siding. For heavily stained surfaces, particularly in industrial areas like Seaview, power washing may be the better option.' 
  },
  { 
    title: 'LOCAL WELLINGTON CONTRACTOR OR NATIONAL COMPANY: WHICH TO CHOOSE?', 
    content: 'Choosing between a local Wellington contractor or a national company depends on your needs. Local contractors often offer more personalized services and are familiar with Wellington’s unique environmental challenges, such as the frequent wind and rain. They are also likely to be more flexible with scheduling in areas like Mount Victoria and Petone. National companies may provide standardized processes and extended warranties but may lack the local knowledge that Wellington contractors bring.' 
  },
  { 
    title: 'IS THERE A DIFFERENCE BETWEEN COMMERCIAL AND RESIDENTIAL WINDOW WASHING IN WELLINGTON?', 
    content: 'Yes, commercial and residential window washing in Wellington differs in scale and techniques. Commercial window cleaning often involves larger buildings, sometimes high-rises in the CBD, requiring specialized equipment like lifts, scaffolding, and industrial-strength cleaning solutions. Residential window cleaning, often in suburbs like Karori or Brooklyn, involves smaller buildings where access is easier, and simpler tools like ladders, water-fed poles, and squeegees are used. Commercial windows in high-traffic or exposed areas may need more frequent cleaning due to Wellington’s climate.' 
  },
  { 
    title: 'HOW CAN I FIND THE BEST LOCAL WINDOW WASHING SERVICES IN WELLINGTON?', 
    content: 'To find the best local window washing services in Wellington, start by reading online reviews on platforms like Google, Yelp, or Angi. Personal recommendations from friends or neighbors in suburbs like Tawa or Ngaio are also valuable. Look for companies that are licensed, insured, and offer transparent pricing. Ensure the company understands Wellington’s environmental conditions and offers solutions that cater to salt buildup and wind-related debris.' 
  },
  { 
    title: 'WHY SHOULD I GET WINDOW SCREENS PROFESSIONALLY CLEANED IN WELLINGTON?', 
    content: 'In Wellington, professionally cleaned window screens help improve air quality by removing dust and debris, which can accumulate due to the city’s windy conditions. Over time, dirt and grime can also damage the screens, particularly in suburbs like Seatoun or Lyall Bay where sea salt is prevalent. Professional cleaning extends the life of the screens by removing contaminants that DIY methods may miss.' 
  },
  { 
    title: 'HOW TO FIND A REPUTABLE POWER WASHING COMPANY NEAR ME IN WELLINGTON?', 
    content: 'To find a reputable power washing company in Wellington, search for local businesses with high ratings on Google, Yelp, or HomeAdvisor. Focus on companies that specialize in power washing for Wellington’s unique environment, especially in areas like Porirua and Upper Hutt where wind and moisture can lead to faster grime buildup. Make sure the company is licensed, insured, and experienced in cleaning a variety of surfaces.' 
  },
  { 
    title: 'HOW CAN I FIND A REPUTABLE CONSTRUCTION CLEANING SERVICE NEAR ME IN WELLINGTON?', 
    content: 'Finding a reputable construction cleaning service in Wellington starts with checking the company’s credentials, including licensing, insurance, and customer reviews. Look for companies that specialize in post-construction clean-up in Wellington and suburbs like Thorndon or Khandallah. They should offer services like debris removal, pressure washing, and detailed cleaning. Ask for references from past clients and get quotes from several companies.' 
  },
  { 
    title: 'IS PRESSURE WASHING ENVIRONMENTALLY FRIENDLY IN WELLINGTON?', 
    content: 'Pressure washing in Wellington can be environmentally friendly when eco-friendly cleaning solutions and water-saving techniques are used. Some Wellington-based pressure washing services use biodegradable cleaners and employ methods to conserve water, minimizing environmental impact. This is particularly important for areas close to the coast, like Eastbourne or Wellington’s bays. Always ask your service provider about their environmental practices.' 
  },
  { 
    title: 'HOW MUCH DOES IT COST TO HIRE A PROFESSIONAL WINDOW CLEANER IN WELLINGTON?', 
    content: 'The cost of hiring a professional window cleaner in Wellington varies depending on the size of your home or business, the number of windows, and the complexity of the job. On average, homeowners can expect to pay between $150 and $300 for a full house window cleaning in suburbs like Kelburn or Wadestown. Larger properties or high-rise buildings may cost more, so it’s best to get multiple quotes from local Wellington window cleaning services to ensure competitive pricing.' 
  },
  { 
    title: 'CAN I DO PRESSURE WASHING MYSELF, OR SHOULD I HIRE A PROFESSIONAL IN WELLINGTON?', 
    content: 'While DIY pressure washing can be effective for smaller tasks around your Wellington home, it’s recommended to hire a professional for larger or more complex jobs. Wellington’s coastal climate can lead to unique grime buildup that requires professional equipment and knowledge to clean effectively. Improper use of a pressure washer can cause damage to siding, windows, and other surfaces, especially in older homes in suburbs like Thorndon or Mount Cook, leading to costly repairs.' 
  }
])
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