<template>
    <div class="particles-container" ref="container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useParticles } from '../composables/useParticles'

const container = ref(null)
const canvas = ref(null)
const { start, stop } = useParticles(canvas)

onMounted(() => {
    start()
})

onUnmounted(() => {
    stop()
})
</script>

<style scoped>
.particles-container {
    contain: strict;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
    opacity: 0.26;
}

canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
