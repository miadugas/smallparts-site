<script setup>
import HardwareTrail from "./HardwareTrail.vue";
</script>

<template>
  <section
    class="studio-hero relative z-[2] grid min-w-0"
    aria-labelledby="studio-name"
  >
    <h1
      id="studio-name"
      class="studio-title relative m-0 w-min font-display font-black uppercase"
    >
      <span class="title-line">Small</span>
      <span class="title-line">Parts</span>
      <span class="studio-line title-line">
        Studio
        <HardwareTrail />
      </span>
    </h1>

    <div
      class="details relative z-[5] grid w-full max-w-[44rem] text-micro leading-[1.3]"
    >
      <p class="tagline m-0 font-display font-black uppercase">
        <span>Independent software builders.</span>
        <span>Ideas in. Software out.</span>
      </p>
      <p
        class="descriptor m-0 max-w-[1012px] text-left font-sans leading-[120%] text-space"
      >
        iOS, Android, and web software from Littleton, Colorado.
      </p>
      <address class="contact m-0 not-italic">
        <a href="mailto:hello@smallpartsstudio.com">
          hello@smallpartsstudio.com
        </a>
      </address>
    </div>
  </section>
</template>

<style scoped>
.studio-hero {
  grid-template-rows: minmax(0, 1fr) auto;
  padding: clamp(2rem, 5.3vh, 4.25rem) var(--spacing-gutter)
    clamp(1.25rem, 3.3vh, 2.5rem);
}

.studio-title {
  font-size: clamp(6.25rem, min(18.7vw, calc(42.5svh - 126px)), 19rem);
  font-stretch: condensed;
  line-height: 0.8;
  letter-spacing: -0.01em;
}

.title-line {
  display: block;
  white-space: nowrap;
}

.studio-line {
  position: relative;
  width: max-content;
  font-size: 0.5em;
  line-height: 1;
  letter-spacing: -0.01em;
}

.details {
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.tagline {
  max-width: 100%;
  font-size: clamp(1.35rem, 0.95rem + 1vw, 2rem);
  font-stretch: condensed;
  line-height: 0.94;
  letter-spacing: -0.015em;
}

.tagline span {
  display: block;
}

.descriptor {
  margin-top: 0.1rem;
  font-size: min(1.125rem, calc((100vw - 2 * var(--spacing-gutter)) / 24.5));
}

.contact {
  margin-top: 0.25rem;
}

.contact a {
  color: var(--color-contact);
  font-size: clamp(0.82rem, 0.72rem + 0.22vw, 1rem);
  font-weight: 800;
  text-decoration-color: #ffadad;
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.18em;
  display: inline-block;
  padding-block: 0.8rem;
  margin-block: -0.8rem;
}

.contact a:hover {
  color: var(--color-ink);
}

@media (max-width: 64rem) {
  .studio-hero {
    grid-template-rows: auto auto;
    align-content: start;
    min-height: clamp(35rem, 75vw, 42rem);
    padding-bottom: 1.5rem;
  }

  .details {
    position: static;
    margin-top: clamp(3rem, 8vw, 5rem);
  }

  .studio-title {
    font-size: clamp(6rem, 26.5vw, 13rem);
  }
}

@media (max-width: 30rem) {
  .studio-hero {
    min-height: auto;
    padding-top: clamp(1.25rem, 5vw, 1.75rem);
    padding-bottom: 1.25rem;
  }

  .studio-title {
    max-width: 100%;
    font-size: clamp(5rem, 26vw, 7rem);
    line-height: 0.82;
  }

  .details {
    position: relative;
    gap: 0.65rem;
    margin-top: clamp(1.5rem, 6vw, 2rem);
  }

  .tagline {
    font-size: clamp(1.1rem, 5.2vw, 1.35rem);
  }
}

@media (max-width: 64rem) and (max-height: 32rem) and (orientation: landscape) {
  .studio-hero {
    min-height: 100svh;
    padding: 1.25rem var(--spacing-gutter);
  }

  .studio-title {
    font-size: clamp(4rem, min(14vw, 26vh), 7.5rem);
  }

  .details {
    gap: 0.45rem;
    margin-top: 1rem;
  }

  .tagline {
    font-size: clamp(1rem, 2.4vw, 1.25rem);
  }
}
</style>
