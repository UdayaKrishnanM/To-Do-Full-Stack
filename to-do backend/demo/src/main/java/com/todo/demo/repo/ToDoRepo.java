package com.todo.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.demo.entity.ToDo;

@Repository
public interface ToDoRepo extends JpaRepository<ToDo, Long>{

		
	
}
