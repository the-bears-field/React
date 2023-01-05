import './styles.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo'
import { TodoType } from './types/Todo'
import { Text } from './Text'
import { UserProfile } from './UserProfile';
import { User } from './types/User';

const user: User = {
  name: 'John Smith',
  hobbies: ['ネットサーフィン', 'クラッキング']
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
      <UserProfile user={user} />
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
