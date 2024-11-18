export const conexionAPI = {
  conectPoint: async function conectarLista() {
    const conexion = await fetch("http://localhost:5000/productos");
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
  },

  createPoint: async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:5000/productos", {
      method: "POST",
      headers: { "Conten-type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        price: precio,
        image: imagen,
      }),
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
  },

  deleteProduct: async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:5000/productos/${id}`, {
      method: "DELETE",
    });
  },
};
