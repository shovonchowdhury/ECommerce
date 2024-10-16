require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose');
const cookieParser= require('cookie-parser');
const cors= require('cors');
const authRouter = require('./routes/auth/authRoutes');
const adminProductsRouter = require("./routes/admin/adminProductsRoute");
const adminOrderRouter = require("./routes/admin/orderRoute");

const shopProductsRouter= require('./routes/shop/productsRoute')
const shopCartRouter = require("./routes/shop/cartRoute");
const shopAddressRouter = require("./routes/shop/addressRoute");
const shopOrderRouter = require("./routes/shop/orderRoute");
const shopSearchRouter = require("./routes/shop/searchRoute");
const shopReviewRouter = require("./routes/shop/reviewRoute");


const commonFeatureRouter = require("./routes/common/featureRoute");



mongoose.connect(
    process.env.MONGO_URL
).then(()=>console.log('MongoDb connected'))
.catch((error)=> console.log(error));

const app = express();
const PORT= process.env.PORT || 5000;

app.use(

    cors({
        origin: process.env.CLIENT_BASE_URL,
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            "Cache-Control",
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products',adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);



app.use("/api/shop/products",shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);


app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT,()=> console.log(`Server is running in port ${PORT}`));




