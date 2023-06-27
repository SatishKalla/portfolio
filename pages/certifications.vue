<template>
  <div class="cert-img">
    <ui-image-list>
      <ui-image-item v-for="(name, index) in certifications" :key="index" :bg-image="imgUrl(name)" @click="viewImage(name)"
        title="View image">
      </ui-image-item>
    </ui-image-list>
  </div>
  <ui-dialog v-model="showModal">
    <ui-dialog-content>
      <img :src="link" style="width: 100%;" />
    </ui-dialog-content>
    <ui-dialog-actions>
      <ui-button raised @click="closeModel">Close</ui-button>
    </ui-dialog-actions>
  </ui-dialog>
</template>
<script>
export default {
  data() {
    const appConfig = useAppConfig();
    appConfig.pageTitle = "Certifications";
    return {
      showModal: false,
      link: null,
      certifications: [
        "mongo.png",
        "aws.jpg",
        "js-es6.jpg"
      ]
    }
  },
  methods: {
    imgUrl(fileName) {
      return new URL(`../assets/images/certifications/${fileName}`, import.meta.url).href
    },
    viewImage(url) {
      this.showModal = true;
      this.link = this.imgUrl(url);
    },
    closeModel() {
      this.showModal = false;
    }
  },
}
</script>