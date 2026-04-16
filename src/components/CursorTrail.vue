<template>
    <div v-if="!isMobile" class="cursor-trail-wrapper">
        <div
            v-for="(dot, index) in dots"
            :key="index"
            class="trail-dot"
            :style="{
                opacity: dot.opacity,
                transform: `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${dot.scale})`
            }"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth < 768

const dots = ref([])
const DOT_COUNT = 8

for (let i = 0; i < DOT_COUNT; i++) {
    dots.value.push({ x: -100, y: -100, opacity: 0, scale: 0.5 })
}

let mouseX = -100, mouseY = -100, targetX = -100, targetY = -100, trailVisible = false
let animationFrame = null
let isPageVisible = true

function onMouseMove(e) {
    targetX = e.clientX
    targetY = e.clientY
    trailVisible = true
}

function onMouseEnter(e) {
    targetX = e.clientX
    targetY = e.clientY
    trailVisible = true
}

function onMouseLeave() {
    trailVisible = false
    dots.value.forEach(d => { d.opacity = 0 })
}

function onVisibilityChange() {
    isPageVisible = !document.hidden
    if (isPageVisible && !animationFrame) {
        animationFrame = requestAnimationFrame(animate)
    }
}

function animate() {
    if (!isPageVisible) {
        animationFrame = null
        return
    }

    mouseX += (targetX - mouseX) * 0.18
    mouseY += (targetY - mouseY) * 0.18

    for (let i = dots.value.length - 1; i >= 0; i--) {
        if (i === 0) {
            dots.value[i].x = mouseX
            dots.value[i].y = mouseY
            dots.value[i].opacity = trailVisible ? 0.65 : 0
            dots.value[i].scale = 0.72
        } else {
            const prev = dots.value[i - 1]
            dots.value[i].x = prev.x
            dots.value[i].y = prev.y
            dots.value[i].opacity = trailVisible ? (DOT_COUNT - i) / DOT_COUNT * 0.35 : 0
            dots.value[i].scale = 0.3 + (DOT_COUNT - i) / DOT_COUNT * 0.45
        }
    }

    animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
    if (isMobile) return
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibilityChange)
    animationFrame = requestAnimationFrame(animate)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseenter', onMouseEnter)
    document.removeEventListener('mouseleave', onMouseLeave)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.cursor-trail-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
}

.trail-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(69, 154, 233, 0.82) 0%,
        rgba(138, 255, 239, 0.45) 40%,
        rgba(233, 69, 96, 0) 70%
    );
    box-shadow:
        0 0 6px rgba(69, 187, 233, 0.45),
        0 0 14px rgba(146, 69, 233, 0.18);
    transition: opacity 0.2s ease;
    will-change: transform, opacity;
}
</style>
