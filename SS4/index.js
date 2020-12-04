import { getDataFromDoc, getDataFromDocs } from "./utils.js"
import './userInfo.js'


deleteDocument()
// addDocument()
// read one
async function getOneDocument() {
  // promise
  // firebase.firestore().collection('users').doc('qWbWN54iU67Z8KqAYs75').get()
  // .then((res) => {
  //   console.log(res)
  // })
  // async await
  const res = await firebase.firestore().collection('users').doc('qWbWN54iU67Z8KqAYs75').get()
  const user = res.data()
  user.id = res.id
  console.log(user)
}
// get many documents
async function getManyDocument() {
  const res = await firebase.firestore().collection('users')
  .where('age', 'in', [18, 19]).get()
  const user = getDataFromDocs(res)
  return user
}

// add document
function addDocument() {
  const data = {
    name: 'alex',
    age: 23
  }
  firebase.firestore().collection('users').add(data)
}
// update document
function updateDocument() {
  const docId = 'AE2XZKpYtM4k7vexnNTt'
  const data = {
    phones: firebase.firestore.FieldValue.arrayUnion('0904')
  }
  firebase.firestore().collection('users')
  .doc(docId).update(data)
}
// delete document
function deleteDocument() {
  const docId = 'YYY1DF92nbxh6gtAyD8A'
  firebase.firestore().collection('users')
  .doc(docId).delete()
}

getManyDocument().then(res => {
  let html = ''
  for (const item of res) {
    html += `<user-info name="${item.name}"> </user-info>`
  }
  document.getElementById('app').innerHTML = html
})