/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
  const container = css`
    align-items: center;
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    margin: 8px;
    padding: 8px;
  `;

  const title = css({
    color: '#3d84d8',
    margin: '0'
  });

  return (
    <div css={container}>
      <p css={title}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
}

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
  }
`;
