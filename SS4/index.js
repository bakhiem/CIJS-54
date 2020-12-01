import { getDataFromDoc, getDataFromDocs } from "./utils.js"

getManyDocument()

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
  const res = await firebase.firestore().collection('users').get()
  const user = getDataFromDocs(res)
  console.log(user)
}