<template>
  <ui-card outlined style="text-align: center; background-color: #f7f7f7;">
    <ui-card-content>
      <ui-card-text>
        <div style="font-family: system-ui;
      font-size: 25px;
      font-weight: 500;">Hi! 👋</div>
        <div :class="$tt('body1')" style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
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
  <div style="display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5%;">
    <ui-button icon="file_download">Download Resume</ui-button>
  </div>
</template>