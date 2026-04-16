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
                <span class="hero-badge">钱包安全</span>
                <h1>钱包怎么防盗？助记词怎么备份？冷钱包和热钱包怎么分</h1>
                <p class="hero-desc">把新手最容易踩坑的安全问题放到一条线上，先把底线补齐。</p>
            </div>
        </section>

        <section class="intro-section">
            <div class="content-wrapper">
                <p class="intro-text">很多人刚接触链上钱包时，第一反应都是先学怎么创建、怎么转账、怎么连 dApp。但真正更该先补的，往往不是操作，而是安全逻辑。因为钱包和普通账号不一样，它背后连的不是找回密码，而是资产控制权。</p>
                <p class="intro-highlight">这个专题的目的，就是先把最容易出事的几个点放在一起讲清，让你先把安全底线补齐，再去做创建钱包、提币和链上交互这些后续动作。</p>
            </div>
        </section>

        <section class="solve-section">
            <div class="content-wrapper">
                <div class="solve-grid">
                    <div class="solve-card">
                        <h4>这页解决什么</h4>
                        <p>先把助记词、签名、冷热分层和提币网络放到一条路径里看清楚。</p>
                    </div>
                    <div class="solve-card">
                        <h4>适合谁看</h4>
                        <p>准备建钱包、刚开始链上交互、或者已经提币过但还没形成安全习惯的人。</p>
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
                            <h4>先建立安全底线</h4>
                            <p>先看《钱包安全入门》，先把助记词、私钥、假站、乱签名这些最容易翻车的口子补清楚。</p>
                            <router-link to="/guides/wallet-security" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">2</span>
                        <div class="step-content">
                            <h4>再把创建顺序走对</h4>
                            <p>接着看《新手怎么创建钱包》，把选钱包、创建、离线备份和小额测试按顺序走稳。</p>
                            <router-link to="/guides/create-wallet" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">3</span>
                        <div class="step-content">
                            <h4>然后建立资产分层</h4>
                            <p>了解冷钱包和热钱包的区别，决定哪些资产留在热钱包做日常交互，哪些需要隔离。</p>
                            <router-link to="/guides" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">4</span>
                        <div class="step-content">
                            <h4>最后补提币和网络判断</h4>
                            <p>如果你准备从交易所把钱提到钱包，再补《USDT 提币网络怎么选》和《币安可以提现吗》，把网络、地址和到账路径一起确认。</p>
                            <router-link to="/guides/usdt-network" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mistakes-section">
            <div class="content-wrapper">
                <h3 class="section-title">最容易忽略的点</h3>
                <div class="mistakes-grid">
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>把助记词当普通备忘信息处理，截图、存网盘、发聊天工具。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>看到钱包弹窗就签，只想着快，不看授权内容、网站域名和收款网络。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>把长期资产和日常交互全放一个钱包里，图方便但风险集中。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>交易所提币前不先确认钱包支持网络，临到页面才随手选链。</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq-section">
            <div class="content-wrapper">
                <h3 class="section-title">常见问题</h3>
                <div class="faq-list">
                    <div class="faq-item">
                        <h5>第一次接触钱包，应该先看哪篇？</h5>
                        <p>建议先看《钱包安全入门》，先把控制权和常见风险意识建立起来，再看《新手怎么创建钱包》会更稳。</p>
                    </div>
                    <div class="faq-item">
                        <h5>我只是先装个钱包收币，也要先看安全内容吗？</h5>
                        <p>要。因为很多翻车就发生在"只是先装一下"的阶段，比如下到假钱包、助记词备份错、提币网络选错。先补安全意识，后面每一步都会少踩坑。</p>
                    </div>
                    <div class="faq-item">
                        <h5>我已经在币安买完 USDT，下一步看哪篇最衔接？</h5>
                        <p>如果准备提到钱包，先看《USDT 提币网络怎么选》；如果连钱包还没建好，就回头补《新手怎么创建钱包》，然后再看《币安可以提现吗》。</p>
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
    background: radial-gradient(circle, rgba(31, 64, 104, 0.4) 0%, transparent 70%);
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
    background: linear-gradient(135deg, #1f4068 0%, #3a5a8a 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.hero-content h1 {
    font-size: 30px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
    line-height: 1.3;
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
    background: linear-gradient(135deg, #1f4068 0%, #3a5a8a 100%);
    color: white;
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
    color: #3a8adb;
    font-size: 14px;
    font-weight: 500;
}

.mistakes-section {
    padding: 50px 24px;
    background: var(--bg);
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
    background: var(--primary);
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

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 24px;
    }

    .solve-grid,
    .mistakes-grid {
        grid-template-columns: 1fr;
    }
}
</style>
