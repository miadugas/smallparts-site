<script setup>
import AppShowcase from "./components/AppShowcase.vue";
import SiteFooter from "./components/SiteFooter.vue";
import StudioHero from "./components/StudioHero.vue";
</script>

<template>
  <main
    class="site-shell relative isolate flex min-h-svh flex-col overflow-clip bg-paper font-body text-ink"
  >
    <StudioHero class="hero-slot" />
    <AppShowcase class="showcase-slot" />
    <SiteFooter class="footer-slot mt-auto" />
  </main>
</template>

<style scoped>
.hero-slot {
  flex: 0 0 auto;
}

.showcase-slot {
  flex: 0 0 auto;
}

.footer-slot {
  z-index: 6;
}
</style>
