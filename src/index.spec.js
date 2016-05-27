import test from "ava"

var testThis = function(a) {
  return a + 1
}

test("rob knows", t => {
  const foo = testThis(2)
  t.is(foo, 3)
})
