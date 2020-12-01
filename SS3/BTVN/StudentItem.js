class StudentItem extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.name = this.getAttribute('name')
    this._shadowDom.innerHTML = `
      ${this.name}
    `
  }
}
window.customElements.define('student-item', StudentItem)