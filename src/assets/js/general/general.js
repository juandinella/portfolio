import asyncFonts from '../tools/async-fonts'
import lazyImages from './lazyImages'
import scrollTo from './scroll'
import toggleCanvas from './toggleCanvas'
import canvas from './canvas'

const general = () => {
  lazyImages()
  toggleCanvas()
  canvas()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'futura'
  })

  document.getElementById('scroll').addEventListener('click', () => {
    scrollTo(document.getElementById('works'));
  });

  document.getElementById('magic').addEventListener('click', () => {
    scrollTo(document.getElementById('hero'));
  });
}

export default general
