var today = new Date();
var HefteninGunleri = ['Bazarertesi', 'Cərşənbəaxşamı', 'Cersenbe', 'Cüməaxşamı', 'Cume','Senbe','Bazar'];
var HefteninGunleri = HefteninGunleri[today.getDay()]

document.write("Bugun " + HefteninGunleri + "dir.")
