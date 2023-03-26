var today = new Date();
var HefteninGunleri = ['Bazar','Bazar ertəsi','Cərşənbə axşamı', 'Cersenbe', 'Cumeaxsami','Cume','Senbe']
var HefteninGunleri = HefteninGunleri[today.getDay()]

document.write("Bugun " + HefteninGunleri + "dir.")
