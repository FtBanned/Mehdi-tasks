var today = new Date();
var HefteninGunleri = ['Bazar ertəsi', 'Cərşənbə axşamı', 'Cersenbe', 'Cümə axşamı', 'Cume','Senbe','Bazar'];
var HefteninGunleri = HefteninGunleri[today.getDay()]

document.write("Bugun " + HefteninGunleri + " gunudur.")
