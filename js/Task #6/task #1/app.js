//prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin.
function prop2Taker(obj) {
    return obj['prop-2'];
  }
console.log(prop2Taker({ test: 1, 'prop-2': 2 }))
