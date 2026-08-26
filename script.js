function mostrarProducto(nombre, descripcion, precio) {

    document.getElementById("nombre-producto").textContent = nombre;

    document.getElementById("descripcion-producto").textContent = descripcion;

    document.getElementById("precio-producto").textContent =
        "Precio: " + precio;

    document.getElementById("ventana-producto").style.display = "flex";

    document.querySelector(".pedido").onclick = function() {

        const mensaje =
            "Hola, quiero hacer un pedido de " + nombre +
            ". Precio: " + precio;

        const numero = "529611227131";

        const url =
            "https://wa.me/" + numero +
            "?text=" + encodeURIComponent(mensaje);

        window.open(url, "_blank");
    };
}

function cerrarProducto() {

    document.getElementById("ventana-producto").style.display = "none";
}function filtrarProductos(categoria) {

    const productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {

        if (
            categoria === "todos" ||
            producto.dataset.categoria === categoria
        ) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });
}