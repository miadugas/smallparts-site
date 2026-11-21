<script setup>
import PhoneMockup from "./PhoneMockup.vue";
import { apps } from "../data/apps.js";
import appStoreBadge from "../assets/app-store-badge.svg";
</script>

<template>
  <section class="showcase bg-paper text-ink" aria-label="Apps shipped on the App Store">
    <p class="eyebrow font-display font-black uppercase">
      <span>Shipped on the App Store</span>
    </p>

    <ul class="apps">
      <li v-for="app in apps" :key="app.id" class="app">
        <PhoneMockup :app="app" />
        <div class="caption">
          <h3 class="app-name font-display font-black uppercase">
            {{ app.name }}
            <span class="tag font-display font-black uppercase">{{ app.platform }}</span>
          </h3>
          <p class="app-line font-body">{{ app.line }}</p>

          <a
            v-if="app.href"
            class="store"
            :href="app.href"
            :aria-label="`Download ${app.name} on the App Store`"
          >
            <img :src="appStoreBadge" alt="Download on the App Store" width="120" height="40" />
          </a>
          <div v-else class="store store--soon" role="img" :aria-label="`${app.name} — coming soon to the App Store`">
            <img :src="appStoreBadge" alt="" width="120" height="40" aria-hidden="true" />
            <span class="soon font-display font-black uppercase">Coming soon</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.showcase {
  display: grid;
  gap: clamp(1.75rem, 3.5vw, 3rem);
  padding: clamp(2.5rem, 6vw, 5rem) var(--spacing-gutter);
  border-top: 1px solid var(--color-ink);
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  font-size: clamp(0.8rem, 0.72rem + 0.3vw, 1rem);
  letter-spacing: 0.06em;
}

.eyebrow::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--color-ink);
  opacity: 0.35;
}

.apps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 5vw, 4.5rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.app {
  display: grid;
  gap: clamp(1.1rem, 2vw, 1.6rem);
  justify-items: center;
  text-align: center;
}

.caption {
  display: grid;
  gap: 0.6rem;
  max-width: 34ch;
}

.app-name {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0;
  font-size: clamp(1.75rem, 1.2rem + 2.2vw, 2.9rem);
  line-height: 0.9;
  letter-spacing: -0.01em;
}

.tag {
  font-size: 0.6em;
  letter-spacing: 0.08em;
  border: 1px solid var(--color-ink);
  border-radius: 999px;
  padding: 0.18em 0.7em;
  transform: translateY(-0.12em);
}

.app-line {
  margin: 0;
  font-size: clamp(0.95rem, 0.88rem + 0.3vw, 1.1rem);
  line-height: 1.35;
  color: #2a2a28;
}

.store {
  justify-self: center;
  margin-top: 0.5rem;
  display: inline-flex;
  border-radius: 8px;
  /* Apple badge clearspace */
  padding: 4px;
  transition: opacity 0.15s ease;
}

.store img {
  display: block;
  width: auto;
  height: clamp(2.4rem, 2.1rem + 0.9vw, 2.9rem);
}

.store:hover {
  opacity: 0.82;
}

.store:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
  background: var(--color-focus);
}

/* Not yet released: static, dimmed badge + label */
.store--soon {
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: default;
}

.store--soon img {
  opacity: 0.4;
}

.store--soon .soon {
  font-size: clamp(0.62rem, 0.58rem + 0.15vw, 0.72rem);
  letter-spacing: 0.1em;
  color: var(--color-footer);
}

@media (max-width: 64rem) {
  .apps {
    grid-template-columns: 1fr;
    gap: clamp(2.5rem, 9vw, 3.5rem);
  }
}
</style>
