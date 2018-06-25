function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log (string.toLowerCase())
}
function sayHiToGrandma(string) {
  if (typeof string.toLowerCase() === string) {
  return "I can't hear you!"
}
  if (typeof string.toUpperCase()) === string) {
    return "YES INDEED!"
  }
  if (typeof string)


  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})