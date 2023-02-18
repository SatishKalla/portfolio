<template>
  <section>
    <div class="summary">
      <div class="years"></div>
      <div class="bullets">
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Building and implementing user interfaces</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Developing server-side logics and APIs</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Setting up and maintaining databases</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Implementing security measures</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Optimizing the performance and scalability of the
          applications</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Deploying the applications and Providing ongoing
          maintenance and support</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">
          Implementation and technical support of SFCS application in Srilanka for brandix.
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="companies">
      <ui-card outlined class="company-card" v-for="(company, index) in companies" :key="index"
        :style="company.present ? 'background: #ebe4e9' : ''">
        <ui-card-content @click="goToWebsite(company.url)" title="View website">
          <ui-card-media rectangle :class="company.logoClass">
          </ui-card-media>
          <ui-card-text v-for="(designation, i) in company.designations" :key="i"
            class="designation">
            <span><strong>{{ designation.name }}</strong></span><br/>
            <span :class="$tt('caption')">{{ designation.term }}</span>
          </ui-card-text>
        </ui-card-content>
      </ui-card>
    </div>
  </section>
</template>
<script setup>
import data from "~/data/companies.json";
const companies = data;
const goToWebsite = (url) => {
  window.open(url, '_blank');
}
const appConfig = useAppConfig();
appConfig.pageTitle = "Work Experience";
</script>