<template>
  <div class="container">
    <div class="left-side">
      <div class="logo">
        <img src="~/assets/images/logo/logo.png" alt="Logo" style="width: 50%;"/>
      </div>
      <div class="quote">
        "A good developer is always learning, because the technology is always changing"
      </div>
      <div class="avatar">
        <img src="~/assets/images/avatar.png" alt="Avatar" style="border-radius: 50%;width: 40%;"/>
      </div>
      <div class="basic-details">
        <strong>Satish Kalla</strong><br/>
        <span style="font-size: small;">I'm a professional <span style="color: #6200ee;"><strong>Developer!</strong></span></span>
      </div>
      <div class="social">
          <a class="bg-image github" href="https://github.com/SatishKalla" style="margin-right:3px" target="_blank">
          </a>
          <a class="bg-image linkedin" href="https://www.linkedin.com/in/satish-kumar-kalla-9b5011b2/" target="_blank">
          </a>
      </div>
      <div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
        <div class="contact">
          <ui-icon size=18>email</ui-icon>
          <span class="icon-caption" style="padding-right:10px">k.satish1223@gmail.com</span>
        </div>
        <div class="contact">
          <ui-icon size=18>phone</ui-icon>
          <span class="icon-caption">+91 9985245648</span>
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
  const mode = true;
  const modeIcon = {
    on: 'dark_mode',
    off: 'light_mode'
  };  
  const colorMode = useColorMode()
  const changeColorMode = (mode) => {
    colorMode.preference = mode ? 'dark' : 'light';
  }
</script>

<style>
body {
  background-color: #fff;
  color: #091a28;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  display: flex;
}
.left-side {
  padding: 15px;
  width: 40%;
  text-align: center;
}
.right-side {
  padding: 15px;
  width: 60%;
}

.bg-image {
  background-size: contain;
  padding: 10px;
  background-repeat: no-repeat;
}
.github {
  background-image: url('~/assets/images/logo/github-mark.png'); 
}
.linkedin {
  background-image: url('~/assets/images/logo/In-Blue.png');
}

/* Dark mode */
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode .mdc-divider__text:before {
  background-color: #ebf4f1;
}
.dark-mode .mdc-divider__text:after {
  background-color: #ebf4f1;
}
.dark-mode .mdc-divider--no-text {
  background-color: #ebf4f1;
}
.dark-mode .github {
  background-image: url('~/assets/images/logo/github-mark-white.png');
}
.dark-mode .linkedin {
  background-image: url('~/assets/images/logo/In-White.png');
}

.dark-mode .mdc-button {
  color: #091a28;
  background-color: #ebf4f1;
}

/* Divider */
.vertical-divider {
  height: 100vh;
}

/* Quote */
.quote {
  font-family: monospace;
  font-size: 20px;
  text-shadow: 4px 6px 4px #aaa;
  margin-bottom: 10px;
}

/* Logo */
.logo , .avatar, .basic-details, .actions {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Social */
.social {
  margin-top: 2%;
}

/* Actions */
.btn {
  margin: 3px;
  height: 30px;
}
.btn-link {
  text-decoration: none; 
  color: inherit;
}

/* Contact */
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}

.mdc-image-list__image {
  border-radius: 8px;
}
</style>