class InputWrapper extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.type = this.getAttribute('type')
    this.placeholder = this.getAttribute('placeholder')
    this.error = this.getAttribute('error') || ''
    this._shadowRoot.innerHTML = `
      <div class="input-wrapper">
        <input id="input-main" type="${this.type}" placeholder="${this.placeholder}">
        <div class="error">${this.error}</div>
      </div>
    `
  }
  get value() {
    const value = this._shadowRoot.getElementById('input-main').value
    return value
  }
  // getter
}
window.customElements.define('input-wrapper', InputWrapper)