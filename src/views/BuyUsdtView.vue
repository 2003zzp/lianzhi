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
            <div class="hero-content">
                <div class="hero-badge">
                    <span class="badge-icon">🔥</span>
                    <span class="badge-text">热门</span>
                </div>
                <h1>如何购买 USDT</h1>
                <p class="hero-subtitle">购买路径、买法区别、买完下一步一次讲清</p>
                <div class="hero-conclusion">
                    <p>先说结论：买 USDT 最容易翻车的不是买入按钮，而是<strong>没先想清楚用什么路径买、买完放哪，下一步是继续买币还是提到钱包</strong>。</p>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="main-content">
            <div class="content-wrapper">
                <!-- Introduction -->
                <div class="intro-block">
                    <p>买 USDT 这件事，真正重要的不是你会不会点"买入"，而是你有没有先把<strong>整条闭环</strong>想清楚——从开户、付款、到账，到买完后继续买币、留在交易所，还是提到钱包。</p>
                    <p class="highlight-text">很多新手不是不会买，而是<strong>买前没规划、买后没承接</strong>，结果一路手忙脚乱。</p>
                </div>

                <!-- Step 1: 用途 -->
                <div class="step-section">
                    <div class="step-header">
                        <span class="step-number">01</span>
                        <h3>先判断你的用途</h3>
                    </div>
                    <p class="step-intro">USDT 本质上更像一个中转资产，你属于哪种？</p>
                    
                    <div class="usage-grid">
                        <div class="usage-card">
                            <div class="usage-icon">📈</div>
                            <h4>继续换别的币</h4>
                        </div>
                        <div class="usage-card">
                            <div class="usage-icon">💼</div>
                            <h4>先把资金停在稳定币里</h4>
                        </div>
                        <div class="usage-card">
                            <div class="usage-icon">👛</div>
                            <h4>准备提到个人钱包或别的平台</h4>
                        </div>
                    </div>

                    <div class="insight-card">
                        <span class="insight-icon">💡</span>
                        <p>你连这件事都还没想清楚，就很容易在路径选择上乱掉。</p>
                    </div>
                </div>

                <!-- Step 2: 购买路径 -->
                <div class="step-section">
                    <div class="step-header">
                        <span class="step-number">02</span>
                        <h3>再看购买路径</h3>
                    </div>
                    <p>对大多数新手，最稳的做法不是一开始就研究太多花活，而是优先走<strong>流程清晰、界面标准、记录完整</strong>的大平台路径。</p>
                    
                    <div class="path-card">
                        <span class="path-icon">📋</span>
                        <p>原因很简单：你至少知道自己现在处在注册、验证、付款、到账还是提币哪个阶段，而不会把几件事搅成一锅。</p>
                    </div>
                </div>

                <!-- Step 3: 买法区别 -->
                <div class="step-section">
                    <div class="step-header">
                        <span class="step-number">03</span>
                        <h3>理解"买法区别"真正差在哪</h3>
                    </div>
                    <p>表面上都是买 USDT，但对新手来说，区别常常体现在：</p>
                    
                    <div class="diff-grid">
                        <div class="diff-card">
                            <span class="diff-icon">⏱️</span>
                            <span class="diff-text">支付确认</span>
                        </div>
                        <div class="diff-card">
                            <span class="diff-icon">📍</span>
                            <span class="diff-text">到账位置</span>
                        </div>
                        <div class="diff-card">
                            <span class="diff-icon">🔄</span>
                            <span class="diff-text">后续操作便利度</span>
                        </div>
                        <div class="diff-card">
                            <span class="diff-icon">💸</span>
                            <span class="diff-text">是否需要马上提币</span>
                        </div>
                    </div>

                    <div class="key-insight">
                        <span class="key-icon">⚡</span>
                        <p>差别不只是<strong>"在哪里买"</strong>，更是<strong>"买完之后能不能无缝接下一步"</strong>。</p>
                    </div>
                </div>

                <!-- Step 4: 买完后 -->
                <div class="step-section">
                    <div class="step-header">
                        <span class="step-number">04</span>
                        <h3>买完之后怎么接</h3>
                    </div>
                    <p>很多人以为买到 USDT 就结束了，实际上这通常只是开始：</p>
                    
                    <div class="scenario-list">
                        <div class="scenario-row">
                            <span class="scenario-icon">📈</span>
                            <div class="scenario-info">
                                <h5>继续买其他币</h5>
                                <p>下一步就是确认现货路径</p>
                            </div>
                        </div>
                        <div class="scenario-row">
                            <span class="scenario-icon">👛</span>
                            <div class="scenario-info">
                                <h5>准备提到钱包</h5>
                                <p>立刻切到地址、网络和提币费的判断</p>
                            </div>
                        </div>
                        <div class="scenario-row">
                            <span class="scenario-icon">🔒</span>
                            <div class="scenario-info">
                                <h5>临时停放交易所</h5>
                                <p>重点变成账户安全和后续风控管理</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 5: 常见错误 -->
                <div class="step-section">
                    <div class="step-header">
                        <span class="step-number">05</span>
                        <h3>新手常见错误</h3>
                    </div>
                    
                    <div class="error-list">
                        <div class="error-row">
                            <span class="error-x">✗</span>
                            <div class="error-content">
                                <h5>买之前没想清用途</h5>
                                <p>买完不知道资产在哪</p>
                            </div>
                        </div>
                        <div class="error-row">
                            <span class="error-x">✗</span>
                            <div class="error-content">
                                <h5>付款时没认真核对</h5>
                                <p>信息填错、金额填错</p>
                            </div>
                        </div>
                        <div class="error-row">
                            <span class="error-x">✗</span>
                            <div class="error-content">
                                <h5>准备提币时才开始问该走哪条链</h5>
                                <p>整条路径断成了几截</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="summary-section">
                    <h4>📋 更稳的买法顺序</h4>
                    <div class="summary-flow">
                        <div class="flow-step">
                            <span class="flow-n">1</span>
                            <span class="flow-text">确认用途</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-step">
                            <span class="flow-n">2</span>
                            <span class="flow-text">账户验证</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-step">
                            <span class="flow-n">3</span>
                            <span class="flow-text">选路径</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-step">
                            <span class="flow-n">4</span>
                            <span class="flow-text">核对位置</span>
                        </div>
                        <span class="flow-arrow">→</span>
                        <div class="flow-step">
                            <span class="flow-n">5</span>
                            <span class="flow-text">决定去向</span>
                        </div>
                    </div>
                    <p class="summary-note">这个顺序一旦固定下来，以后你不管是继续买其他币，还是做提币动作，心里都会稳很多。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-section">
            <div class="content-wrapper">
                <h4 class="next-title">下一步看什么</h4>
                <div class="next-grid">
                    <router-link to="/guides/binance-register" class="next-card">
                        <span class="next-icon">📝</span>
                        <h5>还没开户？</h5>
                        <p>先把注册和安全设置走完</p>
                    </router-link>
                    <router-link to="/guides/usdt-network" class="next-card">
                        <span class="next-icon">🔗</span>
                        <h5>买完准备提币？</h5>
                        <p>去看 USDT 网络和提现</p>
                    </router-link>
                    <router-link to="/guides/binance-fees" class="next-card">
                        <span class="next-icon">💰</span>
                        <h5>打算继续交易？</h5>
                        <p>顺手补一下手续费结构</p>
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
    padding: 16px 24px;
    background: var(--primary);
    border-bottom: 1px solid var(--border);
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-family: inherit;
    transition: all 0.3s ease;
}

