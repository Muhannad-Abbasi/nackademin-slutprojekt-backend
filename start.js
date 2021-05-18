const app = require('./app');
const mongoose = require('mongoose');

const register = require('./routes/register');
const products = require('./routes/products');
const orders = require('./routes/orders');

const url = require('./controller/auth')


app.use(express.urlencoded({ extended: true }));
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'Sinus-Database' });

app.use('/register', register);
app.use('/products', products);
app.use('/orders', orders);

app.listen(process.env.PORT || 5000, () => console.log("It's running birch!"))