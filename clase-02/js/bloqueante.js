function tareaPesada() {
    const inicio = Date.now();
    while (Date.now() - inicio < 5000) {
        // Espera activa durante 5 segundos
    }
    console.log('Tarea pesada terminada');
}

console.log('Inicio del programa');

tareaPesada(); // Bloquea el event loop durante 5 segundos

console.log('Fin del programa');