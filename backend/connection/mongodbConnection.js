import mongoose from 'mongoose';

export const mongodbConnection = async function () {
  // eslint-disable-next-line no-undef
  const uri = process.env.DB_URL;
  try {
    await mongoose.connect(uri);
    console.log('Connexion à MongoDB réussie !');
  } catch (error) {
    // eslint-disable-next-line no-undef
    handleError(error);
    console.log('Connexion à MongoDB échouée !');
  }
};
