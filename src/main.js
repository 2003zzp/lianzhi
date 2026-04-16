import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/variables.css'
import './styles/effects.css'

const SITE_NAME = '链安堂'
const SITE_URL = 'https://studybtcion.com'
const DEFAULT_SEO = {
    title: `${SITE_NAME} - 加密货币新手学习平台 | 币安、钱包、Web3 入门教程`,
    description: '链安堂是面向加密货币新手的实操学习平台，提供币安注册、买币、提币、钱包创建、Web3 入门等教程，围绕开户、买币、提币、钱包和安全，先把新手最常卡住的路径讲顺。',
    keywords: '加密货币学习,币安教程,钱包安全,Web3入门,USDT购买,区块链学习,加密货币新手,炒币教程',
    image: `${SITE_URL}/assets/banner.png`,
    type: 'article'
}

function ensureMeta(selector, attributes) {
    let el = document.head.querySelector(selector)
    if (!el) {
        el = document.createElement('meta')
        Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value))
        document.head.appendChild(el)
    }
    return el
}

function ensureLink(selector, attributes) {
    let el = document.head.querySelector(selector)
    if (!el) {
        el = document.createElement('link')
        Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value))
        document.head.appendChild(el)
    }
    return el
}

function setMetaByName(name, content) {
    const meta = ensureMeta(`meta[name="${name}"]`, { name })
    meta.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
    const meta = ensureMeta(`meta[property="${property}"]`, { property })
    meta.setAttribute('content', content)
}

function updateSeo(route) {
    const seo = route.meta?.seo || DEFAULT_SEO
    const title = seo.title || DEFAULT_SEO.title
    const description = seo.description || DEFAULT_SEO.description
    const keywords = seo.keywords || DEFAULT_SEO.keywords
    const image = seo.image || DEFAULT_SEO.image
    const type = seo.type || DEFAULT_SEO.type
    const canonicalUrl = new URL(route.path || '/', SITE_URL).toString()

    document.title = title

    setMetaByName('description', description)
    setMetaByName('keywords', keywords)
    setMetaByName('robots', 'index, follow')

    setMetaByProperty('og:type', type)
    setMetaByProperty('og:url', canonicalUrl)
    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:image', image)
    setMetaByProperty('og:site_name', SITE_NAME)
    setMetaByProperty('og:locale', 'zh_CN')

    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', image)

    const canonical = ensureLink('link[rel="canonical"]', { rel: 'canonical' })
    canonical.setAttribute('href', canonicalUrl)
}

// Ripple directive
const rippleDirective = {
    mounted(el) {
        el.classList.add('ripple-container')
        el.addEventListener('click', (e) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const size = Math.max(rect.width, rect.height)

            const wave = document.createElement('span')
            wave.className = 'ripple-wave'
            wave.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x - size / 2}px;
                top: ${y - size / 2}px;
            `
            el.appendChild(wave)
            setTimeout(() => wave.remove(), 600)
        })
    }
}

const app = createApp(App)

app.use(router)
app.directive('ripple', rippleDirective)

router.beforeEach((to, from) => {
    to.meta.depth = to.path.split('/').filter(Boolean).length
    from.meta.depth = from.path.split('/').filter(Boolean).length
})

router.afterEach((to) => {
    updateSeo(to)
})

updateSeo(router.currentRoute.value)

app.mount('#app')
