<template>
    <div class="guide-page">
        <div class="back-bar">
            <div class="container-narrow">
                <button class="back-btn" @click="$router.go(-1)">
                    <span>←</span> 返回
                </button>
            </div>
        </div>

        <section class="guide-hero">
            <div class="container-narrow">
                <div class="guide-badge">钱包安全</div>
                <h1>新手怎么创建钱包：选钱包、创建顺序、助记词备份与下一步</h1>
            </div>
        </section>

        <section class="guide-content">
            <div class="container-narrow">
                <div class="content-section">
                    <p class="lead">先说结论：新手创建钱包，顺序比速度重要。更稳的路径通常是先选对钱包工具，再在干净设备上创建，立刻完成助记词离线备份，最后用小额把收发和连接流程跑通。，很多人不是不会点按钮，而是一开始就把顺序走反了，所以后面越用越乱。</p>
                </div>

                <div class="content-section">
                    <h3>第一步不是下载，而是先判断用途</h3>
                    <p>只是准备接收提币、体验链上、偶尔连 dApp，和打算长期存放较大资产，使用方案不会一样。对大多数新手来说，第一只钱包更适合承担"小额学习和日常交互"的角色，主流、稳定、资料多，比功能花哨更重要。你先把最常见流程学会，比一开始追求最全配置更值。</p>
                </div>

                <div class="content-section">
                    <h3>确定用途后，再选工具和设备</h3>
                    <p>钱包本质上是管理地址和私钥的工具，所以你不只是选一个 App，而是在选一个承载控制权的入口。更稳的原则通常是：</p>
                    <ul class="check-list">
                        <li>下载来源要官方</li>
                        <li>设备环境要尽量干净</li>
                        <li>浏览器插件别装得太杂</li>
                        <li>手机和电脑别在创建前临时折腾来路不明的软件</li>
                    </ul>
                    <p>创建钱包这件事，环境越简单，后面越不容易出怪问题。</p>
                </div>

                <div class="content-section">
                    <h3>创建钱包的正确顺序</h3>
                    <p>真正开始操作时，顺序可以拆成五步：</p>
                    <div class="steps-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <p>确认自己打开的是官方钱包工具</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <p>创建新钱包而不是乱点导入</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <p>抄写助记词并完成离线备份</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">4</span>
                            <p>设置本地密码或解锁方式</p>
                        </div>
                        <div class="step-item">
                            <span class="step-num">5</span>
                            <p>记下钱包地址，确认默认网络和后续用途</p>
                        </div>
                    </div>
                    <p>这五步看着普通，但新手翻车通常就卡在第三步和第五步：助记词没保住，或者根本不知道自己的钱包接下来该接哪条链。</p>
                </div>

                <div class="info-card">
                    <h3>助记词备份要单独拿出来说</h3>
                    <p>因为它不是流程中的一个小步骤，而是整个钱包控制权的底层。你可以暂时不会跨链、不会看 Gas、不会玩复杂协议，但你不能把助记词随手截图、丢进网盘、发给自己聊天窗口。</p>
                    <p class="highlight">更稳的做法是离线手写，必要时分开放置，并确认自己在完全不联网的情况下也能找到它、看懂它、按顺序恢复它。</p>
                </div>

                <div class="content-section">
                    <h3>创建成功后，先做小额测试</h3>
                    <p>更靠谱的下一步，是先做小额测试：</p>
                    <ul class="check-list">
                        <li>看钱包地址有没有记对</li>
                        <li>当前支持哪些网络</li>
                        <li>能不能正常接收一笔小额资产</li>
                        <li>切链是否顺</li>
                        <li>连接一个熟悉的网站时能不能看懂弹窗</li>
                    </ul>
                    <p>你只要认真走完这轮测试，后面无论是接收交易所提币，还是开始做日常交互，心里都会稳很多。</p>
                </div>

                <div class="info-card">
                    <h3>新手最常见的错误</h3>
                    <div class="mistakes-grid">
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>看别人推荐就随便装一个钱包</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>创建时被假站引导去导入助记词</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>刚创建完就拿大额资产进来</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>钱包地址和网络没搞清楚</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>以为本地密码能替代助记词</p>
                        </div>
                    </div>
                    <p class="highlight">尤其最后一点很容易误解：本地密码只是保护当前设备上的钱包入口，不是链上资产的最终恢复钥匙。真正的恢复能力，还是在助记词手里。</p>
                </div>

                <div class="tips-section">
                    <h3>先记住这几点</h3>
                    <div class="tips-list">
                        <div class="tip-item">
                            <span class="tip-icon">💡</span>
                            <p>新手创建钱包，先想用途，再选工具，再做备份，顺序别反。</p>
                        </div>
                        <div class="tip-item">
                            <span class="tip-icon">💡</span>
                            <p>助记词不是附带信息，而是钱包控制权本身，必须单独认真处理。</p>
                        </div>
                        <div class="tip-item">
                            <span class="tip-icon">💡</span>
                            <p>钱包创建成功不等于已经会用，后面还要用小额把收发、切链和连接流程跑通。</p>
                        </div>
                    </div>
                </div>

                <div class="next-steps">
                    <h3>下一步看什么</h3>
                    <div class="next-grid">
                        <router-link to="/guides/wallet-security" class="next-card">
                            <span class="next-num">01</span>
                            <div class="next-content">
                                <h4>先去补钱包安全</h4>
                                <p>确认假站、签名和设备风险这些底层问题</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
                        <router-link to="/guides/cold-vs-hot-wallet" class="next-card">
                            <span class="next-num">02</span>
                            <div class="next-content">
                                <h4>准备长期放资产</h4>
                                <p>接着看冷热钱包分层</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
                        <router-link to="/guides/usdt-network" class="next-card">
                            <span class="next-num">03</span>
                            <div class="next-content">
                                <h4>接收 USDT 或从交易所提币</h4>
                                <p>继续看网络选择和提币检查</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
                    </div>
                </div>

                <div class="topic-card">
                    <h4>这篇文章属于「钱包安全专题」</h4>
                    <p>如果你不想只解决当前一个点，直接回到专题页按路径继续看，会比单篇跳来跳去更顺。</p>
                    <router-link to="/topics/wallet-security" class="btn btn-primary">继续按专题读 →</router-link>
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

