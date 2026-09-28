<script setup>
import { t } from './i18n'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CutsSection from './components/CutsSection.vue'
import SignatureSection from './components/SignatureSection.vue'
import MenuSection from './components/MenuSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ReserveSection from './components/ReserveSection.vue'
import VisitSection from './components/VisitSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="demo-ribbon">{{ t.ribbon }}</div>
  <NavBar />
  <main>
    <HeroSection />
    <CutsSection />
    <SignatureSection />
    <MenuSection />
    <ExperienceSection />
    <ReserveSection />
    <VisitSection />
  </main>
  <FooterSection />
  <a href="#reserve" class="sticky-reserve">{{ t.nav.reserve }}</a>
</template>
