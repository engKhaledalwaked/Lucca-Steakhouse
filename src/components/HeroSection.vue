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

// ألوان مقطع الستيك من النيء إلى المستوي تماماً
const doneColors = ['#7b1830', '#a51f2f', '#c0393f', '#c8676a', '#b58a77', '#8a6650']
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-bg" :style="bg"></div>
    <div class="container hero-content">
      <p class="hero-tag" v-reveal>{{ t.hero.eyebrow }}</p>
      <h1 class="hero-title" v-reveal>
        <span>{{ t.hero.title1 }}</span>
        <span>{{ t.hero.title2 }}</span>
      </h1>
      <p class="hero-lead" v-reveal>{{ t.hero.lead }}</p>
      <div class="hero-cta" v-reveal>
        <a href="#reserve" class="btn btn-red">{{ t.hero.cta1 }}</a>
        <a href="#cuts" class="btn btn-ghost">{{ t.hero.cta2 }}</a>
      </div>
      <div class="ratings" v-reveal>
        <p class="rating">
          <strong>{{ site.googleRating }}</strong>
          <span class="stars" aria-hidden="true">★★★★★</span>
          <small>{{ t.hero.g }} · <bdi>{{ site.googleReviews }}</bdi> {{ t.hero.gr }}</small>
        </p>
        <p class="rating">
          <strong>{{ site.tripRating }}</strong>
          <span class="stars" aria-hidden="true">★★★★★</span>
          <small>{{ t.hero.ta }}</small>
        </p>
      </div>
    </div>
  </section>

  <div class="done">
    <div class="container done-inner">
      <h2 class="done-title">{{ t.done.title }}</h2>
      <ol class="done-scale">
        <li v-for="(l, i) in t.done.levels" :key="l" :style="{ '--c': doneColors[i] }">
          <span class="swatch" aria-hidden="true"></span>
          <span class="done-name">{{ l }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>
