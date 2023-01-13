<template>
  <ui-divider type="|" class="vertical-divider">
    <template #left>
      <ui-grid class="demo-grid max-width">
        <ui-grid-cell class="demo-cell" columns="12">
          <header>
            <nav>
              <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
              </ul>
            </nav>
          </header>
        </ui-grid-cell>
      </ui-grid>
    </template>
    SK
    <template #right>
      <ui-grid class="demo-grid max-width">
        <ui-grid-cell class="demo-cell" columns="12">
          <NuxtPage />
        </ui-grid-cell>
      </ui-grid>
    </template>
  </ui-divider>
</template>

<style>
.demo-grid.max-width {
  max-width: 1280px;
}
.vertical-divider {
  width: 100%;
  height: 100vh;
}
</style>