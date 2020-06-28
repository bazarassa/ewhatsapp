const {app, BrowserWindow} = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({width: 640, height: 480});
  win.setMenuBarVisibility(false)
  win.loadURL('https://web.whatsapp.com', {userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'})
}

app.on('ready', createWindow)
