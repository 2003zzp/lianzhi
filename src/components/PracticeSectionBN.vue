<template>
    <section class="practice">
        <div class="container">
            <div class="section-header">
                <h3>准备实操？先拿好币安入口和粉丝群</h3>
                <p>左边注册交易所，右边扫码进群；需要继续问买币、提币、钱包和安全细节时更顺手。</p>
            </div>
            <div class="practice-grid">
                <div class="practice-card">
                    <h4>📈 币安注册入口</h4>
                    <ul>
                        <li>先注册 - 把账户和安全项先配对</li>
                        <li>再进群 - 有问题继续问，少走弯路</li>
                        <li>按路径看 - 别乱跳，先看买币和提币</li>
                    </ul>
                    <a href="https://accounts.bmwweb.solutions/zh-CN/register?return_to=aHR0cHM6Ly93d3cuYm13d2ViLnNvbHV0aW9ucy96aC1DTi9qb2luP3JlZj1KTkpOSk4&ref=JNJNJN" target="_blank" class="btn btn-primary" style="margin-top: 24px;">币安注册入口 →</a>
                </div>
                <div class="practice-card">
                    <h4>💬 粉丝群</h4>
                    <div class="qr-placeholder">扫码进群</div>
                    <p style="color: var(--text-secondary); font-size: 14px;">适合继续问买币、提币、钱包和安全细节。<br>建议先看注册、买 U、提币和钱包安全，再进群问会更快。</p>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- 
        <section class="practice-section">
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
        </section>
        -->









<style scoped>
.practice {
    background: var(--primary);
}

.practice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}

.practice-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s ease;
}

.practice-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
}

.practice-card h4 {
    font-size: 24px;
    margin-bottom: 24px;
    color: var(--accent);
}

.practice-card ul {
    list-style: none;
    text-align: left;
}

.practice-card li {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 12px;
}

.practice-card li::before {
    content: '✓';
    color: var(--accent);
    font-weight: bold;
}

.practice-card li:last-child {
    border-bottom: none;
}

.qr-placeholder {
    width: 160px;
    height: 160px;
    background: var(--border);
    border-radius: 12px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-size: 14px;
}

@media (max-width: 768px) {
    .practice-grid {
        grid-template-columns: 1fr;
    }
}
</style>
