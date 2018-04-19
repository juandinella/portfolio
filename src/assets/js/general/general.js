import asyncFonts from '../tools/async-fonts'
import lazyImages from './lazyImages'
import scrollTo from './scroll'
import canvas from './canvas'

const general = () => {
  lazyImages()
  canvas()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'futura'
  })

  document.getElementById('scroll').addEventListener('click', () => {
    scrollTo(document.getElementById('works'));
  });
}

export default general
