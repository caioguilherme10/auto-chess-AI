// Confetti animation for victory screen
class Confetti {
    constructor() {
        this.particles = [];
        this.colors = [
            '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
            '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', 
            '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
            '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
        ];
        this.shapes = ['circle', 'square', 'triangle'];
        this.animationId = null;
    }

    createParticles(count = 200) {
        // Clear existing particles
        this.particles = [];
        
        // Create new particles
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * -window.innerHeight,
                size: Math.random() * 10 + 5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                shape: this.shapes[Math.floor(Math.random() * this.shapes.length)],
                speedY: Math.random() * 3 + 1,
                speedX: Math.random() * 2 - 1,
                spin: Math.random() * 0.2 - 0.1,
                angle: Math.random() * 360
            });
        }
    }

    draw(canvas) {
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.particles.forEach(particle => {
            ctx.save();
            ctx.fillStyle = particle.color;
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.angle * Math.PI / 180);

            switch (particle.shape) {
                case 'circle':
                    ctx.beginPath();
                    ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'square':
                    ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
                    break;
                case 'triangle':
                    ctx.beginPath();
                    ctx.moveTo(0, -particle.size / 2);
                    ctx.lineTo(particle.size / 2, particle.size / 2);
                    ctx.lineTo(-particle.size / 2, particle.size / 2);
                    ctx.closePath();
                    ctx.fill();
                    break;
            }

            ctx.restore();
        });
    }

    update() {
        this.particles.forEach(particle => {
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.angle += particle.spin;

            // Reset particles that fall off the screen
            if (particle.y > window.innerHeight + particle.size) {
                particle.y = Math.random() * -100;
                particle.x = Math.random() * window.innerWidth;
            }
        });
    }

    start(canvas) {
        if (!canvas) return;
        
        // Set canvas size to window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Create particles
        this.createParticles();
        
        // Animation loop
        const animate = () => {
            this.update();
            this.draw(canvas);
            this.animationId = requestAnimationFrame(animate);
        };
        
        animate();
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Export the Confetti class
window.Confetti = Confetti;