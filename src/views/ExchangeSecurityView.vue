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
                    <span class="tag">交易所</span>
                    <span class="time">阅读时长约 5 分钟</span>
                </div>
                <h2>交易所安全指南：开启 2FA、识别钓鱼、管理设备</h2>
                <p class="subtitle">很多人觉得把资产放在大交易所就等于安全，但真正的风险，很多时候不在平台本身，而在账户使用习惯。</p>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <p>尤其对普通用户来说，账户层面的安全配置和日常操作，往往比"平台是不是大所"更直接决定资产是否安全。</p>

                <h3>交易所安全最基础的几件事</h3>
                <ul>
                    <li>开启 2FA</li>
                    <li>设置强密码</li>
                    <li>绑定反钓鱼码</li>
                    <li>管理登录设备</li>
                    <li>关注异常提醒</li>
                </ul>
                <p>这些步骤看起来普通，却是绝大多数账户安全的第一道门槛。</p>

                <h3>真正的风险来源</h3>
                <p>很多用户真正出问题，并不是因为黑客突破了交易所系统，而是因为：</p>
                <ul>
                    <li>自己点了钓鱼链接</li>
                    <li>在假页面登录</li>
                    <li>把验证码交给了别人</li>
                    <li>长期忽视异常登录提醒</li>
                </ul>
                <p>也就是说，很多风险是从"行为习惯"开始的。</p>

                <div class="highlight-box">
                    <p>更稳的思路是把交易所账户当成一个资金入口，而不是普通网站账号。</p>
                    <p style="margin-top: 12px;">既然账户里直接关联资产，就要用更高一层的安全标准去管理：</p>
                    <ul style="margin-top: 12px;">
                        <li>重要设备专用</li>
                        <li>密码不复用</li>
                        <li>短信验证不作为唯一依赖</li>
                    </ul>
                </div>

                <h3>资产分层</h3>
                <p>交易所适合承担交易和流动性功能，但不一定适合长期存放所有资产。</p>
                <p>对于中长期不动的大额资产，更稳的做法往往是和冷钱包、热钱包一起做分层管理。</p>

                <div class="highlight-box">
                    <p>所以交易所安全真正重要的，不是记住几个设置按钮，而是建立一套长期可执行的账户安全习惯。</p>
                    <p style="margin-top: 12px;">只要这个习惯形成，很多常见风险都会自然下降。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <h3>下一步看什么</h3>
                <div class="next-grid">
                    <div class="next-card">
                        <h5>还没开户？</h5>
                        <p>先把注册和安全设置走完</p>
                        <router-link to="/guides/binance-register">币安注册教程 →</router-link>
                    </div>
                    <div class="next-card">
                        <h5>想了解钱包安全？</h5>
                        <p>资产分层从钱包安全开始</p>
                        <router-link to="/guides/wallet-security">钱包安全入门 →</router-link>
                    </div>
                    <div class="next-card">
                        <h5>准备买币？</h5>
                        <p>先搞清买完怎么存</p>
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
