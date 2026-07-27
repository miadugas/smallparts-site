<script setup>
import AppShowcase from "./components/AppShowcase.vue";
import SiteFooter from "./components/SiteFooter.vue";
import StudioHero from "./components/StudioHero.vue";
</script>

<template>
  <main
    class="site-shell relative isolate grid min-h-svh overflow-clip bg-paper font-body text-ink"
  >
    <StudioHero class="hero-slot" />
    <AppShowcase class="showcase-slot" />
    <SiteFooter class="footer-slot" />
  </main>
</template>

<style scoped>
.site-shell {
  grid-template-columns: minmax(0, 56%) minmax(0, 44%);
  grid-template-rows: minmax(0, 1fr) auto;
}

.footer-slot {
  z-index: 6;
  grid-column: 1 / -1;
  grid-row: 2;
}

@media (max-width: 64rem) {
  .site-shell {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    overflow: hidden;
  }

  .footer-slot {
    grid-row: 3;
  }
}

@media (max-width: 64rem) and (max-height: 32rem) and (orientation: landscape) {
  .site-shell {
    grid-template-columns: minmax(0, 56%) minmax(0, 44%);
    grid-template-rows: 1fr auto;
  }

  .footer-slot {
    grid-row: 2;
  }
}
</style>
