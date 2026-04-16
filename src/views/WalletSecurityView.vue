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
                    <span class="tag">钱包安全</span>
                    <span class="time">阅读时长约 5 分钟</span>
                </div>
                <h2>钱包安全入门：助记词、假站、签名授权与设备安全全流程</h2>
                <p class="subtitle">先说结论：钱包安全别一上来就想得太玄，真正最先该防的就三件事——助记词别泄露、假站别进去、签名前别闭眼点。</p>
            </div>
        </section>

        <!-- Article Content -->
        <section class="article-content">
            <div class="container-narrow">
                <p>这三关守不住，你后面就算知道冷热钱包、Gas、跨链这些词，也很可能在一次低级失误里把前面所有努力清空。</p>

                <h3>为什么先讲这三件事？</h3>
                <p>因为它们对应的是三种最常见、也最致命的失控方式：</p>
                <ul>
                    <li>助记词和私钥一旦外泄，等于控制权直接交人</li>
                    <li>假站和假插件会把你带进错误入口，让你在毫无防备时交出信息或权限</li>
                    <li>乱签名和乱授权则更隐蔽，看起来只是确认一个弹窗，实际上可能已经给了别人长期动你资产的能力</li>
                </ul>

                <h3>第一步：保助记词</h3>
                <p>创建钱包时看到的助记词，不是备份提示而已，而是钱包真正的底层钥匙。</p>
                <p>最稳的做法是：</p>
                <ul>
                    <li>离线手写</li>
                    <li>可恢复验证</li>
                    <li>分开放置</li>
                    <li>谁都别拍照，谁都别上传，谁都别帮你"保管"</li>
                </ul>
                <p>只要有人、网站、客服或插件要你输入助记词，默认就当高风险处理。</p>

                <h3>第二步：防假站和假入口</h3>
                <p>把假站和假入口当成日常风险，而不是极端案例。</p>
                <p>常见翻车路径：</p>
                <ul>
                    <li>搜索引擎广告点错</li>
                    <li>群里链接点快了</li>
                    <li>浏览器收藏夹没整理</li>
                    <li>安装了名字很像的假插件</li>
                    <li>被"空投领取""钱包升级""安全验证"这些话术催着走</li>
                </ul>
                <p>更稳的习惯是自己保存官方入口，重要站点只从收藏夹或项目官方公告进入，不从临时搜索结果起步。</p>

                <h3>第三步：签名和授权</h3>
                <p>链上世界里，最危险的不一定是明显的转账按钮，而是你没看懂却照样点了确认的签名请求。</p>
                <p>尤其是授权类操作，看起来像是为了"方便下次使用"，实际上可能给了合约持续调动某类资产的权限。</p>
                <p>对新手的朴素规则：</p>
                <ul>
                    <li>看不懂就先停</li>
                    <li>金额异常就先停</li>
                    <li>域名不熟就先停</li>
                    <li>第一次交互就先用小额钱包</li>
                </ul>

                <h3>设备安全也得一起补</h3>
                <p>很多事故并不是钱包本身失守，而是设备把你拖下水：</p>
                <ul>
                    <li>浏览器装太多插件</li>
                    <li>电脑长期不更新</li>
                    <li>下载所谓脚本工具</li>
                    <li>剪贴板地址被篡改</li>
                    <li>在公用设备上临时登录钱包</li>
                </ul>
                <p>这些看起来和链上没直接关系，但最后都会落到同一个结果——你以为自己在做正确操作，其实环境已经被人改写了。</p>

                <h3>资产分层</h3>
                <p>别把所有资产都放一个高频使用的钱包里，尤其不要让长期持有资金天天暴露在连接网站、签名、试新项目的环境里。</p>
                <p>更实用的结构：</p>
                <ul>
                    <li><strong>交互钱包</strong> — 负责小额高频动作</li>
                    <li><strong>长期钱包</strong> — 尽量减少联网暴露</li>
                </ul>
                <p>这样就算某次交互翻车，损失范围也不会一下子把你整仓带走。</p>

                <div class="highlight-box">
                    <p>安全这件事很少靠一次"聪明"解决，更多靠你愿不愿意把这些笨动作长期执行。</p>
                </div>
            </div>
        </section>

        <!-- Key Points -->
        <section class="key-points">
            <div class="container-narrow">
                <h3>先记住这几点</h3>
                <div class="points-grid">
                    <div class="point-card">
                        <div class="point-icon">1</div>
                        <p>钱包安全先守助记词、假站、签名授权这三关，优先级不要搞反。</p>
                    </div>
                    <div class="point-card">
                        <div class="point-icon">2</div>
                        <p>安全不是买个工具就结束，而是创建、入口、设备、分层一起做对。</p>
                    </div>
                    <div class="point-card">
                        <div class="point-icon">3</div>
                        <p>真正能救你的，通常是离线备份、官方入口、小额测试这些笨办法。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mistakes -->
        <section class="mistakes">
            <div class="container-narrow">
                <h3>新手最容易踩的坑</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <h5>误区 1</h5>
                        <p>把助记词截图、存云盘、发聊天工具，等于主动把控制权送出去。</p>
                    </div>
                    <div class="mistake-card">
                        <h5>误区 2</h5>
                        <p>从搜索广告、群链接、假插件入口进入钱包场景，以为页面像就是真的。</p>
                    </div>
                    <div class="mistake-card">
                        <h5>误区 3</h5>
                        <p>看到钱包弹窗就签，不看域名、不看授权范围，也不做钱包分层。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Steps -->
        <section class="steps">
            <div class="container-narrow">
                <h3>更稳的实操顺序</h3>
                <div class="steps-list">
                    <div class="step-item">
                        <div class="step-num">1</div>
                        <p>先把助记词做成离线备份，并确认自己真的能按备份恢复。</p>
                    </div>
                    <div class="step-item">
                        <div class="step-num">2</div>
                        <p>常用站点只走自己保存的官方入口，别临时搜、临时点。</p>
                    </div>
                    <div class="step-item">
                        <div class="step-num">3</div>
                        <p>把长期资产钱包和日常交互钱包拆开，新站先用小额钱包测试。</p>
                    </div>
                    <div class="step-item">
                        <div class="step-num">4</div>
                        <p>定期检查设备环境、浏览器插件和历史授权，别让旧风险一直挂着。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="faq">
            <div class="container-narrow">
                <h3>常见问题</h3>
                <div class="faq-list">
                    <div class="faq-item">
                        <h5>钱包安全最先该防的到底是什么？</h5>
                        <p>优先级通常很清楚：第一是助记词和私钥不能泄露，第二是别进假站、假插件、假客服链路，第三是签名前必须看懂自己在授权什么。先守这三关，比一开始研究复杂工具更重要。</p>
                    </div>
                    <div class="faq-item">
                        <h5>助记词到底怎么备份才算相对稳？</h5>
                        <p>核心是离线、可恢复、别人拿不到。最基础做法是手写多份，分开放在你自己可控的位置；不要截图、不要存网盘、不要发聊天工具，也不要输入到任何网页"帮你验证"。</p>
                    </div>
                    <div class="faq-item">
                        <h5>怎么判断一个网站是不是假站？</h5>
                        <p>先看入口是不是你自己保存的官方链接，其次看域名拼写、证书、页面是否突然要求你导入助记词或盲签，再看社群和搜索结果是不是广告钓鱼位。别靠感觉，靠固定检查动作。</p>
                    </div>
                    <div class="faq-item">
                        <h5>签名和授权为什么比转账更容易让人忽略？</h5>
                        <p>因为很多签名动作表面上不直接显示"转出资产"，但它可能授予合约长期支配权限，或者确认一笔你没真正看懂的操作。新手最容易在"只是点个确认"这里把风险放进来。</p>
                    </div>
                    <div class="faq-item">
                        <h5>设备安全和钱包安全是什么关系？</h5>
                        <p>钱包再靠谱，设备环境脏了也会拖后腿。浏览器插件混乱、系统长期不更新、下载来源不明的软件、剪贴板劫持木马，这些都可能把本来正确的操作变成事故。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Next Steps -->
        <section class="next-steps">
            <div class="container-narrow">
                <h3>下一步看什么</h3>
                <div class="next-grid">
                    <div class="next-card">
                        <h5>还没建钱包？</h5>
                        <p>先看创建流程</p>
                        <a href="#">创建钱包教程 →</a>
                    </div>
                    <div class="next-card">
                        <h5>已经开始存放资产？</h5>
                        <p>继续看冷热钱包分层</p>
                        <a href="#">冷热钱包怎么选 →</a>
                    </div>
                    <div class="next-card">
                        <h5>准备从交易所提币？</h5>
                        <p>把提币检查清单补上</p>
                        <router-link to="/guides/usdt-network">USDT 提币网络怎么选 →</router-link>
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

/* Key Points */
.key-points {
    padding: 60px 24px;
    background: var(--primary);
}

.key-points h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
}

.points-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.point-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
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
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
}

/* Mistakes */
.mistakes {
    padding: 60px 24px;
    background: var(--bg);
}

.mistakes h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
}

.mistakes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.mistake-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
}

.mistake-card h5 {
    color: var(--accent);
    font-size: 16px;
    margin-bottom: 12px;
}

.mistake-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
}

/* Steps */
.steps {
    padding: 60px 24px;
    background: var(--primary);
}

.steps h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
}

.steps-list {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.step-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}

.step-num {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a9b 100%);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 16px;
}

.step-item p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.5;
}

/* FAQ */
.faq {
    padding: 60px 24px;
    background: var(--bg);
}

.faq h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
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
    padding: 24px;
}

.faq-item h5 {
    color: var(--accent);
    font-size: 16px;
    margin-bottom: 12px;
}

.faq-item p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
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

    .points-grid,
    .mistakes-grid,
    .next-grid {
        grid-template-columns: 1fr;
    }
}
</style>
