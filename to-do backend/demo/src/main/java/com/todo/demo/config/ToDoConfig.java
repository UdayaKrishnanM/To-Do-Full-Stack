package com.todo.demo.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.todo.demo.service.impl.ToDoServiceImpl;

@Configuration
public class ToDoConfig {

	
	@Bean
	public ToDoServiceImpl toDoServiceImplBean() {
		return new ToDoServiceImpl();
	}
	
	
	@Bean
	public ModelMapper modelMapperBean() {
		return new ModelMapper();
	}
	
}
