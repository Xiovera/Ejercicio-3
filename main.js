var horasTrabajadas, pagoHora, sueldo;

horasTrabajadas = prompt("Por favor, ingresa las horas Trabajadas");
pagoHora = prompt("Por favor, ingresa el pago por Hora");

sueldo = parseFloat(horasTrabajadas) * parseFloat(pagoHora);

alert(sueldo);