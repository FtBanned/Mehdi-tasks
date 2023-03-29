//Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin. 
//Həmin funksiya geriyə funksiya göndərsin. 
//Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.
// A: dogrudur!
const cinsler= (cins) => {
    if (cins === `K`) {
        return (ad) => `Cenab ${ad}`
    }
    else if (cins === `Q`) {
        return (ad) => `Xanim ${ad}`
    }
}
const kisi = cinsler (`K`)
const qadin = cinsler (`Q`)

console.log(kisi(`Mehdi`))
