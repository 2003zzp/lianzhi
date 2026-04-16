<template>
    <section id="practice" class="practice">
        <div class="container">
            <div class="section-header">
                <h3>{{ heroTitle }}</h3>
                <p>{{ heroDesc }}</p>
            </div>
            <div class="practice-grid">
                <div class="practice-card">
                    <h4>{{ leftTitle }}</h4>
                    <ul>
                        <li>先注册 - 把账户和安全项先配对</li>
                        <li>再进群 - 有问题继续问，少走弯路</li>
                        <li>按路径看 - 别乱跳，先看买币和提币</li>
                    </ul>
                    <a
                        :href="registerUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        style="margin-top: 24px;"
                    >{{ registerCtaText }} →</a>
                    <div class="micro-hint">建议：注册后先补安全项（2FA/反钓鱼码），再做小额动作。</div>
                </div>
                <div class="practice-card">
                    <h4>{{ rightTitle }}</h4>
                    <div class="qr-wrap" :class="{ 'qr-placeholder': !groupQrSrc }">
                        <img v-if="groupQrSrc" :src="groupQrSrc" :alt="groupQrAlt" class="qr-img" />
                        <span v-else>扫码进群</span>
                    </div>
                    <p class="group-desc">
                        适合继续问买币、提币、钱包和安全细节。<br>
                        建议先看注册、买 U、提币和钱包安全，再进群问会更快。
                    </p>
                    <a
                        v-if="groupJoinUrl"
                        :href="groupJoinUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary"
                        style="margin-top: 16px;"
                    >{{ groupCtaText }} →</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    heroTitle: {
        type: String,
        default: '准备实操？先拿好交易所入口和粉丝群'
    },
    heroDesc: {
        type: String,
        default: '左边注册，右边进群；遇到买币、提币、钱包和安全细节时更顺手。'
    },
    leftTitle: {
        type: String,
        default: '📈 注册入口'
    },
    registerUrl: {
        type: String,
        default: 'https://vlink.cc/jnjnjn'
    },
    registerCtaText: {
        type: String,
        default: '去注册'
    },
    rightTitle: {
        type: String,
        default: '💬 粉丝群'
    },
    groupQrSrc: {
        type: String,
        default: ''
    },
    groupQrAlt: {
        type: String,
        default: '粉丝群二维码'
    },
    groupJoinUrl: {
        type: String,
        default: ''
    },
    groupCtaText: {
        type: String,
        default: '打开进群入口'
    }
})
</script>


<style scoped>
.practice {
    background: transparent;
}

.practice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}

.practice-card {
    background: linear-gradient(180deg, rgba(15, 30, 54, 0.8) 0%, rgba(9, 20, 38, 0.82) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 28px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    position: relative;
}

.practice-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 28%, transparent 72%, rgba(77, 163, 255, 0.08));
    pointer-events: none;
}

.practice-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-6px);
}

.practice-card h4 {
    font-size: 24px;
    margin-bottom: 24px;
    color: var(--accent);
}

.practice-card ul {
    list-style: none;
    text-align: left;
}

.practice-card li {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 12px;
}

.practice-card li::before {
    content: '✓';
    color: var(--accent);
    font-weight: bold;
}

.practice-card li:last-child {
    border-bottom: none;
}

.qr-placeholder {
    width: 160px;
    height: 160px;
    background: var(--border);
    border-radius: 12px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-size: 14px;
}

.qr-wrap {
    width: 160px;
    height: 160px;
    border-radius: 12px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-bg);
    border: 1px solid var(--border);
}

.qr-img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
}

.group-desc {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
}

.micro-hint {
    margin-top: 12px;
    font-size: 12px;
    color: var(--text-secondary);
    opacity: 0.9;
}

@media (max-width: 768px) {
    .practice-grid {
        grid-template-columns: 1fr;
    }
}
</style>
