import styled from "styled-components";

export const BaseButton = styled.button`
  border: none;
  border-radius: 9999px;
  color: white;
  outline: none;
  padding: 6px 24px;
  width: auto;
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;
