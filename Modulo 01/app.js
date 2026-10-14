
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

    const horasTrabajadas = 48;
    const tarifaPorHora = 1200;

    const salarioBase = horasTrabajadas * tarifaPorHora;
    let bonificacion = 0;

    if (salarioBase > 500000) {
        bonificacion = salarioBase * 0.10
    }

    const salarioTotal = salarioBase + bonificacion;

    console.log(`horasTrabajadas: ${horasTrabajadas}`);
    console.log(`tarifaPorHora: $${tarifaPorHora}`)
    console.log(`salarioBase: $${salarioBase}`)
    console.log(`bonificacion $${bonificacion}`)
    console.log(`salarioTotal: $${salarioTotal}`)

    const edad2 = 20;

    if (edad2 >= 18 ){
        console.log("Eres mayor de edad")
    } else {
        console.log("Eres menor de edad");
    }

    const calificacion = 85;
    if( calificacion >= 90){
        console.log("Excelente");
    } else if (calificacion >= 80){
        console.log("Muy bien");
    } else if (calificacion >= 70){
        console.log("Bien")
    } else if (calificacion >= 60){
        console.log("Suficiente")
    } else {
        console.log("Insuficiente")
    }
