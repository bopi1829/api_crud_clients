import express from 'express';
import 'dotenv/config';
import { mongodbConnection } from './connection/mongodbConnection.js';
import { User } from './models/User.js';

export const app = express();

// Eviter les problèmes de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse apllication /json
app.use(express.json());

mongodbConnection();

app.get('/api/getAllData', async (req, res) => {
  try {
    const allData = await User.find({});
    res.send({
      status: 'ok',
      message: 'Utilisateurs récupéré avec succès !',
      data: allData,
    });
  } catch (error) {
    console.log('error', error);
  }
});

app.post('/api/signup', async (req, res, next) => {
  delete req.body._id;
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès !' });
  } catch (error) {
    res.status(400).json({ error });
  }
  next();
});
