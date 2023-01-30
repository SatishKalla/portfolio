<template>
  <div class="legend">
    <span class="present-used">Recently used</span>
    <span class="past-used">Previously used</span>
  </div>
  <div style="display: flex;
    flex-direction: column;
    gap: 20px;">
    <div class="recent">
      <ui-chips>
        <ui-chip v-for="(item, index) in recentSkills" :key="index" :icon="item.icon">
          {{ item.name }}
        </ui-chip>
      </ui-chips>
    </div>
    <div class="past">
      <ui-chips>
        <ui-chip v-for="(item, index) in pastSkills" :key="index" :icon="item.icon">
          {{ item.name }}
        </ui-chip>
      </ui-chips>
    </div>
  </div>
</template>
<script setup>
const recentSkills = [
  {
    icon: 'code',
    name: 'Html'
  },
  {
    icon: 'css',
    name: 'Css'
  },
  {
    icon: 'web',
    name: 'Material UI'
  },
  {
    icon: 'javascript',
    name: 'Javascript'
  },
  {
    icon: 'widgets',
    name: 'Angular Js'
  },
  {
    icon: 'widgets',
    name: 'Vue Js'
  },
  {
    icon: 'widgets',
    name: 'Nuxt'
  },
  {
    icon: 'terminal',
    name: 'Node Js'
  },
  {
    icon: 'layers',
    name: 'Express Js'
  },
  {
    icon: 'storage',
    name: 'Postgres'
  },
  {
    icon: 'post_add',
    name: 'MongoDB'
  },
  {
    icon: 'account_tree',
    name: 'Git'
  },
  {
    icon: 'add_task',
    name: 'Jira'
  },
  {
    icon: 'multiple_stop',
    name: 'AWS'
  }
];
const pastSkills = [
  {
    icon: 'shield',
    name: 'Typescript'
  },
  {
    icon: 'code_off',
    name: 'Php'
  },
  {
    icon: 'web',
    name: 'Bootstrap'
  },
  {
    icon: 'web',
    name: 'Ant Design'
  },
  {
    icon: 'widgets',
    name: 'Angular'
  },
  {
    icon: 'widgets',
    name: 'React'
  },
  {
    icon: 'layers',
    name: 'Nest Js'
  },
  {
    icon: 'storage',
    name: 'MySQL'
  },
  {
    icon: 'layers',
    name: 'Laravel'
  },
  {
    icon: 'layers',
    name: 'Yii2'
  },
  {
    icon: 'queue',
    name: 'Kafka Js'
  },
  {
    icon: 'work_history',
    name: 'Bull Js'
  }
];
</script>
<style>
.legend {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: 12px;
  margin-bottom: 15px;
}
.present-used::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;  
  background: #8a19c4;
}
.past-used::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;  
  background: #e0e0e0;
}
.recent .mdc-chip {
  background: #8a19c4;
  color: white
}
.recent .mdc-chip__icon {
  color: white;
}
</style>