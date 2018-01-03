var recipes = new Object();

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign( {}, object, { [key]: value })
}

destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}