// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
 return kittens.push('Ralph')
}

function destructivelyPrependKitten(name, array) {
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name, array) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name, array) {
  return kittens.shift()
}