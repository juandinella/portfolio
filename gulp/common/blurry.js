const cheerio = require('cheerio')
const { cwd } = require('process')
const BlurryPug = require('lqip-pug')
const config = require('../config')

const blurry = new BlurryPug({
  baseDir: cwd() + '/' + config.directories.src.images,
  compiledPath: 'assets/images'
})

const blur = (name, alt) => {
  const raw = blurry.blur(name)
  const $ = cheerio.load(raw)

  const img = $('img')

  if (alt) {
    img.attr('alt', alt)
  } else {
    img.attr('alt', 'An image')
  }
  return $('body').html()
}

module.exports = blur
