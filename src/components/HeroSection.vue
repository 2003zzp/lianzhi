<template>
    <section class="hero" :class="{ 'hero-sm': small }">
        <div class="container">
            <h2>{{ title }}</h2>
            <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
            <p v-if="description" class="description">{{ description }}</p>
            <div v-if="$slots.default" class="hero-btns">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    description: String,
    small: Boolean
})
</script>

<style scoped>
.hero {
    padding: 128px 24px 112px;
    text-align: center;
    background: transparent;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 760px;
    height: 760px;
    background: radial-gradient(circle, rgba(77, 163, 255, 0.16) 0%, rgba(116, 212, 255, 0.08) 34%, transparent 72%);
    pointer-events: none;
    filter: blur(8px);
}

.hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.05), transparent 18%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 20%, transparent 80%, rgba(255, 255, 255, 0.02));
    pointer-events: none;
}

.hero-sm {
    padding: 86px 24px 42px;
}

.hero-sm h2 {
    font-size: 36px;
}

.hero h2 {
    font-size: 52px;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -1.5px;
    text-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
    position: relative;
    z-index: 1;
}

.subtitle {
    font-size: 20px;
    color: #8fd7ff;
    margin-bottom: 16px;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.description {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 760px;
    margin: 0 auto 40px;
    position: relative;
    z-index: 1;
}

.hero-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    position: relative;
    z-index: 1;
}

@media (max-width: 768px) {
    .hero h2 {
        font-size: 32px;
    }
    
    .hero-sm h2 {
        font-size: 28px;
    }

    .hero-btns {
        flex-direction: column;
        align-items: center;
    }
}
</style>
