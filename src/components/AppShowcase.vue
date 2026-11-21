<script setup>
import { apps } from "../data/apps.js";
import brainBulb from "../assets/brainbulb.webp";
import appStoreBadge from "../assets/app-store-badge.svg";
</script>

<template>
  <section class="work" aria-label="Apps shipped on the App Store">
    <div class="work-deco" id="workDeco" aria-hidden="true">
      <img :src="brainBulb" alt="" aria-hidden="true" />
    </div>

    <h2 class="work-head reveal">
      <span>Shipped<span class="muted">, not vaporware.</span></span>
    </h2>

    <div v-for="app in apps" :key="app.id" class="app">
      <div class="shot">
        <img
          :src="app.image"
          :alt="app.alt"
          :width="app.width"
          :height="app.height"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="meta">
        <div class="no reveal"><span>{{ app.platform }}</span></div>
        <h3 class="reveal"><span>{{ app.name }}</span></h3>
        <p class="reveal"><span>{{ app.line }}</span></p>
        <a
          class="store"
          :href="app.href"
          :aria-label="`Download ${app.name} on the App Store`"
        >
          <img :src="appStoreBadge" alt="Download on the App Store" width="120" height="40" />
        </a>
      </div>
    </div>
  </section>
</template>
