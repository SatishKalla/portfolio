<template>
  <ui-card outlined class="about-card">
    <ui-card-content>
      <ui-card-text>
        <div class="greeting">Hi! 👋</div>
        <div :class="$tt('body1')" class="content">
          <p><i>I'm an experienced software engineer.</i></p>
          <p>
            I have a passion for creating web applications which are stable and maintainable. Worked on a wide range of technologies and have a good understanding of the entire software development cycle.
          </p>
          <p>
            I completed my bachelors in <strong><i>Information Technology</i></strong>.<br/>
            I would love to spend my free time learning new technologies and trying out new cooking recipes.:-)
          </p>
        </div>
      </ui-card-text>
    </ui-card-content>
  </ui-card>
  <div class="download">
    <ui-button icon="file_download"><a class="btn-link" href="/uploads/SatishKalla.pdf" download>Download Resume</a></ui-button>
  </div>
</template>
<script setup>
const appConfig = useAppConfig();
appConfig.pageTitle = "About me";
</script>