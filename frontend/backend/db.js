const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://abcd:1234@cluster0.b3kjian.mongodb.net/bookWise?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('MongoDB connection successful');

        const fetched_data = await mongoose.connection.db.collection('books');
        const data = await fetched_data.find({}).toArray();

        console.log(); //data
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};



module.exports = mongoDB;
