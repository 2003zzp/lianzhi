<template>
    <div class="topics-page">
        <!-- Hero Section -->
        <HeroSection 
            title="专题中心"
            description="围绕交易所、钱包、安全与 Web3 建立专题聚合页，方便持续更新与集中阅读。"
            small
        >
            <a href="https://openupbtc.com" target="_blank" class="hero-link">去主站看完整专题与深度内容 →</a>
        </HeroSection>
<PracticeSection />
        <!-- Topics -->
        <section class="topics">
            <div class="container">
                <div class="section-header">
                    <span class="tag">精选专题</span>
                    <h3>按主题搭好的阅读地图</h3>
                </div>
                <ScrollReveal :delayStep="150">
                <div class="topics-grid">
                    <router-link to="/topics/binance" class="topic-card" v-ripple>
                        <div class="topic-visual">
                            <span class="visual-icon">💰</span>
                        </div>
                        <div class="topic-content">
                            <span class="tag">交易所</span>
                            <h4>币安专题</h4>
                            <p class="desc">把"币安手续费怎么算""币安可以提现吗""USDT 怎么买"这些更像真实搜索词的问题放到一起，方便从搜索意图直接切进专题。</p>
                            <div class="keywords">
                                <span class="keyword">币安手续费怎么算？</span>
                                <span class="keyword">币安可以提现吗？</span>
                            </div>
                            <div class="meta-row">
                                <span class="meta"><span class="count">6</span> 篇相关文章</span>
                            </div>
                            <span class="link-main">进入专题 →</span>
                        </div>
                    </router-link>

                    <router-link to="/topics/wallet-security" class="topic-card reverse" v-ripple>
                        <div class="topic-visual">
                            <span class="visual-icon">🔐</span>
                        </div>
                        <div class="topic-content">
                            <span class="tag">钱包安全</span>
                            <h4>钱包安全专题</h4>
                            <p class="desc">先把安全问题看顺，把"钱包怎么防盗""新手怎么创建钱包""冷钱包和热钱包有什么区别"这几类连续搜索问题统一放前面。</p>
                            <div class="keywords">
                                <span class="keyword">钱包怎么防盗？</span>
                                <span class="keyword">新手怎么创建钱包？</span>
                                <span class="keyword">冷钱包和热钱包区别？</span>
                            </div>
                            <div class="meta-row">
                                <span class="meta"><span class="count">6</span> 篇相关文章</span>
                            </div>
                            <span class="link-main">进入专题 →</span>
                        </div>
                    </router-link>

                    <router-link to="/topics/web3" class="topic-card" v-ripple>
                        <div class="topic-visual">
                            <span class="visual-icon">🌐</span>
                        </div>
                        <div class="topic-content">
                            <span class="tag">Web3</span>
                            <h4>Web3 专题</h4>
                            <p class="desc">什么是 Web3？新手该先建钱包还是先补安全？USDT 买完后怎么真正进入链上？这页把概念、钱包、安全和资产使用顺成一条入门路径。</p>
                            <div class="keywords">
                                <span class="keyword">什么是 Web3？</span>
                                <span class="keyword">钱包入门</span>
                                <span class="keyword">链上资产</span>
                            </div>
                            <div class="meta-row">
                                <span class="meta"><span class="count">7</span> 篇相关文章</span>
                            </div>
                            <span class="link-main">进入专题 →</span>
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
}

/* Topics Grid */
.topics {
    background: transparent;
    padding: 34px 24px 92px;
}

.topics-grid {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.topic-card {
    display: flex;
    background: linear-gradient(180deg, rgba(13, 27, 49, 0.82) 0%, rgba(9, 20, 38, 0.9) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 30px;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(18px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}

.topic-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-4px);
    box-shadow: 0 24px 58px rgba(0, 0, 0, 0.22);
}

.topic-card.reverse {
    flex-direction: row-reverse;
}

/* Make router-link behave like block */
a.topic-card {
    display: flex;
    text-decoration: none;
    color: inherit;
}

.topic-visual {
    flex-shrink: 0;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.topic-visual::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.9;
}

.topic-card:nth-child(1) .topic-visual {
    background: linear-gradient(135deg, #f0b90b 0%, #f5d76e 100%);
}

.topic-card:nth-child(2) .topic-visual {
    background: linear-gradient(135deg, #1f4068 0%, #3a5a8a 100%);
}

.topic-card:nth-child(3) .topic-visual {
    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
}

.visual-icon {
    font-size: 56px;
}

.topic-content {
    padding: 32px;
    flex: 1;
}

.topic-content .tag {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(77, 163, 255, 0.2);
    color: var(--accent);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
}

.topic-content h4 {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 600;
}

.topic-content .desc {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 1.6;
}

.topic-content .keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
}

.topic-content .keyword {
    padding: 5px 12px;
    background: var(--border);
    border-radius: 20px;
    font-size: 12px;
    color: var(--text-secondary);
}

.meta-row {
    margin-bottom: 16px;
}

.topic-content .meta {
    color: var(--text-secondary);
    font-size: 14px;
}

.topic-content .meta .count {
    color: var(--accent);
    font-weight: 700;
    font-size: 18px;
}

.topic-content .link-main {
    display: inline-block;
    padding: 12px 24px;
    background: var(--accent);
    color: white;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.topic-content .link-main:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(77, 163, 255, 0.3);
}

@media (max-width: 768px) {
    .topic-card,
    .topic-card.reverse {
        flex-direction: column;
    }

    .topic-visual {
        width: 100%;
        height: 100px;
    }

    .visual-icon {
        font-size: 40px;
    }
}
</style>