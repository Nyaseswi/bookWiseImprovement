const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://abcd:1234@cluster0.b3kjian.mongodb.net/bookWise?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('MongoDB connection successful');

        // Get reference to the collection
        const collection = mongoose.connection.db.collection('books');

        // Fetch data using promises
        const data = await collection.find({}).toArray();
        console.log();
        // console.log(data);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = mongoDB;