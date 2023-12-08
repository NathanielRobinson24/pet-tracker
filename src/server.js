const petHelper = require('./db/models/pets');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8080;


const publicDir = path.join(__dirname, '..', 'public');

const staticAssets = express.static(publicDir);
// Here we are using the static file with every request
app.use(staticAssets);

app.get('/pets', (req,res) => {
  res.send({message: "Hello, this server is live"}).status(200);
})


app.get('/getpets', async (req, res) => {
  const data = await petHelper.getAllPets();
  console.log(data);
  res.send(data).status(200);
})

app.post('/addpets', async (req, res) => {
  try {
    const {name, picture, species, isFriendly} = req.body;
    const newPet = {
      name, 
      picture,
      species, 
      isFriendly
    };
    pets.push(newPet);
    res.send(newPet).status(200);
  } catch (err) {
    res.send(err).status(404);
  }
  console.log(newPet);
})

app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
  });
