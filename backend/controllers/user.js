import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

export const signupCtrl = (req, res) => {
  const password = (req.body.password, 10);
  bcrypt
    .hash(password)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({ message: 'Utilisateur créé avec succès !' }),
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
