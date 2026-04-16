<template>
    <div class="tools-page">
        <!-- Hero Section -->
        <HeroSection 
            title="工具中心"
            description="围绕交易、链上交互与成本判断，逐步补齐实用工具页和辅助计算页面。"
            small
        >
            <a href="https://openupbtc.com" target="_blank" class="hero-link">去主站看更多工具观察与深度内容 →</a>
        </HeroSection>
<PracticeSection />
        <!-- Tools Section -->
        <section class="tools-section">
            <div class="container">
                <div class="section-header">
                    <span class="tag">实操入口</span>
                    <h3>常用工具</h3>
                </div>
                <ScrollReveal :delayStep="120">
                <div class="tools-grid">
                    <router-link to="/tools/eth-gas" class="tool-card" v-ripple>
                        <div class="tool-icon">⛽</div>
                        <div class="tool-content">
                            <h4>ETH Gas 查询器</h4>
                            <p>查看当前链上 Gas 水平，辅助判断转账和交互成本。</p>
                            <span class="tool-status">查看工具 →</span>
                        </div>
                    </router-link>
                    <router-link to="/tools/fee-compare" class="tool-card" v-ripple>
                        <div class="tool-icon">💰</div>
                        <div class="tool-content">
                            <h4>手续费对比</h4>
                            <p>对比不同交易所、不同场景下的手续费差异。</p>
                            <span class="tool-status">查看工具 →</span>
                        </div>
                    </router-link>
                    <router-link to="/tools/stablecoin-calc" class="tool-card" v-ripple>
                        <div class="tool-icon">🧮</div>
                        <div class="tool-content">
                            <h4>稳定币计算器</h4>
                            <p>快速换算稳定币金额、汇率与简单收益情况。</p>
                            <span class="tool-status">查看工具 →</span>
                        </div>
                    </router-link>
                </div>
</ScrollReveal>
                <!-- <PracticeSection /> -->
            </div>
        </section>
    </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PracticeSection from '../components/PracticeSection.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
</script>

<style scoped>
.hero-link {
    color: var(--accent);
    font-size: 15px;
    margin-top: 16px;
    display: inline-block;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header .tag {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, var(--accent) 0%, #74d4ff 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.section-header h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
}

/* Tools Section */
.tools-section {
    background: transparent;
    padding: 34px 24px 92px;
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}

.tool-card {
    display: flex;
    gap: 20px;
    background: linear-gradient(180deg, rgba(13, 27, 49, 0.8) 0%, rgba(9, 20, 38, 0.86) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 28px;
    padding: 30px;
    transition: all 0.3s ease;
    backdrop-filter: blur(16px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.16);
}

.tool-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-4px);
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.2);
}

.tool-icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3f8dff 0%, #74d4ff 100%);
    border-radius: 18px;
    font-size: 28px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.tool-content {
    flex: 1;
}

.tool-content h4 {
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.tool-content p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 12px;
}

.tool-status {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

.tool-card:hover .tool-status {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .tools-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .tool-card {
        flex-direction: column;
        text-align: center;
    }
}
</style>
