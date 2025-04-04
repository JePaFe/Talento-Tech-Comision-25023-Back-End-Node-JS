function tareaPesadaNoBloqueante() {
    setTimeout(() => {
        console.log('Tarea 2 pesada (no bloqueante) terminada');
    }, 5000); // Simula el retraso sin bloquear el event loop
}

console.log('Tarea 1');
tareaPesadaNoBloqueante();
console.log('Tarea 3');
