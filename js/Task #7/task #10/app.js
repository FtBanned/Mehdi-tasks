// A: ay masallah!
var birthDate = new Date(prompt ("Dogum ilinizi daxil edin"))
var now = new Date()
var age = now.getFullYear() - birthDate.getFullYear();
if (now.getMonth() < birthDate.getMonth() || (now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
  age--
}
var diff = now.getTime() - birthDate.getTime()
var seconds = Math.floor(diff / 1000)
var minutes = Math.floor(seconds / 60)
var hours = Math.floor(minutes / 60)
var days = Math.floor(hours / 24)
var months = Math.floor(days / 30.4167)
var years = Math.floor(months / 12)
console.log("Yaşınız: " + age )
console.log("Kecen vaxt: " + years + " il, " + months % 12 + " ay, " + days % 30.4167 + " gün, " + hours % 24 + " saat, " + minutes % 60 + "deqiqe," + seconds % 60 + " saniye")
