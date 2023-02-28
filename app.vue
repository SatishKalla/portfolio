<template>
  <div class="container">
    <div class="left-side">
      <div class="logo">
        <img src="~/assets/images/logo/logo.png" alt="Logo"/>
      </div>
      <div class="quote">
        "A good developer is always learning, because the technology is always changing"
      </div>
      <div class="avatar">
        <img src="~/assets/images/avatar.png" alt="Avatar"/>
      </div>
      <div class="basic-details">
        <div class="title">
          <span><strong>Kalla Satish Kumar</strong></span>
          <span class="tag">I'm a professional <span class="role"><strong>Developer!</strong></span></span>
        </div>
        <div class="social">
            <a class="bg-image github" href="https://github.com/SatishKalla" target="_blank">
            </a>
            <a class="bg-image linkedin" href="https://www.linkedin.com/in/satish-kumar-kalla-9b5011b2/" target="_blank">
            </a>
        </div>
        <div class="contacts">
          <div class="contact-item">
            <ui-icon size=18>email</ui-icon>
            <span class="icon-caption">k.satish1223@gmail.com</span>
          </div>
          <div class="contact-item">
            <ui-icon size=18>phone</ui-icon>
            <span class="icon-caption">+91 9985245648</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <NuxtLink class="btn-link" to="/"><ui-button class="btn" icon="person" raised>about
        </ui-button></NuxtLink>
        <NuxtLink class="btn-link" to="/experience"><ui-button class="btn" icon="work_history" raised>Work</ui-button></NuxtLink>      
        <NuxtLink class="btn-link" to="/skills"><ui-button class="btn" icon="star_half" raised>skills</ui-button></NuxtLink>      
        <NuxtLink class="btn-link" to="/projects"><ui-button class="btn" icon="fact_check" raised>projects</ui-button></NuxtLink>      
        <NuxtLink class="btn-link" to="/certifications"><ui-button class="btn" icon="badge" raised>certifications</ui-button></NuxtLink>
        <NuxtLink class="btn-link" to="/case-study"><ui-button class="btn" icon="note" raised>case study</ui-button></NuxtLink>
      </div>
    </div>
    <ui-divider type="|" class="vertical-divider">
      <div aria-describedby="modeTip">
        <ui-tooltip id="modeTip">{{ colorMode.preference === "dark" ? "light" : "dark" }} mode</ui-tooltip>
        <ui-icon-button v-model="mode" :toggle="modeIcon" @click="changeColorMode(mode)"></ui-icon-button>
      </div>
      <template #left>
      </template>
      <template #right>
      </template>
    </ui-divider>
    <div class="right-side">
      <NuxtLayout :name="layout">
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
  const layout = "default";
  let mode = true;
  const modeIcon = {
    on: 'dark_mode',
    off: 'light_mode'
  };  
  const colorMode = useColorMode();
  const changeColorMode = (mode) => {
    colorMode.preference = mode ? 'dark' : 'light';
  }
</script>