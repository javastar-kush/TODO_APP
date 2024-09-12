const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kushagra:*****@cluster1.odiz2.mongodb.net/todos')

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model('todos', TodoSchema);

module.exports = {
    Todo
}
