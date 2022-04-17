//Variables 
const mensaje = document.querySelector('#dineroAPagar')

//Functions

function calcOt() {
    const horas = parseInt(document.querySelector('#horas').value)
    const rate = parseInt(document.querySelector('#rate').value)
    const hechas = parseInt(document.querySelector('#hechas').value)
    const regalo = parseInt(document.querySelector('#regalo').value)

    console.log(horas);
    if(horas >= hechas) {
        let horasAPagar = ((Math.floor(horas /  hechas) * regalo) + horas)
        console.log(horasAPagar);
        let dineroAPagar = horasAPagar * rate;
        mensaje.textContent = dineroAPagar
    }

}