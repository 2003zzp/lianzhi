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
                <h2>新手怎么创建钱包</h2>
                <p class="subtitle">选钱包、创建顺序，助记词备份与下一步</p>
                <div class="hero-content">
                    <p>先说结论：新手创建钱包，<strong>顺序比速度重要</strong>。更稳的路径通常是先选对钱包工具，再在干净设备上创建，立刻完成助记词离线备份，最后用小额把收发和连接流程跑通。</p>
                </div>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <div class="intro-section">
                    <p>很多人不是不会点按钮，而是一开始就把顺序走反了，所以后面越用越乱。</p>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">01</span> 先判断用途</h3>
                    <p>只是准备接收提币、体验链上、偶尔连 dApp，和打算长期存放较大资产，使用方案不会一样。</p>
                    
                    <div class="usage-grid">
                        <div class="usage-card">
                            <span class="usage-icon">📱</span>
                            <h5>小额学习</h5>
                            <p>日常交互、体验链上</p>
                        </div>
                        <div class="usage-card">
                            <span class="usage-icon">💰</span>
                            <h5>长期存储</h5>
                            <p>较大资产、冷钱包分层</p>
                        </div>
                    </div>
                    
                    <div class="tip-box">
                        <span class="tip-icon">💡</span>
                        <p>对大多数新手，第一只钱包更适合承担"小额学习和日常交互"的角色，主流、稳定、资料多，比功能花哨更重要。</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">02</span> 再选工具和设备</h3>
                    <p>钱包本质上是管理地址和私钥的工具，所以你不只是选一个 App，而是在选一个<strong>承载控制权的入口</strong>。</p>
                    
                    <div class="principles">
                        <div class="principle-item">
                            <span class="principle-icon">📥</span>
                            <p>下载来源要官方</p>
                        </div>
                        <div class="principle-item">
                            <span class="principle-icon">💻</span>
                            <p>设备环境要尽量干净</p>
                        </div>
                        <div class="principle-item">
                            <span class="principle-icon">🔌</span>
                            <p>浏览器插件别装得太杂</p>
                        </div>
                    </div>
                    
                    <div class="warning-box">
                        <span class="warning-icon">⚠️</span>
                        <p>创建钱包这件事，环境越简单，后面越不容易出怪问题。</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">03</span> 创建钱包五步走</h3>
                    
                    <div class="create-steps">
                        <div class="create-step">
                            <span class="step-n">1</span>
                            <div class="step-content">
                                <h5>确认官方入口</h5>
                                <p>确认自己打开的是官方钱包工具</p>
                            </div>
                        </div>
                        <div class="create-step">
                            <span class="step-n">2</span>
                            <div class="step-content">
                                <h5>创建新钱包</h5>
                                <p>创建新钱包而不是乱点导入</p>
                            </div>
                        </div>
                        <div class="create-step">
                            <span class="step-n">3</span>
                            <div class="step-content">
                                <h5>备份助记词</h5>
                                <p>抄写助记词并完成离线备份</p>
                            </div>
                        </div>
                        <div class="create-step">
                            <span class="step-n">4</span>
                            <div class="step-content">
                                <h5>设置密码</h5>
                                <p>设置本地密码或解锁方式</p>
                            </div>
                        </div>
                        <div class="create-step">
                            <span class="step-n">5</span>
                            <div class="step-content">
                                <h5>确认信息</h5>
                                <p>记下钱包地址，确认默认网络和后续用途</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">04</span> 助记词备份</h3>
                    <p>助记词备份要单独拿出来说，因为它不是流程中的一个小步骤，而是<strong>整个钱包控制权的底层</strong>。</p>
                    
                    <div class="warning-box danger">
                        <span class="warning-icon">🚨</span>
                        <p>你不能把助记词随手截图、丢进网盘、发给自己聊天窗口。</p>
                    </div>
                    
                    <div class="backup-rules">
                        <div class="backup-item">
                            <span class="backup-icon">✓</span>
                            <p>离线手写</p>
                        </div>
                        <div class="backup-item">
                            <span class="backup-icon">✓</span>
                            <p>必要时分开放置</p>
                        </div>
                        <div class="backup-item">
                            <span class="backup-icon">✓</span>
                            <p>确认自己可以按备份恢复</p>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">05</span> 创建后做什么</h3>
                    <p>创建成功后，别急着默认"钱包已经能用了"。更靠谱的下一步，是先做小额测试：</p>
                    
                    <div class="test-flow">
                        <div class="test-item">
                            <span class="test-num">①</span>
                            <p>看钱包地址有没有记对</p>
                        </div>
                        <div class="test-arrow">→</div>
                        <div class="test-item">
                            <span class="test-num">②</span>
                            <p>当前支持哪些网络</p>
                        </div>
                        <div class="test-arrow">→</div>
                        <div class="test-item">
                            <span class="test-num">③</span>
                            <p>能不能正常接收一笔小额资产</p>
                        </div>
                        <div class="test-arrow">→</div>
                        <div class="test-item">
                            <span class="test-num">④</span>
                            <p>切链是否顺、连接网站能不能看懂弹窗</p>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <h3><span class="step-num">06</span> 新手常见错误</h3>
                    
                    <div class="mistakes-grid">
                        <div class="mistake-card">
                            <span class="mistake-icon">❌</span>
                            <h5>用途没想清就下载</h5>
                            <p>看别人推荐就随便装一个钱包</p>
                        </div>
                        <div class="mistake-card">
                            <span class="mistake-icon">❌</span>
                            <h5>助记词乱放</h5>
                            <p>截图放相册、存网盘，或误以为本地密码可替代助记词</p>
                        </div>
                        <div class="mistake-card">
                            <span class="mistake-icon">❌</span>
                            <h5>创建完就放大额</h5>
                            <p>刚创建完就拿大额资产进来</p>
                        </div>
                        <div class="mistake-card">
                            <span class="mistake-icon">❌</span>
                            <h5>地址和网络没搞清楚</h5>
                            <p>钱包地址和网络没搞清楚就乱用</p>
                        </div>
                    </div>
                    
                    <div class="important-note">
                        <span class="note-icon">🔑</span>
                        <p><strong>重要误解：</strong>本地密码只是保护当前设备上的钱包入口，不是链上资产的最终恢复钥匙。真正的恢复能力，还是在助记词手里。</p>
                    </div>
                </div>

                <div class="summary-box">
                    <h4>📋 总结</h4>
                    <div class="summary-flow">
                        <span class="flow-step">① 想清用途</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-step">② 选工具</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-step">③ 做备份</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-step">④ 小额测试</span>
                    </div>
                    <p class="summary-note">只要认真走完这轮测试，后面无论是接收交易所提币，还是开始做日常交互，心里都会稳很多。</p>
                </div>
            </div>
        </section>

        <!-- Key Points -->
        <section class="key-points">
            <div class="container-narrow">
                <div class="section-header">
                    <span class="tag">核心要点</span>
                    <h3>先记住这几点</h3>
                </div>
                <div class="points-grid">
                    <div class="point-card">
                        <span class="point-icon">1</span>
                        <p>新手创建钱包，先想用途，再选工具，再做备份，顺序别反。</p>
                    </div>
                    <div class="point-card">
                        <span class="point-icon">2</span>
                        <p>助记词不是附带信息，而是钱包控制权本身，必须单独认真处理。</p>
                    </div>
                    <div class="point-card">
                        <span class="point-icon">3</span>
                        <p>钱包创建成功不等于已经会用，后面还要用小额把收发，切链和连接流程跑通。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mistakes -->
        <section class="mistakes">
            <div class="container-narrow">
                <div class="section-header">
                    <span class="tag">避坑指南</span>
                    <h3>新手最容易踩的坑</h3>
                </div>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <span class="mistake-label">坑 1</span>
                        <h5>没想清用途和网络</h5>
                        <p>就随便下载钱包开始创建。</p>
                    </div>
                    <div class="mistake-card">
                        <span class="mistake-label">坑 2</span>
                        <h5>助记词乱放</h5>
                        <p>截图放相册、存网盘，或者误以为本地密码可以替代助记词。</p>
                    </div>
                    <div class="mistake-card">
                        <span class="mistake-label">坑 3</span>
                        <h5>创建完就接大额</h5>
                        <p>不先做小额收发和连接测试。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="faq">
            <div class="container-narrow">
                <div class="section-header">
                    <span class="tag">常见问题</span>
                    <h3>FAQ</h3>
                </div>
                <div class="faq-list">
                    <div class="faq-item">
                        <h5>新手第一步到底该怎么选钱包？</h5>
                        <p>先按用途选，不要按热闹选。只是先体验链上和小额交互，优先考虑主流、口碑稳定、资料多的钱包工具；如果未来要长期放较大资产，再考虑冷钱包分层。</p>
                    </div>
                    <div class="faq-item">
                        <h5>创建钱包前要先准备哪些东西？</h5>
                        <p>至少准备三样：干净可控的设备环境、靠谱的钱包官方下载入口，以及你自己确认可执行的离线助记词备份方式。</p>
                    </div>
                    <div class="faq-item">
                        <h5>助记词备份时最容易犯什么错？</h5>
                        <p>最常见的是截图、存相册，放网盘、记备忘录，或者被网页"验证助记词"骗去输入。底线就是离线、可恢复、别人拿不到。</p>
                    </div>
                    <div class="faq-item">
                        <h5>创建完钱包后，下一步先干什么？</h5>
                        <p>不要急着上大额，也不要急着到处连站。更稳的顺序是先记下钱包地址、确认支持网络，做一笔小额收发测试，再试切链、连接常用网站这些基础动作。</p>
                    </div>
                    <div class="faq-item">
                        <h5>一个钱包能不能同时做长期存储和日常交互？</h5>
                        <p>技术上能，习惯上不建议。更稳妥的做法是从一开始就建立分层意识，不要把所有资产都放一个钱包。</p>
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
                    <router-link to="/guides/wallet-security" class="next-card">
                        <div class="card-icon">🔐</div>
                        <h5>先去补钱包安全</h5>
                        <p>确认假站、签名和设备风险</p>
                        <span class="card-link">钱包安全入门 →</span>
                    </router-link>
                    <a href="#" class="next-card">
                        <div class="card-icon">❄️</div>
                        <h5>准备长期放资产？</h5>
                        <p>看冷热钱包分层</p>
                        <span class="card-link">冷热钱包怎么选 →</span>
                    </a>
                    <router-link to="/guides/usdt-network" class="next-card">
                        <div class="card-icon">🔗</div>
                        <h5>准备从交易所提币？</h5>
                        <p>看网络选择和提币检查</p>
                        <span class="card-link">USDT 提币网络怎么选 →</span>
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

