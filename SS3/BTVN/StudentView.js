import { getListStudent } from './index.js'
class StudentView extends HTMLElement{
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    const listStudent = getListStudent()
    let html = ''
    for (const iterator of listStudent) {
      html += `
        <student-item name="${iterator.fullName}"></student-item>
      `
    }
    console.log(html)
    this._shadowDom.innerHTML = html
  }
}
window.customElements.define('student-view' , StudentView)