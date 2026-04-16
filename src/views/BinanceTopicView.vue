<template>
    <div class="topic-page">
        <div class="back-bar">
            <div class="container-narrow">
                <button class="back-btn" @click="$router.go(-1)">
                    <span>←</span> 返回
                </button>
            </div>
        </div>

        <section class="topic-hero">
            <div class="hero-decoration"></div>
            <div class="hero-content">
                <span class="hero-badge">交易所</span>
                <h1>币安专题</h1>
                <p class="hero-desc">注册、买币，手续费、提币到钱包 — 串成一条完整路径</p>
            </div>
        </section>

        <section class="intro-section">
            <div class="content-wrapper">
                <p class="intro-text">很多人搜币安相关内容时，问题看起来很多：怎么注册、怎么买 USDT，手续费高不高，能提现吗、提币网络怎么选。</p>
                <p class="intro-highlight">可这些问题本来就不是分开的，它们其实是一整条使用路径。</p>
            </div>
        </section>

        <section class="solve-section">
            <div class="content-wrapper">
                <div class="solve-grid">
                    <div class="solve-card">
                        <h4>这页解决什么</h4>
                        <p>先把开户注册、买 USDT，手续费、提币和钱包承接放到一条真实路径里看清楚。</p>
                    </div>
                    <div class="solve-card">
                        <h4>适合谁看</h4>
                        <p>准备注册币安、刚开户、第一次买币，或卡在提币和网络选择上的新手。</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="steps-section">
            <div class="content-wrapper">
                <h3 class="section-title">建议阅读顺序</h3>
                <p class="section-desc">按这个顺序读，理解和执行会更顺。</p>
                
                <div class="steps-list">
                    <div class="step-item">
                        <span class="step-num">1</span>
                        <div class="step-content">
                            <h4>先把账户和入口做对</h4>
                            <p>先看《币安注册教程》，把开户、身份验证、2FA 和基础安全项补齐。</p>
                            <router-link to="/guides/binance-register" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">2</span>
                        <div class="step-content">
                            <h4>再把第一笔买币走通</h4>
                            <p>接着看《如何购买 USDT》，先把买入路径、到账位置理顺。</p>
                            <router-link to="/guides/buy-usdt" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">3</span>
                        <div class="step-content">
                            <h4>然后把真实成本算明白</h4>
                            <p>再看《币安手续费详解》，把现货、合约、提币费放到真实场景里理解。</p>
                            <router-link to="/guides/binance-fees" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">4</span>
                        <div class="step-content">
                            <h4>最后补提币和钱包承接</h4>
                            <p>再看《币安可以提现吗》和《USDT 提币网络怎么选》，把资金怎么出去、走哪条链讲明白。</p>
                            <router-link to="/guides/binance-withdrawal" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="priority-section">
            <div class="content-wrapper">
                <h3 class="section-title">优先看这 5 篇</h3>
                <p class="section-desc">最值得先读，最能承接"注册→买币→看成本→提币→接钱包"这条路径的文章。</p>
                
                <div class="priority-grid">
                    <router-link to="/guides/binance-register" class="priority-card">
                        <span class="priority-num">01</span>
                        <span class="priority-title">币安注册教程</span>
                        <span class="priority-arrow">→</span>
                    </router-link>
                    <router-link to="/guides/buy-usdt" class="priority-card">
                        <span class="priority-num">02</span>
                        <span class="priority-title">如何购买 USDT</span>
                        <span class="priority-arrow">→</span>
                    </router-link>
                    <router-link to="/guides/binance-fees" class="priority-card">
                        <span class="priority-num">03</span>
                        <span class="priority-title">币安手续费怎么算</span>
                        <span class="priority-arrow">→</span>
                    </router-link>
                    <router-link to="/guides/binance-withdrawal" class="priority-card">
                        <span class="priority-num">04</span>
                        <span class="priority-title">币安可以提现吗</span>
                        <span class="priority-arrow">→</span>
                    </router-link>
                    <router-link to="/guides/usdt-network" class="priority-card">
                        <span class="priority-num">05</span>
                        <span class="priority-title">USDT 提币网络怎么选</span>
                        <span class="priority-arrow">→</span>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="mistakes-section">
            <div class="content-wrapper">
                <h3 class="section-title">最容易忽略的点</h3>
                <div class="mistakes-grid">
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>刚注册完就急着充值买币，验证和安全设置都没补齐</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>只盯手续费宣传，不看自己到底做现货还是频繁交易</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>把提币、卖币，法币出金全都混叫成提现，容易走错路径</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>买完币才开始临时研究提币网络和钱包支持范围</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq-section">
            <div class="content-wrapper">
                <h3 class="section-title">常见问题</h3>
                <div class="faq-list">
                    <div class="faq-item">
                        <h5>第一次看这个专题，建议先读哪篇？</h5>
                        <p>还没开户 → 先看《币安注册教程》<br>已开户准备买币 → 看《如何购买 USDT》<br>卡在转出和提币 → 看《币安可以提现吗》和《USDT 提币网络怎么选》</p>
                    </div>
                    <div class="faq-item">
                        <h5>什么时候该跳到钱包安全专题？</h5>
                        <p>当你买完币准备提到个人钱包、开始接触地址和网络，或者打算长期自持资产时，就该顺手去看钱包安全专题。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section class="practice-section">
            <div class="content-wrapper">
                <h3 class="section-title">准备实操？先拿好币安入口和粉丝群</h3>
                <div class="practice-grid">
                    <div class="practice-card">
                        <span class="practice-icon">📈</span>
                        <h4>币安注册入口</h4>
                        <p>先注册，把账户和安全项先配对</p>
                        <a href="https://accounts.bmwweb.solutions/zh-CN/register?return_to=aHR0cHM6Ly93d3cuYm13d2ViLnNvbHV0aW9ucy96aC1DTi9qb2luP3JlZj1KTkpOSk4&ref=JNJNJN" target="_blank" class="practice-btn">去注册 →</a>
                    </div>
                    <div class="practice-card">
                        <span class="practice-icon">💬</span>
                        <h4>粉丝群</h4>
                        <p>有问题继续问，少走弯路</p>
                        <div class="qr-placeholder">扫码进群</div>
                    </div>
                </div>
            </div>
        </section> -->
        
        <practice-section-b-n/>
        
    </div>
