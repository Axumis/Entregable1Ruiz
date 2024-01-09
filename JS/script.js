function cargarUsuario()
    {
    let nombre = prompt("ingrese su nombre y apellido")
    let dni = prompt("Ingrese su D.N.I.")
    let provincia = prompt("por favor ingrese la provincia donde esta: ")
    let ciudad = prompt("Ahora ingrese la localidad: ")
    let calle = prompt("ingrese el domicilio: ")
    let altura = prompt("por ultimo la altura de la calle: ")
    let tiempo = parseInt(prompt("Ingrese el tiempo de cuanto tiene el servicio en meses"))
    usuario = [nombre, dni, provincia, ciudad, calle, altura, tiempo]
    console.table(usuario)
    }

function irse(){
    let salir = confirm('Desea salir del asistente?')
    if(salir == true)
    {
    opciones = '4'
    alert('Espero le haya sido de ayuda. Gracias por elegirnos')
    }
    return(opciones)
}

function consultarPromo() 
{
    if(usuario[6]<=6)
        alert('Tu promocion de 20% de decuento por 6 meses sigue vigente')
    else
        alert('Tu promocion ya vencio')
    opciones = irse()
}

function internet()
{
    if(usuario.includes('Misiones') || usuario.includes('Corrientes'))
        alert("De momento no contamos con internet fibra optica por la zona")
    else
        alert("Tenes cobertura de internet fibra optica solicitalo llamando al 08005551234")
    opciones = irse()
}

function darBaja(){
    let confirmar = confirm("Desea realmente dar de baja la linea?")
    if(confirmar)
    {
        alert('Hemos dado de baja su linea. Espero vuelva pronto')
        usuario=[] //Limpia el usuario
    }
    opciones = irse()
}

alert("Bienvenido al asistende de atencion al cliente")
let usuario = []
let salir = false
let opciones = ""
do{
    opciones = prompt("Elegi una opcion de lo que quieres comprar:\n 1-Consultas de promocion \n 2-Internet Fibra optica \n 3-Dar de baja una linea \n 4-Salir")
    switch(opciones)
    {
        case "1":
        if(usuario.length===0)
            cargarUsuario()
            consultarPromo()
        break;

        case '2':
        if(usuario.length===0)
            cargarUsuario()
            internet()
        break;
        
        case '3':
        if(usuario.length === 0)
            cargarUsuario()
            darBaja()
        break;

        case '4':
            alert('Espero le haya sido de ayuda. Gracias por elegirnos')
        break;
       
        default:
            alert('Opcion no valida. Por favor ingrese una opcion correcta')
        break;
    }
}while(opciones != '4')