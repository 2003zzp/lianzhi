<template>
    <div class="home">
        <!-- Hero Section -->
        <HeroSection 
            title="可信路径 / 风险意识 / 新手友好"
            subtitle="把交易所、钱包和 Web3 入门，讲成更好懂的实操路径。"
            description="围绕开户、买币、提币、钱包和安全，先把新手最常卡住的路径讲顺。"
        >
            <div class="hero-btns">
                <router-link to="/guides" class="btn btn-primary">
                    <span>🚀</span> 新手教程
                </router-link>
                <router-link to="/topics" class="btn btn-secondary">
                    <span>🗺️</span> 专题地图
                </router-link>
            </div>
        </HeroSection>

        <!-- Practice Section -->
        <PracticeSection />

        <!-- Brand Signal -->
        <section class="brand-signal">
            <div class="container">
                <div class="section-title">
                    <span class="tag">核心特点</span>
                    <h3>可信感 + 结构化</h3>
                    <p class="desc">面向新手强调安全边界 · 核心方向：交易所 / 钱包 / Web3 · 内容风格：清楚、稳、不乱带节奏</p>
                </div>
                <ScrollReveal :delayStep="120">
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">📋</div>
                            <div class="feature-number">01</div>
                            <h4>先讲顺序</h4>
                            <p>开户、买币、提币、钱包、安全按路径排好。</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🛡️</div>
                            <div class="feature-number">02</div>
                            <h4>先守底线</h4>
                            <p>把最容易踩坑的地方提前说清楚。</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">⚡</div>
                            <div class="feature-number">03</div>
                            <h4>少走弯路</h4>
                            <p>看完知道下一步做什么，不用反复跳页。</p>
                        </div>
                    </div>
</ScrollReveal>
            </div>
        </section>

        <!-- Priority Reads -->
        <section class="priority-reads">
            <div class="container">
                <div class="section-title">
                    <span class="tag">高频问题</span>
                    <div class="header-row">
                        <h3>先看这 4 个高频问题</h3>
                        <router-link to="/guides" class="more-link">看完整专题 →</router-link>
                    </div>
                </div>
                <ScrollReveal :delayStep="100">
                <div class="priority-grid">
                    <router-link to="/guides/binance-fees" class="priority-card" v-ripple>
                        <div class="card-bg-icon">💰</div>
                        <div class="card-content">
                            <span class="card-tag">交易所</span>
                            <h4>币安手续费怎么算？</h4>
                            <p>先搞清买币、交易到底会扣哪些费用。</p>
                            <span class="card-link">看费用路径 →</span>
                        </div>
                    </router-link>
                    <router-link to="/guides/binance-withdrawal" class="priority-card" v-ripple>
                        <div class="card-bg-icon">💸</div>
                        <div class="card-content">
                            <span class="card-tag">交易所</span>
                            <h4>币安可以提现吗？</h4>
                            <p>把提币、卖币、出金三条路径先分清。</p>
                            <span class="card-link">看提币路径 →</span>
                        </div>
                    </router-link>
                    <router-link to="/guides/wallet-security" class="priority-card" v-ripple>
                        <div class="card-bg-icon">🔐</div>
                        <div class="card-content">
                            <span class="card-tag">钱包安全</span>
                            <h4>钱包怎么防盗？</h4>
                            <p>先守住助记词、签名和假站这几道口子。</p>
                            <span class="card-link">补安全底线 →</span>
                        </div>
                    </router-link>
                    <router-link to="/guides/create-wallet-beginner" class="priority-card" v-ripple>
                        <div class="card-bg-icon">👛</div>
                        <div class="card-content">
                            <span class="card-tag">钱包安全</span>
                            <h4>新手怎么创建钱包？</h4>
                            <p>先选对钱包，再把助记词备份做对。</p>
                            <span class="card-link">看建钱包顺序 →</span>
                        </div>
                    </router-link>
                </div>
</ScrollReveal>
            </div>
        </section>

        <!-- Latest Picks -->
        <section class="latest">
            <div class="container">
                <div class="section-title">
                    <span class="tag">推荐阅读</span>
                    <div class="header-row">
                        <h3>最新文章精选</h3>
                        <router-link to="/guides" class="more-link">查看全部 →</router-link>
                    </div>
                </div>
                <ScrollReveal :delayStep="80">
                <div class="latest-grid">
                    <router-link to="/guides/what-is-web3" class="article-card" v-ripple>
                        <div class="card-emoji">🌐</div>
                        <div class="card-body">
                            <span class="number">Guide01</span>
                            <h4>什么是 Web3</h4>
                            <p>从基础概念、核心特征到实际应用，快速理解 Web3 到底是什么。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/binance-register" class="article-card" v-ripple>
                        <div class="card-emoji">📝</div>
                        <div class="card-body">
                            <span class="number">Guide02</span>
                            <h4>币安注册教程</h4>
                            <p>把官方入口、KYC 验证、2FA 安全和注册后第一步动作按顺序走对。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/buy-usdt" class="article-card" v-ripple>
                        <div class="card-emoji">💵</div>
                        <div class="card-body">
                            <span class="number">Guide03</span>
                            <h4>如何购买 USDT</h4>
                            <p>买 USDT 最容易翻车的是没先想清楚用什么路径买、买完放哪。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/exchange-security" class="article-card" v-ripple>
                        <div class="card-emoji">🛡️</div>
                        <div class="card-body">
                            <span class="number">Guide04</span>
                            <h4>交易所安全指南</h4>
                            <p>开启 2FA、识别钓鱼、管理设备，这些才是交易所安全的关键。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/usdt-network" class="article-card" v-ripple>
                        <div class="card-emoji">🔗</div>
                        <div class="card-body">
                            <span class="number">Guide05</span>
                            <h4>USDT 提币网络怎么选</h4>
                            <p>USDT 提币网络没有"默认最优"，先看收款方支持什么，再按手续费去选。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                </div>
