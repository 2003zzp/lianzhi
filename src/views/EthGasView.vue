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
                <div class="tool-badge">链上工具</div>
                <h1>ETH Gas 查询器</h1>
                <p class="tool-subtitle">查看当前链上 Gas 水平，辅助判断转账和交互成本。</p>
            </div>
        </section>

        <section class="tool-content">
            <div class="container-narrow">
                <div class="content-section">
                    <p>ETH Gas 是链上交互里最基础也最容易影响体验的一项成本。很多新手第一次转账或授权时，最常见的问题不是不会点按钮，而是不知道当前成本算高还是低，也不知道自己这一步值不值得现在做。</p>
                    <p>Gas 查询器真正有用的地方，不是单纯告诉你一个数字，而是帮你判断：现在适不适合转账、适不适合做授权、适不适合和链上应用交互。尤其是在市场活跃、网络拥堵的时候，同一笔操作的成本可能和低峰期差出不少。</p>
                    <p>如果你只是偶尔转一次账，Gas 高一点可能还能接受；但如果你准备连续做多笔操作，比如转账、授权、兑换、跨链，那 Gas 就不能只看一眼，而要整体评估一次操作链路的总成本。</p>
                    <p>对普通用户来说，更稳的用法不是死盯最低 Gas，而是把 Gas 水平和操作紧急程度放在一起判断。着急处理的转账，可以接受成本略高；不着急的授权或试验性操作，就完全可以等网络低一点再做。</p>
                </div>

                <div class="info-card">
                    <h3>先看懂这几点</h3>
                    <ul>
                        <li>Gas 查询器的价值在于帮你判断现在适不适合操作，不只是看一个数字。</li>
                        <li>单笔成本不一定吓人，但多步链上操作叠加后总成本可能明显变高。</li>
                        <li>判断 Gas 要结合操作紧急程度，而不是机械追最低值。</li>
                    </ul>
                </div>

                <div class="steps-section">
                    <h3>这类工具最适合什么时候用</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <p>转账前先看当前网络是否拥堵。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <p>做 DeFi 授权、兑换或跨链前先估一下整套动作的总成本。</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <p>观察一天内不同时间段 Gas 波动，找出更适合自己操作的时间。</p>
                        </div>
                    </div>
                </div>

                <div class="warning-section">
                    <h3>使用前别忽略这些</h3>
                    <div class="warning-grid">
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>别只看 Gas 数值低不低，还要看你接下来是不是连续多步操作。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>小额资产在高 Gas 时段频繁操作，成本可能很快吃掉收益。</p>
                        </div>
                        <div class="warning-item">
                            <span class="warning-icon">⚠️</span>
                            <p>查询结果只能辅助判断，不能替你决定某笔交易本身值不值得做。</p>
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
