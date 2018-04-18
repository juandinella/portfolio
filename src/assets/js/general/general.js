import asyncFonts from '../tools/async-fonts'
import lazyImages from './lazyImages'
import scrollTo from './scroll'

const general = () => {
  lazyImages()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'futura'
  })

  document.getElementById('scroll').addEventListener('click', () => {
    scrollTo(document.getElementById('works'));
  });
}

export default general
