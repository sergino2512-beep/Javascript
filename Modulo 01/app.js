
    console.log("Hello, Word");
    console.log("Estoy aprendiendo JavaScript");

    let ciudad = "Madrid";
    ciudad = "Barcelona";

    const pais = "España";
    

    const nombre = "Emily";
    const edad = "18";
    const esEstudiante = true;
    let temporada; 
    const direccion = null;
    
    console.log(typeof nombre)
    console.log(typeof edad)
    console.log(typeof esEstudiante)
    console.log(typeof temporada)
    console.log(typeof direccion)

    const nombreUsuario = "Tatiana";
    const edadUsuario = "18";

    const mensaje = `El nombre del usuario es ${nombreUsuario} y tiene ${edadUsuario} años.`;
    console.log(mensaje);

    const a = 10;
    const b = 5;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);

    console.log(a > b);
    console.log(a < b);
    console.log(a >= b);
    console.log(a <= b);
    console.log(a === b);
    console.log(a == b);
    console.log(a !== b);
    
    const edadPersona = 15;
    const tieneDocumento = true;

    const puedeIngresar = edadPersona >= 18 && tieneDocumento;
    console.log(puedeIngresar);

    const esMayorDeEdad = edadPersona >= 18 || tieneDocumento;
    console.log(esMayorDeEdad);

    const noPuedeIngresar = !puedeIngresar;
    console.log(noPuedeIngresar);

    const precio = "100";
    const cantidad = "5";

    const total = Number(precio) * Number(cantidad);
    console.log(total);