</ScrollReveal>
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
/* Section Title */
.section-title {
    text-align: center;
    margin-bottom: 40px;
}

.section-title .tag {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, var(--accent) 0%, #74d4ff 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.section-title h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
}

.section-title .desc {
    color: var(--text-secondary);
    font-size: 16px;
}

.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-row h3 {
    margin-bottom: 0;
}

.more-link {
    color: var(--accent);
    font-size: 15px;
    font-weight: 500;
}

.more-link:hover {
    text-decoration: underline;
}

/* Hero Buttons */
.hero-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 24px;
}

.hero-btns .btn {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Brand Signal */
.brand-signal {
    background: transparent;
    padding: 88px 24px 64px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1080px;
    margin: 0 auto;
}

.feature-card {
    background: linear-gradient(180deg, rgba(14, 28, 50, 0.8) 0%, rgba(10, 20, 39, 0.84) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 28px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(18px);
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.14);
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent), #74d4ff);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-6px);
    box-shadow: 0 22px 46px rgba(0, 0, 0, 0.22);
}

.feature-card:hover::before {
    transform: scaleX(1);
}

.feature-icon {
    font-size: 40px;
    margin-bottom: 16px;
}

.feature-number {
    font-size: 42px;
    font-weight: 700;
    color: var(--accent);
    opacity: 0.15;
    position: absolute;
    top: 16px;
    right: 20px;
}

.feature-card h4 {
    font-size: 20px;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.feature-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
}

/* Priority Reads */
.priority-reads {
    background: transparent;
    padding: 56px 24px 72px;
}

.priority-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.priority-card {
    background: linear-gradient(180deg, rgba(13, 27, 49, 0.78) 0%, rgba(9, 20, 38, 0.84) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 26px;
    padding: 26px;
    transition: all 0.3s ease;
    display: flex;
    gap: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(16px);
}

.priority-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-4px);
    box-shadow: 0 20px 42px rgba(0, 0, 0, 0.2);
}

.card-bg-icon {
    font-size: 48px;
    position: absolute;
    right: 20px;
    bottom: 10px;
    opacity: 0.1;
}

.card-content {
    flex: 1;
    position: relative;
    z-index: 1;
}

.card-tag {
    display: inline-block;
    padding: 4px 10px;
    background: rgba(77, 163, 255, 0.15);
    color: var(--accent);
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 12px;
}

.card-content h4 {
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.card-content p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.5;
}

.card-link {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

/* Latest Picks */
.latest {
    background: transparent;
    padding: 56px 24px 92px;
}

.latest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.article-card {
    background: linear-gradient(180deg, rgba(14, 28, 50, 0.8) 0%, rgba(9, 20, 38, 0.84) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 26px;
    padding: 26px;
    transition: all 0.3s ease;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    backdrop-filter: blur(16px);
}

.article-card:hover {
    border-color: rgba(148, 208, 255, 0.38);
    transform: translateY(-4px);
    box-shadow: 0 20px 42px rgba(0, 0, 0, 0.18);
}

.card-emoji {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--accent) 0%, #74d4ff 100%);
    border-radius: 12px;
    font-size: 24px;
}

.card-body {
    flex: 1;
}

.card-body .number {
    display: inline-block;
    padding: 3px 8px;
    background: var(--border);
    color: var(--text-secondary);
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 8px;
}

.card-body h4 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.card-body p {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.5;
}

.card-arrow {
    flex-shrink: 0;
    color: var(--accent);
    font-size: 20px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
}

.article-card:hover .card-arrow {
    opacity: 1;
    transform: translateX(0);
}

/* Responsive */
@media (max-width: 1024px) {
    .latest-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-btns {
        flex-direction: column;
        align-items: center;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .priority-grid {
        grid-template-columns: 1fr;
    }

    .latest-grid {
        grid-template-columns: 1fr;
    }

    .article-card {
        flex-direction: column;
        text-align: center;
    }

    .card-arrow {
        display: none;
    }
}
</style>