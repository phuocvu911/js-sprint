function getElementsByTag(tag) {
  return document.getElementsByTagName(tag)
}

function getElementsByClassName(className) {
  return document.getElementsByClassName(className)
}

function getElementById(id) {
  return document.getElementById(id)
}

function getElementsByAttribute(name, value) {
  let selector

  if (value === undefined) {
    selector = `[${name}]`
  } else {
    selector = `[${name}="${value}"]`
  }

  return document.querySelectorAll(selector)
}
