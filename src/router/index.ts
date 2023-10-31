import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Work from '../pages/Work.vue';
import Skill from '../pages/Skill.vue';
import Project from '../pages/Project.vue';
import Certification from '../pages/Certification.vue';
import CaseStudy from '../pages/CaseStudy.vue';

const routes = [
  { path: '/', component: About },
  { path: '/work', component: Work },
  { path: '/skills', component: Skill },
  { path: '/projects', component: Project },
  { path: '/certifications', component: Certification },
  { path: '/case-study', component: CaseStudy },
  // Add other route definitions here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
