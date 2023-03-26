function MektebGunleri() {
    const days = ['Bazarertesi', 'Cersenbeaxsami', 'Cersenbe', 'Cumeertesi', 'Cume','Senbe','Bazar'];
    const today = new Date().getDay()
    
    if (today === 1) {
      return "Bu gun ders var oyan"
    } else if (today === 2) {
      return "Bu gun ders var oyan"
    } else if (today === 3) {
        return "Bu gun ders var oyan"
    } else if (today === 4) {
        return "Bu gun ders var oyan"
    } else if (today === 5) {
        return "Bu gun ders var oyan"
    } else  {
        return "Bu gun ders yoxdu yat :)"
      }
  
  
}
  alert(MektebGunleri())
