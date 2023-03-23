//propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin.
function propertyTaker(obj, propertyName) {
    return obj[propertyName];
  }
  console.log(propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent'))