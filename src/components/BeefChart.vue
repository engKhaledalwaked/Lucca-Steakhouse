<script setup>
import { computed } from 'vue'
import { t } from '../i18n'

// مخطط الجزّار: كل منطقة مستطيل يُقصّ على شكل العجل
const props = defineProps({ active: String, served: Array })
const emit = defineEmits(['pick'])

const regions = [
  { id: 'chuck', x: 118, y: 0, w: 117, h: 172, lx: 180, ly: 132 },
  { id: 'brisket', x: 118, y: 172, w: 117, h: 158, lx: 190, ly: 206 },
  { id: 'rib', x: 235, y: 0, w: 95, h: 172, lx: 283, ly: 124 },
  { id: 'plate', x: 235, y: 172, w: 165, h: 158, lx: 318, ly: 208 },
  { id: 'shortloin', x: 330, y: 0, w: 88, h: 172, lx: 374, ly: 124 },
  { id: 'flank', x: 400, y: 172, w: 100, h: 158, lx: 452, ly: 204 },
  { id: 'sirloin', x: 418, y: 0, w: 82, h: 172, lx: 459, ly: 124 },
  { id: 'round', x: 500, y: 0, w: 100, h: 330, lx: 536, ly: 160 },
]

const body = 'M58 112 L84 92 L118 96 L150 104 L190 86 L215 78 L300 74 L400 76 L470 80 L520 82 L556 92 L566 108 L568 140 L562 190 L548 222 L544 250 L548 318 L526 318 L524 280 L520 250 L510 232 L496 222 L470 226 L400 236 L320 240 L250 238 L222 236 L214 262 L210 318 L188 318 L186 262 L178 240 L158 228 L140 206 L118 186 L100 168 L86 170 L64 172 L46 166 L38 150 L40 136 L48 122 Z'

const servedSet = computed(() => new Set(props.served))
</script>

<template>
  <svg class="steer" viewBox="20 40 580 290" role="img" :aria-label="t.cuts.title">
    <defs>
      <clipPath id="steer-body"><path :d="body" /></clipPath>
      <pattern id="served-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" class="hatch" />
      </pattern>
    </defs>

    <!-- القرن والأذن والذيل -->
    <path class="stroke" d="M80 96 Q64 70 86 54 Q80 76 96 93" />
    <path class="ear" d="M104 101 Q124 86 142 92 Q126 104 108 108 Z" />
    <path class="stroke" d="M562 100 Q590 140 582 222" />
    <ellipse class="tuft" cx="582" cy="230" rx="6" ry="11" />

    <g clip-path="url(#steer-body)">
      <rect x="20" y="40" width="600" height="300" class="head" />
      <g v-for="r in regions" :key="r.id">
        <rect :x="r.x" :y="r.y" :width="r.w" :height="r.h" class="region"
          :class="{ served: servedSet.has(r.id), on: active === r.id }" @mouseenter="emit('pick', r.id)" @mouseleave="emit('pick', null)" />
        <rect v-if="servedSet.has(r.id) && active !== r.id" :x="r.x" :y="r.y" :width="r.w" :height="r.h" fill="url(#served-hatch)" class="hatch-fill" />
      </g>
    </g>
    <path :d="body" class="outline" />
    <circle cx="66" cy="128" r="2.6" class="eye" />

    <text v-for="r in regions" :key="r.id + 't'" :x="r.lx" :y="r.ly" class="label" :class="{ on: active === r.id }">{{ t.cuts.regions[r.id] }}</text>
  </svg>
</template>
