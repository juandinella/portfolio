// import registerServiceWorker from './registerServiceWorker'
import app from './app.js'

app()

// if (process.env.NODE_ENV === 'production') {
//   registerServiceWorker()
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
