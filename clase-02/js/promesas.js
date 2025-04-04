function tareaPesadaNoBloqueante() {
    setTimeout(() => {
        console.log('Tarea 2 pesada (no bloqueante) terminada');
    }, 3000); // Simula el retraso sin bloquear el event loop
}

function tareaPesadaAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tarea pesada (async) terminada');
        }, 5000);
    });
}

async function main() {
    console.log('Inicio del programa');
    const resultado = await tareaPesadaAsync();
    console.log(resultado);
    console.log('Fin del programa');
}

main();
tareaPesadaNoBloqueante();