.back-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
}

/* Article Hero */
.article-hero {
    padding: 50px 24px 60px;
    background: var(--bg);
    position: relative;
    overflow: hidden;
}

.hero-decoration {
    position: absolute;
    top: -80px;
    right: -80px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(233, 69, 96, 0.12) 0%, transparent 70%);
    border-radius: 50%;
}

.hero-content {
    max-width: 720px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    border-radius: 20px;
    margin-bottom: 20px;
}

.badge-icon {
    font-size: 14px;
}

.badge-text {
    color: white;
    font-size: 13px;
    font-weight: 600;
}

.hero-content h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-primary);
    line-height: 1.3;
}

.hero-subtitle {
    font-size: 17px;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

.hero-conclusion {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px;
}

.hero-conclusion p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
}

.hero-conclusion strong {
    color: var(--accent);
}

/* Main Content */
.main-content {
    padding: 50px 24px;
    background: var(--primary);
}

.content-wrapper {
    max-width: 720px;
    margin: 0 auto;
}

/* Intro Block */
.intro-block {
    margin-bottom: 50px;
}

.intro-block p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 14px;
}

.intro-block .highlight-text {
    font-size: 16px;
    color: var(--text-primary);
    font-weight: 500;
}

.intro-block strong {
    color: var(--accent);
}

