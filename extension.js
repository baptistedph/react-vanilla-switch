const vscode = require('vscode')
const fs = require('fs')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const switchToVanilla = vscode.commands.registerCommand(
    'react-switch.switchToVanilla',
    function () {
      const settings =
        '/Users/baptistedauphouy/Library/Application Support/Code/User/settings.json'
      fs.readFile(settings, 'utf-8', (err, data) => {
        if (err) {
          console.error(err)
          return vscode.window.showErrorMessage('Failed to read settings.json.')
        } else {
          const content = JSON.parse(data)
          content['emmet.includeLanguages'] = {
            javascript: 'javascript',
          }
          console.log(JSON.stringify(content))
          fs.writeFile(settings, JSON.stringify(content, null, 2), err => {
            if (err) {
              console.log(err)
              return vscode.window.showInformationMessage(
                'An error occured when settings.json has been edited.'
              )
            } else {
              return vscode.window.showInformationMessage(
                'settings.json has successfully been edited !\nYou switched to React.'
              )
            }
          })
        }
      })
    }
  )
  const switchToReact = vscode.commands.registerCommand(
    'react-switch.switchToReact',
    function () {
      const settings =
        '/Users/baptistedauphouy/Library/Application Support/Code/User/settings.json'
      fs.readFile(settings, 'utf-8', (err, data) => {
        if (err) {
          console.error(err)
          return vscode.window.showErrorMessage('Failed to read settings.json')
        } else {
          const content = JSON.parse(data)
          content['emmet.includeLanguages'] = {
            javascript: 'javascriptreact',
          }
          console.log(JSON.stringify(content))
          fs.writeFile(settings, JSON.stringify(content, null, 2), err => {
            if (err) {
              console.log(err)
              return vscode.window.showErrorMessage(
                'An error occured when settings.json has been edited.'
              )
            } else {
              return vscode.window.showInformationMessage(
                'settings.json has successfully been edited !\nYou switched to React.'
              )
            }
          })
        }
      })
    }
  )

  context.subscriptions.push(switchToReact, switchToVanilla)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
