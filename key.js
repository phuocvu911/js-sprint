function getValueFromKey(obj, key) {
  return obj[key]
}

function addKeyValuePairs(obj, inputObj) {
  return { ...obj, ...inputObj }
}
