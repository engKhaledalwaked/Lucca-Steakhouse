<script setup>
import { t, lang } from '../i18n'
import { img, site } from '../site'
import ImageSlot from './ImageSlot.vue'

const expImgs = ['chef-plating.jpg', 'interior.jpg', 'evening.jpg', 'table.jpg']
const gallery = ['carving.jpg', 'kebab.jpg', 'wine.jpg', 'wellington-cut.jpg']
</script>

<template>
  <section class="section exp" id="experience">
    <div class="container">
      <div class="sec-head" v-reveal>
        <h2 class="h2">{{ t.exp.title }}</h2>
      </div>
      <div class="exp-grid">
        <article class="exp-card" v-for="(it, i) in t.exp.items" :key="i" v-reveal>
          <ImageSlot class="exp-img" :src="img(expImgs[i])" :label="it.t" />
          <div class="exp-body">
            <h3>{{ it.t }}</h3>
            <p>{{ it.d }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="gallery-band" aria-label="Gallery">
    <div class="gallery-row">
      <ImageSlot v-for="g in gallery" :key="g" class="g-item" :src="img(g)" label="Lucca" />
    </div>
    <div class="center">
      <a :href="site.instagram" target="_blank" rel="noopener" class="btn btn-line">@luccasteakhouse · {{ t.gallery.cta }}</a>
    </div>
  </section>
</template>
