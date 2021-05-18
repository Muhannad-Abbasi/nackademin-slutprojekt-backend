const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    title: String,
    price: Number,
    _id: mongoose.Schema.Types.ObjectId,
    shortDesc:String,

})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food




/*  {
    _id: '39y7gbbZk1u4ABnv',
    title: 'Gretas Fury',
    price: 999,
    shortDesc: 'Unisex',
    longDesc: 'Skate ipsum dolor sit amet...',
    imgFile: 'skateboard-greta.png'
}  */