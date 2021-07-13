
var usuarios = [
    {
        id: 1,
        nombre: 'Goku',
        imagen: 'goku.jpg',
        contactos: [2, 3],
        conversaciones: [
            {
            id: 'chat-1-2', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
            ultimoMensaje: 'Vegeta: Kakaroto!!', // En este punto solo se mantendrá el último mensaje.
            horaUltimoMensaje: '13:00',
            nombreDestinatario: 'Vegeta',
            imagenDestinatario: 'vegeta.jpg',
            },
            {
            id: 'chat-1-3', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
            ultimoMensaje: 'Krillin: Gooookkkuuu!!!!!', // En este punto solo se mantendrá el último mensaje.
            horaUltimoMensaje: '12:50',
            nombreDestinatario: 'Krillin',
            imagenDestinatario: 'krilin.jpg',
            }
        ]
    },
    {
        id: 2,
        nombre: 'Vegeta',
        imagen: 'vegeta.jpg',
        contactos: [1, 3],
        conversaciones: [{
            id: 'chat-1-2', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
            ultimoMensaje: 'Vegeta: Kakaroto!!', // En este punto solo se mantendrá el último mensaje.
            horaUltimoMensaje: '13:00',
            nombreDestinatario: 'Goku',
            imagenDestinatario: 'goku.jpg',
            },]
    },
    {
        id: 3,
        nombre: 'Krillin',
        imagen: 'krilin.jpg',
        contactos: [1, 2],
        conversaciones: [
            {
                id: 'chat-1-3', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Krillin: Gooookkkuuu!!!!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Goku',
                imagenDestinatario: 'goku.jpg',
                }
        ]
    },
    {
        id: 4,
        nombre: 'Androide 16',
        imagen: 'androide_16.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 5,
        nombre: 'Android 18',
        imagen: 'androide_18.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 6,
        nombre: 'Baby',
        imagen: 'baby.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 7,
        nombre: 'Majin Boo',
        imagen: 'majinboo.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 8,
        nombre: 'Bulma',
        imagen: 'bulma.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 9,
        nombre: 'Cell',
        imagen: 'cell.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 10,
        nombre: 'Chaozu',
        imagen: 'chaozu.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 11,
        nombre: 'Dende',
        imagen: 'dende.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 12,
        nombre: 'Dodoria',
        imagen: 'dodoria.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 13,
        nombre: 'Freezer',
        imagen: 'freezer.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 14,
        nombre: 'Gohan',
        imagen: 'gohan.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 15,
        nombre: 'Goten',
        imagen: 'goten.png',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 16,
        nombre: 'Kami',
        imagen: 'kami.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 17,
        nombre: 'Kibito',
        imagen: 'kibito.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 18,
        nombre: 'Mr. Satan',
        imagen: 'mr_satan.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 19,
        nombre: 'Nappa',
        imagen: 'nappa.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 20,
        nombre: 'Oolong',
        imagen: 'oolong.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 21,
        nombre: 'Pan',
        imagen: 'pan.png',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 22,
        nombre: 'Patricio',
        imagen: 'patricio.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 23,
        nombre: 'Picoro',
        imagen: 'picoro.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 24,
        nombre: 'Puar',
        imagen: 'puar.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 25,
        nombre: 'Roshi',
        imagen: 'roshi.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 26,
        nombre: 'Shen Long',
        imagen: 'shenlong.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 27,
        nombre: 'Tao Pai Pai',
        imagen: 'taopaipai.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 28,
        nombre: 'Trunks',
        imagen: 'trunks.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 29,
        nombre: 'Uub',
        imagen: 'uub.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 30,
        nombre: 'Videl',
        imagen: 'videl.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 31,
        nombre: 'Yamcha',
        imagen: 'yamcha.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 32,
        nombre: 'Zarbon',
        imagen: 'zarbon.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
    {
        id: 33,
        nombre: 'Androide 19',
        imagen: 'androide_19.jpg',
        contactos: [1, 2],
        conversaciones: []
    },
];

var chats = [
    {
        id: "chat-1-2",
        mensajes: [
            {
            emisor: 1,
            receptor: 2,
            mensaje: 'Hola Vegeta',
            tipo: 'text',
            hora: '12:30'
            },
            {
            emisor: 2,
            receptor: 1,
            mensaje: 'Kakaroto!!',
            tipo: 'text',
            hora: '12:30'
            },
            {
            emisor: 2,
            receptor: 1,
            tipo: 'sticker',
            stiker: 1
            }
        ]
    },
    {
        id: "chat-1-3",
        mensajes: [
            {
            emisor: 1,
            receptor: 3,
            mensaje: 'Krillin, donde estas?',
            tipo: 'text',
            hora: '12:30'
            },
            {
            emisor: 3,
            receptor: 1,
            mensaje: 'Estoy atrapado por Freezer!',
            tipo: 'text',
            hora: '12:30'
            },
            {
            emisor: 3,
            receptor: 1,
            tipo: 'sticker',
            stiker: 1
            }
        ]
    }
]

var stickers = [
    {
        id:1,
        sticker: '1.webp'
    },
    {
        id:2,
        sticker: '2.webp'
    },
    {
        id:3,
        sticker: '3.webp'
    },
    {
        id:4,
        sticker: '4.webp'
    },
    {
        id:5,
        sticker: '5.webp'
    },
    {
        id:6,
        sticker: '6.webp'
    },
    {
        id:7,
        sticker: '7.webp'
    },

];



var localStorage = window.localStorage;

if(JSON.parse(localStorage.getItem('usuarios')) == null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

if(JSON.parse(localStorage.getItem('stickers')) == null){
    localStorage.setItem('stickers', JSON.stringify(stickers));
}
else{
    stickers = JSON.parse(localStorage.getItem('stickers'));
}

if(JSON.parse(localStorage.getItem('chats')) == null){
    localStorage.setItem('chats', JSON.stringify(chats));
}
else{
    chats = JSON.parse(localStorage.getItem('chats'));
}

var indexUsuario = null;

//Funcion para generar la lista de los usuarios
function generarListaUsuarios() {
    
    for(var i=0; i<usuarios.length; i++){
        document.getElementById('lista-usuarios').innerHTML += 
        `<div class="col-2 my-1">
            <img src="./ASSETS/profile-pics/${usuarios[i].imagen}" class="img-fluid rounded-circle" alt="" onclick=chatsUsuario(${usuarios[i].id})>
        </div>`;
    }


}

//Hago un llamado a la funcion para que, tras cargar la pagina, se rendericen los usuarios que se pueden utilizar
generarListaUsuarios();

var idUsuario = null;

//Funcion para cargar todos los chats que tiene un usuario
function chatsUsuario(id){

    document.getElementById('chat-option').classList.add('option-selected');
    document.getElementById('chat-option').classList.remove('option-unselected');
    document.getElementById('contacts-option').classList.remove('option-selected');
    document.getElementById('contacts-option').classList.add('option-unselected');

    document.getElementById('contacts-page').classList.add('d-none');
    document.getElementById('chats-page').classList.remove('d-none');
    
    idUsuario = id;
    document.getElementById('chats-usuario').innerHTML="";
    var indexUsuario = usuarios.map(function(element){
        return element.id
    }).indexOf(id);

    //Cambio la imagen con respecto al usuario que se ha seleccionado
    document.getElementById('span-profiles').innerHTML = 
    `<img src="./ASSETS/profile-pics/${usuarios[indexUsuario].imagen}" class="img-fluid rounded-circle" alt="">`

    //Hago un llamado al arreglo conversacion que es un derivado de las conversaciones del arreglo de usuarios, para utilizar su respectiva información e imprimir los chats del usuario
    var conversaciones = usuarios[indexUsuario].conversaciones;
    for (var i=0; i<conversaciones.length;i++){
        document.getElementById('chats-usuario').innerHTML+= 
        `<div class="col-12" onclick="cargarChat('${conversaciones[i].id}')">
            <div class="row mt-4 pb-3" id="info-chats">
                <div class="col-3"><img src="./ASSETS/profile-pics/${conversaciones[i].imagenDestinatario}" class="img-fluid rounded-circle" alt=""></div>
                <div class="col-7">
                    <p><strong>${conversaciones[i].nombreDestinatario}</strong></p>
                    <p>${conversaciones[i].ultimoMensaje}</p>
                </div>
                <div class="col-2">
                    <span>${conversaciones[i].horaUltimoMensaje}</span>
                </div>
            </div>
        </div>`
    }
}

//Mando a llamar la funcion para que siempre aparezca primero la informacion de los chats del primer usuario, en este caso, es Goku
chatsUsuario(1);

var idChatVariable = null;

//Funcion para cargar la ventana de un chat en especifico
function cargarChat(idChat){

    idChatVariable = idChat;
    document.getElementById('mensajes').innerHTML='';

    document.getElementById('nav-chat-options').classList.add('d-none');
    document.getElementById('main-nav').classList.add('d-none');
    document.getElementById('nav-chat').classList.remove('d-none');
    document.getElementById('main').classList.remove('chats');
    document.getElementById('main').classList.add('background-chat');
    document.getElementById('message-bar').classList.remove('d-none');
    document.getElementById('chats-usuario').classList.add('d-none');
    document.getElementById('chats-mensajes').classList.remove('d-none');

    var detallesChats = chats.map(function (mensajes) {
        return mensajes.id
    }).indexOf(idChat);

    //Realizo un split del array, para poder recibir la información del contacto del mensaje
    var arrayID = idChat.split("-");
    
    if(idUsuario == parseInt(arrayID[1])){
        var indexUsuario = usuarios.map(function(element){
            return element.id
        }).indexOf(parseInt(arrayID[2]));
    
        document.getElementById('informacion-Contacto-Chat').innerHTML=
        `<div class="row g-2">
            <div class="col-6">
                <img src="./ASSETS/profile-pics/${usuarios[indexUsuario].imagen}" class="img-fluid rounded-circle" alt="">
            </div>
            <div class="col-6">
                <p><strong>${usuarios[indexUsuario].nombre}</strong></p>
                <p>Online</p>
            </div>
        </div>`
    }
    else if(idUsuario == parseInt(arrayID[2])){
        var indexUsuario = usuarios.map(function(element){
            return element.id
        }).indexOf(parseInt(arrayID[1]));
    
        document.getElementById('informacion-Contacto-Chat').innerHTML=
        `<div class="row g-2">
            <div class="col-6">
                <img src="./ASSETS/profile-pics/${usuarios[indexUsuario].imagen}" class="img-fluid rounded-circle" alt="">
            </div>
            <div class="col-6">
                <p><strong>${usuarios[indexUsuario].nombre}</strong></p>
                <p>Online</p>
            </div>
        </div>`
    }


    var mensajesChat = chats[detallesChats].mensajes;

    for(var i=0; i<mensajesChat.length;i++){
        if(mensajesChat[i].emisor == idUsuario && mensajesChat[i].tipo =="text"){
            document.getElementById('mensajes').innerHTML+=
            `<div class="d-flex flex-row-reverse my-3">
                <div class="card emisor text-white" style="width: 70%;">
                    <div class="card-body py-1">${mensajesChat[i].mensaje}</div>
                    <span class="text-end mt-0 me-2">${mensajesChat[i].hora}</span>
                </div>
            </div>`;
        }

        if(mensajesChat[i].emisor == idUsuario && mensajesChat[i].tipo =="sticker"){
            document.getElementById('mensajes').innerHTML+=
            `<div class="d-flex flex-row-reverse my-4">
                <div class="card emisor text-white" style="width: 70%;">
                    <div class="card-body py-1"><img src="./ASSETS/stickers/${mensajesChat[i].stiker}.webp" class="img-fluid" alt=""></div>
                    <span class="text-end mt-0 me-2">${mensajesChat[i].hora}</span>
                </div>
            </div>`;
        }
        
        if(mensajesChat[i].receptor == idUsuario && mensajesChat[i].tipo =="text"){
            document.getElementById('mensajes').innerHTML+=
            `<div class="d-flex flex-row my-3">
                <div class="card receptor text-white" style="width: 70%;">
                    <div class="card-body py-1">${mensajesChat[i].mensaje}</div>
                    <span class="text-end mt-0 me-2">${mensajesChat[i].hora}</span>
                </div>
            </div>`;
        }
        else if(mensajesChat[i].receptor == idUsuario && mensajesChat[i].tipo =="sticker"){
            document.getElementById('mensajes').innerHTML+=
            `<div class="d-flex flex-row my-4">
                <div class="card receptor text-white" style="width: 70%;">
                    <div class="card-body py-1"><img src="./ASSETS/stickers/${mensajesChat[i].stiker}.webp" class="img-fluid" alt=""></div>
                    <span class="text-end mt-0 me-2">${mensajesChat[i].hora}</span>
                </div>
            </div>`;
        }
    }
}

//Funcion para regresar desde un chat en especifico a la pagina de chats
function regresarMain(){
    document.getElementById('nav-chat-options').classList.remove('d-none');
    document.getElementById('main-nav').classList.remove('d-none');
    document.getElementById('nav-chat').classList.add('d-none');
    document.getElementById('main').classList.add('chats');
    document.getElementById('main').classList.remove('background-chat');
    document.getElementById('message-bar').classList.add('d-none');
    document.getElementById('chats-usuario').classList.remove('d-none');
    document.getElementById('chats-mensajes').classList.add('d-none');
    document.getElementById('contacts-page').classList.add('d-none');
    document.getElementById('chats-page').classList.remove('d-none');
    selectOptionChat();
}
   
//Funcion para cambiar los estilos de las pestañas y poder visualizar los chats del suario
function selectOptionChat(){
    document.getElementById('chat-option').classList.add('option-selected');
    document.getElementById('chat-option').classList.remove('option-unselected');
    document.getElementById('contacts-option').classList.remove('option-selected');
    document.getElementById('contacts-option').classList.add('option-unselected');
    document.getElementById('contacts-page').classList.add('d-none');
    chatsUsuario(idUsuario);
}

//Funcion para hacer el cambio en la pagina al querer ver los contactos
function selectOptionContacts(){
    document.getElementById('chat-option').classList.remove('option-selected');
    document.getElementById('chat-option').classList.add('option-unselected');
    document.getElementById('contacts-option').classList.add('option-selected');
    document.getElementById('contacts-option').classList.remove('option-unselected');

    document.getElementById('contacts-page').classList.remove('d-none');
    document.getElementById('chats-page').classList.add('d-none');

    
    document.getElementById('contacts').innerHTML = "";

    var indexUsuario = usuarios.map(function(element){
        return element.id
    }).indexOf(idUsuario);

    var contactos = usuarios[indexUsuario].contactos;

    contactos.forEach(id => {
        var indexUsuario = usuarios.map(function (contact) {
            return contact.id
        }).indexOf(id);

        var informacionContacto = usuarios[indexUsuario];
        
        document.getElementById('contacts').innerHTML+=
        `<div class="col-12" onclick="nuevoChat(${idUsuario},${informacionContacto.id})">
            <div class="row mt-3 pb-3" id="info-contacto">
                <div class="col-3"><img src="./ASSETS/profile-pics/${informacionContacto.imagen}" class="img-fluid rounded-circle" alt=""></div>
                <div class="col-6" style="color: #ACB5BC;"><h5>${informacionContacto.nombre}</h5></div>
            </div>
        </div>`;
    });
}

//Funcion para que el usuario cree un chat con alguien nuevo
function nuevoChat(emisor,receptor) {
    document.getElementById('contacts-page').classList.add('d-none');
    const nuevaConversacion = {
        id: `chat-${emisor}-${receptor}`,
        mensajes: []
    }

    chats.push(nuevaConversacion);
    localStorage.setItem('chats',JSON.stringify(chats));

    

    var indexEmisor = usuarios.map(function(element){
        return element.id
    }).indexOf(emisor);

    var indexReceptor = usuarios.map(function(element){
        return element.id
    }).indexOf(receptor);

    var hoy = new Date();
    var emisorNuevo = usuarios[indexEmisor].conversaciones;
    var receptorNuevo = usuarios[indexReceptor].conversaciones;

    const nuevoEmisor = {
        horaUltimoMensaje: `${hoy.getHours()}:${('0'+hoy.getMinutes()).slice(-2)}`,
        id: `chat-${emisor}-${receptor}`,
        imagenDestinatario: usuarios[indexReceptor].imagen,
        nombreDestinatario: usuarios[indexReceptor].nombre,
        ultimoMensaje: `Nuevo chat creado con ${usuarios[indexReceptor].nombre}`,
    }

    const nuevoReceptor = {
        horaUltimoMensaje: `${hoy.getHours()}:${('0'+hoy.getMinutes()).slice(-2)}`,
        id: `chat-${emisor}-${receptor}`,
        imagenDestinatario: usuarios[indexEmisor].imagen,
        nombreDestinatario: usuarios[indexEmisor].nombre,
        ultimoMensaje: `Nuevo chat creado con ${usuarios[indexEmisor].nombre}`,
    }
    
    emisorNuevo.push(nuevoEmisor);
    receptorNuevo.push(nuevoReceptor);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    cargarChat(`chat-${emisor}-${receptor}`);
}

//Funcion para cargar los contactos en un select... Aqui aparecen solamente los contactos que no han sido añadidos ya por el usuario
function cargarContactosAñadir(){
    document.getElementById('slc-contacto').innerHTML='';

    var indexUsuario = usuarios.map(function(element){
        return element.id
    }).indexOf(idUsuario);

    var contactos = usuarios[indexUsuario].contactos;    

    for(var i=0; i<usuarios.length;i++){
        document.getElementById('slc-contacto').innerHTML+=
        `<option value="${usuarios[i].id}">${usuarios[i].nombre}</option>`
    }


    $(`#slc-contacto option[value='${idUsuario}']`).remove();//En este caso utilizo JQuery para poder eliminar
    //de las opciones del select el usuario que quiere añadir un contacto
    contactos.forEach(id => {
        $(`#slc-contacto option[value='${id}']`).remove();
    });
}

//Funcion para que un usuario pueda añadir un nuevo contacto
function nuevoContacto(){
    document.getElementById('contacts').innerHTML='';
    var indexUsuario = usuarios.map(function(element){
        return element.id
    }).indexOf(idUsuario);
    var usuario = usuarios[indexUsuario];

    const nuevoContacto = parseInt(document.getElementById('slc-contacto').value);

    usuario.contactos.push(nuevoContacto);
    localStorage.setItem('usuarios',JSON.stringify(usuarios));

    $('#modalContactoNuevo').modal('hide');

    selectOptionContacts();
}

//Funcion para enviar un nuevo mensaje
function enviarNuevoMensaje(){
    // document.getElementById('mensajes').innerHTML='';

    var arrayID = idChatVariable.split("-");

    var receptor = null;
    
    if(idUsuario == parseInt(arrayID[1])){
        receptor = parseInt(arrayID[2])
    }
    else if(idUsuario == parseInt(arrayID[2])){
        receptor = parseInt(arrayID[1])
    }

    var detallesChats = chats.map(function (mensajes) {
        return mensajes.id
    }).indexOf(idChatVariable);

    var conversacion = chats[detallesChats];


    var hoy = new Date();
    var hora= `${hoy.getHours()}:${('0'+hoy.getMinutes()).slice(-2)}`;

    const nuevoMensaje = {
        emisor: idUsuario,
        hora: hora,
        mensaje: document.getElementById('mensaje-whatsapp').value,
        receptor: receptor,
        tipo: "text",
    }

    conversacion.mensajes.push(nuevoMensaje);
    localStorage.setItem('chats',JSON.stringify(chats));

    cargarChat(idChatVariable);
    document.getElementById('mensaje-whatsapp').value="";
}



function mostrarStickers() {
    document.getElementById('lista-stickers').innerHTML = '';
    document.getElementById('stickers').classList.remove('d-none');
    for(var i=0; i<stickers.length;i++){
        document.getElementById('lista-stickers').innerHTML += 
        `<div class="col-3"><img src="./ASSETS/stickers/${stickers[i].id}.webp" class="img-fluid" alt="" onclick="enviarSticker(${stickers[i].id})"></div>`;
    }
}

function ocultarStickers(){
    document.getElementById('stickers').classList.add('d-none');
}

function enviarSticker(idSticker){
    var arrayID = idChatVariable.split("-");

    var receptor = null;
    
    if(idUsuario == parseInt(arrayID[1])){
        receptor = parseInt(arrayID[2])
    }
    else if(idUsuario == parseInt(arrayID[2])){
        receptor = parseInt(arrayID[1])
    }

    var detallesChats = chats.map(function (mensajes) {
        return mensajes.id
    }).indexOf(idChatVariable);

    var conversacion = chats[detallesChats];


    var hoy = new Date();
    var hora= `${hoy.getHours()}:${('0'+hoy.getMinutes()).slice(-2)}`;

    const nuevoMensaje = {
        emisor: idUsuario,
        receptor: receptor,
        stiker: idSticker,
        tipo: "sticker",
        hora: hora
    }

    conversacion.mensajes.push(nuevoMensaje);
    localStorage.setItem('chats',JSON.stringify(chats));

    cargarChat(idChatVariable);
}