import React, { useEffect, useState } from "react";
import './index.css';

export const App = () => {
  return (
  <>
    <div className="input-area">
      <input className="input-area__input" placeholder="TODOを入力" />
      <button className="button">追加</button>
    </div>
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul className="list">
        <li className="list__row">
            <p className="list__title">あああ</p>
            <button className="button">完了</button>
            <button className="button">削除</button>
        </li>
        <li className="list__row">
            <p className="list__title">いいい</p>
            <button className="button">完了</button>
            <button className="button">削除</button>
        </li>
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="list">
        <li className="list__row">
            <p className="list__title">あああ</p>
            <button className="button">戻す</button>
        </li>
        <li className="list__row">
            <p className="list__title">いいい</p>
            <button className="button">戻す</button>
        </li>
      </ul>
    </div>
  </>
  );
};
