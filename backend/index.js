const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend")));

(function myAPP() {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/view/home.html")); // Ruta hacia la pagina principal del proyecto
  });
})();

app.listen(3000, () => {
  console.log("------ Server runing in PORT 3000 ------");
});
