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
                <h2>USDT 提币网络怎么选：ERC20、TRC20、BEP20 区别和实战判断</h2>
                <p class="subtitle">先说结论：USDT 提币网络没有所谓的默认最优解。对新手来说，真正正确的顺序永远是先看收款方支持什么，再在可选网络里比较手续费、速度和后续用途。</p>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <p>很多人一上来就盯着哪条链便宜，结果省的是几十块，冒的是整笔资金走错链的风险。</p>

                <h3>理解网络选择</h3>
                <p>最重要的是别把网络选择当成"平台给你的套餐选项"。</p>
                <p>你在币安或别的平台上看到的 ERC20、TRC20、BEP20，本质上是告诉系统：这笔 USDT 要走哪条底层链。链一旦选定，资产就沿着那条路发出去，不会因为名称都叫 USDT 就自动互通。</p>

                <h3>实战判断方法</h3>
                <p>如果你只是做最常见的新手场景——从币安把 USDT 转到钱包或另一个交易所——判断其实可以拆成两步：</p>
                <ul>
                    <li><strong>第一步：</strong>先去收款方页面看支持列表：支持哪条链、有没有最小入账、需不需要 memo</li>
                    <li><strong>第二步：</strong>才回到提币页，在这些已支持的选项里比较成本和便利度</li>
                </ul>
                <p>顺序只要倒过来，翻车概率就会明显升高。</p>

                <div class="highlight-box">
                    <p>从常见特点看：</p>
                    <ul style="margin-top: 12px;">
                        <li><strong>TRC20</strong> — 更像"低成本转账路线"，很多平台和用户会优先用它做日常转 USDT</li>
                        <li><strong>ERC20</strong> — 更像"兼容性路线"，如果你后面要进入以太坊生态、和更多 DeFi 或钱包交互，它往往更通用，但手续费通常也更高</li>
                        <li><strong>BEP20</strong> — 常出现在 BNB Chain 体系里，成本和速度往往也不错，但前提仍然是收款方明确支持</li>
                    </ul>
                    <p style="margin-top: 12px;">别把这些描述理解成推荐名单，它们只是场景差异。</p>
                </div>

                <h3>按场景选择</h3>
                <p>真正实用的判断方法，是按场景去选：</p>
                <ul>
                    <li>只是想把 USDT <strong>低成本转到明确支持 TRC20</strong> 的平台或熟悉的钱包 → TRC20 往往很顺</li>
                    <li>如果后面马上要进<strong>以太坊链上</strong>的协议、钱包或应用 → ERC20 虽然贵，但省的是后续再跨链的麻烦</li>
                    <li>如果你的终点本来就在 <strong>BNB Chain 生态</strong>里 → BEP20 可能更直接</li>
                </ul>
                <p>网络怎么选，永远服务于下一步，而不是服务于表面手续费。</p>

                <h3>新手最容易犯的错误</h3>
                <ul>
                    <li>只看手续费最低的网络，不看对方到底支不支持</li>
                    <li>只看地址格式，觉得地址长得像就可以通用</li>
                    <li>以为提错了之后平台一定能帮你找回</li>
                    <li>买完币才开始研究网络，整个人在提币页面里临时做决定，判断质量通常会直线下降</li>
                </ul>

                <h3>手续费不是两回事</h3>
                <p>还有一个很多人没意识到的点：网络选择和手续费不是两回事，而是一整条提币链路里的连续判断。</p>
                <p>如果你提的是小额，某些网络的手续费占比会非常夸张，这时就要反过来想：</p>
                <ul>
                    <li>这笔钱是不是值得现在转</li>
                    <li>有没有更低成本的支持链</li>
                    <li>或者是否应该先凑够规模再操作</li>
                </ul>
                <p>网络选对了，成本才有比较意义。</p>

                <div class="highlight-box">
                    <p>更稳的操作方式，是在正式提交前做一个微型清单：</p>
                    <ul style="margin-top: 12px;">
                        <li>收款方支持网络确认了吗</li>
                        <li>地址和 memo 对了吗</li>
                        <li>选的网络是不是和收款页一字不差</li>
                        <li>手续费扣完后金额还够吗</li>
                        <li>第一次是不是先做小额测试</li>
                    </ul>
                    <p style="margin-top: 12px;">这个清单看着很土，但真的能拦掉绝大多数低级失误。</p>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <h3>下一步看什么</h3>
                <div class="next-grid">
                    <div class="next-card">
                        <h5>正卡在提币页？</h5>
                        <p>把网络选择放回完整流程里</p>
                        <a href="#">币安提币教程 →</a>
                    </div>
                    <div class="next-card">
                        <h5>终点是个人钱包？</h5>
                        <p>继续补钱包创建和安全</p>
                        <a href="#">创建钱包教程 →</a>
                    </div>
                    <div class="next-card">
                        <h5>还没买 USDT？</h5>
                        <p>先把购买流程走顺</p>
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
