import jsdom from 'jsdom'

const doc = jsdom.jsdom('<doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

// everything in window needs to be globally accessible for React
Object.keys(window).forEach( (key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})
