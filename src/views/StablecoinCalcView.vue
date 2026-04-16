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
                <div class="tool-badge">计算工具</div>
                <h1>稳定币计算器</h1>
                <p class="tool-subtitle">快速换算稳定币金额、汇率与简单收益情况。</p>
            </div>
        </section>

        <section class="tool-content">
            <div class="container-narrow">
                <div class="content-section">
                    <p>稳定币计算器适合用来做金额换算、收益估算和成本判断。很多用户在买币、转账、做理财或比较不同方案时，脑子里其实都在做一件事：这笔钱最后实际还剩多少。</p>
                    <p>对新手来说，最常见的用途是快速判断某个金额在不同汇率、手续费和收益率条件下的实际结果。比如你看到某个年化、某个兑换价、某个平台手续费，第一反应往往不是概念，而是：那我手里这 1000 USDT 最后到底会变成多少。</p>
                    <p>这类工具本身不复杂，但它的价值就在于把"心里大概算一下"变成更明确的数字判断。尤其在稳定币相关场景里，很多操作看着波动不大，但手续费、汇率差和时间成本叠起来，最后结果可能差不少。</p>
                    <p>所以稳定币计算器真正适合承接的，不只是简单换算，还包括帮用户快速比较不同方案的结果。只要它能让人更快看清实际到手金额和大致收益，实用价值就已经很高。</p>
                </div>

                <div class="info-card">
                    <h3>先看懂这几点</h3>
                    <ul>
                        <li>稳定币场景里，用户最关心的其实是最终到手金额。</li>
                        <li>小费率、小汇差单看不明显，但叠起来会拉开差距。</li>
                        <li>把模糊心算变成清楚数字，本身就是工具价值。</li>
                    </ul>
                </div>

                <div class="steps-section">
                    <h3>这类工具最适合什么时候用</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <p>比较不同平台或不同通道的稳定币到手金额。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <p>预估手续费、汇率差和简单收益后的最终结果。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <p>在买币、转账或做稳定币理财前先快速过一遍账。</p>
                        </div>
                    </div>
                </div>

                <div class="warning-section">
                    <h3>使用前别忽略这些</h3>
                    <div class="warning-grid">
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>计算结果适合做判断辅助，不代表平台最终结算完全一致。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>别只看收益率，也要把手续费和兑换差价一起算进去。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>如果涉及长期收益，记得区分简单年化和实际复利效果。</p>
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
