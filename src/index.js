import "./index.css";

const onClickAdd = () => {
  // テキストボックスの値を取得。
  const inputedText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  createImcompleteList(inputedText);
};

// 未完了リストに追加する関数
const createImcompleteList = (text) => {
  // liタグ作成
  const liTag = document.createElement('li');
  liTag.className = 'list__row';

  // pタグ作成
  const pTag = document.createElement('p');
  pTag.className = 'list__title';
  pTag.innerText = text;

  // 完了ボタン作成
  const completeButton = document.createElement('button');
  completeButton.className = 'button';
  completeButton.innerText = '完了';

  // 完了ボタンを押したときの処理
  completeButton.addEventListener('click', () => {
    deleteFromImcompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOの内容テキストを取得
    const addTargetText = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグ作成
    const pTag = document.createElement('p');
    pTag.className = 'list__title';
    pTag.innerText = addTargetText;

    // buttonタグ作成
    const backButton = document.createElement('button');
    backButton.className = 'button';
    backButton.innerText = '戻す';

    backButton.addEventListener('click', () => {
      const moveTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(moveTarget);

      // テキスト取得
      const moveTargetText = backButton.parentNode.firstElementChild.innerText;

      createImcompleteList(moveTargetText);
    });

    addTarget.appendChild(pTag);
    addTarget.appendChild(backButton);

    // 未完了リストに追加
    document.getElementById('complete-list').appendChild(addTarget);
  });

  // 削除ボタン作成
  const deleteButton = document.createElement('button');
  deleteButton.className = 'button';
  deleteButton.innerText = '削除';

  // 削除ボタンを押したときの処理
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親要素(li)を削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // liタグの子要素にpタグを追加
  liTag.appendChild(pTag);
  liTag.appendChild(completeButton);
  liTag.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById('imcomplete-list').appendChild(liTag);
};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
    document.getElementById('imcomplete-list').removeChild(target);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
