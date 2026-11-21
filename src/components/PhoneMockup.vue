<script setup>
defineProps({
  app: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <figure class="phone m-0 overflow-hidden bg-[#111]">
    <img
      class="block size-full object-cover object-top"
      :src="app.image"
      :alt="app.alt"
      :width="app.width"
      :height="app.height"
      loading="lazy"
      decoding="async"
    />
  </figure>
</template>

<style scoped>
.phone {
  width: 100%;
  max-width: clamp(13rem, 24vw, 17rem);
  aspect-ratio: 604 / 1313;
  border: clamp(0.4rem, 0.55vw, 0.6rem) solid #111;
  border-radius: clamp(1.75rem, 3vw, 2.75rem);
  box-shadow: 0.85rem 1rem 0 rgb(18 18 16 / 17%);
}

@media (max-width: 30rem) {
  .phone {
    max-width: 14rem;
    border-width: 0.4rem;
    border-radius: 1.8rem;
    box-shadow: 0.5rem 0.6rem 0 rgb(18 18 16 / 17%);
  }
}
</style>
