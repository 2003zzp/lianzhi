<template>
    <div class="article-page">
        <!-- Back Button -->
        <div class="back-bar">
            <div class="container-narrow">
                <button class="back-btn" @click="$router.go(-1)">← 返回</button>
            </div>
        </div>

        <!-- Article Hero -->
        <section class="article-hero">
            <div class="container-narrow">
                <div class="article-meta">
                    <span class="tag">Web3</span>
                    <span class="time">阅读时长约 5 分钟</span>
                </div>
                <h2>什么是 Web3：从基础概念、核心特征到实际应用</h2>
                <p class="subtitle">Web3 这几年被提得很多，但大多数人第一次接触时，往往只记住了几个关键词：区块链、去中心化、钱包。</p>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <p>问题是，这些词单独看都不算错，放在一起却还是很难让人真正理解 Web3 到底是什么。</p>

                <h3>用更容易理解的话来说</h3>
                <p>Web3 想解决的是：用户在互联网里的资产、身份和数据，不再完全依赖某个平台控制，而是尽可能掌握在自己手里。</p>
                <p>也就是说，你不只是一个平台用户，而更像一个真正拥有数字资产和数字身份的人。</p>

                <h3>传统互联网 vs Web3</h3>
                <p>在传统互联网里，你在平台里的账号、内容和关系链，本质上都寄存在平台规则里；平台一旦改规则、封号或者关闭服务，用户几乎没有太多主动权。</p>
                <p>Web3 想推动的变化，就是让：</p>
                <ul>
                    <li>资产可以链上持有</li>
                    <li>身份可以跨平台使用</li>
                    <li>应用之间能在更开放的基础上协同</li>
                </ul>

                <div class="highlight-box">
                    <p>对普通用户来说，理解 Web3 最好不要从宏大概念入手，而是从实际场景入手。</p>
                    <p style="margin-top: 12px;">比如钱包是什么、链上资产怎么持有、为什么 NFT、稳定币、DeFi 这些东西会出现，它们都比抽象定义更容易让人理解 Web3 的真实含义。</p>
                </div>

                <h3>Web3 不是乌托邦</h3>
                <p>Web3 当然也不是乌托邦。它并不天然代表更简单，很多时候反而意味着：</p>
                <ul>
                    <li>更高的使用门槛</li>
                    <li>更强的安全要求</li>
                    <li>更多自己负责的部分</li>
                </ul>
                <p>你拥有更多控制权的同时，也意味着要承担更多风险和判断责任。</p>

                <div class="highlight-box">
                    <p>所以如果你问 Web3 到底是什么，可以把它理解成一种新的互联网组织方式：</p>
                    <p style="margin-top: 12px;">平台不再是唯一中心，用户对资产、身份和交互拥有更高的主导权。</p>
                    <p style="margin-top: 12px;">理解这件事，比背一堆概念更重要。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <h3>下一步看什么</h3>
                <div class="next-grid">
                    <div class="next-card">
                        <h5>想建钱包？</h5>
                        <p>先搞懂怎么创建钱包</p>
                        <a href="#">创建钱包教程 →</a>
                    </div>
                    <div class="next-card">
                        <h5>想了解资产怎么存放？</h5>
                        <p>先看钱包安全</p>
                        <router-link to="/guides/wallet-security">钱包安全入门 →</router-link>
                    </div>
                    <div class="next-card">
                        <h5>想开始交易？</h5>
                        <p>先了解怎么买 USDT</p>
                        <router-link to="/guides/buy-usdt">如何购买 USDT →</router-link>
                    </div>
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
}

.back-btn {
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
    padding: 60px 24px 40px;
    background: linear-gradient(180deg, var(--bg) 0%, var(--primary) 100%);
    position: relative;
    overflow: hidden;
}

.article-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(circle, rgba(233, 69, 96, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.article-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.article-meta .tag {
    display: inline-block;
    padding: 6px 16px;
    background: var(--accent);
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
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.3;
}

.article-hero .subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Article Content */
.article-content {
    padding: 60px 24px;
    background: var(--bg);
}

.article-content p {
    margin-bottom: 24px;
    font-size: 16px;
    color: var(--text-secondary);
}

.article-content h3 {
    font-size: 22px;
    font-weight: 600;
    margin: 40px 0 20px;
    color: var(--text-primary);
}

.article-content .highlight-box {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    border-radius: 12px;
    padding: 24px;
    margin: 32px 0;
}

.article-content .highlight-box p {
    margin-bottom: 0;
    color: var(--text-primary);
    font-size: 15px;
}

.article-content ul {
    list-style: none;
    margin: 20px 0;
}

.article-content li {
    padding: 12px 0;
    padding-left: 24px;
    position: relative;
    color: var(--text-secondary);
    font-size: 15px;
    border-bottom: 1px solid var(--border);
}

.article-content li:last-child {
    border-bottom: none;
}

.article-content li::before {
    content: '▎';
    position: absolute;
    left: 0;
    color: var(--accent);
}

/* Next Steps */
.next-steps {
    padding: 60px 24px;
    background: var(--primary);
}

.next-steps h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
}

.next-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.next-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
}

.next-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
}

.next-card h5 {
    font-size: 16px;
    margin-bottom: 8px;
}

.next-card p {
    color: var(--text-secondary);
    font-size: 13px;
    margin-bottom: 16px;
}

.next-card a {
    color: var(--accent);
    font-size: 14px;
    font-weight: 500;
}

.next-card a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .article-hero h2 {
        font-size: 28px;
    }

    .next-grid {
        grid-template-columns: 1fr;
    }
}
</style>
