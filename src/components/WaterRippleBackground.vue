<template>
    <div class="water-ripple-bg" aria-hidden="true">
        <div class="ripple ripple-1"></div>
        <div class="ripple ripple-2"></div>
        <div class="ripple ripple-3"></div>
        <div class="droplet droplet-1"></div>
        <div class="droplet droplet-2"></div>
        <div class="droplet droplet-3"></div>
        <div class="droplet droplet-4"></div>
    </div>
</template>

<style scoped>
.water-ripple-bg {
    contain: strict;
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
    opacity: 0.62;
    transform: translateZ(0);
}

.water-ripple-bg::before,
.water-ripple-bg::after {
    content: '';
    position: absolute;
    inset: 0;
}

.water-ripple-bg::before {
    background:
        radial-gradient(circle at 18% 24%, rgba(122, 195, 255, 0.12) 0, rgba(122, 195, 255, 0.08) 5%, transparent 16%),
        radial-gradient(circle at 82% 18%, rgba(115, 159, 255, 0.1) 0, rgba(115, 159, 255, 0.06) 6%, transparent 18%),
        radial-gradient(circle at 70% 72%, rgba(84, 225, 255, 0.09) 0, rgba(84, 225, 255, 0.05) 4%, transparent 16%);
    filter: blur(8px);
}

.water-ripple-bg::after {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(circle at center, black 35%, transparent 90%);
    opacity: 0.22;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(166, 225, 255, 0.14);
    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.02) inset,
        0 0 32px rgba(100, 195, 255, 0.05);
    background: radial-gradient(circle, rgba(180, 235, 255, 0.05) 0%, rgba(180, 235, 255, 0.015) 38%, transparent 72%);
    animation: rippleFloat 18s ease-in-out infinite;
}

.ripple-1 {
    width: 520px;
    height: 520px;
    left: -120px;
    top: 12%;
}

.ripple-2 {
    width: 420px;
    height: 420px;
    right: -80px;
    top: 8%;
    animation-delay: -6s;
}

.ripple-3 {
    width: 640px;
    height: 640px;
    left: 48%;
    bottom: -240px;
    animation-delay: -12s;
}

.droplet {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.38), rgba(150, 220, 255, 0.12) 32%, rgba(100, 175, 255, 0.04) 62%, transparent 75%);
    box-shadow:
        inset 0 1px 1px rgba(255, 255, 255, 0.28),
        0 10px 30px rgba(70, 140, 255, 0.08);
    filter: blur(0.2px);
    animation: dropletDrift 16s ease-in-out infinite;
}

.droplet-1 {
    width: 16px;
    height: 16px;
    left: 14%;
    top: 20%;
}

.droplet-2 {
    width: 12px;
    height: 12px;
    right: 18%;
    top: 30%;
    animation-delay: -5s;
}

.droplet-3 {
    width: 18px;
    height: 18px;
    left: 28%;
    bottom: 18%;
    animation-delay: -9s;
}

.droplet-4 {
    width: 14px;
    height: 14px;
    right: 30%;
    bottom: 24%;
    animation-delay: -12s;
}

@keyframes rippleFloat {
    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1);
        opacity: 0.72;
    }
    50% {
        transform: translate3d(0, -10px, 0) scale(1.045);
        opacity: 1;
    }
}

@keyframes dropletDrift {
    0%,
    100% {
        transform: translate3d(0, 0, 0);
        opacity: 0.7;
    }
    50% {
        transform: translate3d(0, -14px, 0);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .water-ripple-bg {
        opacity: 0.65;
    }

    .ripple-1 {
        width: 360px;
        height: 360px;
        left: -140px;
    }

    .ripple-2 {
        width: 280px;
        height: 280px;
        right: -100px;
    }

    .ripple-3 {
        width: 420px;
        height: 420px;
        left: 35%;
        bottom: -180px;
    }
}
</style>
