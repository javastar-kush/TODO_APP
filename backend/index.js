const express = require('express');
const port = 3000;
const app = express();
// const { updateTodo } = require('./types')
// const { createTodo } = require('./types')
const { Todo } = require('./db')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.post('/todo', async function(req,res){
    const title = req.body.title;
    const description = req.body.description;
    // const parsepayload = createTodo.parse(createpayload);
    // if(!parsepayload.success){
    //     res.status(411).json({
    //         message : "wrong inputs"
    //     })
    //     return
    // }

    await Todo.create({
        title : title,
        description : description,
        completed : false

    })

    res.json({
        message : "todo created successfully"
    })

})

app.get('/todos', async function(req,res){

    const list =  await Todo.find({});

    res.json({
        todos : list
    })

})

app.put('/completed', async function(req,res){
    const id = req.body.id;
    

    await Todo.updateOne({
        _id : id
    },{
        completed : true
    })

    res.json({
        message : "Marked completed"
    })
})

app.listen(port)