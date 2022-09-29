import React from "react";

export const ChildArea = (props) => {
  const { isOpen } = props;

  const style = {
    backgroundColor: 'gold',
    height: '10vw',
    textAlign: 'center'
  };

  return (
    <>
      { isOpen &&<p style={style}>子コンポーネント</p> }
    </>
  );
}
