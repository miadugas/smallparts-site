<script setup>
import PhoneMockup from "./PhoneMockup.vue";
import { apps } from "../data/apps.js";
</script>

<template>
  <section
    class="showcase relative z-[1] isolate grid min-w-0 place-items-center bg-paper"
    aria-label="Apps in development"
  >
    <div class="phones relative z-[1]">
      <PhoneMockup v-for="app in apps" :key="app.id" :app="app" />
    </div>
  </section>
</template>

<style scoped>
.showcase::before {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: clamp(-24rem, -21vw, -14rem);
  background-image: url("../assets/parts-field-pastel.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  content: "";
  pointer-events: none;
}

.phones {
  width: min(61vw, 58rem);
  height: min(68vw, 56rem);
  max-height: 83svh;
}

@media (max-width: 64rem) {
  .showcase {
    min-height: clamp(35rem, 145vw, 52rem);
    overflow: hidden;
    border: 1px solid var(--color-ink);
    border-radius: clamp(1.5rem, 3.5vw, 2.25rem);
  }

  .phones {
    width: 100%;
    height: min(140vw, 50rem);
    max-height: none;
  }
}

@media (max-width: 30rem) {
  .showcase {
    min-height: clamp(31rem, 142vw, 36rem);
    margin: 0 var(--spacing-gutter);
  }

  .phones {
    height: clamp(31rem, 142vw, 36rem);
  }
}

@media (max-width: 64rem) and (max-height: 32rem) and (orientation: landscape) {
  .showcase {
    min-height: 100svh;
  }

  .phones {
    width: 100%;
    height: 100svh;
  }
}
</style>
