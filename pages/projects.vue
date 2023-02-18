<template>
  <div class="projects">
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