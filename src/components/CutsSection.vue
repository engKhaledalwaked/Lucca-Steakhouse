<script setup>
import { t, lang, cuts } from '../i18n'
import { img } from '../site'
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section class="section cuts" id="cuts">
    <div class="container cuts-grid">
      <div class="cuts-media" v-reveal>
        <ImageSlot class="cm-main" :src="img('butcher.jpg')" label="Butcher" />
        <ImageSlot class="cm-sub" :src="img('wagyu-cut.jpg')" label="Wagyu" />
      </div>
      <div class="cuts-text">
        <div v-reveal>
          <p class="eyebrow">{{ t.cuts.eyebrow }}</p>
          <h2 class="h2">{{ t.cuts.title }}</h2>
          <p class="muted">{{ t.cuts.sub }}</p>
        </div>
        <div class="cut-lists">
          <div class="cut-list" v-reveal>
            <h3>{{ t.cuts.angus }}</h3>
            <ul>
              <li v-for="c in cuts.angus" :key="c.en">
                <span class="cut-name">{{ c[lang] }} <em v-if="c.hot" class="hot">🔥</em></span>
                <span class="cut-line"></span>
                <bdi class="cut-w">{{ c.w }}</bdi>
              </li>
            </ul>
          </div>
          <div class="cut-list" v-reveal>
            <h3>{{ t.cuts.aged }}</h3>
            <ul>
              <li v-for="c in cuts.aged" :key="c.en">
                <span class="cut-name">{{ c[lang] }} <em v-if="c.hot" class="hot">🔥</em></span>
                <span class="cut-line"></span>
                <bdi class="cut-w">{{ c.w }}</bdi>
              </li>
            </ul>
          </div>
        </div>
        <p class="note" v-reveal>{{ t.cuts.note }}</p>
      </div>
    </div>
  </section>
</template>