.intro-section p {
    font-size: 15px;
    color: var(--text-secondary);
    margin: 0;
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

.content-block > p {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 16px;
    line-height: 1.7;
}

/* Usage Grid */
.usage-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 16px;
}

.usage-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
}

.usage-icon {
    font-size: 32px;
    margin-bottom: 10px;
}

.usage-card h5 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 6px;
}

.usage-card p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.tip-box {
    display: flex;
    gap: 12px;
    background: rgba(233, 69, 96, 0.1);
    border: 1px solid rgba(233, 69, 96, 0.2);
    border-radius: 12px;
    padding: 16px;
}

.tip-icon {
    font-size: 20px;
}

.tip-box p {
    font-size: 14px;
    color: var(--accent);
    margin: 0;
}

/* Principles */
.principles {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
}

.principle-item {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
}

.principle-icon {
    font-size: 20px;
}

.principle-item p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.warning-box {
    display: flex;
    gap: 12px;
    background: rgba(255, 193, 7, 0.1);
    border: 1px solid rgba(255, 193, 7, 0.3);
    border-radius: 12px;
    padding: 16px;
}

.warning-box.danger {
    background: rgba(255, 82, 82, 0.1);
    border-color: rgba(255, 82, 82, 0.3);
}

.warning-icon {
    font-size: 20px;
}

