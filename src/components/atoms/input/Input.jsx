import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;

    return (
    <StyledInput placeholder={ placeholder } type="text" />
  );
}

const StyledInput = styled.input`
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
  padding: 6px 18px;
`;
