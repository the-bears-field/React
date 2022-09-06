import "./index.css";

const onClickAdd = () => {
  // テキストボックスの値を取得。
  const inputedText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // liタグ作成
  const liTag = document.createElement('li');
  liTag.className = 'list__row';

  // pタグ作成
  const pTag = document.createElement('p');
  pTag.className = 'list__title';
  pTag.innerText = inputedText;

  // 完了ボタン作成
  const completeButton = document.createElement('button');
  completeButton.className = 'button';
  completeButton.innerText = '完了';

  // 完了ボタンを押したときの処理
  completeButton.addEventListener('click', () => {
    alert('完了');
  });

  // 削除ボタン作成
  const deleteButton = document.createElement('button');
  deleteButton.className = 'button';
  deleteButton.innerText = '削除';

  // 削除ボタンを押したときの処理
  deleteButton.addEventListener('click', () => {
    alert('削除');
  });

  // liタグの子要素にpタグを追加
  liTag.appendChild(pTag);
  liTag.appendChild(completeButton);
  liTag.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById('imcomplete-list').appendChild(liTag);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
