var socket = io();

//Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {

    console.log('Perdimos conección con el servidor');

});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Américo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})