<script setup lang="ts">
import type { Chapter } from '@/types/chapter'

defineProps<Chapter>()
</script>

<template>
  <section class="slide">
    <div class="slide__content">
      <p class="slide__text">{{ opening_text }}</p>

      <figure class="slide__figure" :style="{ '--img-width': imageWidth }">
        <img :src="image" :alt="alt" />
        <figcaption>{{ caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.slide {
  height: 100dvh;
  padding: 30dvh clamp(1.5rem, 6vw, 6rem) 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--color-text);
}

.slide__content {
  width: 100%;
  max-width: 85rem;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.slide__text {
  margin: 0;
  font-size: clamp(1rem, 2.2vw, 2.5rem);
  line-height: 1.4;
}

.slide__figure {
  margin: 0;
}

.slide__figure img {
  display: block;
  width: var(--img-width, auto);
  max-width: 100%;
  max-height: 55dvh;
  height: auto;
  object-fit: contain;
}

.slide__figure figcaption {
  margin-top: 0.5rem;
  font-size: clamp(0.75rem, 1vw, 1rem);
}

@media (max-width: 768px) {
  .slide {
    padding-top: 22dvh;
    overflow-y: auto;
  }

  .slide__content {
    grid-template-columns: 1fr;
  }
}
</style>