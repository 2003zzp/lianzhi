<template>
    <div id="app">
        <WaterRippleBackground />
        <CursorTrail />
        <ScrollEnhancer>
            <AppHeader />
            <main>
                <router-view />
            </main>
            <FloatingCta />
            <AppFooter />
        </ScrollEnhancer>
    </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import FloatingCta from './components/FloatingCta.vue'
import CursorTrail from './components/CursorTrail.vue'
import WaterRippleBackground from './components/WaterRippleBackground.vue'
import ScrollEnhancer from './components/ScrollEnhancer.vue'
</script>

<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    isolation: isolate;
}

main {
    flex: 1;
    position: relative;
    z-index: 1;
}
</style>
