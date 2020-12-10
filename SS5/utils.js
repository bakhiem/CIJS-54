
export function getDataFromDoc(doc) {
  const data = doc.data()
  data.id = doc.id
  return data
}
// lay du lieu tu get many document
export function getDataFromDocs(data) {
  return data.docs.map(getDataFromDoc)
}
/**
 * 
 * @param {String} key 
 * @param {Object} value 
 */
export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}