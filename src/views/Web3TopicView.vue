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
                <span class="hero-badge">Web3</span>
                <h1>什么是 Web3？新手该先建钱包还是先补安全？</h1>
                <p class="hero-desc">USDT 买完后怎么真正进入链上？这页把概念、钱包、安全和资产使用顺成一条入门路径。</p>
            </div>
        </section>

        <section class="intro-section">
            <div class="content-wrapper">
                <p class="intro-text">很多人第一次接触 Web3，会被一堆词直接砸懵：区块链、钱包、助记词、稳定币、链上、DeFi。真正难的往往不是某个词的定义，而是这些东西彼此怎么连起来。</p>
                <p class="intro-highlight">这个专题的目的，不是再给你堆一遍热词，而是把 Web3 入门最常遇到的几个节点放到同一条路上：先理解 Web3 为什么和传统互联网不一样，再理解钱包和资产控制，再补安全和实际使用方式。</p>
            </div>
        </section>

        <section class="solve-section">
            <div class="content-wrapper">
                <div class="solve-grid">
                    <div class="solve-card">
                        <h4>这页解决什么</h4>
                        <p>先把 Web3 的概念、钱包、安全和第一笔链上资金路径放到一条入门顺序里看清楚。</p>
                    </div>
                    <div class="solve-card">
                        <h4>适合谁看</h4>
                        <p>刚听懂一点 Web3、准备开始建钱包，或者想从交易所把资金真正接进链上的新手。</p>
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
                            <h4>先把 Web3 的底层意思搞懂</h4>
                            <p>先看《什么是 Web3》，把 Web3 和传统互联网的差别、用户为什么要自己管理资产和身份先看明白。</p>
                            <router-link to="/guides/what-is-web3" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">2</span>
                        <div class="step-content">
                            <h4>再把第一只钱包建对</h4>
                            <p>接着看《新手怎么创建钱包》，把钱包工具、助记词备份和地址的关系走顺，别一上来就乱装乱建。</p>
                            <router-link to="/guides/create-wallet" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">3</span>
                        <div class="step-content">
                            <h4>然后补安全底线和分层意识</h4>
                            <p>再看《钱包安全入门》，先把助记词、假站、签名和资产分层这些底线补齐。</p>
                            <router-link to="/guides/wallet-security" class="step-link">→ 去看看</router-link>
                        </div>
                    </div>
                    <div class="step-item">
                        <span class="step-num">4</span>
                        <div class="step-content">
                            <h4>最后把资金怎么进入链上看顺</h4>
                            <p>如果你准备真正开始用，接着看《如何购买 USDT》与《USDT 提币网络怎么选》，把买币、提币和链上承接连起来。</p>
                            <router-link to="/guides/buy-usdt" class="step-link">→ 去看看</router-link>
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
                        <p>只记了一堆术语，却没把钱包、资产和使用场景连成一条线。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>把钱包当普通账号理解，忽略助记词和私钥代表的是资产控制权。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>概念刚看懂一点，就急着开始转账、签名和连站，安全底线还没补。</p>
                    </div>
                    <div class="mistake-item">
                        <span class="mistake-num">✗</span>
                        <p>知道自己想进链上，却没先想清楚资金是从交易所来、还是钱包先准备好。</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq-section">
            <div class="content-wrapper">
                <h3 class="section-title">常见问题</h3>
                <div class="faq-list">
                    <div class="faq-item">
                        <h5>Web3 专题适合完全没接触过链上世界的人吗？</h5>
                        <p>适合。这个专题就是给入门用户准备的，会先讲概念，再过渡到钱包、资产和安全，不要求你有很深基础。</p>
                    </div>
                    <div class="faq-item">
                        <h5>第一次看这个专题，建议先从哪几篇开始？</h5>
                        <p>如果还停留在"听过 Web3 但没搞懂"的阶段，先看《什么是 Web3》；如果已经准备开始上手，接着看《新手怎么创建钱包》和《钱包安全入门》；如果已经准备把资金接进链上，再补《如何购买 USDT》和《USDT 提币网络怎么选》。</p>
                    </div>
                    <div class="faq-item">
                        <h5>看完 Web3 专题后，下一步更建议看什么？</h5>
                        <p>如果准备开始实际用钱包，建议继续看钱包安全专题；如果准备从交易所买币进入链上，可以再回看币安专题，把开户、买币、提币和钱包承接补完整。</p>
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
    background: radial-gradient(circle, rgba(123, 44, 191, 0.3) 0%, transparent 70%);
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
    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
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
    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
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
    color: #9d4edd;
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
