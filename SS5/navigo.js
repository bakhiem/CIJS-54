var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

import { getItemLocalStorage } from './utils.js'
router
  .on({
    'login': function () {
      redirect('login')
    },
    'register': function () {
      redirect('register')
    },
    'story': function () {
      redirect('story')
    },
    '*': function () {
      router.navigate('login')
    }
  })
  .resolve();

function redirect(screenName) {
  if(screenName === 'register') {
    document.getElementById('app').innerHTML = `
      <register-screen></register-screen>
    `
  } else if (screenName === 'login') {
    document.getElementById('app').innerHTML = `
      <login-screen></login-screen>
    `
  } else if (screenName === 'story') {
    document.getElementById('app').innerHTML = `
      <story-screen></story-screen>
    `
  }
}

async function checkAuthen() {
  const user = getItemLocalStorage('currentUser')
  if (user) {
    const res = await firebase.firestore()
    .collection('users')
    .where('email', '==', user.email)
    .where('password', '==', user.password)
    .get()
    if(res.empty) {
      redirect('login')
    } else {
      redirect('story')
    }
  } else {
    redirect('login')
  }
}
window.router = router