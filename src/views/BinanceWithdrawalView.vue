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
                <h2>币安可以提现吗？</h2>
                <p class="subtitle">提币、提现、出金区别与币安提币流程详解</p>
                <div class="hero-content">
                    <p>先说结论：币安当然可以把资产转出去，但你在问"可以提现吗"时，<strong>最好先把动作说准</strong>。对大多数新手来说，嘴里的"提现"其实可能是三件不同的事。</p>
                </div>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <div class="intro-section">
                    <div class="scene-cards">
                        <div class="scene-card">
                            <span class="scene-icon">💰</span>
                            <span class="scene-text">把币提到钱包</span>
                        </div>
                        <div class="scene-card">
                            <span class="scene-icon">🏦</span>
                            <span class="scene-text">把币转去别的平台</span>
                        </div>
                        <div class="scene-card">
                            <span class="scene-icon">💵</span>
                            <span class="scene-text">卖成法币再出金</span>
                        </div>
                    </div>
                    <p>只要第一步没分清，后面就很容易把<strong>地址、网络、费率和审核</strong>全看混。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">01</span> 两种场景的判断重点</h3>
                    
                    <div class="scenario-card">
                        <div class="scenario-header">
                            <span class="scenario-icon">🌐</span>
                            <h4>场景一：提到链上钱包或其他平台</h4>
                        </div>
                        <p>你真正做的是<strong>提币</strong>，不是传统意义上的法币提现。这个场景里最核心的判断不是银行卡能不能到账，而是：</p>
                        <ul>
                            <li>收款地址对不对</li>
                            <li>网络有没有选一致</li>
                            <li>对方平台最低入账和备注要求是什么</li>
                        </ul>
                    </div>

                    <div class="scenario-card">
                        <div class="scenario-header">
                            <span class="scenario-icon">🏛️</span>
                            <h4>场景二：卖成法币出金</h4>
                        </div>
                        <p>重点又会变成：</p>
                        <ul>
                            <li>身份验证</li>
                            <li>限额</li>
                            <li>银行通道</li>
                            <li>风控审核</li>
                        </ul>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">02</span> 提币前四项检查单</h3>
                    
                    <div class="checklist">
                        <div class="check-item">
                            <span class="check-num">1</span>
                            <div class="check-content">
                                <h5>确认收款方支持的链</h5>
                                <p>比如只支持 TRC20 就不要自作聪明去选 ERC20</p>
                            </div>
                        </div>
                        <div class="check-item">
                            <span class="check-num">2</span>
                            <div class="check-content">
                                <h5>确认地址复制完整</h5>
                                <p>有没有把 memo、tag 或备注类字段漏掉</p>
                            </div>
                        </div>
                        <div class="check-item">
                            <span class="check-num">3</span>
                            <div class="check-content">
                                <h5>确认提币手续费和最低提币额</h5>
                                <p>别转出去才发现扣完手续费后金额太小</p>
                            </div>
                        </div>
                        <div class="check-item">
                            <span class="check-num">4</span>
                            <div class="check-content">
                                <h5>确认账户安全验证状态正常</h5>
                                <p>别等到提交时才发现 2FA、邮箱或设备验证没走通</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">03</span> 更稳的操作顺序</h3>
                    
                    <div class="highlight-box">
                        <div class="highlight-icon">📋</div>
                        <div class="highlight-content">
                            <p><strong>更稳的节奏通常是：</strong></p>
                            <ol>
                                <li>先确定终点</li>
                                <li>再去收款方页面确认支持网络</li>
                                <li>然后回到币安填写地址、选择对应网络、看清手续费和预计到账数量</li>
                                <li>最后才提交</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="warning-box">
                        <span class="warning-icon">⚠️</span>
                        <p>很多人翻车恰恰是把顺序反过来：先在币安页面点来点去，看到一堆网络名字后再临时去问别人，这时人已经容易乱了。</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">04</span> 新手最常卡的几个点</h3>
                    
                    <div class="problem-grid">
                        <div class="problem-card">
                            <span class="problem-icon">📍</span>
                            <h5>地址问题</h5>
                            <p>复制错一位、复制了旧地址、没复制完整、或者压根没核对收款主体</p>
                        </div>
                        <div class="problem-card">
                            <span class="problem-icon">🌐</span>
                            <h5>网络问题</h5>
                            <p>名字看着眼熟就乱选，比如把 BNB Smart Chain、Ethereum、Tron 混在一起</p>
                        </div>
                        <div class="problem-card">
                            <span class="problem-icon">💸</span>
                            <h5>手续费问题</h5>
                            <p>金额太小，转完发现成本占比很高</p>
                        </div>
                        <div class="problem-card">
                            <span class="problem-icon">🔐</span>
                            <h5>审核问题</h5>
                            <p>首次提币、大额提币、设备异常或安全设置刚变更之后</p>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">05</span> 提币提交后</h3>
                    <p>更稳的做法是继续看三步：</p>
                    
                    <div class="steps-flow">
                        <div class="flow-item">
                            <span class="flow-num">1</span>
                            <p>先看币安站内状态是不是已完成或审核中</p>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-item">
                            <span class="flow-num">2</span>
                            <p>再看对应区块浏览器有没有交易哈希和确认数</p>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-item">
                            <span class="flow-num">3</span>
                            <p>最后回到收款方确认是否已经入账</p>
                        </div>
                    </div>
                    
                    <div class="info-box">
                        <span class="info-icon">💡</span>
                        <p>如果链上显示成功但平台还没入账，很多时候只是对方还在等确认数，不一定是丢币。</p>
                    </div>
                </div>

                <div class="summary-box">
                    <h4>📋 总结</h4>
                    <p>更实用的判断方法不是背按钮，而是按场景拆开：</p>
                    <div class="summary-list">
                        <div class="summary-item">
                            <span class="summary-icon">👛</span>
                            <p>提到个人钱包 → 先看钱包有没有准备好、当前在哪条链、自己能不能看懂到账状态</p>
                        </div>
                        <div class="summary-item">
                            <span class="summary-icon">🏦</span>
                            <p>提到其他平台 → 先看对方入金页写的支持链、最小入账、是否需要 memo</p>
                        </div>
                        <div class="summary-item">
                            <span class="summary-icon">💵</span>
                            <p>卖币后法币出金 → 回到法币通道规则、到账时间和实名限制</p>
                        </div>
                    </div>
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
                    <router-link to="/guides/usdt-network" class="next-card">
                        <div class="card-icon">🔗</div>
                        <h5>卡在网络选择？</h5>
                        <p>直接去看 USDT 网络那篇</p>
                        <span class="card-link">USDT 提币网络怎么选 →</span>
                    </router-link>
                    <router-link to="/guides/wallet-security" class="next-card">
                        <div class="card-icon">🔐</div>
                        <h5>还没准备个人钱包？</h5>
                        <p>先补钱包创建</p>
                        <span class="card-link">钱包安全入门 →</span>
                    </router-link>
                    <router-link to="/guides/binance-fees" class="next-card">
                        <div class="card-icon">💰</div>
                        <h5>关心费率怎么影响成本？</h5>
                        <p>接着看手续费</p>
                        <span class="card-link">币安手续费怎么算 →</span>
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
    font-size: 18px;
    color: var(--text-secondary);
    font-weight: 500;
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
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 40px;
}