/* Step Section */
.step-section {
    margin-bottom: 50px;
}

.step-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
}

.step-header h3 {
    font-size: 22px;
    font-weight: 600;
    color: var(--text-primary);
}

.step-intro {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 18px;
}

/* Usage Grid */
.usage-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 18px;
}

.usage-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px 16px;
    text-align: center;
}

.usage-icon {
    font-size: 32px;
    margin-bottom: 10px;
}

.usage-card h4 {
    font-size: 14px;
    color: var(--text-primary);
    font-weight: 500;
}

/* Insight Card */
.insight-card {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: rgba(233, 69, 96, 0.08);
    border: 1px solid rgba(233, 69, 96, 0.2);
    border-radius: 12px;
    padding: 16px;
}

.insight-icon {
    font-size: 18px;
}

.insight-card p {
    font-size: 14px;
    color: var(--accent);
    margin: 0;
    line-height: 1.5;
}

/* Path Card */
.path-card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px;
}

.path-icon {
    font-size: 22px;
}

.path-card p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
}

/* Diff Grid */
.diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 18px;
}

.diff-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
}

.diff-icon {
    font-size: 20px;
}

.diff-text {
    font-size: 14px;
    color: var(--text-primary);
}

/* Key Insight */
.key-insight {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--card-bg);
    border: 1px solid var(--accent);
    border-radius: 10px;
    padding: 14px 16px;
}

.key-icon {
    font-size: 18px;
}

.key-insight p {
    font-size: 14px;
    color: var(--accent);
    margin: 0;
}

.key-insight strong {
    color: var(--text-primary);
}

/* Scenario List */
.scenario-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.scenario-row {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
}

.scenario-icon {
    font-size: 26px;
}

.scenario-info h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.scenario-info p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

/* Error List */
.error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.error-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
}

.error-x {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 82, 82, 0.15);
    color: #ff5252;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
}

.error-content h5 {
    font-size: 14px;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.error-content p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

/* Summary Section */
.summary-section {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-top: 50px;
}

.summary-section h4 {
    font-size: 17px;
    color: var(--accent);
    margin-bottom: 20px;
}

.summary-flow {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 18px;
}

.flow-step {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: var(--border);
    border-radius: 20px;
}

.flow-n {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
}

.flow-text {
    font-size: 13px;
    color: var(--text-secondary);
}

.flow-arrow {
    color: var(--accent);
    font-size: 16px;
}

.summary-note {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
}

/* Next Section */
.next-section {
    padding: 50px 24px;
    background: var(--bg);
}

.next-title {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 24px;
    text-align: center;
}

.next-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 720px;
    margin: 0 auto;
}

.next-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.next-card:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
}

.next-icon {
    font-size: 32px;
    display: block;
    margin-bottom: 12px;
}

.next-card h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 6px;
}

.next-card p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.next-card .card-link {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 28px;
    }

    .usage-grid {
        grid-template-columns: 1fr;
    }

    .diff-grid {
        grid-template-columns: 1fr;
    }

    .summary-flow {
        flex-direction: column;
        align-items: flex-start;
    }

    .flow-arrow {
        display: none;
    }

    .next-grid {
        grid-template-columns: 1fr;
    }
}
</style>