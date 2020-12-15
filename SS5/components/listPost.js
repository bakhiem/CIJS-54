
const style = `
  .list-posts {
    width: 60%;
    margin: auto;
    margin-top: 10px;
  }
`
import { getDataFromDocs } from "../utils.js";
class ListPost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({mode: 'open'})
  }
  async connectedCallback() {
    const res = 
    await firebase
    .firestore()
    .collection('posts')
    .where('isShow', '==', true)
    .get()
    this.listenCollectionChange()
    const listPost = getDataFromDocs(res)
    let html = ''
    listPost.forEach(element => {
      html += `
        <post-item
          time="${element.createdAt}"
          author="${element.authorName}"
          content="${element.content}">
        </post-item>
      `
    })
    this._shadowDom.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="list-posts">
        ${html}
      </div>
    `
  }
  listenCollectionChange() {
    let firstRun = true
    firebase
    .firestore()
    .collection('posts')
    .where('isShow', '==', true)
    .onSnapshot((snapShot) => {
      if(firstRun) {
        firstRun = false
        return
      }
      console.log('Snap shot', snapShot.docChanges())
    })
  }
}
window.customElements.define('list-post', ListPost)