package com.todo.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.todo.demo.dto.ToDoDto;
import com.todo.demo.service.impl.ToDoServiceImpl;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class ToDoController {

	
	@Autowired
	private ToDoServiceImpl toDoServiceImpl;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<ToDoDto> getById(@PathVariable("id") Long id) {
		
		ToDoDto toDoDto = toDoServiceImpl.getById(id);
		return new ResponseEntity<>(toDoDto, HttpStatus.CREATED);

	}
	
	@PostMapping
	public ResponseEntity<ToDoDto> addToDo(@RequestBody ToDoDto todoDto) {
		ToDoDto toDoDto = toDoServiceImpl.addTodo(todoDto);
		return new ResponseEntity<>(toDoDto, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<ToDoDto>> getAllToDos(){
		List<ToDoDto> toDoDtos = toDoServiceImpl.getAllToDo();
		return new ResponseEntity<>(toDoDtos, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteToDo(@PathVariable("id") Long id) {
		
		toDoServiceImpl.deleteToDo(id);
		return ResponseEntity.ok("Deleted Successfully " + id);
		
	}
	
	@PatchMapping("/{id}/complete")
	public ResponseEntity<ToDoDto> completedToDo(@PathVariable("id") Long id){
		
		ToDoDto toDoDto = toDoServiceImpl.completeTodo(id);
		return ResponseEntity.ok(toDoDto);
		
	}
	
	@PatchMapping("/{id}/incomplete")
	public ResponseEntity<ToDoDto> inCompleteToDo(@PathVariable("id") Long id){

		ToDoDto toDoDto = toDoServiceImpl.inCompleteTodo(id);
		return ResponseEntity.ok(toDoDto);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<ToDoDto> updateToDoStatus(@PathVariable("id") Long id, @RequestBody ToDoDto toDoDto){
		
		ToDoDto toDo = toDoServiceImpl.updateToDoStatus(id, toDoDto);
		return ResponseEntity.ok(toDo);
		
	}
	
	
	
}
