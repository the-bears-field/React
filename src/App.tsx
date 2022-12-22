import './styles.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo'

type TodoType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const App = () => {
  const [ todos, setTodos ] = useState<TodoType[]>([])
  const onClickFetchData = () => {
    axios
      .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      { todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId}></Todo>
      )) }
    </div>
  );
}
