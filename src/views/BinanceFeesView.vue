<template>
    <div class="article-page">
        <!-- Back Button -->
        <div class="back-bar">
            <div class="container-narrow">
                <button class="back-btn" @click="$router.go(-1)">
                    <span>←</span> 返回
                </button>
            </div>
        </div>

        <!-- Article Hero -->
        <section class="article-hero">
            <div class="hero-decoration"></div>
            <div class="container-narrow">
                <div class="article-meta">
                    <span class="tag">🔥 热门</span>
                    <span class="time">📖 阅读时长约 5 分钟</span>
                </div>
                <h2>币安手续费怎么算？</h2>
                <p class="subtitle">先搞清买币、交易到底会扣哪些费用</p>
                <div class="hero-content">
                    <p>先说结论：币安手续费不该只看官网上的一个数字。你真正会碰到的至少有三块——<strong>现货买卖手续费</strong>、<strong>合约交易手续费</strong>、<strong>提币费用</strong>。</p>
                </div>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <div class="intro-section">
                    <p>对偶尔买一次币的人来说，手续费可能只是小成本；但对频繁交易的人来说，它会变成一条<strong>持续吞利润的暗线</strong>。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">01</span> 先分清场景</h3>
                    <p>现货手续费，核心是你买币和卖币时要付多少；合约手续费，核心是开仓、平仓、频繁调仓时会不会不断被吃成本；提币费用，核心则是你把币转到外部钱包或别的平台时，要承担多少链上和平台侧成本。</p>
                    <p>很多人把这三者混成"币安手续费"，于是判断总是失真。</p>

                    <div class="highlight-box">
                        <div class="highlight-icon">💡</div>
                        <p>如果你是新手，最常见的真实路径通常不是"开账户后立刻做复杂交易"，而是先注册、买一点 USDT、可能再换成别的币，最后视情况提到钱包。沿着这条路径看，你会发现：买入一次的现货手续费也许不高，但如果后面还要换币、提币、再提回平台，整条链路上的成本会被累计出来。</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">02</span> 现货 vs 合约：最大的误区</h3>
                    <p>现货和合约的差异，最大的误区不在费率表，而在<strong>使用频率</strong>。现货低频买入、长期持有，手续费存在感往往没那么强；合约因为天然更高频，哪怕费率看着不夸张，开平仓次数一多，成本就会变得非常真实。</p>
                    <p class="key-point">所以别只问"费率多少"，要问<strong>"我会不会高频触发它"</strong>。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">03</span> BNB 抵扣：不是万能优惠</h3>
                    <p>BNB 抵扣是新手最容易误解的点之一。它的价值不是一句"能省钱"就说完，而是要看你到底是不是会长期持续交易。</p>
                    <div class="info-cards">
                        <div class="info-card">
                            <span class="card-icon">❌</span>
                            <p>偶尔买一两次 → 省下的金额有限</p>
                        </div>
                        <div class="info-card">
                            <span class="card-icon">✅</span>
                            <p>交易频率高 → 长期有效降本工具</p>
                        </div>
                    </div>
                    <p>别把它当成万能优惠，更别以为开了以后所有费用都一起降。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">04</span> 提币费用：经常被忽略的坑</h3>
                    <p>很多人买币时精打细算，结果一到提币才发现，不同网络的费用差异很大，甚至会影响你整笔资金到底值不值得转出去。</p>
                    <p>如果金额本来就不大，提币费占比过高，那你就该先想清楚：这笔资产是不是有必要现在提，还是先留在平台更合适。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">05</span> 新手常犯的三个错误</h3>
                    <div class="mistake-list">
                        <div class="mistake-item">
                            <span class="mistake-num">1</span>
                            <div class="mistake-content">
                                <h5>只看宣传页上的最低费率</h5>
                                <p>不看自己是不是普通用户、有没有打开 BNB 抵扣、下单方式会不会影响成本</p>
                            </div>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">2</span>
                            <div class="mistake-content">
                                <h5>把现货、合约、提币放在一起算</h5>
                                <p>最后根本不知道钱花在哪</p>
                            </div>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">3</span>
                            <div class="mistake-content">
                                <h5>只盯买入时省了多少</h5>
                                <p>却不复盘整条路径最后总共花了多少</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="summary-box">
                    <h4>📋 总结</h4>
                    <p>更稳的理解方式是：<strong>先按场景拆成本</strong>，再按频率算影响，再按整条路径复盘。</p>
                    <div class="summary-steps">
                        <span>① 判断自己主要做现货、合约，还是只是买币+提币</span>
                        <span>② 判断自己是偶尔操作还是高频操作</span>
                        <span>③ 把买入、换币、提币全部放一起看</span>
                    </div>
                    <p>你一旦这样看，手续费这件事就不会再只是一个抽象数字，而会变成可以管理的真实成本。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <div class="section-header">
                    <span class="tag">下一步</span>
                    <h3>看完后做什么？</h3>
                </div>
                <div class="next-grid">
                    <router-link to="/guides/binance-register" class="next-card">
                        <div class="card-icon">📝</div>
                        <h5>还没开户？</h5>
                        <p>先看注册流程和入口</p>
                        <span class="card-link">币安注册教程 →</span>
                    </router-link>
                    <router-link to="/guides/buy-usdt" class="next-card">
                        <div class="card-icon">💵</div>
                        <h5>准备入金？</h5>
                        <p>先搞清怎么买 USDT</p>
                        <span class="card-link">如何购买 USDT →</span>
                    </router-link>
                    <router-link to="/guides/usdt-network" class="next-card">
                        <div class="card-icon">🔗</div>
                        <h5>准备提币？</h5>
                        <p>先搞清提币网络选择</p>
                        <span class="card-link">提币网络怎么选 →</span>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Back Button */
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

