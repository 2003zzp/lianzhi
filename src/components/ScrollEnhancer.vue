<template>
    <slot></slot>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['scrolled', 'unscrolled'])
const isScrolled = ref(false)
let ticking = false

function updateScrollState() {
    const scrollTop = window.scrollY
    const wasScrolled = isScrolled.value
    isScrolled.value = scrollTop > 20

    if (isScrolled.value !== wasScrolled) {
        document.body.classList.toggle('header-scrolled', isScrolled.value)
        emit(isScrolled.value ? 'scrolled' : 'unscrolled', isScrolled.value)
    }

    ticking = false
}

function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateScrollState)
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollState()
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    document.body.classList.remove('header-scrolled')
})
</script>
