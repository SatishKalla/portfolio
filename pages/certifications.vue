<template>
    <div class="cert-img">
      <ui-image-list>
        <ui-image-item v-for="(item, index) in certifications" :key="index"
          :bg-image="item"
          @click="viewImage(item)"
          title="View image"
          >
          </ui-image-item>
      </ui-image-list>
    </div>
    <ui-dialog v-model="showModal">
      <ui-dialog-content>
        <img :src="link" style="width: 100%;"/>
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
              "/_nuxt/assets/images/certifications/mongo-cert.png",              
              "/_nuxt/assets/images/certifications/aws-cert.jpg",
              "/_nuxt/assets/images/certifications/js-es6-cert.jpg"
            ]
        }
    },
    methods: {
        viewImage(url) {
            this.showModal = true;
            this.link = url;
        },
        closeModel() {
            this.showModal = false;
        }
    },
}
</script>