const express = require ('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('_Hello World_HolaAmigo');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
