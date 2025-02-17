
import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8080/api/todos'


// const TO_DO_REST_API_BASE_URL = 'http://localhost:8080/api/todos'

// export const addToDo = (todo) => axios.create(TO_DO_REST_API_BASE_URL, todo)

// export const deleteToDo = (todoId) => axios.delete(TO_DO_REST_API_BASE_URL + '/' + todoId)

// export const getAllToDo = () => axios.get(TO_DO_REST_API_BASE_URL)

// export const getToDo = (todoId) => axios.get(TO_DO_REST_API_BASE_URL + '/' + todoId)

// export const updateToDoStatus = (todoId, toDo) => axios.put(TO_DO_REST_API_BASE_URL + '/' + todoId, toDo)

// export const completeTodo = (todoId) => axios.put(TO_DO_REST_API_BASE_URL + '/' + todoId + '/complete')

// export const inCompleteTodo = (todoId) => axios.put(TO_DO_REST_API_BASE_URL + '/' + todoId + '/incomplete')

export const getAllTodo = () => axios.get(BASE_REST_API_URL)

export const addTodo = (todo) => axios.post(BASE_REST_API_URL, todo)

export const getById = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateToDoStatus = (id, todo) => axios.put(BASE_REST_API_URL + '/' + id, todo)

export const deleteTodo = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

export const completedToDo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/complete')

export const inCompleteToDo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/incomplete')


