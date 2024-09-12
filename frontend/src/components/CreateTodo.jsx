export function CreateTodo(){
    return <div>
        <input  id="title" style={{
            padding:10,
            margin : 10
        }} type="text" placeholder="Title"/><br />
        <input id="description" style={{
            padding:10,
            margin : 10
        }} type="text" placeholder="Description"/><br />

        <button onclick={() =>{
            fetch('http://localhost:3000/todo',{
                method:"POST",
                body : {
                    title : document.getElementById("title").innerHTML,
                    description : document.getElementById("description").innerHTML
                }
            }
            )
            .then(async function(res){
                const json = await res.json;
                alert("Todo added");
            })
        }} >Add todo</button>
    </div>
}