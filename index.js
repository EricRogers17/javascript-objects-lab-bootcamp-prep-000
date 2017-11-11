var objects = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  // update an existing object without being destructive
  return Object.assign({}, object, {[key]: value})

}