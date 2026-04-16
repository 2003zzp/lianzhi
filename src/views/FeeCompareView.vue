<template>
    <div class="tool-page">
        <div class="back-bar">
            <div class="container-narrow">
                <button class="back-btn" @click="$router.go(-1)">
                    <span>←</span> 返回
                </button>
            </div>
        </div>

        <section class="tool-hero">
            <div class="container-narrow">
                <div class="tool-badge">交易工具</div>
                <h1>手续费对比</h1>
                <p class="tool-subtitle">对比不同交易所、不同场景下的手续费差异。</p>
            </div>
        </section>

        <section class="tool-content">
            <div class="container-narrow">
                <div class="content-section">
                    <p>很多人以为手续费差距不大，但在高频交易和长期使用场景里，费率差异会持续吞噬收益。尤其当你频繁买卖、做合约、跨平台调仓时，手续费不再是边角料，而是会直接决定你的真实盈亏空间。</p>
                    <p>手续费对比工具真正的意义，不是让你记住一堆数字，而是快速看清不同平台、不同业务类型、不同账户等级下的成本差异。比如现货和合约的成本逻辑不一样，普通用户和 VIP 用户看到的费率也不一样，如果混着看，很容易误判。</p>
                    <p>更实用的比较方式，是把平台费率、折扣机制、是否需要持平台币、以及你自己的交易习惯一起放进来。这样你选平台时，看的就不是宣传海报，而是真实使用成本。</p>
                    <p>对于新手来说，这类工具最适合做两个判断：第一，你现在常用的平台费率算不算高；第二，如果你准备换平台，换过去之后在你的实际使用场景里能不能真的省下钱。</p>
                </div>

                <div class="info-card">
                    <h3>先看懂这几点</h3>
                    <ul>
                        <li>手续费差异在低频用户眼里不明显，但在高频和长期使用里很伤。</li>
                        <li>现货、合约、VIP 等级和平台币折扣，要拆开看。</li>
                        <li>真正有价值的不是广告费率，而是你自己的真实使用成本。</li>
                    </ul>
                </div>

                <div class="steps-section">
                    <h3>这类工具最适合什么时候用</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <p>比较不同交易所现货和合约的长期成本。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <p>判断开通某个平台折扣机制后到底能省多少。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <p>准备换平台前，先算一遍自己常见操作的真实成本。</p>
                        </div>
                    </div>
                </div>

                <div class="warning-section">
                    <h3>使用前别忽略这些</h3>
                    <div class="warning-grid">
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>别只看最低费率宣传，要看自己当前等级能不能享受。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>平台币折扣不一定总划算，要结合你的持仓和使用频率。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>手续费低不代表整体体验更好，还要结合深度、安全和出入金路径。</p>
                        </div>
                    </div>
                </div>
                <!-- <PracticeSection /> -->
            </div>
            <div><PracticeSection /></div>
        </section>
    </div>
</template>

<script setup>
import PracticeSection from '../components/PracticeSection.vue'
</script>

<style scoped>
.back-bar {
    padding: 20px 24px;
    background: var(--primary);
    border-bottom: 1px solid var(--border);
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 10px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-family: inherit;
    transition: all 0.3s ease;
}

.back-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateX(-3px);
}

.tool-hero {
    padding: 50px 24px;
    background: linear-gradient(180deg, var(--bg) 0%, var(--primary) 100%);
    text-align: center;
}

.tool-badge {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.tool-hero h1 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 12px;
}

.tool-subtitle {
    font-size: 17px;
    color: var(--text-secondary);
}

.tool-content {
    padding: 60px 24px;
    background: var(--bg);
}

.content-section {
    margin-bottom: 40px;
}

.content-section p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
}

.info-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 32px;
}

.info-card h3 {
    font-size: 18px;
    color: var(--accent);
    margin-bottom: 16px;
}

.info-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info-card li {
    font-size: 14px;
    color: var(--text-secondary);
    padding: 10px 0;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
}

.info-card li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent);
}

.steps-section {
    margin-bottom: 32px;
}

.steps-section h3 {
    font-size: 18px;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.step-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.step-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
}

.step-num {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(233, 69, 96, 0.2);
    color: var(--accent);
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
}

.step-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.warning-section h3 {
    font-size: 18px;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.warning-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.warning-item {
    display: flex;
    gap: 12px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
}

.warning-icon {
    font-size: 18px;
    flex-shrink: 0;
}

.warning-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .tool-hero h1 {
        font-size: 26px;
    }
}
</style>
