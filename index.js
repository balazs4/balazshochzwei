const express = require('express');
const app = express();

app.get('/api/date', (req, res) => {
  res.send({
    date: new Date()
  });
});

app.use(express.static(__dirname));

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
