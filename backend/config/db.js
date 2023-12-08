import  mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://yanuarprayoga0901:yp09012004@cluster0.becomxk.mongodb.net/?retryWrites=true&w=majority')

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB;