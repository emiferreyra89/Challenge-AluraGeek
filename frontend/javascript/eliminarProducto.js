import { conexionAPI } from './conexionApi.js';

export async function eliminarProducto(id, tarjeta) {
  // Confirmar acción de eliminacion con el usuario
  if (confirm(`¿Estás seguro de que deseas eliminar este producto con ID ${id}?`)) {
    try {
      await conexionAPI.deleteProduct(id); // Elimina el registro en el backend
      tarjeta.remove(); // Elimina la tarjeta de la interfaz
      alert(`Producto con ID ${id} eliminado correctamente.`);
    } catch (error) {
      alert("Error al eliminar el producto:", error);
    }
  }
}
