<h1 style="text-align:center"> 🌟 **AluraGeek** 🌟 </h1>  

<p style="text-align:center">
  <a href="#caracterisicas-principales">Caracteristicas Principales</a> ❖ 
  <a href="#tecnologias">Tecnologias Utilizadas</a> ❖ 
  <a href="#requisitos">Requisitos Previos</a> ❖ 
  <a href="#instalación">Pasos para la Instalación</a> ❖  
  <a href="#estructura-del-proyecto">Estructura del Proyecto</a> ❖ 
  <a href="#api">Api Simulada</a> ❖
  <a href="#guia-uso">Guia de Usode la Aplicacion</a> ❖ 
  <a href="#consideraciones">Consideraciones Adicionales</a> ❖
  <a href="#sobre-el-proyecto">Sobre el Proyecto</a>
</p>

<div style="width:100%; display:flex; justify-content:center; padding:50px 0px">
  <img  src="https://github.com/user-attachments/assets/3fc0f65a-f476-4e31-b7a7-ac16b66e6833">
</div>

**AluraGeek** es una aplicación web para la gestión de productos, diseñada con un enfoque moderno y funcional. Los usuarios pueden **visualizar**, **agregar** y **eliminar** productos de manera interactiva, gracias a tecnologías de última generación en frontend y un servidor simulado para operaciones CRUD.  

---

## 🚀 **Características Principales**  

✨ **Visualizar Productos:** Los usuarios pueden explorar una lista de productos actualizada dinámicamente desde el servidor simulado.  
✨ **Agregar Nuevos Productos:** Incluye un formulario para cargar productos con nombre, precio y una imagen.  
✨ **Eliminar Productos:** Opción sencilla para borrar productos directamente desde la interfaz.  
✨ **Actualización Dinámica:** Cambios reflejados instantáneamente en la página, sin necesidad de recargar.  

---

## 💻 **Tecnologías Utilizadas**  

| **Tecnología**                | **Uso**                                       |  
|-------------------------------|-----------------------------------------------|  
| **HTML5/CSS3**                | Estructura y estilos de la aplicación.        |  
| **JavaScript (ES6)**          | Lógica de interacción y manejo del DOM.       |  
| **json-server**               | API simulada para operaciones CRUD.           |  
| **Fetch API**                 | Realización de solicitudes HTTP.              |  
| **BEM**                       | Metodología para organizar y mantener CSS.    |  

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![json-server](https://img.shields.io/badge/json-server-nodemon)


---

## 📋 **Requisitos Previos**  

- Tener **`Node.js`** instalado en tu sistema.  

---

## 🛠️ **Pasos para la Instalación**  

1. **Clona este repositorio** en tu máquina:  
   ```bash
   git clone https://github.com/emiferreyra89/Challenge-AluraGeek.git
   ```

2. **Accede al directorio del Proyecto**:  
   ```bash
   cd alurageek
   ```
3. Accede a la carpeta "backend" e **instala las dependencias necesarias**:  
   ```bash
   cd backend
   ```
   ```bash
   npm install
   ```

4. **Inicia el servidor JSON**:  
   ```bash
   npx json-server --watch db.json --port 5000
   ```
    *Aclaracion*:

      **`--watch db.json`** *hace referencia al archivo JSON que hara las veces de servidor, emulando una base de datos*.

      **`--port 5000`** *hace referencia al puerto donde correra el servidor JSON, define el punto de entrada para simular la API REST ( http://localhost:5000 )*

  5. **Abre *"home.html"* en tu navegador**:  
  Navega manualmente al archivo o utiliza una extensión como Live Server para ejecutarlo.


  ## 🗂️ **Estructura del Proyecto**

```
alurageek/
├──📁backend
│     ├──📄db.json         # Simulación de la base de datos con JSON Server
│     ├──📄index.js
│     └──📄package.json    # Configuración del servidor
│
├──📁frontend
│     ├──📁img            # Recursos estáticos como imágenes
│     ├──📁javascript     # Archivos JavaScript (modularizados)
│     ├──📁style          # Estilos CSS (reset.css, style.css)
│     ├──📁view           # Archivo HTML, vista de la aplicacion (home.html)
│
├──📄.gitignore
└──📄README.md             # Documentación del proyecto
```

## 🌐 API Simulada

La aplicación utiliza ***json-server*** para simular una API RESTful. Las rutas disponibles son:

- `GET /products` → Obtiene la lista de productos.
- `POST /products` → Crea y agrega un nuevo producto.
- `DELETE /products/:id` →  Elimina un producto específico por su ID.

Ejemplo de un producto en el archivo db.json:
``` bash
    {
      "id": 1,
      "name": "Producto Geek",
      "price": 49.99,
      "image": "../img/nombre-de-la-imagen.extension"
    }
```

## 📋 Guia de Uso de la Aplicación

1. **Visualizar Productos**: 
    * Los productos se cargan automáticamente desde el servidor simulado al abrir la página.
   
2. **Agregar Producto**: 
    * Completa el formulario con nombre, precio y URL de la imagen del producto.
    * Haz clic en el botón "Enviar" para añadirlo a la lista.
   
3. **Eliminar Producto**: 
    * Haz clic en el ícono de la papelera ubicado junto al producto para eliminarlo.

## 💡 Consideraciones Adicionales

- ***`JSON-Server`* como simulador**: Ideal para entornos de desarrollo. En producción, sería recomendable migrar a una base de datos real.
- **Extensión recomendada**: Utiliza ***`Live Server`*** para una experiencia de desarrollo más fluida al trabajar con el frontend.

## 📖 Sobre el Proyecto
  Este proyecto fue desarrollado como parte del programa Alura Latam, para poner en práctica conceptos fundamentales de desarrollo frontend y simulación de backend con json-server.

### Contribuciones
Desarrollado por *Emiliano G. Ferreyra*