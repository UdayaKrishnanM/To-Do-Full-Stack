import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addTodo, getById, updateToDoStatus } from "../services/ToDoService"

const ToDoComponent = () => {


    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ completed, setCompleted ] = useState(false)
    
    const {id} = useParams()

    const navigate = useNavigate()

    const [ errors, setErrors ] = useState({
        title : '',
        description : '',
        completed : ''
    })

    function saveOrUpdateToDo(e){
        e.preventDefault()
        if(validateForm()){
            const todo = { title, description, completed }
            console.log("After validating form")
            console.log(todo)
            if(id){
                updateToDoStatus(id, todo).then(response => {
                    console.log("update to do status")
                    console.log(response.data)
                    navigate('/todos')
                }).catch(error => 
                    console.error(error)
                )
            } else{
                addTodo(todo).then(response => {
                    console.log("Save new to-do")
                    console.log(response.data)
                    navigate('/todos')
                }).catch(error => 
                    console.error(error)
                )
            }           
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors}

        if(title.trim()){
            errorsCopy.title = ''
        } else{
            errorsCopy.title = "Title cannot be empty"
            valid = false
        }

        if(description.trim()){
            errorsCopy.description = ''
        } else{
            errorsCopy.description = "Description cannot be empty"
        }
        setErrors(errorsCopy)
        return valid
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update To Do</h2>
        } else {
            return <h2 className='text-center'>Add To Do</h2>
        }
    }


    
    useEffect(() => {

        if(id){
            getById(id).then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setCompleted(response.data.completed);
            }).catch(error => {
                console.error(error);
            })
        }
    
      }, [id])



  return (
    <div className='container'><br /><br />
      <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                pageTitle()
              }

              <div className='card-body'>
                  <form>
                      <div className='form-group mb-2'>
                          <label className='form-label'>To Do Title:</label>
                          <input
                            type='text'
                            name='title'
                            placeholder='Enter To Do Title'
                            className={`form-control ${ errors.title ? 'is-invalid': '' }`}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                          >
                          </input>
                          { errors.title && <div className='invalid-feedback'> { errors.title} </div> }

                      </div>

                      <div className='form-group mb-2'>
                          <label className='form-label'>To Do Description:</label>
                          <input
                            type='text'
                            name='description'
                            placeholder='Enter To Do Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={`form-control ${ errors.description ? 'is-invalid': '' }`}
                            >
                          </input>
                          { errors.description && <div className='invalid-feedback'> { errors.description} </div> }

                      </div>

                      <div className='form-group mb-2'>
                            <label className='form-label'>Todo Completed:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>

                            </select>
                        </div>
                      <button className='btn btn-success mb-2' onClick={(e) => saveOrUpdateToDo(e)}>Submit</button>
                  </form>

              </div>
          </div>



        </div>
    </div>
  )
}

export default ToDoComponent