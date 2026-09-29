<script setup>
import { computed } from 'vue'
import { t } from '../i18n'
import { steerPath } from '../steer-path'

// مخطط الجزّار: كل منطقة مضلّع يُقصّ على شكل الثور (الإحداثيات بنظام مسار الثور)
const props = defineProps({ active: String, served: Array })
const emit = defineEmits(['pick'])

const regions = [
  { id: 'chuck', pts: '400,200 700,200 700,870 400,870', lx: 560, ly: 730 },
  { id: 'rib', pts: '700,200 900,200 900,870 700,870', lx: 800, ly: 740 },
  { id: 'shortloin', pts: '900,200 1080,200 1080,870 900,870', lx: 990, ly: 740 },
  { id: 'sirloin', pts: '1080,200 1225,200 1225,870 1080,870', lx: 1152, ly: 740 },
  { id: 'round', pts: '1225,200 1470,200 1470,598 1548,662 1548,1450 1330,1450 1160,870 1225,870', lx: 1340, ly: 830 },
  { id: 'brisket', pts: '240,870 620,870 620,1450 240,1450', lx: 520, ly: 935 },
  { id: 'plate', pts: '620,870 950,870 950,1450 620,1450', lx: 785, ly: 965 },
  { id: 'flank', pts: '950,870 1160,870 1300,1300 950,1300', lx: 1050, ly: 965 },
]

// خطوط التقسيم الداخلية فقط (حدّ الفخذ مرسوم أصلاً في خط الساق الخلفية)
const divisions = 'M400 200V870 M700 200V870 M900 200V870 M1080 200V870 M1225 200V870 M240 870H1160 M620 870V1450 M950 870V1300'

const servedSet = computed(() => new Set(props.served))
</script>

<template>
  <svg class="steer" viewBox="40 230 1734 1198" role="img" :aria-label="t.cuts.title">
    <defs>
      <clipPath id="steer-body"><path :d="steerPath" clip-rule="evenodd" /></clipPath>
      <pattern id="served-hatch" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="16" class="hatch" />
      </pattern>
    </defs>

    <g clip-path="url(#steer-body)">
      <rect x="0" y="200" width="1800" height="1300" class="head" />
      <g v-for="r in regions" :key="r.id">
        <polygon :points="r.pts" class="region" :class="{ served: servedSet.has(r.id), on: active === r.id }"
          @mouseenter="emit('pick', r.id)" @mouseleave="emit('pick', null)" />
        <polygon v-if="servedSet.has(r.id) && active !== r.id" :points="r.pts" fill="url(#served-hatch)" class="hatch-fill" />
      </g>
      <path :d="divisions" class="divide" />
    </g>
    <path :d="steerPath" fill-rule="evenodd" class="outline" />

    <text v-for="r in regions" :key="r.id + 't'" :x="r.lx" :y="r.ly" class="label" :class="{ on: active === r.id }">{{ t.cuts.regions[r.id] }}</text>
  </svg>
</template>
