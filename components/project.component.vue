<template>
    <ui-card outlined class="project-card">
        <div class="card-title">
            {{ project.name }}
        </div>
        <ui-list-divider></ui-list-divider>
        <ui-card-content @click="viewProject(project)" title="View details">
            <ui-card-media :class="project.class">
            </ui-card-media>
            <ui-card-text class="designation">
                <strong>{{ project.role }}</strong>
            </ui-card-text>
        </ui-card-content>
    </ui-card>
    <ui-dialog v-model="showModal" fullscreen>
        <ui-dialog-title>
            {{ project.fullName }}
            <a :class="$tt('caption')" :href="project.url" target="_blank">{{ project.url }}</a>
        </ui-dialog-title>
        <ui-dialog-content>
        <p>
            {{ project.description }}
        </p>
        <p>
            <ui-chips>
                <ui-chip v-for="(item, index) in project.techStack" :key="index">
                {{ item }}
                </ui-chip>
            </ui-chips>
        </p>
        <p>
            <ul>
                <li v-for="(item, index) in project.responsibilities" :key="index">{{ item }}</li>
            </ul>
        </p>
        <div class="project-img" v-if="project.images.length">
            <ui-image-list>
                <ui-image-item 
                v-for="i in 3"
                :key="i"
                :bg-image="`/_nuxt/assets/images/img-dummy.jpg`"
                >
                </ui-image-item>
            </ui-image-list>
        </div>
    </ui-dialog-content>
    <ui-dialog-actions>
        <ui-button raised @click="closeModel">Close</ui-button>
    </ui-dialog-actions>
  </ui-dialog>
</template>
<script>
export default {
    props: ['project'],
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        viewProject(project) {
            this.showModal = true;
        },
        closeModel() {
            this.showModal = false;
        }
    },
}
</script>