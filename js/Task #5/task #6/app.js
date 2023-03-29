//İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın
// A: mohtesem
let ed = prompt("Ededi daxil edin")
let sum = 0
for(let i = 100; i<=999; i++) {
   if (i % ed === 0) {
    sum += i
   }
}
console.log(sum)
