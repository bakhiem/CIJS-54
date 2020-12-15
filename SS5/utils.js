
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
export function removeItemFromLocalStorage(key) {
  localStorage.removeItem(key)
}
/**
 * 
 * @param {*} dateStr 
 * 14/12/2020 21:20
 */
export function convertDate(dateStr) {
  const date = new Date(dateStr)
  const day = validateNiceNumber(date.getDate())
  const month = validateNiceNumber(date.getMonth() + 1)
  const year = date.getFullYear()
  const hour = validateNiceNumber(date.getHours())
  const minutes = validateNiceNumber(date.getMinutes())
  return `${day}/${month}/${year} ${hour}:${minutes}`
}
function validateNiceNumber(number) {
  return (number < 10) ? ('0' + number) : (number)
}