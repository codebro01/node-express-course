const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], 
        trim: true,
        maxlength: [20, 'Max Length is 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model('Tasks', TaskSchema);