<template>
    <div class="floating-cta" role="navigation" aria-label="快速操作">
        <a
            class="cta cta-primary"
            :href="registerUrl"
            target="_blank"
            rel="noopener noreferrer"
        >{{ registerText }}</a>
        <button class="cta cta-secondary" type="button" @click="scrollToPractice">
            {{ groupText }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    registerUrl: {
        type: String,
        default: 'https://vlink.cc/jnjnjn'
    },
    registerText: {
        type: String,
        default: '注册入口'
    },
    groupText: {
        type: String,
        default: '进群'
    }
})

function scrollToPractice() {
    const el = document.getElementById('practice')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
    }
    // fallback: go home with hash
    window.location.hash = '#practice'
}
</script>

<style scoped>
.floating-cta {
    position: fixed;
    left: 16px;
    right: 16px;
    bottom: 16px;
    z-index: 200;
    display: none;
    gap: 12px;
}

.cta {
    flex: 1;
    height: 48px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2px;
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
}

.cta-primary {
    background: linear-gradient(135deg, #4da3ff 0%, #74d4ff 100%);
    color: #fff;
    border-color: transparent;
    box-shadow: 0 14px 40px rgba(77, 163, 255, 0.25);
}

.cta-secondary {
    background: rgba(10, 23, 42, 0.84);
    color: var(--text-primary);
    cursor: pointer;
}

@media (max-width: 768px) {
    .floating-cta {
        display: flex;
    }
}
</style>
