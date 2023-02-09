<template>
  <div class="projects" style="overflow-y: scroll;
    height: 500px;">
    <ui-grid position="left">
      <ui-grid-cell v-for="(item, index) in projects" :key="index" columns="4">
        <ProjectComponent :project="item"/>
      </ui-grid-cell>
    </ui-grid>
  </div>
</template>
<script setup>
import data from "~/data/projects.json";
const projects = data;
const appConfig = useAppConfig();
appConfig.pageTitle = 'Projects';
</script>
<style>
.projects::-webkit-scrollbar {
  width: 5px;
}
.projects::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,.12);
  border-radius: 20px;
}
.dark-mode .projects::-webkit-scrollbar-thumb {
  background-color: #fff;
}

.base-img {
  height: 60px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.dummy {
  background-image: url('~/assets/images/img-dummy.jpg');
}
</style>