.guide-hero {
    padding: 50px 24px;
    background: linear-gradient(180deg, var(--bg) 0%, var(--primary) 100%);
}

.guide-badge {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, #1f4068 0%, #3a5a8a 100%);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
}

.guide-hero h1 {
    font-size: 32px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.3;
}

.guide-content {
    padding: 60px 24px;
    background: var(--bg);
}

.content-section {
    margin-bottom: 36px;
}

.content-section p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 16px;
}

.content-section h3 {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 16px;
    font-weight: 600;
}

.lead {
    font-size: 17px !important;
    color: var(--text-primary) !important;
    font-weight: 500;
    padding: 20px 24px;
    background: var(--card-bg);
    border-left: 4px solid var(--accent);
    border-radius: 0 12px 12px 0;
    margin-bottom: 32px !important;
}

.check-list {
    list-style: none;
    padding: 0;
    margin: 16px 0;
}

.check-list li {
    padding: 12px 0;
    padding-left: 28px;
    position: relative;
    font-size: 15px;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
}

.check-list li:last-child {
    border-bottom: none;
}

.check-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0;
}

.step-item {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 18px;
}

.step-num {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(233, 69, 96, 0.2);
    color: var(--accent);
    border-radius: 50%;
    font-weight: 700;
    font-size: 13px;
}

.step-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
}

.info-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 36px;
}

.info-card h3 {
    font-size: 18px;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.info-card p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 12px;
}

.info-card .highlight {
    padding: 16px;
    background: rgba(233, 69, 96, 0.1);
    border-radius: 8px;
    border-left: 3px solid var(--accent);
    font-size: 14px;
    color: var(--text-primary);
    margin-top: 16px;
}

.mistakes-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
}

.mistake-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
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
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.tips-section {
    margin-bottom: 36px;
}

.tips-section h3 {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.tips-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.tip-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.tip-icon {
    font-size: 18px;
}

.tip-item p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.next-steps {
    margin-bottom: 36px;
}

.next-steps h3 {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.next-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.next-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    transition: all 0.3s ease;
}

.next-card:hover {
    border-color: var(--accent);
    transform: translateX(4px);
}

.next-num {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(233, 69, 96, 0.15);
    color: var(--accent);
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
}

.next-content {
    flex: 1;
}

.next-content h4 {
    font-size: 15px;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.next-content p {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.next-arrow {
    color: var(--accent);
    font-size: 18px;
}

.topic-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    text-align: center;
}

.topic-card h4 {
    font-size: 18px;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.topic-card p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .guide-hero h1 {
        font-size: 24px;
    }
}
</style>
