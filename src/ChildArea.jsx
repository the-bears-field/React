import React, { memo } from "react";

export const ChildArea = memo((props) => {
  const { isOpen, onClickClose } = props;

  const style = {
    backgroundColor: 'gold',
    height: '10vw',
    textAlign: 'center'
  };

  return (
    <>
      { isOpen && (
        <>
          <p style={style}>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </>
        )
      }
    </>
  );
});
