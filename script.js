// Datos Estáticos Simulados
const productos = [
    { id: 1, nombre: "Empanada de Mechada", precio: 1.5 },
    { id: 2, nombre: "Café con Leche", precio: 1.0 },
    { id: 3, nombre: "Jugo de Naranja", precio: 1.5 },
    { id: 4, nombre: "Combo Ucevista (Empanada + Jugo)", precio: 2.5 },
    { id: 5, nombre: "Cachito de Jamón", precio: 2.0 }
];

let carrito = [];

// Función para validar el ingreso
function validarLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;

    if (user !== "" && pass !== "") {
        // Ocultar login y mostrar app
        document.getElementById('modulo-login').style.display = 'none';
        document.getElementById('main-header').style.display = 'block';
        document.getElementById('main-content').style.display = 'block';
        
        cargarMenu();
        verModulo('cliente');
        alert("¡Bienvenido al sistema, " + user + "!");
    } else {
        alert("Por favor, ingresa tus datos.");
    }
}

// Cerrar sesión
function cerrarSesion() {
    location.reload(); // Recarga la página para volver al estado inicial del login
}

// Navegación entre módulos
function verModulo(id) {
    document.querySelectorAll('.modulo').forEach(m => m.style.display = 'none');
    document.getElementById('modulo-' + id).style.display = 'block';
}

// Cargar productos en las interfaces
function cargarMenu() {
    const lista = document.getElementById('lista-productos');
    const tablaAdmin = document.getElementById('cuerpo-tabla-admin');
    lista.innerHTML = '';
    tablaAdmin.innerHTML = '';

    productos.forEach(p => {
        // Vista Cliente
        lista.innerHTML += `
            <div class="card-producto">
                <h4>${p.nombre}</h4>
                <p>Precio: ${p.precio}$</p>
                <button onclick="agregarAlCarrito(${p.id})">Añadir</button>
            </div>
        `;
        // Vista Admin
        tablaAdmin.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.precio}$</td>
                <td><button onclick="alert('Editar ${p.nombre}')">✏️</button></td>
            </tr>
        `;
    });
}

function agregarAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    carrito.push(prod);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaItems = document.getElementById('items-carrito');
    const totalSpan = document.getElementById('total-carrito');
    listaItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        listaItems.innerHTML += `<li>${item.nombre} - ${item.precio}$</li>`;
        total += item.precio;
    });
    totalSpan.innerText = total.toFixed(2);
}

function simularPago() {
    if(carrito.length === 0) return alert("El carrito está vacío");
    alert("Procesando pago... \n¡Éxito! Tu pedido ha sido enviado a la interfaz de cocina.");
    carrito = [];
    actualizarCarrito();
}
