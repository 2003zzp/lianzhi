const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || window.innerWidth < 768
}

const PARTICLE_COUNT_DESKTOP = 360
const PARTICLE_COUNT_MOBILE = 96
const REPULSION_RADIUS = 90
const REPULSION_STRENGTH = 3.2
const RETURN_SPEED = 0.02
const MAX_VELOCITY = 5
const FRAME_INTERVAL = 1000 / 30
const MAX_DPR = 1.5

export function useParticles(canvasRef, options = {}) {
    const isMobileDevice = isMobile()
    const count = options.count || (isMobileDevice ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP)
    const repulsionRadius = options.repulsionRadius || REPULSION_RADIUS
    const repulsionStrength = options.repulsionStrength || REPULSION_STRENGTH
    const returnSpeed = options.returnSpeed || RETURN_SPEED

    let ctx = null
    let animFrame = null
    let particles = []
    let width = 0
    let height = 0
    let dpr = 1
    let mouseX = -1000
    let mouseY = -1000
    let mouseActive = false
    let isRunning = false
    let lastFrameTime = 0

    class Particle {
        constructor() {
            this.originX = Math.random() * width
            this.originY = Math.random() * height
            this.x = this.originX
            this.y = this.originY
            this.vx = 0
            this.vy = 0
            this.radius = Math.random() * 0.8 + 0.3
            this.opacity = Math.random() * 0.35 + 0.1
        }

        update() {
            const dx = this.x - mouseX
            const dy = this.y - mouseY
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (mouseActive && dist < repulsionRadius && dist > 0) {
                const force = ((repulsionRadius - dist) / repulsionRadius) ** 1.5
                const angle = Math.atan2(dy, dx)
                this.vx += Math.cos(angle) * force * repulsionStrength
                this.vy += Math.sin(angle) * force * repulsionStrength
            } else {
                const ox = this.originX - this.x
                const oy = this.originY - this.y
                this.vx += ox * returnSpeed
                this.vy += oy * returnSpeed
            }

            this.vx *= 0.9
            this.vy *= 0.9

            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
            if (speed > MAX_VELOCITY) {
                this.vx = (this.vx / speed) * MAX_VELOCITY
                this.vy = (this.vy / speed) * MAX_VELOCITY
            }

            this.x += this.vx
            this.y += this.vy
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(233, 69, 96, ${this.opacity})`
            ctx.fill()
        }
    }

    function initCanvas() {
        width = window.innerWidth
        height = window.innerHeight
        dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)

        canvasRef.value.width = Math.floor(width * dpr)
        canvasRef.value.height = Math.floor(height * dpr)
        canvasRef.value.style.width = `${width}px`
        canvasRef.value.style.height = `${height}px`

        ctx = canvasRef.value.getContext('2d', { alpha: true })
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        particles = Array.from({ length: count }, () => new Particle())
    }

    function drawFrame() {
        ctx.clearRect(0, 0, width, height)
        for (const particle of particles) {
            particle.update()
            particle.draw()
        }
    }

    function animate(timestamp = 0) {
        if (!isRunning) return

        if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
            lastFrameTime = timestamp
            drawFrame()
        }

        animFrame = requestAnimationFrame(animate)
    }

    function startLoop() {
        if (isRunning) return
        isRunning = true
        lastFrameTime = 0
        animFrame = requestAnimationFrame(animate)
    }

    function stopLoop() {
        isRunning = false
        if (animFrame) {
            cancelAnimationFrame(animFrame)
            animFrame = null
        }
    }

    function onResize() {
        initCanvas()
    }

    function onMouseMove(e) {
        mouseX = e.clientX
        mouseY = e.clientY
        mouseActive = true
    }

    function onMouseLeave() {
        mouseActive = false
    }

    function onMouseEnter(e) {
        mouseX = e.clientX
        mouseY = e.clientY
        mouseActive = true
    }

    function onVisibilityChange() {
        if (document.hidden) {
            stopLoop()
        } else {
            startLoop()
        }
    }

    function start() {
        if (!canvasRef.value) return
        initCanvas()
        startLoop()
        window.addEventListener('resize', onResize, { passive: true })
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('visibilitychange', onVisibilityChange)
    }

    function stop() {
        stopLoop()
        window.removeEventListener('resize', onResize)
        window.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('visibilitychange', onVisibilityChange)
    }

    return { start, stop }
}
