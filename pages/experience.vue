<template>
  <section>
    <div style="display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;">
      <div class="years"></div>
      <div style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14px;text-align: center;">
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Building and implementing user interfaces</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Developing server-side logics and APIs</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Setting up and maintaining databases</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Implementing security measures</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Optimizing the performance and scalability of the
          applications</div>
        <div v-shape.large="'4px 4px 4px 4px'" class="highlight">Deploying the applications and Providing ongoing
          maintenance and support</div>
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
            style="text-align: center;font-size: smaller;">
            <span style="font-size: small;"><strong>{{ designation.name }}</strong></span><br />
            <span :class="$tt('caption')">{{ designation.term }}</span>
          </ui-card-text>
        </ui-card-content>
      </ui-card>
    </div>
  </section>
</template>
<script setup>
const companies = [
  {
    name: "Reflections Info Systems PVT LTD",
    url: "https://reflectionsglobal.com/",
    logoClass: "logo-base reflections-logo",
    designations: [
      {
        name: "Senior Software Engineer",
        term: "1 year 5 months*"
      }
    ],
    present: true
  },
  {
    name: "Schemax Export Techno Craft Pvt LTD",
    url: "https://www.schemaxtech.com/",
    logoClass: "logo-base schemax-logo",
    designations: [
      {
        name: "Senior Software Engineer",
        term: "5 years 8 months"
      },
      {
        name: "Senior Software Engineer",
        term: "2 years"
      }
    ],
    present: false
  }
]
const goToWebsite = (url) => {
  window.open(url, '_blank');
}
</script>
<style>
.years {
  background-size: contain;
  padding: 60px;
  background-repeat: no-repeat;
  background-image: url('~/assets/images/logo/yr-v.png');
}

.dark-mode .years {
  background-image: url('~/assets/images/logo/yr-w.png');
}

.logo-base {
  background-size: contain;
  margin: 10px;
  height: 90px;
}

.reflections-logo {
  background-image: url('~/assets/images/logo/reflections.svg');
}

.schemax-logo {
  background-image: url('~/assets/images/logo/schemax.png');
}

.highlight {
  background-image: linear-gradient(to bottom right, #8a19c4, #838383);
  margin: 5px;
  padding: 5px;
  color: white;
}

.companies {
  margin-top: 3%;
  display: flex;
  gap: 20px;
}

.company-card {
  width: 35%;
}
</style>