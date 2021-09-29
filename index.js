const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) 

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/marketing-cloud-events', (req, res) => {
  console.log('-------------------------------------EVENT STARTING---------------------------------------------------------');
  console.log(req.body);
  console.log('-------------------------------------EVENT ENDING---------------------------------------------------------');
  console.log(req.url);

  res.status(200).send();
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})