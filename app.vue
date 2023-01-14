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
        <img src="~/assets/images/avatar.jpg" alt="Avatar" style="border-radius: 50%;"/>
      </div>
      <div class="basic-details">
        <strong>Satish Kalla</strong><br/>
        <span style="font-size: small;">I'm a professional <span style="color: blueviolet;"><strong>Developer!</strong></span></span>
      </div>
      <div class="social">
          <a class="bg-image github" href="https://github.com/SatishKalla" style="margin-right:3px" target="_blank">
          </a>
          <a class="bg-image linkedin" href="https://www.linkedin.com/in/satish-kumar-kalla-9b5011b2/" target="_blank">
          </a>
      </div>
      <div>
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
        <ui-button class="btn" icon="person" raised @click="setPageTitle('About Me')">
          <NuxtLink class="btn-link" to="/">about</NuxtLink>
        </ui-button>
        <ui-button class="btn" icon="work_history" raised @click="setPageTitle('Experience')">
          <NuxtLink class="btn-link" to="/experience">experience</NuxtLink>
        </ui-button>
        <ui-button class="btn" icon="star_half" raised @click="setPageTitle('Skills')">
          <NuxtLink class="btn-link" to="/skills">skills</NuxtLink>
        </ui-button>
        <ui-button class="btn" icon="fact_check" raised @click="setPageTitle('Projects')">
          <NuxtLink class="btn-link" to="/projects">projects</NuxtLink>
        </ui-button>
        <ui-button class="btn" icon="badge" raised @click="setPageTitle('Certifications')">
          <NuxtLink class="btn-link" to="/certifications">certifications</NuxtLink>
        </ui-button>
      </div>
    </div>
    <ui-divider type="|" class="vertical-divider">
      <div aria-describedby="modeTip">
        <ui-tooltip id="modeTip">{{ colorMode.value === "dark" ? "light" : "dark" }} mode</ui-tooltip>
        <ui-icon-button v-model="mode" :toggle="modeIcon" @click="changeColorMode()"></ui-icon-button>
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
  const changeColorMode = () => colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'

  const appConfig = useAppConfig();
  const setPageTitle = (title) => {
    appConfig.pageTitle = title;
  }
</script>

<style>
body {
  background-color: #fff;
  color: #091a28;
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
}

/* Social */
.social {
  margin-top: 2%;
}

/* Actions */
.btn {
  margin: 5px;
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
}
</style>