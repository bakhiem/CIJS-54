
export function getDataFromDoc(doc) {
  const data = doc.data()
  data.id = doc.id
  return data
}
// lay du lieu tu get many document
export function getDataFromDocs(data) {
  // const docs = data.docs
  // const listRes = []
  // for (const item of docs) {
  //   listRes.push(getDataFromDoc(item))
  // }
  // return listRes
  return data.docs.map(getDataFromDoc)
}