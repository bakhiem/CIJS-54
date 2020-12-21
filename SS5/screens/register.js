const style = `
  .register-container {
    width: 100vw;
    height: 100vh;
    background: url('https://ict-imgs.vgcloud.vn/2020/10/14/02/iphone-12-pro-va-iphone-12-pro-max-ra-mat-xung-danh-iphone-cao-cap-nhat-6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
  }
  #register-form{
    width: 30%;
    background: #fff;
    height: 100vh;
    padding: 0px 20px;
  }
  h1{
    text-align: center;
    color: #333;
  }
  button {
    background: #1565C0;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
`
class RegisterSceen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="register-container">
        <form id="register-form">
          <h1>CI Project</h1>
          <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
          <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
          <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
          <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
          <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
          <button>Register</button>
          <a id="redirect">Already have an account ? Login</a>
        </form>
      </div>
    `
    const registerForm = this._shadowRoot.getElementById('register-form')
    registerForm.addEventListener('submit', async(e) => {
      e.preventDefault()
      const firstName = this._shadowRoot.getElementById('first-name').value
      const lastName = this._shadowRoot.getElementById('last-name').value
      const email = this._shadowRoot.getElementById('email').value
      const password = this._shadowRoot.getElementById('password').value
      const confirmPassword = this._shadowRoot.getElementById('confirm-password').value
      let isValid = true
      if (firstName.trim() === '') {
        isValid = false
        this.setError('first-name', 'Please input first name')
      } else {
      }
      if (lastName.trim() === '') {
        isValid = false
        this.setError('last-name', 'Please input last name')
      }
      if (email.trim() === '') {
        isValid = false
        this.setError('email', 'Please input email')
      }
      if (password.trim() === '') {
        isValid = false
        this.setError('password', 'Please input password')
      }
      if (confirmPassword.trim() === '') {
        isValid = false
        this.setError('confirm-password', 'Please input confirm password')
      }
      if (password !== confirmPassword) {
        isValid = false
        this.setError('confirm-password', "Password didn't match")
      }
      if (!isValid) {
        return
      }
      const user = {
        fullName: firstName + ' ' + lastName,
        email: email,
        password: CryptoJS.MD5(password).toString()
      }
      // nếu email đã tồn tại rồi thì trả ra true
      const check = await this.checkEmailExist(email)
      if (check) {
        alert('Email đã được đăng ký')
      } else {
        firebase.firestore().collection('users').add(user)
        alert('Đăng ký thành công')
        router.navigate('/login')
      }
    })
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () => {
      router.navigate('/login')
    })
  }
  setError(id, message) {
    this._shadowRoot.getElementById(id)
    .setAttribute('error', message)
  }
  async checkEmailExist(email) {
   const res = await firebase.firestore().collection('users')
    .where('email', '==' , email).get()
    return !res.empty
  }
}
window.customElements.define('register-screen', RegisterSceen)