</template>

<script setup>
import PracticeSectionBN from '../components/PracticeSectionBN.vue';
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

.topic-hero {
    padding: 50px 24px 60px;
    background: var(--bg);
    position: relative;
    overflow: hidden;
}

.hero-decoration {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(240, 185, 11, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.hero-content {
    max-width: 720px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.hero-badge {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, #f0b90b 0%, #f5d76e 100%);
    color: #1a1a2e;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.hero-content h1 {
    font-size: 34px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.hero-desc {
    font-size: 17px;
    color: var(--text-secondary);
}

.content-wrapper {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
}

.intro-section {
    padding: 40px 24px;
    background: var(--primary);
}

.intro-text {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 12px;
    line-height: 1.7;
}

.intro-highlight {
    font-size: 16px;
    color: var(--text-primary);
    font-weight: 500;
}

.solve-section {
    padding: 40px 24px;
    background: var(--bg);
}

.solve-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.solve-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
}

.solve-card h4 {
    font-size: 16px;
    color: var(--accent);
    margin-bottom: 10px;
}

.solve-card p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.steps-section {
    padding: 50px 24px;
    background: var(--primary);
}

.section-title {
    font-size: 22px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.section-desc {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 30px;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.step-item {
    display: flex;
    gap: 20px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px 24px;
}

.step-num {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0b90b 0%, #f5d76e 100%);
    color: #1a1a2e;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
}

.step-content {
    flex: 1;
}

.step-content h4 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 6px;
}

.step-content p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 10px;
    line-height: 1.5;
}

.step-link {
    color: #f0b90b;
    font-size: 14px;
    font-weight: 500;
}

.priority-section {
    background: var(--primary);
}

.priority-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.priority-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    transition: all 0.3s ease;
}

.priority-card:hover {
    border-color: #f0b90b;
    transform: translateX(4px);
}

.priority-num {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(240, 185, 11, 0.15);
    color: #f0b90b;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
}

.priority-title {
    flex: 1;
    font-size: 15px;
    color: var(--text-primary);
}

.priority-arrow {
    color: #f0b90b;
    font-size: 18px;
}

.mistakes-section {
    padding: 50px 24px;
    background: var(--primary);
}

.mistakes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.mistake-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
}

.mistake-num {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 82, 82, 0.15);
    color: #ff5252;
    border-radius: 50%;
    font-size: 12px;
}

.mistake-item p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.faq-section {
    padding: 50px 24px;
    background: var(--bg);
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.faq-item {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}

.faq-item h5 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.faq-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
}

.practice-section {
    padding: 50px 24px;
    background: var(--primary);
}

.practice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.practice-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
}

.practice-icon {
    font-size: 36px;
    display: block;
    margin-bottom: 12px;
}

.practice-card h4 {
    font-size: 17px;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.practice-card p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.practice-btn {
    display: inline-block;
    padding: 10px 24px;
    background: #f0b90b;
    color: #1a1a2e;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
}

.qr-placeholder {
    width: 120px;
    height: 120px;
    background: var(--border);
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-size: 12px;
}

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 26px;
    }

    .solve-grid,
    .mistakes-grid,
    .practice-grid {
        grid-template-columns: 1fr;
    }
}
</style>