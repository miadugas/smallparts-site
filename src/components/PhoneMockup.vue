<script setup>
defineProps({
  app: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <figure
    class="phone absolute m-0 overflow-hidden bg-[#111]"
    :class="`phone--${app.id}`"
  >
    <img
      class="block size-full object-cover"
      :src="app.image"
      :alt="app.alt"
      :width="app.width"
      :height="app.height"
    />
  </figure>
</template>

<style scoped>
.phone {
  width: clamp(12.5rem, 20vw, 21rem);
  aspect-ratio: 1206 / 2622;
  border: clamp(0.4rem, 0.62vw, 0.72rem) solid #111;
  border-radius: clamp(2rem, 3.4vw, 3.25rem);
  box-shadow: 0.85rem 1rem 0 rgb(18 18 16 / 17%);
}

.phone--loose {
  z-index: 1;
  top: 14%;
  left: 2%;
  transform: rotate(-8deg);
}

.phone--departed {
  z-index: 3;
  top: 5%;
  left: 35%;
  width: clamp(13.25rem, 21.5vw, 22.5rem);
}

.phone--elsewhere {
  z-index: 2;
  top: 17%;
  left: 49%;
  width: clamp(11rem, 17vw, 18rem);
  transform: rotate(7deg);
}

@media (max-width: 64rem) {
  .phone {
    width: clamp(11rem, 47vw, 18rem);
  }

  .phone--loose {
    top: 10%;
    left: -7%;
  }

  .phone--departed {
    top: 0;
    left: 27%;
    width: clamp(12rem, 51vw, 19rem);
  }

  .phone--elsewhere {
    top: 11%;
    left: 58%;
    width: clamp(11rem, 47vw, 18rem);
    z-index: 4;
  }
}

@media (max-width: 30rem) {
  .phone {
    width: clamp(9.75rem, 45.5vw, 11.75rem);
    border-width: 0.4rem;
    border-radius: 1.8rem;
    box-shadow: 0.5rem 0.6rem 0 rgb(18 18 16 / 17%);
  }

  .phone--loose {
    top: 19%;
    left: -15%;
  }

  .phone--departed {
    top: 4%;
    left: 50%;
    width: clamp(11rem, 51vw, 13rem);
    transform: translateX(-50%);
  }

  .phone--elsewhere {
    top: 19%;
    left: 56%;
  }
}

@media (max-width: 64rem) and (max-height: 32rem) and (orientation: landscape) {
  .phone {
    width: clamp(8rem, 18vw, 10rem);
  }

  .phone--loose {
    top: 18%;
    left: -12%;
  }

  .phone--departed {
    top: 4%;
    left: 28%;
    width: clamp(9rem, 19vw, 10.5rem);
  }

  .phone--elsewhere {
    top: 18%;
    left: 66%;
    width: clamp(8rem, 18vw, 10rem);
  }
}
</style>
