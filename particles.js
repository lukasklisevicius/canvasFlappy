const particlesArr = []

class Particle{
    constructor(){
        this.x = bird.x
        this.y = bird.y
        this.size = Math.random() * 7 + 3
        this.speedY = (Math.random() * 1) - 0.5
        this.color = `hsla(${hue},100%,50%,0.5)`
    }
    update(){
        this.x -= gameSpeed
        this.y += this.speedY
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2)
        ctx.fill()
    }
}

function handleParticles(){
    particlesArr.unshift(new Particle)
    for(let i = 0; i < particlesArr.length; i++){
        particlesArr[i].update()
        particlesArr[i].draw()
    }

    if(particlesArr.length > 200){
        for(let i = 0;i<20;i++){
            particlesArr.pop(particlesArr[i])
        }
    }
}