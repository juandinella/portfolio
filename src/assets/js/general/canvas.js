function canvas () {
  const canvas = document.getElementById('canvas')
  const c = canvas.getContext('2d')

  let mouseX
  let mouseY

  let canvasWidth = canvas.width = window.innerWidth
  let canvasHeight = canvas.height = window.innerHeight

  // particles amount
  const count = 600

  // Particles min size
  const minSize = 1

  // Particles max size
  const maxSize = 4

  // Size when max is on
  const radiusMax = 30

  // size when cursor is on
  const cursorSize = 60

  // Velocity in on
  const increase = 6

  // Max velocity
  const maxVel = 0.8

  // Probability circle to rect (0 to 1)
  const prob = 0.4

  canvas.onmousemove = function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener('resize', function () {
    canvasWidth = canvas.width = window.innerWidth
    canvasHeight = canvas.height = window.innerHeight
  })

  function Circle (x, y, r) {
    this.x = x
    this.y = y
    this.r = r
    this.or = r;
    this.color = colorArray[Math.floor(Math.random() * 4)]
    this.form = Math.floor(Math.random() + prob);

    if (Math.random() < 0.5) {
      this.velX = -Math.random() * maxVel
    } else {
      this.velX = +Math.random() * maxVel
    }

    if (Math.random() < 0.5) {
      this.velY = -Math.random() * maxVel
    } else {
      this.velY = +Math.random() * maxVel
    }

    this.update = function () {
      this.x += this.velX
      this.y += this.velY

      if (this.x + this.r > canvasWidth || this.x - this.r < 0) {
        this.velX = -this.velX
      }
      if (this.y + this.r > canvasHeight || this.y - this.r < 0) {
        this.velY = -this.velY
      }

      let disX = Math.abs(mouseX - this.x)
      let disY = Math.abs(mouseY - this.y)

      let on = disX < cursorSize && disY < cursorSize;
      let dis = 0;

      if (on) {
        dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2)) / cursorSize;
        if (dis > 1) on = false;
      }

      if (on) {
        if (this.r < radiusMax) this.r += increase * (1 - dis);
      } else if (this.or < this.r) {
        this.r -= increase * 0.1;
      }

      this.draw()
    }

    this.draw = function () {
      c.beginPath()
      if (this.form === 0) {
        c.arc(
          this.x,
          this.y,
          Math.abs(this.r),
          0,
          Math.PI * 2
        )
      }
      if (this.form === 1) {
        let r = this.r;
        c.moveTo(this.x - r, this.y);
        c.lineTo(this.x, this.y - r);
        c.lineTo(this.x + r, this.y);
        c.lineTo(this.x, this.y + r);
      }
      c.fillStyle = this.color
      c.fill()
    }
  }

  const colorArray = [
    '#000000',
    '#74C0C0',
    '#CE4841',
    '#F6AA3D'
  ]

  let circles = []

  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvasWidth
    const y = Math.random() * canvasHeight
    const s = minSize + (maxSize - minSize) * Math.random();
    circles.push(new Circle(x, y, s))
  }

  function updateAll () {
    c.clearRect(0, 0, canvasWidth, canvasHeight)
    for (let i = 0; i < circles.length; i++) {
      circles[i].update()
    }
    window.requestAnimationFrame(updateAll)
  }

  updateAll()
}

export default canvas
