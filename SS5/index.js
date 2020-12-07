import './screens/register.js'
import './components/inputWrapper.js'

redirect('register')
export function redirect(screenName) {
  if(screenName === 'register') {
    document.getElementById('app').innerHTML = `
      <register-screen></register-screen>
    `
  } else if (screenName === 'login') {
    document.getElementById('app').innerHTML = `
      day la man login
    `
  }
}