import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { completedToDo, deleteTodo, getAllTodo, inCompleteToDo } from "../services/ToDoService"



const ListToDoComponent = () => {

    const [toDos, setToDos] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        getAllToDoFunction()
    })

    function getAllToDoFunction(){
        getAllTodo().then((response) => {
            setToDos(response.data);
        }).catch(error => {
            console.error(error);
        })
    
    }



    function addNewTodo(){
        navigator('/add-todo')
    }

    function updateTodo(id){
        navigator(`/edit-todo/${id}`) 
    }

    function removeToDo(id){
        // navigator(`/delete-tod/${id}`)
        console.log(id)
        deleteTodo(id).then(response => {
            getAllTodo()
        }).catch(error => {
            console.error(error)
        })
    }

    function markCompleteToDo(id){
        completedToDo(id).then((response) => {
            console.log("Marked as complete")
            console.log(response.data)
            getAllTodo()
        }).catch(error => {
            console.error(error)
        })
    }

    function markInCompleteToDo(id){
        inCompleteToDo(id).then((response) => {
            console.log("Marked as in-complete")
            console.log(response.data)
            getAllTodo();
        }).catch(error => {
            console.error(error)
        })
    }

  return (
    <div className="container">
        
        <h2 className="text-center">List of To-Dos</h2>

        <Link to='/add-todo' onClick={addNewTodo} className="btn btn-primary mb-2">Add To Do</Link>

        <table className="table table-striped table-bordered table-dark">

            <thead>
                <tr>
                    <th>To-Do Id</th>
                    <th>To-Do Title</th>
                    <th>To-Do Description</th>
                    <th>To-Do Completed</th>
                    <th>To-Do Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    toDos.map(
                        todo => 
                            <tr key={todo.id}>

                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES': 'NO'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeToDo(todo.id)} style={ { marginLeft: "10px" }} >Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleteToDo(todo.id)} style={ { marginLeft: "10px" }} >Complete</button>
                                    <button className='btn btn-info' onClick={() => markInCompleteToDo(todo.id)} style={ { marginLeft: "10px" }} >In Complete</button>
                                </td>

                            </tr>
                    )
                }
            </tbody>

        </table>
    

    </div>
  )
}

export default ListToDoComponent