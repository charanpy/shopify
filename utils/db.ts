import mongoose from 'mongoose';

const connection = {
  isConnected: null,
};

const dbConnect = async () => {
  console.log('db', mongoose.connections[0].readyState);

  if (mongoose.connections[0].readyState) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Db connected');
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default dbConnect;