.scene-cards {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.scene-card {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: var(--border);
    border-radius: 10px;
    font-size: 14px;
}

.scene-icon {
    font-size: 16px;
}

.scene-text {
    color: var(--text-secondary);
}

.intro-section p {
    font-size: 15px;
    color: var(--text-secondary);
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
    margin-bottom: 24px;
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

.scenario-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
}

.scenario-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}

.scenario-icon {
    font-size: 24px;
}

.scenario-header h4 {
    font-size: 17px;
    color: var(--text-primary);
}

.scenario-card p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 12px;
}

.scenario-card strong {
    color: var(--accent);
}

.scenario-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.scenario-card li {
    font-size: 14px;
    color: var(--text-secondary);
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
}

.scenario-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent);
}

/* Checklist */
.checklist {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.check-item {
    display: flex;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    transition: all 0.3s ease;
}

.check-item:hover {
    border-color: var(--accent);
}

.check-num {
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

.check-content h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.check-content p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

/* Highlight Box */
.highlight-box {
    display: flex;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;
}

.highlight-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.highlight-content p {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.highlight-content ol {
    padding-left: 20px;
    margin: 0;
}

.highlight-content li {
    font-size: 14px;
    color: var(--text-secondary);
    padding: 4px 0;
}

.warning-box {
    display: flex;
    gap: 12px;
    background: rgba(255, 193, 7, 0.1);
    border: 1px solid rgba(255, 193, 7, 0.3);
    border-radius: 12px;
    padding: 16px 20px;
}

.warning-icon {
    font-size: 20px;
}

.warning-box p {
    font-size: 14px;
    color: #ffc107;
    margin: 0;
}

/* Problem Grid */
.problem-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.problem-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
}

.problem-card:hover {
    border-color: var(--accent);
}

.problem-icon {
    font-size: 28px;
    margin-bottom: 12px;
}

.problem-card h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.problem-card p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

/* Steps Flow */
.steps-flow {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.flow-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    flex: 1;
    min-width: 200px;
}

.flow-num {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 13px;
}

.flow-item p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.flow-arrow {
    color: var(--accent);
    font-size: 20px;
}

.info-box {
    display: flex;
    gap: 12px;
    background: rgba(233, 69, 96, 0.1);
    border: 1px solid rgba(233, 69, 96, 0.3);
    border-radius: 12px;
    padding: 16px 20px;
}

.info-icon {
    font-size: 20px;
}

.info-box p {
    font-size: 14px;
    color: var(--accent);
    margin: 0;
}

/* Summary Box */
.summary-box {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-top: 40px;
}

.summary-box h4 {
    font-size: 18px;
    color: var(--accent);
    margin-bottom: 16px;
}

.summary-box > p {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.summary-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.summary-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.summary-icon {
    font-size: 20px;
    flex-shrink: 0;
}

.summary-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
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

    .problem-grid {
        grid-template-columns: 1fr;
    }

    .steps-flow {
        flex-direction: column;
    }

    .flow-arrow {
        transform: rotate(90deg);
    }

    .next-grid {
        grid-template-columns: 1fr;
    }
}
</style>