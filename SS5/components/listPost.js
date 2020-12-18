
const style = `
  .list-posts {
    width: 60%;
    margin: auto;
    margin-top: 10px;
  }
`
import { getDataFromDocs, getDataFromDoc } from "../utils.js";
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
      const docChange = snapShot.docChanges()
      for(const oneChange of docChange) {
        if(oneChange.type === 'added') {
          this.appendPostItem(getDataFromDoc(oneChange.doc))
        }
      }
    })
  }
  appendPostItem(data) {
    const postItem = document.createElement('post-item')
    postItem.setAttribute('time', data.createdAt)
    postItem.setAttribute('author', data.authorName)
    postItem.setAttribute('content', data.content)
    const parent = this._shadowDom.querySelector('.list-posts')
    parent.insertBefore(postItem, parent.firstChild)
  }
}
// <post-item time="2020/12/20" author="ahihi" content="abc"> </post-item>
window.customElements.define('list-post', ListPost)