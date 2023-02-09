<template>
    <div class="header">
        <span class="header-title"><strong>{{ appConfig.pageTitle }}</strong></span>
        <img src="~/assets/images/logo/stamp.png" alt="Logo" style="width: 10%;"/>
    </div>
    <NuxtPage />
</template>

<script setup>
const appConfig = useAppConfig();
</script>
<style>
.header {
    display: flex;
    align-items: center;
}
.header-title {
    width: 100%;
}
.header-title::after {
    display: inline-block;
    content: "";
    border-top: 2px solid rgba(0,0,0,.12);
    transform: translateY(-0.2rem);
    width: 100%;
}
.dark-mode .header-title::after {
    border-top: 2px solid #fff;
}
</style>