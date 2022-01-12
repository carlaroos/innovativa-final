import React from "react";
//import "./todos.css";
import { Button, Card, Form } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Todo.css";


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    > 
    <div className="contents">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button className="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button className="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    
    <Form.Group>
      <h1 className="todoheader"><b>To-do list</b></h1>
      <div className="btninp">
      <Form.Control type="text" className="inputer" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      <Button className="primary-mb-3" type="submit">
      Submit
    </Button>
    </div>
    </Form.Group>
    
  </Form>
  );
}

export const Todos = (props) => { {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4"></h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};};