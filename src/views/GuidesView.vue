<template>
    <div class="guides-page">
        <!-- Hero Section -->
        <section class="guide-hero">
            <div class="container">
                <div class="hero-header">
                    <h1>教程中心</h1>
                    <p class="hero-desc">把高频问题按路径排好，围绕交易所、钱包、安全和 Web3 入门，先把最常卡住的问题顶出来。</p>
                </div>
                <div class="hero-split">
                    <div class="split-left">
                        <div class="entry-label">高频入口</div>
                        <h2 class="entry-title">不想翻列表，就从这里进</h2>
                        <div class="entry-links">
                            <router-link to="/guides/binance-fees" class="entry-link">币安手续费</router-link>
                            <router-link to="/guides/binance-withdrawal" class="entry-link">币安提现</router-link>
                            <router-link to="/guides/wallet-security" class="entry-link">钱包防盗</router-link>
                            <router-link to="/guides/create-wallet" class="entry-link">创建钱包</router-link>
                        </div>
                    </div>
                    <div class="split-right">
                        <router-link to="/topics" class="btn btn-secondary btn-lg">看专题地图 →</router-link>
                    </div>
                </div>
            </div>
        </section>
<PracticeSection />
        <!-- Featured Paths -->
        <section class="featured">
            <div class="container">
                <div class="featured-path">
                    <div class="path-header">
                        <span class="path-tag">Featured Path</span>
                        <h4>币安重点先看</h4>
                    </div>
                    <p class="path-desc">先看手续费和提现路径。</p>
                    <div class="featured-articles">
                        <router-link to="/guides/binance-fees" class="featured-article" v-ripple>
                            <div class="article-header">
                                <span class="label">重点文章 01</span>
                                <span class="icon">📖</span>
                            </div>
                            <h5>币安手续费怎么算？</h5>
                            <p>先搞清买币、交易到底会扣哪些费用。</p>
                            <span class="link-text">看费用路径 →</span>
                        </router-link>
                        <router-link to="/guides/binance-withdrawal" class="featured-article" v-ripple>
                            <div class="article-header">
                                <span class="label">重点文章 02</span>
                                <span class="icon">📖</span>
                            </div>
                            <h5>币安可以提现吗？</h5>
                            <p>把提币、卖币、出金三条路径先分清。</p>
                            <span class="link-text">看提币路径 →</span>
                        </router-link>
                    </div>
                </div>

                <div class="featured-path">
                    <div class="path-header">
                        <span class="path-tag">Featured Path</span>
                        <h4>钱包安全重点先看</h4>
                    </div>
                    <p class="path-desc">先看防盗、建钱包和冷热钱包选择。</p>
                    <div class="featured-articles">
                        <router-link to="/guides/wallet-security" class="featured-article" v-ripple>
                            <div class="article-header">
                                <span class="label">重点文章 01</span>
                                <span class="icon">📖</span>
                            </div>
                            <h5>钱包怎么防盗？</h5>
                            <p>先守住助记词、签名和假站这几道口子。</p>
                            <span class="link-text">补安全底线 →</span>
                        </router-link>
                        <router-link to="/guides/create-wallet" class="featured-article" v-ripple>
                            <div class="article-header">
                                <span class="label">重点文章 02</span>
                                <span class="icon">📖</span>
                            </div>
                            <h5>新手怎么创建钱包？</h5>
                            <p>先选对钱包，再把助记词备份做对。</p>
                            <span class="link-text">看建钱包顺序 →</span>
                        </router-link>
                        <router-link to="/guides/cold-vs-hot-wallet" class="featured-article" v-ripple>
                            <div class="article-header">
                                <span class="label">重点文章 03</span>
                                <span class="icon">📖</span>
                            </div>
                            <h5>冷钱包和热钱包怎么选？</h5>
                            <p>先知道什么该放热钱包，什么值得冷存。</p>
                            <span class="link-text">看资产分层 →</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide List -->
        <section class="guide-list">
            <div class="container">
                <div class="section-header">
                    <h3>新手教程目录</h3>
                    <p>先把这 5 个高频问题看顺，路径会顺很多。</p>
                </div>
                <ScrollReveal :delayStep="80">
                <div class="guide-grid">
                    <router-link to="/guides/what-is-web3" class="guide-card" v-ripple>
                        <div class="card-icon">🌐</div>
                        <div class="card-body">
                            <span class="number">01</span>
                            <h5>什么是 Web3</h5>
                            <p>从基础概念、核心特征到实际应用，快速理解 Web3 到底是什么。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/binance-register" class="guide-card" v-ripple>
                        <div class="card-icon">📝</div>
                        <div class="card-body">
                            <span class="number">02</span>
                            <h5>币安注册教程</h5>
                            <p>把官方入口、KYC 验证、2FA 安全和注册后第一步动作按顺序走对。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/buy-usdt" class="guide-card" v-ripple>
                        <div class="card-icon">💵</div>
                        <div class="card-body">
                            <span class="number">03</span>
                            <h5>如何购买 USDT</h5>
                            <p>买 USDT 最容易翻车的是没先想清楚用什么路径买、买完放哪。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/exchange-security" class="guide-card" v-ripple>
                        <div class="card-icon">🛡️</div>
                        <div class="card-body">
                            <span class="number">04</span>
                            <h5>交易所安全指南</h5>
                            <p>开启 2FA、识别钓鱼、管理设备，这些才是交易所安全的关键。</p>
                        </div>
                        <div class="card-arrow">→</div>
                    </router-link>
                    <router-link to="/guides/usdt-network" class="guide-card" v-ripple>
                        <div class="card-icon">🔗</div>
                        <div class="card-body">
                            <span class="number">05</span>
                            <h5>USDT 提币网络怎么选</h5>
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
import PracticeSection from '../components/PracticeSection.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
</script>

