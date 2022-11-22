import styled from "styled-components";

export const DefaultParagraph = (props) => {
  const { children, className } = props;

  return (
    <StyledDefaultParagraph
      className={className}
    >
      { children }
    </StyledDefaultParagraph>
  );
}

const StyledDefaultParagraph = styled.p`
  color: black;
  font-size: 16px;
`;
