<template>
    <div class="scroll-progress" :style="{ width: progress + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent) 0%, #ff8a9b 50%, var(--accent) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    z-index: 9999;
    transition: width 0.05s linear;
    box-shadow: 0 0 10px rgba(233, 69, 96, 0.6);
}

@keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
</style>
