const style = `
<style>
  .card{
    font-family: sans-serif;
    border: 1px solid #dbdbdb;
    margin-right: 20px;
    color: #363636;
  }
  .title{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .card-body{
    border-top: 1px solid #dbdbdb;
    padding: 20px;
  }
  img{
    width: 100%;
  }
</style>
`
class CardComponent extends HTMLElement{
  constructor() {
    super()
    // khai bao shadow_dom
    this._shadowDom = this.attachShadow({mode: 'open'})
    this.imgSrc = this.getAttribute('imgsrc')
    this.title = this.getAttribute('title')
    this.description = this.getAttribute('description')
    this._shadowDom.innerHTML = `
      ${style}
      <div class="card">
        <img src="${this.imgSrc}"></img>
        <div class="card-body">
          <div class="title">${this.title}</div>
          <div class="description"> ${this.description} </div>
        </div>
      </div>
      `
  }
}
window.customElements.define('card-container', CardComponent)
