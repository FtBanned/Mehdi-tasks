// A: dogrudur
const input = document.querySelector('input')
const button = document.querySelector('button')
const cevre = document.getElementById('cevre')

button.onclick = () => {
    const deyer = input.value
    cevre.style.width = deyer + 'px'
    cevre.style.height = deyer + 'px'
}
