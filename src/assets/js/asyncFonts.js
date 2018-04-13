import FontFaceObserver from 'fontfaceobserver'

const asyncFonts = ({ href, observer }) => {
  // Load href from somewhere...
  if (href) {
    const link = document.createElement('link')
    link.href = href
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  const asyncFont = new FontFaceObserver(observer)
  asyncFont.load().then(() => {
    document.documentElement.classList.add(`${observer}-loaded`)
  })
}

export default asyncFonts
