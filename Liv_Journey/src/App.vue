<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ChapterSlide from '@/components/ChapterSlide.vue'
import { chapters } from '@/data/chapters'
import stars from '@/images/star_background.png'
import ornament from '@/images/header_ornament.svg'

const current = ref(0)
const chapter = computed(() => chapters[current.value])
const isFirst = computed(() => current.value === 0)
const isLast = computed(() => current.value === chapters.length - 1)

function next() {
  if (!isLast.value) current.value++
}

function prev() {
  if (!isFirst.value) current.value--
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <main class="deck" :style="{ backgroundImage: `url(${stars})` }">
    <header class="deck__header">
      <img class="deck__ornament" :src="ornament" alt="" />
      <h1 class="deck__title">Liv’s Journey</h1>
    </header>

    <Transition name="fade" mode="out-in">
      <ChapterSlide v-if="chapter" :key="chapter.id" v-bind="chapter" />
    </Transition>

    <nav class="deck__nav" aria-label="Navegação dos capítulos">
      <button :disabled="isFirst" aria-label="Capítulo anterior" @click="prev">←</button>

      <span class="deck__counter" aria-live="polite">
        {{ current + 1 }} / {{ chapters.length }}
      </span>

      <button :disabled="isLast" aria-label="Próximo capítulo" @click="next">→</button>
    </nav>
  </main>
</template>

<style scoped>
.deck {
  position: relative;
  height: 100dvh;
  overflow: hidden;
  background-color: var(--color-bg);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.deck__header {
  position: absolute;
  top: -4vh;
  left: 50%;
  transform: translateX(-50%);
  width: min(65vw, 60rem);
  z-index: 5;
  pointer-events: none;
}

.deck__ornament {
  display: block;
  width: 100%;
  height: auto;
}

.deck__title {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: var(--font-title);
  color: var(--color-title);
  font-size: clamp(2.5rem, 5.5vw, 6rem);
  text-align: center;
}

.deck__nav {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

.deck__counter {
  color: var(--color-text);
}

.deck__nav button {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid var(--color-title);
  background: transparent;
  color: var(--color-title);
  cursor: pointer;
}

.deck__nav button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.deck__nav button:focus-visible {
  outline: 3px solid var(--color-text);
  outline-offset: 2px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>