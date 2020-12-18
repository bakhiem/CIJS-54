const style = `
  #create-post {
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;
  }
  #create-post textarea {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    outline: none;
  }
  .post {
    background-color: #1976D1;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
`
import { getItemLocalStorage, uploadFileToStorage } from "../utils.js";
class CreatePost extends HTMLElement{
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this._shadowDom.innerHTML = `
      <style>
        ${style}
      </style>
      <form id="create-post">
        <textarea name="content" rows="6"></textarea>
        <input type="file" name="file">
        <button class="post">Post</button>
      </form>
    `
    const postForm = this._shadowDom.getElementById('create-post')
    postForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const content = postForm.content.value
      if(content.trim() === '') {
        alert('Vui lòng nhập nội dung bài viết')
      }
      const user = getItemLocalStorage('currentUser')
      const data = {
        createdBy: user.id,
        createdAt: new Date().toISOString(),
        content: content,
        comments: [],
        authorName: user.fullName,
        isShow: true
      }
      const res = await firebase.firestore().collection('posts').add(data)
      const img = postForm.file.files
      if(img.length > 0) {
        const image = img[0]
        const url = await uploadFileToStorage(image)
        this.updateListFile(url, res.id)
      }
      postForm.content.value = ''
    })
  }
  updateListFile(url, id) {
    const dataUpdate = {
      files: firebase.firestore.FieldValue.arrayUnion(url)
    }
    firebase.firestore()
    .collection('posts')
    .doc(id)
    .update(dataUpdate)
  }
}
window.customElements.define('create-post', CreatePost)