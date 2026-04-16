<template>
    <footer>
        <div class="container">
            <p>© 2026 链安堂 · <a href="#">关于</a> · <a href="#">联系我们</a></p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(180deg, rgba(8, 17, 31, 0.4) 0%, rgba(8, 17, 31, 0.92) 100%);
    padding: 40px 24px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

footer p {
    color: var(--text-secondary);
    font-size: 14px;
}

footer a {
    color: var(--accent);
}
</style>
