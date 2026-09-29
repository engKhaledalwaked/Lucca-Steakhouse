<script setup>
import { ref, computed } from 'vue'
import { t, lang, menu } from '../i18n'

const active = ref(menu[0].id)
const current = computed(() => menu.find((c) => c.id === active.value))
const tagLabel = (tag) => ({ new: { ar: 'جديد', en: 'New' }, fav: { ar: 'الأكثر طلباً', en: 'Guest favourite' } }[tag]?.[lang.value])
</script>

<template>
  <section class="section menu-sec" id="menu">
    <div class="container menu-card">
      <div class="sec-head" v-reveal>
        <h2 class="h2">{{ t.menu.title }}</h2>
        <p class="sec-sub">{{ t.menu.sub }}</p>
      </div>
      <div class="tabs" role="tablist" v-reveal>
        <button v-for="c in menu" :key="c.id" type="button" role="tab"
          :aria-selected="active === c.id" :class="{ on: active === c.id }" @click="active = c.id">{{ c[lang] }}</button>
      </div>
      <Transition name="fade" mode="out-in">
        <ul class="menu-grid" :key="active">
          <li class="dish" v-for="d in current.items" :key="d.en">
            <h3>{{ d[lang] }} <em v-if="d.tag" class="tag" :class="d.tag">{{ tagLabel(d.tag) }}</em></h3>
            <p v-if="lang === 'ar' ? d.dar : d.den">{{ lang === 'ar' ? d.dar : d.den }}</p>
            <p v-else-if="lang === 'ar'" class="alt" dir="ltr">{{ d.en }}</p>
          </li>
        </ul>
      </Transition>
    </div>
  </section>
</template>
