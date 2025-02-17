package com.todo.demo.service;

import java.util.List;

import com.todo.demo.dto.ToDoDto;


public interface ToDoService {
	
    ToDoDto addTodo(ToDoDto todoDto);
	
	ToDoDto getById(Long id);
	
	List<ToDoDto> getAllToDo();
	
	ToDoDto updateToDoStatus(Long id, ToDoDto toDoDto);
	
	void deleteToDo(Long id);
		
	ToDoDto completeTodo(Long id);

	ToDoDto inCompleteTodo(Long id);
}
