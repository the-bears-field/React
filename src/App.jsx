import React, { useState } from 'react';
import { ChildArea } from './ChildArea';
import './index.css';

export const App = () => {
  const [ text, setText ] = useState('');
  const [ isOpen, setIsOpen ] = useState(false);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    margin: '2vw auto',
    width: '20vw'
  };

  const onChangeText = (event) => setText(event.target.value);

  const onClickButton = () => setIsOpen(!isOpen);

  return (
    <div style={style}>
      <input type="text" value={text} onChange={onChangeText} />
      <button style={{ marginTop: '2vw' }} onClick={onClickButton}>表示</button>
      <ChildArea isOpen={isOpen} />
    </div>
  );
}
