//prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin.
function prop2Taker(obj) {
    console.log(obj['prop-2'])
  }
prop2Taker({ test: 1, 'prop-2': 2 })
// A: ehsen
