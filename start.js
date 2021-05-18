const app = require('./app');

const register = require('./routes/register');
const products = require('./routes/products');
const orders = require('./routes/orders');


app.use(express.urlencoded({ extended: true }));

app.use('/register', register);
app.use('/products', products);
app.use('/orders', orders);

app.listen(process.env.PORT || 5000, () => console.log("It's running birch!"))