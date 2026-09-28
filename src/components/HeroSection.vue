<script setup>
import { ref, onMounted } from 'vue'
import { t } from '../i18n'
import { img, site } from '../site'

const bg = ref(null)
onMounted(() => {
  const im = new Image()
  im.onload = () => { bg.value = { '--hero': `url(${im.src})` } }
  im.src = img('hero.jpg')
})
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-bg" :style="bg"></div>
    <div class="hero-embers" aria-hidden="true"></div>
    <div class="container hero-content">
      <p class="eyebrow" v-reveal>{{ t.hero.eyebrow }}</p>
      <h1 class="hero-title" v-reveal>
        <span>{{ t.hero.title1 }}</span>
        <span class="accent">{{ t.hero.title2 }}</span>
      </h1>
      <p class="hero-lead" v-reveal>{{ t.hero.lead }}</p>
      <div class="hero-cta" v-reveal>
        <a href="#reserve" class="btn btn-red">{{ t.hero.cta1 }}</a>
        <a href="#cuts" class="btn btn-ghost">{{ t.hero.cta2 }}</a>
      </div>
      <div class="ratings" v-reveal>
        <div class="rating">
          <strong>{{ site.googleRating }}</strong>
          <span class="stars" aria-hidden="true">★★★★★</span>
          <small>{{ t.hero.g }} · <bdi>{{ site.googleReviews }}</bdi> {{ t.hero.gr }}</small>
        </div>
        <div class="rating">
          <strong>{{ site.tripRating }}</strong>
          <span class="stars" aria-hidden="true">★★★★★</span>
          <small>{{ t.hero.ta }}</small>
        </div>
      </div>
    </div>
  </section>
  <div class="strip" aria-hidden="true">
    <div class="strip-track">
      <template v-for="n in 2" :key="n">
        <span v-for="s in t.strip" :key="s + n">{{ s }}<i class="flag"></i></span>
      </template>
    </div>
  </div>
</template>
