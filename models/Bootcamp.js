const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    slug: String,
    description: {
        type: String,
        trim: true,
        maxlength: [255, 'Description cannot exceed 255 characters']
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema); 
