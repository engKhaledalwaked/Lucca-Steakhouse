<script setup>
import { t, lang, signatures } from '../i18n'
import { img } from '../site'
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section class="section sig" id="signature">
    <div class="container">
      <div class="sec-head" v-reveal>
        <p class="eyebrow">{{ t.sig.eyebrow }}</p>
        <h2 class="h2">{{ t.sig.title }}</h2>
      </div>
      <div class="sig-grid">
        <article class="sig-card" v-for="(s, i) in signatures" :key="s.en" :class="{ wide: i === 0 || i === 5 }" v-reveal>
          <ImageSlot class="sig-img" :src="img(s.img)" :label="s.en" />
          <div class="sig-body">
            <h3>{{ s[lang] }}</h3>
            <p>{{ lang === 'ar' ? s.dar : s.den }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
