//Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.
// A: done as 🐉
function Car(model, year, sahibi) {
  this.model = model
  this.ili = 1960
  this.sahibi = sahibi

  this.drive = function() {
    console.log(`${this.sahibi} ${this.model} markali masinina qaz verir.`)
  }

  this.brake = function() {
    console.log(`${this.sahibi} ${this.model} markali masini ile yavaslayir.`)
  }
}

const myCar = new Car("Ford Mustang", 1960, "Ali")
myCar.drive()
myCar.brake()
