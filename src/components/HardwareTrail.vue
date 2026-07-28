<template>
  <span class="hardware-trail" aria-hidden="true">
    <img
      class="hardware"
      src="../assets/hardware.webp"
      alt=""
      width="900"
      height="134"
    />
    <img
      class="hardware-pile"
      src="../assets/hardware-pile.webp"
      alt=""
      width="480"
      height="343"
    />
  </span>
</template>

<style scoped>
.hardware {
  position: absolute;
  z-index: 4;
  bottom: 0.15em;
  left: calc(100% + clamp(9rem, 19vw, 17rem) - 1rem);
  width: clamp(9rem, 19vw, 17rem);
  height: auto;
  pointer-events: none;
  filter: grayscale(1) contrast(5);
  mix-blend-mode: multiply;
  transform: scaleX(-1) rotate(-8deg);
  transform-origin: left center;
}

.hardware-pile {
  display: none;
  filter: grayscale(1) contrast(5);
  mix-blend-mode: multiply;
}

@media (min-width: 64.001rem) {
  .hardware {
    top: calc(50% + 0.32em);
    bottom: auto;
    left: calc(100% - 0.08em);
    width: clamp(10rem, 20vw, 18rem);
    transform: translateY(-50%) scaleX(-1);
    transform-origin: center;
  }
}

@media (max-width: 64rem) {
  .hardware {
    bottom: 0.1em;
    left: calc(100% + clamp(8rem, 33vw, 13rem) - 0.65rem);
    width: clamp(8rem, 33vw, 13rem);
    transform: scaleX(-1);
  }

  .hardware-pile {
    position: absolute;
    z-index: 3;
    bottom: -0.04em;
    left: calc(100% + clamp(8rem, 33vw, 13rem) - 1.5rem);
    display: block;
    width: clamp(8rem, 20vw, 11rem);
    height: auto;
    pointer-events: none;
  }
}

@media (max-width: 30rem) {
  .hardware {
    top: auto;
    bottom: 0;
    left: calc(100% - 0.02em);
    width: 7.5rem;
    transform: scaleX(-1);
    transform-origin: center;
  }

  .hardware-pile {
    bottom: -0.25em;
    right: calc(var(--spacing-gutter) + var(--spacing-gutter) + 100% - 100vw);
    left: auto;
    width: clamp(5.5rem, 26vw, 6.5rem);
  }
}
</style>
