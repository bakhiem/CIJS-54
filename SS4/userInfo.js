class UserInfo extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.name = this.getAttribute('name')
    this._shadowRoot.innerHTML = `
      <div>
        <div>${this.name}</div>
      </div>
    `
  }
}
window.customElements.define('user-info', UserInfo)