const path = require('path')
const config = require('../config')
const fs = require('fs')
const cheerio = require('cheerio')
const { cwd } = require('process')
const BlurryPug = require('lqip-pug')

const blurry = new BlurryPug({
  baseDir: cwd() + '/' + config.directories.src.images,
  compiledPath: 'assets/images'
})

const blur = (name, module, alt) => {
  const raw = blurry.blur(name)
  const $ = cheerio.load(raw)

  const img = $('img')

  if (module) img.attr('css-module', module)
  if (alt) {
    img.attr('alt', alt)
  } else {
    img.attr('alt', 'An image')
  }
  return $('body').html()
}

const icon = (name, attributes) => {
  const file = path.join(cwd(), `src/assets/icons/${name}.svg`)
  const icn = fs.readFileSync(file, 'utf-8')
  const $ = cheerio.load(icn)
  const svg = $('svg')
  if (attributes) {
    const arr = Object.keys(attributes)
    arr.forEach(attr => svg.attr(attr, attributes[attr]))
  }
  return $('body').html()
}

module.exports = {
  blur, icon
}