.warning-box p {
    font-size: 14px;
    color: #ffc107;
    margin: 0;
}

.warning-box.danger p {
    color: #ff5252;
}

/* Create Steps */
.create-steps {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.create-step {
    display: flex;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    transition: all 0.3s ease;
}

.create-step:hover {
    border-color: var(--accent);
}

.step-n {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 14px;
}

.step-content h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.step-content p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

/* Backup Rules */
.backup-rules {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    flex-wrap: wrap;
}

.backup-item {
    flex: 1;
    min-width: 120px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
}

.backup-icon {
    color: var(--accent);
    font-weight: 700;
}

.backup-item p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

/* Test Flow */
.test-flow {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
}

.test-item {
    flex: 1;
    min-width: 180px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
}

.test-num {
    flex-shrink: 0;
    color: var(--accent);
    font-weight: 700;
}

.test-item p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.test-arrow {
    color: var(--accent);
    font-size: 18px;
}

/* Mistakes Grid */
.mistakes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
}

.mistake-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}

.mistake-icon {
    font-size: 24px;
    margin-bottom: 10px;
}

.mistake-card h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 6px;
}

.mistake-card p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.important-note {
    display: flex;
    gap: 12px;
    background: rgba(233, 69, 96, 0.1);
    border: 1px solid rgba(233, 69, 96, 0.3);
    border-radius: 12px;
    padding: 16px;
}

.note-icon {
    font-size: 20px;
}

.important-note p {
    font-size: 14px;
    color: var(--accent);
    margin: 0;
}

.important-note strong {
    color: var(--text-primary);
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
    margin-bottom: 20px;
}

.summary-flow {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.flow-step {
    padding: 8px 16px;
    background: var(--border);
    border-radius: 20px;
    font-size: 14px;
    color: var(--text-secondary);
}

.flow-arrow {
    color: var(--accent);
    font-size: 18px;
}

.summary-note {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
}

/* Sections */
.key-points {
    padding: 60px 24px;
    background: var(--primary);
}

.mistakes {
    padding: 60px 24px;
    background: var(--bg);
}

.faq {
    padding: 60px 24px;
    background: var(--primary);
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

/* Points Grid */
.points-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.point-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s ease;
}

.point-card:hover {
    border-color: var(--accent);
}

.point-icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 14px;
}

.point-card p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

/* Mistakes Grid */
.mistakes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.mistake-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
}

.mistake-label {
    display: inline-block;
    padding: 4px 10px;
    background: rgba(233, 69, 96, 0.2);
    color: var(--accent);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;
}

.mistake-card h5 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.mistake-card p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

/* FAQ List */
.faq-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.faq-item {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
}

.faq-item h5 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.faq-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
}

/* Next Steps */
.next-steps {
    padding: 60px 24px;
    background: var(--primary);
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

    .usage-grid,
    .mistakes-grid {
        grid-template-columns: 1fr;
    }

    .test-flow {
        flex-direction: column;
    }

    .test-arrow {
        transform: rotate(90deg);
    }

    .points-grid,
    .next-grid {
        grid-template-columns: 1fr;
    }

    .summary-flow {
        flex-direction: column;
    }

    .flow-arrow {
        transform: rotate(90deg);
    }
}
</style>
