<template>
    <section>
        <ui-card outlined class="case-study-card">
            <div class="card-title">
                Modernization with MongoDB
            </div>
            <ui-list-divider></ui-list-divider>
            <ui-card-content>
                <ui-card-text>
                    Legacy applications are often difficult to maintain and upgrade. In this case study, learn how
                    MongoDB helped a cylinder manufacturer modernize their legacy application and migrate to a
                    cloud-native architecture.
                    Modernizing these legacy applications with MongoDB brings many benefits, including: scalability,
                    flexibility, and agility.
                    <div class="download">
                        <ui-button class="btn" icon="file_download"><a class="btn-link"
                                href="/uploads/case-study.pptx" download>Learn more</a></ui-button>
                    </div>
                </ui-card-text>
            </ui-card-content>
        </ui-card>
    </section>
</template>
<script setup>
const appConfig = useAppConfig();
appConfig.pageTitle = 'Case study';
</script>