/* Article Hero */
.article-hero {
    padding: 60px 24px;
    background: linear-gradient(180deg, var(--bg) 0%, var(--primary) 100%);
    position: relative;
    overflow: hidden;
}

.hero-decoration {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(233, 69, 96, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.article-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.article-meta .tag {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
}

.article-meta .time {
    color: var(--text-secondary);
    font-size: 14px;
}

.article-hero h2 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.3;
}

.article-hero .subtitle {
    font-size: 20px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 20px;
}

.hero-content {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}

.hero-content p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
}

.hero-content strong {
    color: var(--accent);
}

/* Article Content */
.article-content {
    padding: 60px 24px;
    background: var(--bg);
}

.intro-section {
    background: linear-gradient(135deg, rgba(233, 69, 96, 0.1) 0%, transparent 100%);
    border-left: 4px solid var(--accent);
    padding: 20px 24px;
    border-radius: 0 12px 12px 0;
    margin-bottom: 40px;
}

.intro-section p {
    font-size: 16px;
    color: var(--text-primary);
    margin: 0;
}

.intro-section strong {
    color: var(--accent);
}

.content-block {
    margin-bottom: 40px;
}

.content-block h3 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text-primary);
}

.step-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
}

.content-block p {
    margin-bottom: 16px;
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
}

.key-point {
    background: var(--card-bg);
    padding: 16px 20px;
    border-radius: 10px;
    color: var(--text-primary) !important;
    font-weight: 500;
    border: 1px solid var(--border);
}

.highlight-box {
    display: flex;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    border-radius: 12px;
    padding: 24px;
    margin: 24px 0;
}

.highlight-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.highlight-box p {
    margin: 0;
    color: var(--text-primary);
    font-size: 15px;
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 20px 0;
}

.info-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
}

.info-card .card-icon {
    font-size: 20px;
}

.info-card p {
    margin: 0;
    font-size: 14px;
    color: var(--text-secondary);
}

.mistake-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 20px 0;
}

.mistake-item {
    display: flex;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
}

.mistake-item:hover {
    border-color: var(--accent);
}

.mistake-num {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(233, 69, 96, 0.2);
    color: var(--accent);
    border-radius: 50%;
    font-weight: 700;
    font-size: 14px;
}

.mistake-content h5 {
    font-size: 15px;
    margin-bottom: 6px;
    color: var(--text-primary);
}

.mistake-content p {
    margin: 0;
    font-size: 13px;
}

.summary-box {
    background: linear-gradient(135deg, var(--primary) 0%, var(--card-bg) 100%);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-top: 40px;
}

.summary-box h4 {
    font-size: 18px;
    margin-bottom: 16px;
    color: var(--accent);
}

.summary-box p {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.summary-box strong {
    color: var(--text-primary);
}

.summary-steps {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
}

.summary-steps span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--text-secondary);
}

.summary-steps span::before {
    content: '✓';
    color: var(--accent);
    font-weight: bold;
}

/* Next Steps */
.next-steps {
    background: var(--primary);
    padding: 60px 24px;
}

.section-header {
    text-align: center;
    margin-bottom: 32px;
}

.section-header .tag {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 12px;
}

.section-header h3 {
    font-size: 24px;
}

.next-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.next-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
}

.next-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.next-card .card-icon {
    font-size: 36px;
    margin-bottom: 12px;
}

.next-card h5 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.next-card p {
    color: var(--text-secondary);
    font-size: 13px;
    margin-bottom: 16px;
}

.next-card .card-link {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

@media (max-width: 768px) {
    .article-hero h2 {
        font-size: 28px;
    }

    .info-cards {
        grid-template-columns: 1fr;
    }

    .next-grid {
        grid-template-columns: 1fr;
    }
}
</style>