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
                <h2>币安注册教程：注册流程、KYC 验证和开户后下一步一次讲清</h2>
                <p class="subtitle">先说结论：币安注册这件事，真正决定你后面顺不顺的，不是 3 分钟内能不能把账号开出来，而是你有没有把官方入口、注册信息、KYC 验证和安全设置按正确顺序走完。</p>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <p>很多新手不是不会注册，而是太着急，结果刚开完户就把自己送进一连串卡点里。</p>

                <h3>第一步：确认官方入口</h3>
                <p>先别急着填信息，先确认你是不是在官方页面。对交易所来说，这一步不是形式，而是底线。你后面会把邮箱、手机号、密码、验证码甚至身份证明都交给这个入口，如果入口本身不对，后面做得再认真也没意义。</p>

                <div class="highlight-box">
                    <p>确认入口没问题后，注册流程本身通常不复杂：选择邮箱或手机号，设置密码，完成验证码，然后进入账号创建。这里的关键不是按钮怎么点，而是你最好一开始就用自己长期稳定管理的联系方式，不要为了省事随便拿一个平时不怎么看的号码或邮箱凑合。</p>
                </div>

                <h3>第二步：完成 KYC 验证</h3>
                <p>很多新手在这里的误区是：觉得这只是额外流程，可以以后再补。可现实里，KYC 往往直接影响你后面很多功能能不能顺畅使用，包括部分资金相关动作、风控状态和账号稳定性。</p>
                <p>既然你本来就是要长期用这个账户，早点把验证补齐，通常比拖着更省事。</p>

                <h3>第三步：安全设置</h3>
                <p>这一步比很多人想的更重要。2FA、反钓鱼码、设备管理、登录提醒，这些都不该被当成"以后有空再说"。</p>
                <ul>
                    <li>因为币安账户不是普通社区账号，而是未来可能直接承接资金进出的入口</li>
                    <li>你晚一天补安全，风险就多悬着一天</li>
                </ul>

                <h3>第四步：注册后的实际动作</h3>
                <p>大多数新手注册完，不是马上去做复杂交易，而是想先买一点 USDT、熟悉现货界面，或者至少确认后面能不能提币。</p>

                <div class="highlight-box">
                    <p>更合理的路径是：注册完成 → KYC 通过 → 安全项补齐 → 小额测试买入或充值。</p>
                    <p style="margin-top: 12px;">这样做虽然慢一点，但会少掉很多后续返工。</p>
                </div>

                <h3>新手常见卡点</h3>
                <p>基本都集中在顺序问题上：</p>
                <ul>
                    <li>刚注册完就去充值，结果发现验证没过</li>
                    <li>2FA 没开就开始频繁登录换设备，结果风控提醒不断</li>
                    <li>甚至还有人连官方入口都没核实，就急着输入验证码</li>
                </ul>
                <p>看起来每一步都不复杂，错的是整体节奏。</p>

                <div class="highlight-box">
                    <p>这篇注册教程更想给你的不是"页面点击说明"，而是一条可复用的开户样板路径：</p>
                    <p style="margin-top: 12px;">✅ 先确认官方入口<br>
                    ✅ 再完成注册<br>
                    ✅ 再补 KYC<br>
                    ✅ 再补安全<br>
                    ✅ 再做第一笔小额动作</p>
                    <p style="margin-top: 12px;">只要这条线走正，你后面接买币、手续费、提币这些页面都会顺很多。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <h3>下一步看什么</h3>
                <div class="next-grid">
                    <div class="next-card">
                        <h5>注册刚做完？</h5>
                        <p>直接去看怎么买 USDT</p>
                        <router-link to="/guides/buy-usdt">如何购买 USDT →</router-link>
                    </div>
                    <div class="next-card">
                        <h5>已经准备交易？</h5>
                        <p>顺手补一下手续费逻辑</p>
                        <router-link to="/guides/binance-fees">币安手续费怎么算 →</router-link>
                    </div>
                    <div class="next-card">
                        <h5>打算把币转出去？</h5>
                        <p>提前把提现和网络选择看掉</p>
                        <a href="#">USDT 提币网络怎么选 →</a>
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
    background: var(--primary);
    padding: 60px 24px;
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
