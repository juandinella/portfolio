import asyncFonts from './asyncFonts'
import registerServiceWorker from './registerServiceWorker'
import './scroll'

asyncFonts({
  href: 'assets/css/fonts.css',
  observer: 'futura'
})

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker()
}
