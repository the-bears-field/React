import './styles.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo'
import { TodoType } from './types/Todo'
import { Text } from './Text'

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
      <Text color="red" fontSize="18px" >テキストです</Text>
      <button onClick={onClickFetchData}>データ取得</button>
      { todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      )) }
    </div>
  );
}
