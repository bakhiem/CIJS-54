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
  }
  h1{
    text-align: center;
    color: #333;
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
        </form>
      </div>
    `
    const registerForm = this._shadowRoot.getElementById('register-form')
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(this._shadowRoot.getElementById('first-name').value)
    })

  }
}
window.customElements.define('register-screen', RegisterSceen)