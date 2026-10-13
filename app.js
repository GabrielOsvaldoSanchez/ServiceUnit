const express = require ('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('_Hello Mundo_');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
