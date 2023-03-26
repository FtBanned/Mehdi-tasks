var today = new Date();
var HefteninGunleri = ['Bazarertesi', 'Cersenbeaxsami', 'Cersenbe', 'Cumeertesi', 'Cume','Senbe','Bazar'];
var HefteninGunleri = HefteninGunleri[today.getDay()]

document.write("Bugun " + HefteninGunleri + " gunudur.")