<style scoped>
/* Hero Section */
.guide-hero {
    padding: 72px 24px 76px;
    background: transparent;
    position: relative;
}

.guide-hero::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(77, 163, 255, 0.12) 0%, transparent 70%);
    pointer-events: none;
}

.hero-header {
    text-align: center;
    margin-bottom: 40px;
}

.hero-header h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 12px;
}

.hero-desc {
    font-size: 16px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.hero-split {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(14, 28, 50, 0.82) 0%, rgba(10, 21, 40, 0.88) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 30px;
    padding: 32px 40px;
    backdrop-filter: blur(18px);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
}

.split-left {
    flex: 1;
}

.entry-label {
    font-size: 13px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.entry-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 20px;
}

.entry-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.entry-link {
    padding: 10px 20px;
    background: var(--border);
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.entry-link:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-2px);
}

.split-right {
    flex-shrink: 0;
}

.btn-lg {
    padding: 16px 40px;
    font-size: 16px;
    white-space: nowrap;
}

/* Quick Nav */
.quick-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px 24px 48px;
    background: var(--bg);
}

.quick-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    color: var(--text-secondary);
    font-size: 15px;
    transition: all 0.3s ease;
}

.quick-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.quick-icon {
    font-size: 18px;
}

/* Featured Section */
.featured {
    background: transparent;
    padding: 44px 24px 64px;
}

.featured-path {
    margin-bottom: 48px;
}

.featured-path:last-child {
    margin-bottom: 0;
}

.path-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
}

.path-tag {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, var(--accent) 0%, #74d4ff 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
}

.path-header h4 {
    font-size: 24px;
    font-weight: 600;
}

.path-desc {
    color: var(--text-secondary);
    margin-bottom: 24px;
    font-size: 15px;
}

.featured-articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.featured-article {
    background: linear-gradient(180deg, rgba(13, 27, 49, 0.8) 0%, rgba(9, 20, 38, 0.84) 100%);
    border: 1px solid var(--border);
    border-radius: 22px;
    padding: 24px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(16px);
}

.featured-article:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.featured-article .label {
    display: inline-block;
    padding: 4px 10px;
    background: rgba(77, 163, 255, 0.2);
    color: var(--accent);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
}

.featured-article .icon {
    font-size: 18px;
    opacity: 0.6;
}

.featured-article h5 {
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.featured-article p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 1.5;
    flex: 1;
}

.featured-article .link-text {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

/* Guide List */
.guide-list {
    background: transparent;
    padding: 36px 24px 88px;
}

.guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
}

.guide-card {
    display: flex;
    align-items: center;
    gap: 20px;
    background: linear-gradient(180deg, rgba(13, 27, 49, 0.76) 0%, rgba(9, 20, 38, 0.82) 100%);
    border: 1px solid var(--border-strong);
    border-radius: 26px;
    padding: 26px;
    transition: all 0.3s ease;
    backdrop-filter: blur(16px);
}

.guide-card:hover {
    border-color: var(--accent);
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.card-icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--accent) 0%, #74d4ff 100%);
    border-radius: 14px;
    font-size: 28px;
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

.card-body h5 {
    font-size: 17px;
    margin-bottom: 6px;
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
    font-size: 22px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
}

.guide-card:hover .card-arrow {
    opacity: 1;
    transform: translateX(0);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-header h1 {
        font-size: 28px;
    }

    .hero-split {
        flex-direction: column;
        text-align: center;
        gap: 24px;
        padding: 24px;
    }

    .entry-title {
        font-size: 20px;
    }

    .entry-links {
        justify-content: center;
    }

    .quick-nav {
        gap: 12px;
    }

    .quick-link {
        padding: 10px 16px;
        font-size: 14px;
    }

    .featured-articles {
        grid-template-columns: 1fr;
    }

    .guide-grid {
        grid-template-columns: 1fr;
    }

    .guide-card {
        flex-direction: column;
        text-align: center;
    }

    .card-arrow {
        display: none;
    }
}
</style>