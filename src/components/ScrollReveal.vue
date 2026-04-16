<template>
    <div ref="scrollReveal-container" :class="['scroll-reveal-container', { 'is-mobile': isMobile }]">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
    delayStep: {
        type: Number,
        default: 100 // ms stagger between elements
    },
    once: {
        type: Boolean,
        default: true // only trigger once
    },
    threshold: {
        type: Number,
        default: 0.1 // 10% visible
    },
    isMobile: {
        type: Boolean,
        default: false
    }
})

const container = ref(null)
let observer = null

onMounted(async () => {
    await nextTick()

    const target = container.value
    if (!target) return

    // Find all eligible children
    const children = Array.from(target.children)

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const el = entry.target
                if (entry.isIntersecting) {
                    // Get sibling index for stagger
                    const siblings = Array.from(el.parentElement.children).filter(
                        child => !child.classList.contains('scroll-reveal-container')
                    )
                    const index = siblings.indexOf(el)

                    el.style.transitionDelay = `${index * props.delayStep}ms`
                    el.classList.add('reveal-active')
                    el.classList.remove('reveal-pending')

                    if (props.once) {
                        observer.unobserve(el)
                    }
                } else {
                    if (!props.once) {
                        el.classList.remove('reveal-active')
                        el.classList.add('reveal-pending')
                    }
                }
            })
        },
        { threshold: props.threshold }
    )

    children.forEach(child => {
        child.classList.add('reveal-pending')
        observer.observe(child)
    })
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped>
.scroll-reveal-container {
    /* Children are handled by global styles */
}
</style>
