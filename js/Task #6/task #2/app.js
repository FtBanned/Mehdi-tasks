//propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin.
function propertyTaker(obj, propertyName) {
    console.log( obj[propertyName])
  }
propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') 
propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  
propertyTaker({name:'ali', age:12}, 'name')  