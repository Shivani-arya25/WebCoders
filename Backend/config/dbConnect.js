const mongoose = require('mongoose');

const dbConnect = () => {
// connect DB
mongoose
.connect(
    'mongodb+srv://Webcoders:xnzBPZJopiq3QyPq@cluster0.6u2uf.mongodb.net/DigitalLibrary', 
    { 
    
    useUnifiedTopology: true,
    
    useNewUrlParser: true,
    }
)
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));
};

module.exports = dbConnect;
