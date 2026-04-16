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
                <h1>冷钱包和热钱包区别：适合谁、怎么分层、什么时候该上冷钱包</h1>
            </div>
        </section>

        <section class="guide-content">
            <div class="container-narrow">
                <div class="content-section">
                    <p class="lead">先说结论：冷热钱包不是让你在两个名词里二选一，而是教你把不同用途的资产放进不同风险环境。对大多数普通用户来说，更稳的结构通常是热钱包负责日常交互和小额试错，冷钱包负责长期持有和较大金额隔离。只要把这句话想明白，后面很多选择就不会再拧巴。</p>
                </div>

                <div class="content-section">
                    <h3>先看本质区别</h3>
                    <p>热钱包的私钥或签名能力长期处在联网环境里，优点是方便、快、适合频繁转账和连接网站；代价是暴露面更大，碰到假站、恶意授权、插件污染或设备问题时，更容易直接受影响。</p>
                    <p>冷钱包则把核心签名动作尽量隔离出来，不追求随时随地都方便，而是优先降低远程攻击和高频误操作带来的风险。</p>
                    <p>所以它们对应的不是"谁更高级"，而是"谁更适合什么场景"。如果你每天都要连 dApp、签消息、试新协议、做小额转账，那热钱包几乎不可替代；但如果你有一部分资产是准备长拿、平时不动、也不想天天暴露在各种交互里，那这部分资产就很适合往冷钱包或至少低频钱包里迁。</p>
                    <p>钱包工具的价值，不在名词光环，而在它是否和用途匹配。</p>
                </div>

                <div class="content-section">
                    <h3>什么时候该上冷钱包？</h3>
                    <p>实用判断通常不是看别人有没有，而是看你自己是否出现了几个信号：</p>
                    <ul class="check-list">
                        <li>资产规模已经让你睡不踏实</li>
                        <li>持有周期明显变长</li>
                        <li>你开始经常做链上交互，不想把长期仓位一起带着暴露</li>
                        <li>你愿意认真做助记词备份和恢复演练</li>
                    </ul>
                    <p>只要这几个条件开始出现，冷钱包就不是"炫配置"，而是开始有实际意义。</p>
                </div>

                <div class="content-section">
                    <h3>把钱包当成分层资金账户</h3>
                    <p>热钱包像你日常消费卡，里面放的是随时会用、愿意承担一定操作风险的金额；冷钱包像保险柜，里面放的是你不想因为一次误签、一次假站、一次插件事故就受重创的核心仓位。</p>
                    <p>对普通用户来说，这种分层比追求所谓最强单点安全更现实，因为它既保留了操作效率，也把灾难半径控制住了。</p>
                </div>

                <div class="info-card">
                    <h3>常见误区</h3>
                    <div class="mistakes-grid">
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>觉得所有人一上来就必须买冷钱包，结果自己连基础创建和备份都没走顺</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>觉得买了冷钱包就自动安全，从此不需要管假站、签名和设备环境</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>把冷钱包当日常高频钱包用，什么操作都让它上，最后流程又慢又乱</p>
                        </div>
                        <div class="mistake-item">
                            <span class="mistake-num">✗</span>
                            <p>为了方便，把所有资产都长期堆在一个热钱包里，等于把整仓暴露在同一风险面上</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h3>真正更稳的方案是逐步升级</h3>
                    <p>新手刚开始时，可以先用一个热钱包学习创建、备份、收发和基础交互；当资产规模、使用频率和风险意识都起来后，再把长期部分迁去冷钱包，把热钱包留作日常使用。</p>
                    <p>这个过程里最重要的不是追求设备多专业，而是每一步你都知道这个钱包承担什么角色。</p>
                </div>

                <div class="next-steps">
                    <h3>下一步看什么</h3>
                    <div class="next-grid">
                        <router-link to="/guides/wallet-security" class="next-card">
                            <span class="next-num">01</span>
                            <div class="next-content">
                                <h4>还没把助记词和假站风险搞明白</h4>
                                <p>先回去补钱包安全</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
                        <router-link to="/guides/create-wallet" class="next-card">
                            <span class="next-num">02</span>
                            <div class="next-content">
                                <h4>刚建完钱包的人</h4>
                                <p>先把创建和小额测试流程跑熟</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
                        <router-link to="/guides/usdt-network" class="next-card">
                            <span class="next-num">03</span>
                            <div class="next-content">
                                <h4>准备从交易所往外提资产</h4>
                                <p>把提币网络和到哪一层钱包的路径提前规划好</p>
                            </div>
                            <span class="next-arrow">→</span>
                        </router-link>
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
    margin-bottom: 20px;
}

.mistakes-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
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

.next-steps h3 {
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 20px;
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

@media (max-width: 768px) {
    .guide-hero h1 {
        font-size: 24px;
    }
}
</style>
