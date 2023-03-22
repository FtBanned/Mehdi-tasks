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
