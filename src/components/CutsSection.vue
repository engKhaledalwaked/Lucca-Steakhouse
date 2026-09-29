<script setup>
import { ref } from 'vue'
import { t, lang, cuts } from '../i18n'
import BeefChart from './BeefChart.vue'

const active = ref(null)
const served = [...new Set([...cuts.angus, ...cuts.aged].map((c) => c.region))]
const groups = [
  { key: 'angus', list: cuts.angus },
  { key: 'aged', list: cuts.aged },
]
</script>

<template>
  <section class="section cuts" id="cuts">
    <div class="container">
      <div class="cuts-head" v-reveal>
        <h2 class="h2">{{ t.cuts.title }}</h2>
        <p class="cuts-sub">{{ t.cuts.sub }}</p>
      </div>
      <div class="cuts-grid">
        <figure class="chart" v-reveal>
          <BeefChart :active="active" :served="served" @pick="active = $event" />
          <figcaption>{{ t.cuts.hint }}</figcaption>
        </figure>
        <div class="cut-lists" v-reveal>
          <div class="cut-list" v-for="g in groups" :key="g.key">
            <h3>{{ t.cuts[g.key] }}</h3>
            <ul>
              <li v-for="c in g.list" :key="c.en" tabindex="0" :class="{ lit: active === c.region }"
                @mouseenter="active = c.region" @mouseleave="active = null" @focus="active = c.region" @blur="active = null">
                <span class="cut-name">{{ c[lang] }}<em v-if="c.hot" class="house">{{ t.cuts.hot }}</em></span>
                <span class="cut-line"></span>
                <bdi class="cut-w">{{ c.w }}</bdi>
              </li>
            </ul>
          </div>
          <p class="note">{{ t.cuts.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
