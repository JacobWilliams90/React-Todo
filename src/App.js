import React from "react";
import data from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }

  toggleTask = (event, taskId) => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  clearCompleted = (event) => {
    event.preventDefault()

    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed
      })
    })
  }

  addTask = (event, taskName) => {
    const newItem ={
      id: Date.now(),
      task: taskName,
      completed: false,
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  componentWillMount() {
    let todoList = localStorage.getItem('todo')
    if (todoList) {
      this.setState({
        todo: JSON.parse(localStorage.getItem('todo'))
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem('todo', JSON.stringify(this.state.todo))
  }

  render() {
    return (
      <div className="App">
        <div className="Head">
          <h2>Jacobs To-Do App</h2>
          <p>Click to complete task!</p>
          <div className='tasks'>
            {this.state.todo.map(task => (
              <Todo
                key={task.id}
                task={task}
                onClick={(e) => this.toggleTask(e, task.id)}
              />
            ))}
          </div>
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
