// Simulador de posiciones

const calcularImc = (altura, peso) => peso / (altura * altura);

const posicionRecomendada = () => {
    let nombre = "";
    let apellido = "";
    let altura = 0;
    let peso = 0;
    let confirma = true;

    do {
        nombre = String(prompt("Ingrese su nombre").toUpperCase());
        apellido = String(prompt("Ingrese su apellido").toUpperCase());

        // Validamos altura
        do {
            altura = Number(prompt("Ingrese su altura"));
            if (altura > 3) {
                altura = altura / 100;
                alert("La altura ingresada es en centimetros, por lo que se convertirá a metros.");
            }

            peso = Number(prompt("Ingrese su peso"));
            confirma = confirm("Hola " + nombre + " " + apellido + "\n" + "Verifique que los datos sean correctos:" + "\n" + "Altura: " + altura + "\n" + "Peso: " + peso);
        } while (!confirma);

    } while (!confirma);

    alert("Usted confirmó correctamente" + "\n" + "Su IMC es: " + calcularImc(altura, peso) + "\n" + "\n" + "Referencias: " + "\n" + "Normal: IMC entre 18.5 y 24.9" + "\n" + "Sobrepeso: IMC entre 25 y 29.9" + "\n" + "Obesidad: IMC 30 o superior");

    // Determinamos posición según resultados

    if (altura > 2.08 && peso >= 100) {
        alert("Se le recomienda jugar de C (Centro). Jugadores altos y fuertes que juegan cerca del aro.");
    } else if (altura > 1.98 && altura <= 2.08 && peso < 110) {
        alert("Se le recomienda jugar de PF (Ala-pívot) o SF (Alero). Jugadores versátiles que pueden jugar tanto cerca del aro como en la línea exterior.");
    } else if (altura >= 1.93 && altura <= 2.00 && peso < 100) {
        alert("Se le recomienda jugar de SF (Alero). Jugadores con altura media y habilidad para jugar tanto en la zona pintada como en el perímetro.");
    } else if (altura < 1.98 && peso < 100) {
        alert("Se le recomienda jugar de PG (Base) si tiene buen manejo del balón y visión de juego, o SG (Escolta) si tiene buen tiro exterior.");
    } else {
        alert("O ingresó datos incorrectos o su biotipo corporal no encaja claramente en una posición estándar. Consulte con un entrenador para determinar su posición adecuada.");
    }
}

posicionRecomendada();