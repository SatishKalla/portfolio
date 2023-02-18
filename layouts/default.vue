<template>
    <div class="header">
        <span class="header-title"><strong>{{ appConfig.pageTitle }}</strong></span>
        <img src="~/assets/images/logo/stamp.png" alt="Stamp"/>
    </div>
    <NuxtPage />
</template>

<script setup>
const appConfig = useAppConfig();
</script>