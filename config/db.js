// mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// db connection string
const DB = 'mongodb+srv://Durgesh:Durgesh02042001@cluster0.skc6gmq.mongodb.net/?retryWrites=true&w=majority';

// mongoose connect
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DataBase Connected")).catch((errr) => {
    console.log(errr);
})