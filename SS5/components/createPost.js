class CreatePost extends HTMLElement{
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this._shadowDom.innerHTML = `
      <form id="create-post">
        <textarea name="content" rows="4"> </textarea>
        <button>Post</button>
      </form>
    `
  }
}
window.customElements.define('create-post', CreatePost)