<template>
    <header>
        <div class="header-inner">
            <div class="logo">
                <router-link to="/">
                    <div class="logo-wrapper">
                        <img src="/assets/banner.png" alt="链安堂" class="logo-img">
                        <div class="logo-text">
                            <div class="brand-name">链安堂</div>
                            <span>加密学习平台</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="right">
                <nav>
                    <router-link to="/">首页</router-link>
                    <router-link to="/guides">新手教程</router-link>
                    <router-link to="/topics">专题地图</router-link>
                    <router-link to="/tools">工具</router-link>
                </nav>
                <div class="cta">
                    <a
                        class="cta-link cta-secondary"
                        href="#practice"
                    >进群</a>
                    <a
                        class="cta-link cta-primary"
                        href="https://vlink.cc/jnjnjn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >注册入口</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    background: rgba(8, 17, 31, 0.72);
    backdrop-filter: blur(18px);
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.logo a {
    display: flex;
    align-items: center;
}

.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-img {
    height: 40px;
    width: auto;
    border-radius: 8px;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
}

.logo-text span {
    font-size: 12px;
    color: var(--text-secondary);
}

nav {
    display: flex;
    gap: 32px;
}

nav a {
    font-size: 15px;
    color: var(--text-secondary);
    position: relative;
    font-weight: 600;
}

nav a:hover,
nav a.router-link-active {
    color: var(--accent);
}

nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

nav a:hover::after,
nav a.router-link-active::after {
    width: 100%;
}

.right {
    display: flex;
    align-items: center;
    gap: 18px;
}

.cta {
    display: flex;
    gap: 10px;
    align-items: center;
}

.cta-link {
    height: 38px;
    padding: 0 16px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    transition: all 0.25s ease;
    white-space: nowrap;
}

.cta-primary {
    background: linear-gradient(135deg, #4da3ff 0%, #74d4ff 100%);
    color: #fff;
    border-color: transparent;
}

.cta-primary:hover {
    background: linear-gradient(135deg, #3f8dff 0%, #7ec2ff 100%);
    transform: translateY(-1px);
    box-shadow: 0 10px 26px rgba(77, 163, 255, 0.25);
}

.cta-secondary {
    background: rgba(10, 23, 42, 0.8);
    color: var(--text-primary);
}

.cta-secondary:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
}

@media (max-width: 768px) {
    .header-inner {
        flex-direction: column;
        gap: 16px;
    }

    .right {
        flex-direction: column;
        gap: 14px;
        width: 100%;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }

    .cta {
        width: 100%;
        justify-content: center;
    }
}
</style>
