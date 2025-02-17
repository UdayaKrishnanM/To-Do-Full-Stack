package com.todo.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.demo.dto.ToDoDto;
import com.todo.demo.entity.ToDo;
import com.todo.demo.exception.ResourceNotFoundException;
import com.todo.demo.repo.ToDoRepo;
import com.todo.demo.service.ToDoService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ToDoServiceImpl implements ToDoService{

	@Autowired
	private ToDoRepo toDoRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	

	@Override
	public ToDoDto getById(Long id) {

		
		ToDo getToDo = toDoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found " + id));
		return modelMapper.map(getToDo, ToDoDto.class);
	}

	@Override
	public List<ToDoDto> getAllToDo() {
		
		List<ToDo> toDos = toDoRepo.findAll();
		return toDos.stream().map(todo -> modelMapper.map(todo, ToDoDto.class)).collect(Collectors.toList());
	}

	@Override
	public ToDoDto updateToDoStatus(Long id, ToDoDto toDoDto) {

		ToDo toDo = toDoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id not found " + id));
		
		if(!toDoDto.getTitle().equals("")) {
			toDo.setTitle(toDoDto.getTitle());
		}
		if(!toDoDto.getDescription().equals("")) {
			toDo.setDescription(toDoDto.getDescription());
		}
		toDo.setCompleted(toDoDto.isCompleted());
		ToDo savedToDo = toDoRepo.save(toDo);
		return modelMapper.map(savedToDo, ToDoDto.class);
	}

	@Override
	public void deleteToDo(Long id) {
		
		ToDo todo = toDoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found " + id));
		toDoRepo.deleteById(id);
		
	}


	@Override
	public ToDoDto addTodo(ToDoDto todoDto) {

		ToDo toDo = modelMapper.map(todoDto, ToDo.class);
		ToDo saved = toDoRepo.save(toDo);
		
		return modelMapper.map(saved, ToDoDto.class);
	}

	@Override
	public ToDoDto completeTodo(Long id) {

		ToDo toDo = toDoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id not found" + id));
		toDo.setCompleted(Boolean.TRUE);
		
		ToDo updated = toDoRepo.save(toDo);
		
		return modelMapper.map(updated, ToDoDto.class);
		
	}

	@Override
	public ToDoDto inCompleteTodo(Long id) {

		ToDo toDo = toDoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id not found" + id));
		toDo.setCompleted(Boolean.FALSE);
		
		ToDo updated = toDoRepo.save(toDo);

		
		return modelMapper.map(updated, ToDoDto.class);
		
	}

	
	
	
	
}
